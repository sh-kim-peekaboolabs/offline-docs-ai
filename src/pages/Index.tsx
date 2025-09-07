import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, WifiOff, FileText, Link as LinkIcon, Quote, Search, Lock, Download, AlertTriangle, Cloud, X, CheckCircle, Zap, Brain, Building2, Scale, TrendingUp, Shield, Star, ChevronDown, Settings, Users, BarChart3 } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { useEffect } from "react";
import { usePageTracking, useSectionTracking } from "@/hooks/useAnalytics";
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
const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b">
    <div className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
        <img src={logo} alt="localdocs 3D 문서 스택 로고" width={40} height={40} className="logo-interactive" loading="lazy" />
        <div className="text-xl font-bold text-primary">Localdocs</div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#features" className="story-link">제품 특징</a>
        <a href="#scenarios" className="story-link">사용 시나리오</a>
        <a href="#security" className="story-link">보안</a>
        <a href="#pricing" className="story-link">요금제</a>
        <a href="#faq" className="story-link">FAQ</a>
        <a href="#cta" className="story-link">Waitlist 등록</a>
      </nav>
      <div className="flex items-center gap-4">
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
            <span className="text-sm">한국어</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute right-0 top-full mt-1 w-32 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <span className="block px-3 py-2 text-sm text-muted-foreground bg-accent rounded-md">한국어 (KR)</span>
            <a href="/en" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">English (EN)</a>
          </div>
        </div>
        <div className="hidden md:block">
          <a href="#cta"><Button variant="hero" size="lg">Waitlist 등록하기</Button></a>
        </div>
      </div>
    </div>
  </header>;
};
const Hero = () => <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle" aria-hidden />
    <div className="container relative py-20 md:py-28 text-center">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-6">오프라인 ChatPDF, Localdocs (로컬독스)</div>
      <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl leading-normal md:text-5xl font-bold">수십 개의 PDF에서 원하는 자료를<br />한번에 찾는 AI 검색기</h1>
      <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">질문만 하세요. 답과 출처를 1분 만에 알려드립니다.</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <a href="#cta"><Button variant="hero" size="xl">Waitlist 등록하기</Button></a>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 animate-pulse">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <span className="text-sm font-medium text-green-700">🔥 100명+ 신청 완료!</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{
          animationDelay: '0.2s'
        }}></div>
        </div>
        <p className="text-xs text-muted-foreground/70 animate-fade-in">* 한정된 베타 테스터 모집 중 *</p>
      </div>
    </div>
  </section>;
const Features = () => <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">Localdocs, 이렇게 다릅니다</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="feature-card text-left p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">즉시 정보 검색</h3>
              <p className="text-sm text-muted-foreground">PDF를 올려두면, 필요한 정보를 바로 찾아줍니다.</p>
            </div>
          </div>
        </div>
        <div className="feature-card text-left p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
              <Quote className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">정확한 출처 표시</h3>
              <p className="text-sm text-muted-foreground">답변은 언제나 '어느 문서, 몇 쪽'에서 나왔는지 함께 표시합니다.</p>
            </div>
          </div>
        </div>
        <div className="feature-card text-left p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600 flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">다양한 콘텐츠 분석</h3>
              <p className="text-sm text-muted-foreground">표·이미지·수식까지 분석해줍니다.</p>
            </div>
          </div>
        </div>
        <div className="feature-card text-left p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-orange-100 text-orange-600 flex-shrink-0">
              <LinkIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">다중 문서 대화</h3>
              <p className="text-sm text-muted-foreground">여러 문서를 한 번에 등록해놓고 대화할 수 있습니다.</p>
            </div>
          </div>
        </div>
        <div className="feature-card text-left p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 flex-shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">한국어 최적화</h3>
              <p className="text-sm text-muted-foreground">한국어 문맥에 최적화된 AI로 계약서·보고서도 정확하게 다룹니다.</p>
            </div>
          </div>
        </div>
        <div className="feature-card text-left p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-red-100 text-red-600 flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">100% 오프라인</h3>
              <p className="text-sm text-muted-foreground">외부 서버와 연결되지 않고, 오직 내 PC에서만 실행됩니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">현재는 PDF만 지원합니다. 곧 HWP·PPTX·XLSX까지 확장할 예정입니다.</p>
      </div>
    </div>
  </section>;
