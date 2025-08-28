import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { WifiOff, FileText, Quote, Lock, X, CheckCircle, Zap, Brain, Building2, Scale, TrendingUp, Shield, Star, Download, AlertTriangle, Cloud, Search } from "lucide-react";
import { useEffect, lazy, Suspense, memo } from "react";
import { usePageTracking, useSectionTracking } from "@/hooks/useAnalytics";

// Lazy load components for better performance
const Nav = lazy(() => import("@/components/Nav"));
const Hero = lazy(() => import("@/components/Hero"));
const Problem = lazy(() => import("@/components/Problem"));
const Features = lazy(() => import("@/components/Features"));

const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해 주세요."),
  consent: z.boolean().refine(val => val === true, {
    message: "동의가 필요합니다."
  }),
  utm_source: z.string().optional(),
  utm_campaign_id: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign_name: z.string().optional(),
  utm_adset_id: z.string().optional(),
  utm_adset_name: z.string().optional(),
  utm_ad_id: z.string().optional(),
  utm_ad_name: z.string().optional(),
  linkedin_campaign_name: z.string().optional(),
  linkedin_ad_id: z.string().optional(),
  linkedin_campaign_group_id: z.string().optional(),
  linkedin_campaign_group_name: z.string().optional(),
  linkedin_campaign_id: z.string().optional(),
  linkedin_ad_name: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Solution = memo(() => (
  <section className="section" aria-labelledby="solution-heading">
    <div className="container">
      <h2 id="solution-heading" className="text-2xl md:text-3xl font-semibold mb-8">이젠 localdocs 하나로 끝내세요.</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="feature-card flex items-start gap-4">
          <WifiOff className="text-primary" />
          <div>
            <h3 className="text-xl font-semibold mb-1">맥락까지 이해하는 한국어 특화 AI</h3>
            <p className="text-sm text-muted-foreground">인터넷 연결 없이, 국내 업무 환경의 뉘앙스까지 파악해 완벽한 요약 결과를 제공합니다.</p>
          </div>
        </div>
        <div className="feature-card flex items-start gap-4">
          <FileText className="text-primary" />
          <div>
            <h3 className="text-xl font-semibold mb-1">HWP는 기본, 어떤 문서든 변환 없이 바로</h3>
            <p className="text-sm text-muted-foreground">HWP, PDF, PPTX는 물론 스캔(OCR) 문서까지, 번거로운 변환 과정 없이 즉시 분석하세요.</p>
          </div>
        </div>
        <div className="feature-card flex items-start gap-4">
          <Quote className="text-primary" />
          <div>
            <h3 className="text-xl font-semibold mb-1">신뢰할 수 있는 답변: 모든 결과에 출처 표기</h3>
            <p className="text-sm text-muted-foreground">AI의 답변이 어떤 문서, 어느 페이지에서 나왔는지 클릭 한 번으로 검증하여 보고서에 활용하세요.</p>
          </div>
        </div>
        <div className="feature-card flex items-start gap-4">
          <Lock className="text-primary" />
          <div>
            <h3 className="text-xl font-semibold mb-1">외부 유출 원천 차단: 100% 온디바이스(On-device) 처리</h3>
            <p className="text-sm text-muted-foreground">당신의 모든 데이터는 오직 PC 안에서만 처리됩니다. 서버 전송 자체가 존재하지 않습니다.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <a href="#cta">
          <Button variant="hero" size="lg">Waitlist 등록하기</Button>
        </a>
      </div>
    </div>
  </section>
));

const Comparison = memo(() => (
  <section className="section" aria-labelledby="comparison-heading">
    <div className="container">
      <h2 id="comparison-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-center">다른 AI와 무엇이 다른가요?</h2>
      <div className="overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-primary/5 to-primary/10">
              <tr>
                <th className="text-left p-6 font-semibold text-lg">항목</th>
                <th className="text-center p-6 font-semibold text-lg text-gray-600">AI 서비스</th>
                <th className="text-center p-6 font-semibold text-lg text-primary">Localdocs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">인터넷 없이 실행</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <X className="w-4 h-4 mr-1" />
                    제한적
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    가능
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">HWP 지원</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <X className="w-4 h-4 mr-1" />
                    미지원 또는 불안정
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    기본 지원
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">한국어 최적화 모델 탑재</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                    일반 수준
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                    <Zap className="w-4 h-4 mr-1" />
                    한국어 특화
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">인용 제공</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                    제한적
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    기본 제공
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">데이터 이동</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <Cloud className="w-4 h-4 mr-1" />
                    외부 전송
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <Lock className="w-4 h-4 mr-1" />
                    로컬 유지
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
));

