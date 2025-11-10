import { Check, Clock, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import qaScreen from "@/assets/qa-screen.png";
import uploadScreen from "@/assets/upload-screen.png";
const emailSignupSchema = z.object({
  email: z.string().trim().email({
    message: "유효한 이메일을 입력해주세요"
  }).max(255),
  consent: z.boolean().refine(val => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요"
  }),
  page_source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign_name: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  utm_campaign_id: z.string().optional(),
  utm_adset_id: z.string().optional(),
  utm_adset_name: z.string().optional(),
  utm_ad_id: z.string().optional(),
  utm_ad_name: z.string().optional(),
  linkedin_campaign_name: z.string().optional(),
  linkedin_campaign_id: z.string().optional(),
  linkedin_campaign_group_id: z.string().optional(),
  linkedin_campaign_group_name: z.string().optional(),
  linkedin_ad_id: z.string().optional(),
  linkedin_ad_name: z.string().optional()
});
type EmailSignupFormData = z.infer<typeof emailSignupSchema>;
const Financial = () => {
  const {
    toast
  } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Hero section form
  const heroForm = useForm<EmailSignupFormData>({
    resolver: zodResolver(emailSignupSchema),
    defaultValues: {
      consent: false,
      page_source: '/financial'
    }
  });

  // CTA section form
  const ctaForm = useForm<EmailSignupFormData>({
    resolver: zodResolver(emailSignupSchema),
    defaultValues: {
      consent: false,
      page_source: '/financial'
    }
  });

  // Capture URL parameters for both forms
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams = {
      page_source: "/financial",
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign_name: params.get("utm_campaign_name") || undefined,
      utm_term: params.get("utm_term") || undefined,
      utm_content: params.get("utm_content") || undefined,
      utm_campaign_id: params.get("utm_campaign_id") || undefined,
      utm_adset_id: params.get("utm_adset_id") || undefined,
      utm_adset_name: params.get("utm_adset_name") || undefined,
      utm_ad_id: params.get("utm_ad_id") || undefined,
      utm_ad_name: params.get("utm_ad_name") || undefined,
      linkedin_campaign_name: params.get("linkedin_campaign_name") || undefined,
      linkedin_campaign_id: params.get("linkedin_campaign_id") || undefined,
      linkedin_campaign_group_id: params.get("linkedin_campaign_group_id") || undefined,
      linkedin_campaign_group_name: params.get("linkedin_campaign_group_name") || undefined,
      linkedin_ad_id: params.get("linkedin_ad_id") || undefined,
      linkedin_ad_name: params.get("linkedin_ad_name") || undefined
    };

    // Set values for both forms
    Object.entries(utmParams).forEach(([key, value]) => {
      heroForm.setValue(key as any, value);
      ctaForm.setValue(key as any, value);
    });
  }, [heroForm, ctaForm]);
  const onSubmit = async (data: EmailSignupFormData, formInstance: any) => {
    try {
      const insertData: any = {
        email: data.email,
        consent: data.consent,
        page_source: data.page_source
      };

      // Add UTM and LinkedIn parameters if present
      if (data.utm_source) insertData.utm_source = data.utm_source;
      if (data.utm_medium) insertData.utm_medium = data.utm_medium;
      if (data.utm_campaign_name) insertData.utm_campaign_name = data.utm_campaign_name;
      if (data.utm_term) insertData.utm_term = data.utm_term;
      if (data.utm_content) insertData.utm_content = data.utm_content;
      if (data.utm_campaign_id) insertData.utm_campaign_id = data.utm_campaign_id;
      if (data.utm_adset_id) insertData.utm_adset_id = data.utm_adset_id;
      if (data.utm_adset_name) insertData.utm_adset_name = data.utm_adset_name;
      if (data.utm_ad_id) insertData.utm_ad_id = data.utm_ad_id;
      if (data.utm_ad_name) insertData.utm_ad_name = data.utm_ad_name;
      if (data.linkedin_campaign_name) insertData.linkedin_campaign_name = data.linkedin_campaign_name;
      if (data.linkedin_campaign_id) insertData.linkedin_campaign_id = data.linkedin_campaign_id;
      if (data.linkedin_campaign_group_id) insertData.linkedin_campaign_group_id = data.linkedin_campaign_group_id;
      if (data.linkedin_campaign_group_name) insertData.linkedin_campaign_group_name = data.linkedin_campaign_group_name;
      if (data.linkedin_ad_id) insertData.linkedin_ad_id = data.linkedin_ad_id;
      if (data.linkedin_ad_name) insertData.linkedin_ad_name = data.linkedin_ad_name;
      const {
        error
      } = await (supabase as any).from("email_signups").insert([insertData]);
      if (error) throw error;
      toast({
        title: "등록 완료!",
        description: "출시 소식을 가장 먼저 받아보실 수 있습니다."
      });
      formInstance.reset();
    } catch (error: any) {
      console.error("Email signup submission error:", error);
      toast({
        variant: "destructive",
        title: "오류 발생",
        description: error.message || "등록 중 오류가 발생했습니다. 다시 시도해주세요."
      });
    }
  };
  return <div className="min-h-screen bg-white">
      {/* SECTION 1: Hero - Waitlist Focus */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        
        {/* Logo - Top Left */}
        <div className="absolute top-6 left-6 z-10">
          <div className="text-lg font-bold text-gray-900">
            LocalDocs
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          {/* Tagline */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-blue-600 font-semibold tracking-tight">인터넷 없이 동작하는 PDF 검색・요약 AI</p>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-8">400페이지 공시보고서 분석,<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">10초면 충분합니다.</span>
          </h1>
          
          {/* Sub Headline */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">"삼성전자 상반기 매출 얼마야?" 물어보면
답변 + 출처까지 제공합니다.<br />
            답변 + 출처까지 자동 표시.
          </p>
          
          {/* Waitlist Form */}
          <div className="max-w-xl mx-auto mb-10">
            <form onSubmit={heroForm.handleSubmit(data => onSubmit(data, heroForm))} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                <input type="email" {...heroForm.register("email")} placeholder="work@company.com" disabled={heroForm.formState.isSubmitting} className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 bg-white shadow-sm" />
                <button type="submit" disabled={heroForm.formState.isSubmitting} className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-xl whitespace-nowrap disabled:opacity-50 shadow-lg">
                  {heroForm.formState.isSubmitting ? "등록 중..." : "무료 체험 신청"}
                </button>
              </div>
              
              {/* Consent checkbox */}
              <div className="flex items-center gap-3 text-left justify-center">
                <input type="checkbox" {...heroForm.register("consent")} id="hero-consent" className="w-4 h-4" />
                <label htmlFor="hero-consent" className="text-sm text-gray-600">
                  개인정보 수집 및 이용에 동의합니다
                </label>
              </div>
              
              {/* Hidden fields for tracking parameters */}
              <input type="hidden" {...heroForm.register("page_source")} />
              <input type="hidden" {...heroForm.register("utm_source")} />
              <input type="hidden" {...heroForm.register("utm_medium")} />
              <input type="hidden" {...heroForm.register("utm_campaign_name")} />
              <input type="hidden" {...heroForm.register("utm_term")} />
              <input type="hidden" {...heroForm.register("utm_content")} />
              <input type="hidden" {...heroForm.register("utm_campaign_id")} />
              <input type="hidden" {...heroForm.register("utm_adset_id")} />
              <input type="hidden" {...heroForm.register("utm_adset_name")} />
              <input type="hidden" {...heroForm.register("utm_ad_id")} />
              <input type="hidden" {...heroForm.register("utm_ad_name")} />
              <input type="hidden" {...heroForm.register("linkedin_campaign_name")} />
              <input type="hidden" {...heroForm.register("linkedin_campaign_id")} />
              <input type="hidden" {...heroForm.register("linkedin_campaign_group_id")} />
              <input type="hidden" {...heroForm.register("linkedin_campaign_group_name")} />
              <input type="hidden" {...heroForm.register("linkedin_ad_id")} />
              <input type="hidden" {...heroForm.register("linkedin_ad_name")} />
              
              {heroForm.formState.errors.email && <p className="text-sm text-red-600">{heroForm.formState.errors.email.message}</p>}
              {heroForm.formState.errors.consent && <p className="text-sm text-red-600">{heroForm.formState.errors.consent.message}</p>}
            </form>
            
          </div>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">문장 단위 출처 표시</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">표·수식 완벽 인식</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">100% 로컬 처리</p>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <button onClick={() => {
          const nextSection = document.querySelector('#pain-section');
          if (nextSection) {
            nextSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }} className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors mt-8">
            <span className="text-sm">자세히 보기</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              실제 동작 화면을 확인해보세요
            </h2>
            <p className="text-lg text-gray-600">
              공시보고서 분석이 얼마나 빨라지는지 직접 확인하세요
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <video autoPlay loop muted playsInline poster="/videos/demo-poster.png" className="w-full">
              <source src="/videos/localdocs-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pain (3-column) */}
      <section id="pain-section" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              매주 반복되는 고통
            </h2>
            <p className="text-xl text-gray-600">
              증권사·자산운용사 실무자들의 현실
            </p>
          </div>
          
          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                정보 찾기
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                300페이지 보고서에서<br />
                원하는 숫자 하나 찾는데<br />
                <strong className="text-gray-900">30분</strong>
              </p>
              
              {/* Quote Box */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
                <p className="text-sm text-gray-700 italic">
                  "Ctrl+F 검색하면 200개 결과... 하나하나 확인하다 보면 어느새 30분"
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                계정과목 통일
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                연도별로 바뀌는 계정과목<br />
                5개년 수작업 대조에<br />
                <strong className="text-gray-900">4-6시간</strong>
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
                <p className="text-sm text-gray-700 italic">
                  "판관비가 어느 해는 판매비와관리비로... 5개년 통일하려면 반나절"
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                주석 표 정리
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                복잡한 주석 표를 엑셀로<br />
                복사하면 서식 깨짐<br />
                <strong className="text-gray-900">1.5시간</strong>
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
                <p className="text-sm text-gray-700 italic">
                  "유형자산 표만 5개년 정리하는데 한 시간 반... 하나라도 틀리면 끝"
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Transition Box */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gray-900 text-white px-8 py-6 rounded-xl">
              <p className="text-2xl font-bold mb-2">이제 이 모든 작업을 5분으로 줄입니다.</p>
              <svg className="w-8 h-8 mx-auto mt-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: Solution - With Screenshots */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              2단계면 끝납니다.
            </h2>
            <p className="text-lg text-gray-600">
              복잡한 설정도, 학습 시간도 필요 없습니다.
            </p>
          </div>
          
          {/* Step 1: Upload */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  문서 업로드
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  공시보고서, 재무제표, 감사보고서를 드래그 앤 드롭.
                </p>
                <div className="bg-green-50 border border-green-500 text-green-700 text-sm px-4 py-3 rounded-lg inline-block mb-6">
                  🔒 인터넷 연결 불필요 · 로컬에서만 처리
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <img src={uploadScreen} alt="문서 업로드 화면" className="w-full rounded-2xl shadow-2xl border border-gray-200" />
              </div>
            </div>
          </div>
          
          {/* Step 2: Q&A */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <img src={qaScreen} alt="질문하고 답변 받는 화면" className="w-full rounded-2xl shadow-2xl border border-gray-200" />
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  질문하고 정확한 답변 + 출처 확인
                </h3>
                <p className="text-lg text-gray-600 mb-6">평소에 혼자 생각했던 질문 그대로 물어보세요. 문장 단위로 출처를 확인할 수 있습니다.
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>표, 수식까지 정확 인식</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>페이지 넘어가도 완벽 추적</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>한 문장씩 출처 확인 가능</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <button onClick={scrollToWaitlist} className="px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl">
              지금 무료로 시작하기 →
            </button>
            <p className="mt-4 text-sm text-gray-500">
              신용카드 등록 없음 · 5분 안에 설정 완료
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              왜 로컬독스인가
            </h2>
            <p className="text-lg text-gray-600">
              비교하면 답이 보입니다.
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600"></th>
                    <th className="py-4 px-6 text-center text-sm font-semibold text-gray-600">일반 AI 도구</th>
                    <th className="py-4 px-6 text-center text-sm font-semibold text-gray-600">NotebookLM</th>
                    <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900 bg-blue-50">🏆 로컬독스</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">인터넷 연결</td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-red-500 font-semibold mb-1">❌ 필수</div>
                      <div className="text-xs text-gray-500">클라우드 업로드</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-red-500 font-semibold mb-1">❌ 필수</div>
                      <div className="text-xs text-gray-500">구글 서버 전송</div>
                    </td>
                    <td className="py-4 px-6 text-center bg-blue-50">
                      <div className="text-green-500 font-semibold mb-1">✅ 불필요</div>
                      <div className="text-xs text-gray-700">100% 로컬 처리</div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">출처 정확도</td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-red-500 font-semibold mb-1">❌ 모호함</div>
                      <div className="text-xs text-gray-500">"어딘가 있음"</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-yellow-500 font-semibold mb-1">⚠️ 페이지 단위</div>
                      <div className="text-xs text-gray-500">"15페이지에"</div>
                    </td>
                    <td className="py-4 px-6 text-center bg-blue-50">
                      <div className="text-green-500 font-semibold mb-1">✅ 문장 단위</div>
                      <div className="text-xs text-gray-700">"15p 3문단 3줄"</div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">표·수식 인식</td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-red-500 font-semibold mb-1">❌ 약함</div>
                      <div className="text-xs text-gray-500">텍스트만</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-yellow-500 font-semibold mb-1">⚠️ 부분 지원</div>
                      <div className="text-xs text-gray-500">간단한 표만</div>
                    </td>
                    <td className="py-4 px-6 text-center bg-blue-50">
                      <div className="text-green-500 font-semibold mb-1">✅ 완벽</div>
                      <div className="text-xs text-gray-700">재무제표 + 수식</div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">폐쇄망 지원</td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-red-500 font-semibold mb-1">❌ 불가능</div>
                      <div className="text-xs text-gray-500">인터넷 필수</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-red-500 font-semibold mb-1">❌ 불가능</div>
                      <div className="text-xs text-gray-500">인터넷 필수</div>
                    </td>
                    <td className="py-4 px-6 text-center bg-blue-50">
                      <div className="text-green-500 font-semibold mb-1">✅ 완벽 지원</div>
                      <div className="text-xs text-gray-700">Air-gapped OK</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Bottom emphasis */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              금융권이 선택해야 하는 이유가 명확합니다.
            </p>
            <button onClick={scrollToWaitlist} className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all">
              차이를 직접 확인하기 →
            </button>
          </div>
          
        </div>
      </section>

      {/* SECTION 5: Before/After */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5개년 공시 분석, 얼마나 달라질까요?
            </h2>
            <p className="text-lg text-gray-600">
              실제 작업 시간을 비교해보세요
            </p>
          </div>
          
          {/* 2-column comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Before
                </div>
                <span className="text-lg font-bold text-gray-900">기존 방법</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="font-semibold text-gray-900">총 소요 시간: 약 4-5시간</p>
                  </div>
                </div>
                
                <div className="space-y-3 pl-11">
                  <div>
                    <p className="font-medium text-gray-900">1. 정보 찾기 (1.5시간)</p>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• PDF 5개 각각 열기</li>
                      <li>• Ctrl+F '매출' 검색 → 수백 개 결과</li>
                      <li>• 하나씩 클릭해서 확인</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">2. 재무제표 정리 (2시간)</p>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• 계정과목 비교</li>
                      <li>• 엑셀에 수작업 입력</li>
                      <li>• 오타 체크</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">3. 주석·MD&A 정리 (1시간)</p>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• 주석 표 복사 → 서식 깨짐</li>
                      <li>• 다시 수작업 정리</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                <p className="text-sm text-red-800">
                  😰 <strong>문제점:</strong> 손이 많이 감 · 오타 가능성 · 눈 침침 · 지루함
                </p>
              </div>
            </div>
            
            {/* After */}
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  After
                </div>
                <span className="text-lg font-bold text-gray-900">로컬독스</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-gray-900">총 소요 시간: 약 5분</p>
                  </div>
                </div>
                
                <div className="space-y-3 pl-11">
                  <div>
                    <p className="font-medium text-gray-900">1. 정보 찾기 (1분)</p>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• PDF 5개 드래그 앤 드롭 (10초)</li>
                      <li>• 질문 입력 (20초)</li>
                      <li>• 답변 즉시 (즉시)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">2. 재무제표 정리 (2분)</p>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• 질문 한 번 (20초)</li>
                      <li>• 자동 분석 (1분)</li>
                      <li>• 엑셀 복사 (10초)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">3. 주석·MD&A 정리 (2분)</p>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• 자동 표 추출 (30초)</li>
                      <li>• MD&A 요약 (30초)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 border border-green-500 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  ✅ <strong>결과:</strong> 정확함 · 출처까지 · 복사 가능
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Comparison emphasis */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-red-500 to-green-500 text-white px-12 py-6 rounded-xl">
              <p className="text-4xl font-bold mb-2">4시간 → 5분</p>
              <p className="text-lg">당신의 시간을 돌려드립니다.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 6: Security */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">금융 문서, 안심하고 사용하세요</h2>
          </div>
          
          {/* 4 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">
                완전 오프라인
              </h3>
              <p className="text-sm text-gray-300">
                인터넷 연결 없이 동작<br />
                폐쇄망에서도 사용 가능
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-white mb-2">
                로컬 저장
              </h3>
              <p className="text-sm text-gray-300">
                모든 데이터는 당신의 PC에만<br />
                클라우드 업로드 절대 없음
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-lg font-bold text-white mb-2">
                외부 전송 차단
              </h3>
              <p className="text-sm text-gray-300">
                문서 내용이 외부로 나가지 않음<br />
                AI 처리도 로컬에서만
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-lg font-bold text-white mb-2">
                완전 삭제
              </h3>
              <p className="text-sm text-gray-300">
                삭제하면 복구 불가능하게 제거<br />
                흔적 남지 않음
              </p>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 6: Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              나에게 맞는 요금제를 선택하세요
            </h2>
            <p className="text-lg text-gray-600">
              모든 플랜에 100% 로컬 처리가 포함됩니다
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="text-sm font-semibold text-gray-600 uppercase">Free</span>
                <h3 className="text-4xl font-bold text-gray-900 mt-2">무료</h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>PDF 업로드 및 대화 기능</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>폴더 1개 생성</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>폴더에 PDF 최대 3개 업로드</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>표·이미지·수식 텍스트 지원</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>이메일 CS 지원</span>
                </li>
              </ul>
              
              <button onClick={scrollToWaitlist} className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all">
                Waitlist 등록하기
              </button>
            </div>
            
            {/* Pro Plan - Highlighted */}
            <div className="bg-blue-600 border-2 border-blue-600 rounded-2xl p-8 relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full">
                  추천
                </span>
              </div>
              
              <div className="mb-6">
                <span className="text-sm font-semibold text-blue-100 uppercase">Pro</span>
                <h3 className="text-4xl font-bold text-white mt-2">
                  $12<span className="text-lg font-normal">/월</span>
                </h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-white">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Free 플랜 모든 포함</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>폴더 무제한 생성</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>폴더당 문서 최대 50개 업로드</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>HWP·PPTX·XLSX (지원 예정)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>글과 내보내기 (지원 예정)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>이메일 CS 우선 지원</span>
                </li>
              </ul>
              
              <button onClick={scrollToWaitlist} className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all">
                Waitlist 등록하기
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="text-sm font-semibold text-gray-600 uppercase">Enterprise</span>
                <h3 className="text-4xl font-bold text-gray-900 mt-2">별도 협의</h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Pro 플랜 모든 포함</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>사내 시스템 연동</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>폴더 공유 기능</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>기업 맞춤형 고객 지원</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>SSO 등 결제 방식 관리</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>전담 기술 지원팀 및 온보딩</span>
                </li>
              </ul>
              
              <button onClick={scrollToWaitlist} className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all">
                Waitlist 등록하기
              </button>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-600">
              궁금하신 점이 있으신가요? 여기에서 답을 찾아보세요.
            </p>
          </div>
          
          {/* FAQ Items */}
          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-semibold text-gray-900">인터넷이 없어도 사용할 수 있나요?</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    네, 설치 후에는 인터넷 없이도 모든 기능이 동작합니다.
                  </p>
                </div>}
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-semibold text-gray-900">어떤 파일 형식을 지원하나요?</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    현재는 PDF만 지원됩니다. 곧 HWP, PPTX, XLSX 등 다양한 포맷을 추가할 예정입니다.
                  </p>
                </div>}
            </div>
            
            {/* FAQ 3 */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-semibold text-gray-900">표·그래프도 읽을 수 있나요?</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    네, 표와 이미지, 수식까지 분석할 수 있습니다.
                  </p>
                </div>}
            </div>
            
            {/* FAQ 4 */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-semibold text-gray-900">답변에 출처가 표시되나요?</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    모든 답변에 출처를 제공합니다. 어떤 문서의, 어느 페이지에서 가져왔는지 확인할 수 있습니다.
                  </p>
                </div>}
            </div>
            
            {/* FAQ 5 */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-semibold text-gray-900">보안이 중요한 환경에서도 사용할 수 있나요?</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 5 && <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    네, 폐쇄망·인트라넷에서도 100% 로컬 처리로 안전하게 쓸 수 있습니다.
                  </p>
                </div>}
            </div>
            
            {/* FAQ 6 */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-semibold text-gray-900">무료 플랜과 유료 플랜의 차이는 무엇인가요?</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === 6 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 6 && <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    무료는 문서/폴더 개수 제한이 있고, Pro는 무제한 + 고급 기능, Enterprise는 팀 관리·보안 기능까지 제공합니다.
                  </p>
                </div>}
            </div>
            
            {/* FAQ 7 */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === 7 ? null : 7)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-semibold text-gray-900">한국어 외 다른 언어도 지원하나요?</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === 7 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 7 && <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    네, 다양한 언어의 문서를 지원하며 특히 한국어 문서에서 뛰어난 성능을 발휘합니다.
                  </p>
                </div>}
            </div>
            
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gray-900 rounded-xl p-8">
            <p className="text-white text-lg mb-4">
              더 궁금하신 점이 있으신가요?
            </p>
            <button onClick={scrollToWaitlist} className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">무료체험 신청하고 문의하기 →</button>
          </div>
          
        </div>
      </section>

      {/* SECTION 8: CTA - Waitlist */}
      <section id="waitlist-section" className="py-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            출시 소식을 가장 먼저 받아보세요
          </h2>
          
          {/* Benefits list */}
          <div className="mb-12 space-y-3">
            <p className="text-lg text-blue-100 flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              정식 출시 알림을 가장 먼저 받습니다
            </p>
            <p className="text-lg text-blue-100 flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              얼리버드 할인 혜택을 드립니다
            </p>
            <p className="text-lg text-blue-100 flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              베타 테스터 우선 선발 기회
            </p>
          </div>
          
          {/* Email form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={ctaForm.handleSubmit(data => onSubmit(data, ctaForm))} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" {...ctaForm.register("email")} placeholder="이메일을 입력하세요" disabled={ctaForm.formState.isSubmitting} className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50" />
                <button type="submit" disabled={ctaForm.formState.isSubmitting} className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap disabled:opacity-50">
                  {ctaForm.formState.isSubmitting ? "등록 중..." : "등록하기"}
                </button>
              </div>
              
              {/* Consent checkbox */}
              <div className="flex items-start gap-2 text-left">
                <input type="checkbox" {...ctaForm.register("consent")} id="financial-consent" className="mt-1 w-4 h-4" />
                <label htmlFor="financial-consent" className="text-sm text-blue-100 cursor-pointer">
                  개인정보 수집 및 이용에 동의합니다
                </label>
              </div>
              
              {/* Hidden fields for tracking parameters */}
              <input type="hidden" {...ctaForm.register("page_source")} />
              <input type="hidden" {...ctaForm.register("utm_source")} />
              <input type="hidden" {...ctaForm.register("utm_medium")} />
              <input type="hidden" {...ctaForm.register("utm_campaign_name")} />
              <input type="hidden" {...ctaForm.register("utm_term")} />
              <input type="hidden" {...ctaForm.register("utm_content")} />
              <input type="hidden" {...ctaForm.register("utm_campaign_id")} />
              <input type="hidden" {...ctaForm.register("utm_adset_id")} />
              <input type="hidden" {...ctaForm.register("utm_adset_name")} />
              <input type="hidden" {...ctaForm.register("utm_ad_id")} />
              <input type="hidden" {...ctaForm.register("utm_ad_name")} />
              <input type="hidden" {...ctaForm.register("linkedin_campaign_name")} />
              <input type="hidden" {...ctaForm.register("linkedin_campaign_id")} />
              <input type="hidden" {...ctaForm.register("linkedin_campaign_group_id")} />
              <input type="hidden" {...ctaForm.register("linkedin_campaign_group_name")} />
              <input type="hidden" {...ctaForm.register("linkedin_ad_id")} />
              <input type="hidden" {...ctaForm.register("linkedin_ad_name")} />
            </form>
            
            {/* Trust badges */}
            <div className="mt-4 space-y-1 text-sm text-blue-100">
              
              
              
            </div>
            
            {/* Social proof */}
            
            
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Company Info */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">LocalDocs</h3>
              <p className="text-sm text-gray-400">
                AI 기반 로컬 문서 분석 솔루션
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    서비스 이용약관
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    개인정보 처리방침
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">문의</h4>
              <p className="text-sm text-gray-400">contact@localdocs.ai</p>
            </div>
            
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 LocalDocs. All rights reserved.
PeekabooLabs</p>
            
          </div>
        </div>
      </footer>
    </div>;
};
export default Financial;