const Scenarios = () => {
  const scenarios = [{
    id: 1,
    title: "기술팀",
    icon: Settings,
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    points: ["ISO26262, OEM 표준, 협력사 가이드라인 문서를 한 번에 올려두고 원하는 규격을 바로 찾아보세요.", "600쪽이 넘는 기술 서적에서도 필요한 항목을 몇 초 만에 확인할 수 있습니다."]
  }, {
    id: 2,
    title: "법무팀",
    icon: Scale,
    gradient: "from-amber-600 via-orange-700 to-red-800",
    points: ["수백 페이지 계약 문서를 넘기며 원하는 조항을 찾는 시간을 줄이세요.", "예: 위약금 조항이 어디 있는지 물으면, 해당 쪽수를 바로 알려드립니다."]
  }, {
    id: 3,
    title: "공공·연구기관",
    icon: BarChart3,
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    points: ["여러 편의 논문 중 원하는 레퍼런스만 추려보세요. 예: '김○○(2021)의 데이터셋 이름'을 검색해 즉시 확인.", "각종 매뉴얼을 등록해두고, 필요한 순간 바로 확인하세요. 예: '방재 매뉴얼 5장의 비상 연락 체계'를 몇 초 만에 찾습니다."]
  }];
  return <section id="scenarios" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black" aria-labelledby="scenarios-heading">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 id="scenarios-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
          이럴 때 
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {" "}Localdocs가 필요합니다
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {scenarios.map(scenario => {
          const IconComponent = scenario.icon;
          return <div key={scenario.id} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${scenario.gradient} gpu-optimized p-8`}>
              <div className="relative h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                    {scenario.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {scenario.points.map((point, index) => <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {point}
                      </p>
                    </div>)}
                </div>

                <div className="mt-6">
                  <div className="w-full h-1 bg-gradient-to-r from-white/30 to-transparent rounded-full group-hover:from-white/50 transition-all duration-300" />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>;
        })}
      </div>

      <div className="text-center mt-16">
        <div className="inline-flex flex-col items-center gap-4">
          <p className="text-gray-300 text-lg">
            당신의 업무 효율을 10배 높여줄 Localdocs를 지금 바로 도입하세요
          </p>
          <a href="#cta">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                바로 시작하기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>;
};
const Security = () => <section id="security" className="section bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden" aria-labelledby="security-heading">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50"></div>
    <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-200/30 rounded-full blur-xl"></div>
    <div className="container relative z-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
          <Lock className="w-8 h-8" />
        </div>
        <h2 id="security-heading" className="text-2xl md:text-3xl font-semibold mb-4">데이터는 절대 밖으로 나가지 않습니다</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">PC 안에서만 진행</h3>
          </div>
          <p className="text-sm text-muted-foreground">사용자님의 PC에서만 안전하게 처리됩니다. 데이터는 외부로 전송되지 않습니다.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">데이터 외부 유출 차단</h3>
          </div>
          <p className="text-sm text-muted-foreground">외부 서버로 전송되지 않으니, 유출 위험이 전혀 없습니다.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">폐쇄망 지원</h3>
          </div>
          <p className="text-sm text-muted-foreground">인트라넷, 폐쇄망 환경에서도 문제없이 사용할 수 있습니다.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">오프라인 실행</h3>
          </div>
          <p className="text-sm text-muted-foreground">인터넷 연결이 없어도 그대로 실행됩니다.</p>
        </div>
      </div>
    </div>
  </section>;
const Pricing = () => <section id="pricing" className="section" aria-labelledby="pricing-heading">
    <div className="container">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-4 text-center">나에게 맞는 요금제를 선택하세요</h2>
      <div className="grid md:grid-cols-3 gap-6 pt-8">
        
        {/* Free Plan */}
        <div className="pricing-card h-full flex flex-col border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <div className="text-3xl font-bold mb-2">₩0</div>
            <div className="text-sm text-muted-foreground h-5"></div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>PDF 업로드 및 대화 가능</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>지식베이스 1개 제공</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>지식베이스당 최대 3개 문서 등록 가능</span>
            </li>
            
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>표·이미지·수식 완전 지원</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="#cta" className="w-full">
              <Button variant="outline" className="w-full">Waitlist 등록하기</Button>
            </a>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card h-full flex flex-col border-2 border-primary rounded-lg p-6 bg-white relative">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
              Pro
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">추천</span>
            </h3>
            <div className="text-3xl font-bold mb-2">$12<span className="text-lg font-normal">/월</span></div>
            <div className="text-sm text-muted-foreground h-5"></div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Free 플랜 모두 포함</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>무제한 PDF 업로드</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>지식베이스 무제한 생성</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>HWP·PPTX·XLSX 지원 예정 포함</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>요약 결과 내보내기</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>이메일 지원</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="#cta" className="w-full">
              <Button variant="hero" className="w-full">Waitlist 등록하기</Button>
            </a>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card h-full flex flex-col border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">별도 협의</div>
            <div className="text-sm text-muted-foreground h-5"></div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Pro 플랜 항목 모두 포함</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>사내 시스템 연동</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>기업 데이터를 학습한 사내 AI 구축</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>중앙 관리자용 어드민 대시보드</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>SSO 등 강화된 계정 관리</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>미디어 전용 RAG 패키지 지원</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>전담 기술 지원 및 온보딩</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="#cta" className="w-full">
              <Button variant="outline" className="w-full">Waitlist 등록하기</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>;
const FAQ = () => {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: '인터넷이 없어도 사용할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 설치 후에는 인터넷 없이도 모든 기능이 동작합니다.'
      }
    }, {
      '@type': 'Question',
      name: '어떤 파일 형식을 지원하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '현재는 PDF, 곧 HWP·PPTX·XLSX도 지원할 예정입니다.'
      }
    }, {
      '@type': 'Question',
      name: '표·그래프도 읽을 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 표와 이미지, 수식까지 분석할 수 있습니다.'
      }
    }, {
      '@type': 'Question',
      name: '답변에 출처가 표시되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '언제나 "문서명과 쪽수"까지 함께 제공됩니다.'
      }
    }, {
      '@type': 'Question',
      name: '보안이 중요한 환경에서도 사용할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 폐쇄망·인트라넷에서도 100% 로컬 처리로 안전하게 쓸 수 있습니다.'
      }
    }, {
      '@type': 'Question',
      name: '무료 플랜과 유료 플랜의 차이는 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '무료는 문서/지식베이스 개수 제한이 있고, Pro는 무제한 + 고급 기능, Enterprise는 팀 관리·보안 기능까지 제공합니다.'
      }
    }, {
      '@type': 'Question',
      name: '한국어 외 다른 언어도 지원하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 다양한 언어의 문서를 지원하며 특히 한국어 문서에서 뛰어난 성능을 발휘합니다.'
      }
    }]
  };
  return <section id="faq" className="section" aria-labelledby="faq-heading">
    <div className="container">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-center">자주 묻는 질문</h2>
      <div className="grid gap-4 max-w-3xl mx-auto">
        <details className="feature-card">
          <summary className="font-medium cursor-pointer">인터넷이 없어도 사용할 수 있나요?</summary>
          <p className="mt-2 text-muted-foreground">네, 설치 후에는 인터넷 없이도 모든 기능이 동작합니다.</p>
        </details>
        <details className="feature-card">
          <summary className="font-medium cursor-pointer">어떤 파일 형식을 지원하나요?</summary>
          <p className="mt-2 text-muted-foreground">현재는 PDF만 지원됩니다. 곧 HWP, PPTX, XLSX 등 다양한 포맷을 추가할 예정입니다.</p>
        </details>
        <details className="feature-card">
          <summary className="font-medium cursor-pointer">표·그래프도 읽을 수 있나요?</summary>
          <p className="mt-2 text-muted-foreground">네, 표와 이미지, 수식까지 분석할 수 있습니다.</p>
        </details>
        <details className="feature-card">
          <summary className="font-medium cursor-pointer">답변에 출처가 표시되나요?</summary>
          <p className="mt-2 text-muted-foreground">모든 답변에 출처를 제공합니다. 어떤 문서의, 어느 페이지에서 가져왔는지 확인할 수 있습니다.</p>
        </details>
        <details className="feature-card">
          <summary className="font-medium cursor-pointer">보안이 중요한 환경에서도 사용할 수 있나요?</summary>
          <p className="mt-2 text-muted-foreground">네, 폐쇄망·인트라넷에서도 100% 로컬 처리로 안전하게 쓸 수 있습니다.</p>
        </details>
        <details className="feature-card">
          <summary className="font-medium cursor-pointer">무료 플랜과 유료 플랜의 차이는 무엇인가요?</summary>
          <p className="mt-2 text-muted-foreground">무료는 문서/지식베이스 개수 제한이 있고, Pro는 무제한 + 고급 기능, Enterprise는 팀 관리·보안 기능까지 제공합니다.</p>
        </details>
        <details className="feature-card">
          <summary className="font-medium cursor-pointer">한국어 외 다른 언어도 지원하나요?</summary>
          <p className="mt-2 text-muted-foreground">네, 다양한 언어의 문서를 지원하며 특히 한국어 문서에서 뛰어난 성능을 발휘합니다.</p>
        </details>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqJsonLd)
      }} />
    </div>
  </section>;
};
const CTA = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    setValue,
    reset,
    watch,
    getValues
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // UTM 파라미터 매핑
    const utmParams = {
      'utm_source': 'utm_source',
      'utm_campaign': 'utm_campaign_id',
      'utm_medium': 'utm_medium',
      'utm_campaign_name': 'utm_campaign_name',
      'utm_adset_id': 'utm_adset_id',
      'utm_adset_name': 'utm_adset_name',
      'utm_ad_id': 'utm_ad_id',
      'utm_ad_name': 'utm_ad_name'
    };
    Object.entries(utmParams).forEach(([paramName, fieldName]) => {
      const value = params.get(paramName);
      if (value) {
        setValue(fieldName as keyof FormValues, value);
      }
    });

    // LinkedIn 파라미터 매핑
    const linkedinParams = {
      'campaign_group_id': 'linkedin_campaign_group_id',
      'campaign_group_name': 'linkedin_campaign_group_name',
      'campaign_id': 'linkedin_campaign_id',
      'utm_campaign': 'linkedin_campaign_name',
      'utm_content': 'linkedin_ad_id',
      'creative_name': 'linkedin_ad_name'
    };
    Object.entries(linkedinParams).forEach(([paramName, fieldName]) => {
      const value = params.get(paramName);
      if (value) {
        setValue(fieldName as keyof FormValues, value);
      }
    });
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
  return <section id="cta" className="section" aria-labelledby="cta-heading">
    <div className="container">
      <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-3 text-center">내 PDF와 직접 대화해보세요</h2>
      <p className="text-muted-foreground mb-6 text-center">데이터 유출 걱정 없는 Localdocs, 지금 Waitlist 등록하고 먼저 경험해 보세요.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">이메일 주소</Label>
            <Input id="email" type="email" placeholder="hello@localdocs.ai" {...register("email")} />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
          </div>
          
          {/* Hidden UTM 필드들 */}
          <input type="hidden" {...register("utm_source")} />
          <input type="hidden" {...register("utm_campaign_id")} />
          <input type="hidden" {...register("utm_medium")} />
          <input type="hidden" {...register("utm_campaign_name")} />
          <input type="hidden" {...register("utm_adset_id")} />
          <input type="hidden" {...register("utm_adset_name")} />
          <input type="hidden" {...register("utm_ad_id")} />
          <input type="hidden" {...register("utm_ad_name")} />
          
          {/* Hidden LinkedIn 필드들 */}
          <input type="hidden" {...register("linkedin_campaign_name")} />
          <input type="hidden" {...register("linkedin_ad_id")} />
          <input type="hidden" {...register("linkedin_campaign_group_id")} />
          <input type="hidden" {...register("linkedin_campaign_group_name")} />
          <input type="hidden" {...register("linkedin_campaign_id")} />
          <input type="hidden" {...register("linkedin_ad_name")} />
          
          <div className="flex items-center gap-2">
            <Checkbox id="consent" checked={watch("consent")} onCheckedChange={checked => setValue("consent", !!checked)} />
            <Label htmlFor="consent" className="text-sm text-muted-foreground">개인정보 수집 및 알림 수신에 동의합니다.</Label>
          </div>
          {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
          <div>
            <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">Waitlist 등록하기</Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">제출하신 이메일은 베타 알림과 안내 외 용도로 사용하지 않습니다.</p>
      </form>
    </div>
  </section>;
};
const Footer = () => <footer className="border-t">
    <div className="container py-8 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground">© PeekabooLabs. All rights reserved. 2025</div>
        <div className="text-muted-foreground">
          <a href="mailto:contact@peekaboolabs.ai" className="hover:text-foreground transition-colors">
            contact@peekaboolabs.ai
          </a>
        </div>
      </div>
    </div>
  </footer>;
const Index = () => {
  // 페이지뷰와 섹션뷰 자동 추적 활성화
  usePageTracking();
  useSectionTracking();
  return <div>
    <Nav />
    <main>
      <Hero />
      <Features />
      <Scenarios />
      <Security />
      <Pricing />
      <CTA />
      <FAQ />
    </main>
    <Footer />
  </div>;
};
export default Index;