const CTA = () => {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  // URL parameter processing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    const utmSource = params.get('utm_source');
    const isLinkedIn = utmSource === 'linkedin';
    
    // UTM parameters
    const utmFields = ['utm_source', 'utm_campaign_id', 'utm_medium'] as const;
    utmFields.forEach(fieldName => {
      const paramValue = params.get(fieldName);
      if (paramValue) {
        setValue(fieldName, paramValue);
      }
    });

    // LinkedIn parameters
    if (isLinkedIn) {
      const linkedinParamsMap = {
        'campaign_group_id': 'linkedin_campaign_group_id',
        'campaign_group_name': 'linkedin_campaign_group_name', 
        'campaign_id': 'linkedin_campaign_id',
        'utm_campaign': 'linkedin_campaign_name',
        'utm_content': 'linkedin_ad_id',
        'creative_name': 'linkedin_ad_name'
      };

      Object.entries(linkedinParamsMap).forEach(([paramName, fieldName]) => {
        const rawValue = params.get(paramName);
        if (rawValue) {
          let processedValue = rawValue;
          if (paramName.includes('_name') || paramName === 'utm_campaign') {
            try {
              processedValue = decodeURIComponent(rawValue.replace(/\+/g, ' '));
            } catch (e) {
              processedValue = rawValue;
            }
          }
          setValue(fieldName as keyof FormValues, processedValue);
        }
      });
    }
  }, [setValue]);

  const onSubmit = async (values: FormValues) => {
    try {
      const insertData = {
        email: values.email,
        consent: values.consent,
        utm_source: values.utm_source || null,
        utm_campaign_id: values.utm_campaign_id || null,
        utm_medium: values.utm_medium || null,
        utm_campaign_name: values.utm_campaign_name || null,
        utm_adset_id: values.utm_adset_id || null,
        utm_adset_name: values.utm_adset_name || null,
        utm_ad_id: values.utm_ad_id || null,
        utm_ad_name: values.utm_ad_name || null,
        linkedin_campaign_name: values.linkedin_campaign_name || null,
        linkedin_ad_id: values.linkedin_ad_id || null,
        linkedin_campaign_group_id: values.linkedin_campaign_group_id || null,
        linkedin_campaign_group_name: values.linkedin_campaign_group_name || null,
        linkedin_campaign_id: values.linkedin_campaign_id || null,
        linkedin_ad_name: values.linkedin_ad_name || null
      };
      
      const result = await supabase.from('email_signups').insert([insertData]);
      
      if (result.error) {
        if (result.error.code === '23505') {
          toast.error("이미 등록된 이메일입니다.");
        } else {
          toast.error(`등록 중 오류가 발생했습니다: ${result.error.message}`);
        }
        return;
      }

      toast.success("알림 신청이 완료되었습니다. 곧 소식을 전해 드릴게요!");
      reset();
    } catch (error) {
      toast.error(`등록 중 오류가 발생했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
    }
  };

  return (
    <section id="cta" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-3 text-center">지금 바로 Waitlist에 등록하세요.</h2>
        <p className="text-muted-foreground mb-6 text-center">누구보다 빠르게 베타 버전을 사용할 수 있습니다.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">이메일 주소</Label>
              <Input id="email" type="email" placeholder="hello@localdocs.ai" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            
            {/* Hidden fields */}
            <input type="hidden" {...register("utm_source")} />
            <input type="hidden" {...register("utm_campaign_id")} />
            <input type="hidden" {...register("utm_medium")} />
            <input type="hidden" {...register("utm_campaign_name")} />
            <input type="hidden" {...register("utm_adset_id")} />
            <input type="hidden" {...register("utm_adset_name")} />
            <input type="hidden" {...register("utm_ad_id")} />
            <input type="hidden" {...register("utm_ad_name")} />
            <input type="hidden" {...register("linkedin_campaign_name")} />
            <input type="hidden" {...register("linkedin_ad_id")} />
            <input type="hidden" {...register("linkedin_campaign_group_id")} />
            <input type="hidden" {...register("linkedin_campaign_group_name")} />
            <input type="hidden" {...register("linkedin_campaign_id")} />
            <input type="hidden" {...register("linkedin_ad_name")} />
            
            <div className="flex items-center gap-2">
              <Checkbox id="consent" {...register("consent")} />
              <Label htmlFor="consent" className="text-sm text-muted-foreground">개인정보 수집 및 알림 수신에 동의합니다.</Label>
            </div>
            {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
            
            <Button type="submit" variant="hero" size="lg" className="w-full">Waitlist 등록하기</Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">제출하신 이메일은 베타 알림과 안내 외 용도로 사용하지 않습니다.</p>
        </form>
      </div>
    </section>
  );
};

const Index = () => {
  usePageTracking();
  useSectionTracking();

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LoadingSpinner />}>
        <Nav />
      </Suspense>
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Problem />
        </Suspense>
        <Solution />
        <Suspense fallback={<LoadingSpinner />}>
          <Features />
        </Suspense>
        <Comparison />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
