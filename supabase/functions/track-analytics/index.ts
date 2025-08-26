import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { eventType, eventData, clientId } = await req.json()
    const analyticsId = Deno.env.get('GOOGLE_ANALYTICS_ID')
    
    if (!analyticsId) {
      console.error('GOOGLE_ANALYTICS_ID not found')
      return new Response(
        JSON.stringify({ error: 'Analytics not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
      )
    }

    // 서버에서 Google Analytics로 직접 전송
    const measurementParams = new URLSearchParams({
      v: '2',
      tid: analyticsId,
      cid: clientId || crypto.randomUUID(),
      t: eventType, // 'pageview' or 'event'
      ...eventData
    })

    const response = await fetch('https://www.google-analytics.com/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: measurementParams.toString()
    })

    console.log('Analytics event sent:', { eventType, success: response.ok })

    return new Response(
      JSON.stringify({ success: response.ok }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )

  } catch (error) {
    console.error('Analytics tracking error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
})