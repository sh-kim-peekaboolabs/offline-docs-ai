import { Check, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "유효한 이메일을 입력해주세요" }).max(255),
  consent: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요",
  }),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  utm_campaign_id: z.string().optional(),
  linkedin_campaign_name: z.string().optional(),
  linkedin_creative_id: z.string().optional(),
  linkedin_campaign_id: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const Financial = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      consent: false,
    },
  });

  // Capture URL parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setValue("utm_source", params.get("utm_source") || undefined);
    setValue("utm_medium", params.get("utm_medium") || undefined);
    setValue("utm_campaign", params.get("utm_campaign") || undefined);
    setValue("utm_term", params.get("utm_term") || undefined);
    setValue("utm_content", params.get("utm_content") || undefined);
    setValue("utm_campaign_id", params.get("utm_campaign_id") || undefined);
    setValue("linkedin_campaign_name", params.get("linkedin_campaign_name") || undefined);
    setValue("linkedin_creative_id", params.get("linkedin_creative_id") || undefined);
    setValue("linkedin_campaign_id", params.get("linkedin_campaign_id") || undefined);
  }, [setValue]);

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      const insertData: any = {
        email: data.email,
        consent: data.consent,
      };

      // Add UTM parameters if present
      if (data.utm_source) insertData.utm_source = data.utm_source;
      if (data.utm_medium) insertData.utm_medium = data.utm_medium;
      if (data.utm_campaign) insertData.utm_campaign = data.utm_campaign;
      if (data.utm_term) insertData.utm_term = data.utm_term;
      if (data.utm_content) insertData.utm_content = data.utm_content;
      if (data.utm_campaign_id) insertData.utm_campaign_id = data.utm_campaign_id;
      if (data.linkedin_campaign_name) insertData.linkedin_campaign_name = data.linkedin_campaign_name;
      if (data.linkedin_creative_id) insertData.linkedin_creative_id = data.linkedin_creative_id;
      if (data.linkedin_campaign_id) insertData.linkedin_campaign_id = data.linkedin_campaign_id;

      const { error } = await supabase.from("waitlist").insert([insertData]);

      if (error) throw error;

      toast({
        title: "등록 완료!",
        description: "출시 소식을 가장 먼저 받아보실 수 있습니다.",
      });

      reset();
    } catch (error: any) {
      console.error("Waitlist submission error:", error);
      toast({
        variant: "destructive",
        title: "오류 발생",
        description: error.message || "등록 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: Hero + Demo */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background gradient - YC style */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Copy */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="inline-block">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  DART 공시 분석의 새로운 기준
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                300페이지 공시보고서,
                <span className="text-blue-600"> 10초면 충분합니다.</span>
              </h1>
              
              {/* Sub Headline */}
              <p className="text-xl text-gray-600 leading-relaxed">
                "삼성전자 상반기 매출 얼마야?" 물어보면<br/>
                답변 + 출처까지 자동 표시.
              </p>
              
              {/* Pain Point */}
              <p className="text-base text-gray-500 italic">
                더 이상 Ctrl+F로 30분씩 문서 뒤지지 마세요.
              </p>
              
              {/* Value Props - Checklist */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">문장 단위 출처 제공</p>
                    <p className="text-sm text-gray-600">Page 22 자동 이동 + 원문 하이라이트</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">표·수식 완벽 인식</p>
                    <p className="text-sm text-gray-600">재무제표 수백 개 셀, 정확하게 추출</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">100% 로컬 처리</p>
                    <p className="text-sm text-gray-600">인터넷 없이, 데이터 외부 전송 0%</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg">
                  📊 지금 바로 체험하기
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all">
                  팀 도입 상담하기 →
                </button>
              </div>
              
              {/* Trust Badge */}
              <p className="text-sm text-gray-500">
                신용카드 필요 없음 · 5분 안에 시작
              </p>
            </div>
            
            {/* Right: Demo Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls
                  poster="/videos/demo-poster.png"
                  className="w-full h-auto"
                >
                  <source src="/videos/localdocs-demo.mp4" type="video/mp4" />
                </video>
                
                {/* Video overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm font-medium">
                    🎥 실제 데모: 삼성전자 반기보고서 분석 · 처리 시간: 10초
                  </p>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>데이터 외부 전송 0% · 로컬 디바이스에서만 처리</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: Pain (3-column) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              이런 업무, 매주 반복하고 계신가요?
            </h2>
            <p className="text-lg text-gray-600">
              실제 증권사·자산운용사 애널리스트들의 가장 큰 고민
            </p>
          </div>
          
          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                정보 찾기의 고통
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "상반기 매출이 어디 있더라..."<br/><br/>
                300페이지 반기보고서 열고, 목차 보고, 재무제표 찾고, 
                페이지 넘기며 숫자 찾기.<br/><br/>
                30분이 훌쩍.
              </p>
              
              {/* Quote Box */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
                <p className="text-sm text-gray-700 italic">
                  💬 "Ctrl+F로 '매출'을 검색하면 200개 결과가 나와요. 
                  하나하나 클릭해서 확인하다 보면 어느새 30분..."
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                <Clock className="w-4 h-4" />
                <span>소요 시간: 30분 / 숫자 하나</span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5개년 계정과목 통일 지옥
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                연도별로 계정과목이 바뀌면 일일이 대조하며 엑셀에 수작업.<br/><br/>
                "매출원가"가 어느 해는 "제품매출원가"로, 또 어느 해는 
                "상품매출원가"로 표기돼 있어서 5개 파일을 오가며 하나하나 확인해야 합니다.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
                <p className="text-sm text-gray-700 italic">
                  💬 "21년 자료에 '판관비'가 있는데 22년엔 '판매비와관리비'로 표기돼 있어요. 
                  이걸 5개년치 통일하려면 반나절은 걸립니다..."
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                <Clock className="w-4 h-4" />
                <span>소요 시간: 4-6시간 / 기업</span>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                주석사항 표 정리의 악몽
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                사업보고서 주석에 있는 "비용의 성격별 분류", "유형자산 변동표" 같은 복잡한 표들.<br/><br/>
                Ctrl+C, Ctrl+V로 엑셀에 옮기는 순간 서식이 깨지고, 
                숫자가 엉망이 됩니다. 결국 손으로 하나씩 옮기다가...
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
                <p className="text-sm text-gray-700 italic">
                  💬 "유형자산 표만 5개년 정리하는데 한 시간 반이 걸렸어요. 
                  셀 하나라도 틀리면 전체 분석이 틀어집니다."
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                <Clock className="w-4 h-4" />
                <span>소요 시간: 1.5시간 / 표</span>
              </div>
            </div>
            
          </div>
          
          {/* Transition Box */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gray-900 text-white px-8 py-6 rounded-xl">
              <p className="text-2xl font-bold mb-2">
                이제 이 모든 작업을 10분으로 줄입니다.
              </p>
              <svg className="w-8 h-8 mx-auto mt-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: Solution (3-Step) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              3단계면 끝납니다.
            </h2>
            <p className="text-lg text-gray-600">
              복잡한 설정도, 학습 시간도 필요 없습니다.
            </p>
          </div>
          
          {/* 3-Step Flow */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                문서 업로드
              </h3>
              <p className="text-gray-600 text-center mb-6">
                공시보고서, 재무제표, 감사보고서를 드래그 앤 드롭.
              </p>
              
              <div className="bg-green-50 border border-green-500 text-green-700 text-sm px-4 py-2 rounded-lg text-center mb-6">
                🔒 인터넷 연결 불필요
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-500">드래그 앤 드롭</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                질문하기
              </h3>
              <p className="text-gray-600 text-center mb-6">
                평소 하던 방식 그대로 자연어로 질문하세요.
              </p>
              
              <div className="bg-blue-50 border border-blue-600 p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-blue-600 mb-2">💬 예시:</p>
                <p className="text-sm text-gray-700">
                  "삼성전자와 SK하이닉스의 2023년 부채비율을 비교해줘"
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 rounded px-3 py-2 text-sm text-gray-500">
                    질문을 입력하세요...
                  </div>
                  <button className="bg-blue-600 text-white p-2 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                정확한 답변 + 출처
              </h3>
              <p className="text-gray-600 text-center mb-6">
                문장 단위로 출처를 확인하며 신뢰할 수 있는 인사이트 확보.
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
              
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-700 mb-2">
                  삼성전자 2024년 상반기 매출은 <strong>153조 7,068억원</strong>입니다.
                </p>
                <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                  📄 출처: Page 22 보기
                </button>
              </div>
            </div>
            
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl">
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
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              금융 문서, 안심하고 사용하세요
            </h2>
          </div>
          
          {/* 4 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">
                완전 오프라인
              </h3>
              <p className="text-sm text-gray-300">
                인터넷 연결 없이 동작<br/>
                폐쇄망에서도 사용 가능
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-white mb-2">
                로컬 저장
              </h3>
              <p className="text-sm text-gray-300">
                모든 데이터는 당신의 PC에만<br/>
                클라우드 업로드 절대 없음
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-lg font-bold text-white mb-2">
                외부 전송 차단
              </h3>
              <p className="text-sm text-gray-300">
                문서 내용이 외부로 나가지 않음<br/>
                AI 처리도 로컬에서만
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-lg font-bold text-white mb-2">
                완전 삭제
              </h3>
              <p className="text-sm text-gray-300">
                삭제하면 복구 불가능하게 제거<br/>
                흔적 남지 않음
              </p>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 7: CTA - Waitlist */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
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
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="이메일을 입력하세요"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap">
                등록하기
              </button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-4 space-y-1 text-sm text-blue-100">
              <p>✓ 스팸 메일 절대 없음</p>
              <p>✓ 언제든 구독 해지 가능</p>
              <p>✓ 이메일은 안전하게 보관됩니다</p>
            </div>
            
            {/* Social proof */}
            <p className="mt-6 text-blue-100">
              💬 이미 <strong>1,234명</strong>이 등록했습니다
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Financial;
