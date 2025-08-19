import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, WifiOff, FileText, Link as LinkIcon, Quote, Search, Lock, Download, AlertTriangle, Cloud, X, CheckCircle, Zap, Brain, Building2, Scale, TrendingUp, Shield, Star } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해 주세요."),
  consent: z.boolean().refine(val => val === true, {
    message: "동의가 필요합니다."
  })
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
      <div className="hidden md:block">
        <a href="#cta"><Button variant="hero" size="lg">Waitlist 등록하기</Button></a>
      </div>
    </div>
  </header>;
};
const Hero = () => <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle" aria-hidden />
    <div className="container relative py-20 md:py-28 text-center">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-6">오프라인 실행 · HWP 지원 · 한국어 특화 요약 · 인용 제공</div>
      <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">인터넷 없이
문서를 요약, 정리, 검색하세요.</h1>
      <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        나만의 AI 리서치 파트너, Localdocs
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <a href="#cta"><Button variant="hero" size="xl">Waitlist 등록하기</Button></a>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 animate-pulse">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <span className="text-sm font-medium text-green-700">🔥 벌써 100명+ 신청 완료!</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{
          animationDelay: '0.2s'
        }}></div>
        </div>
        <p className="text-xs text-muted-foreground/70 animate-fade-in">* 한정된 베타 테스터 모집 중 *</p>
      </div>
    </div>
  </section>;
const Problem = () => <section className="section pt-8" aria-labelledby="problem-heading">
    <div className="container">
      <h2 id="problem-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">Localdocs를 써야하는 이유</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-destructive/10 text-destructive">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="font-semibold mb-2">기밀 문서라 ChatGPT를 사용할 수 없어요</h3>
            <p className="text-sm text-muted-foreground">보안 문서라 외부에 유출되면 안돼요</p>
          </div>
        </div>
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
              <WifiOff className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="font-semibold mb-2">인터넷이 안되는 폐쇄망이에요</h3>
            <p className="text-sm text-muted-foreground">AI를 쓰고 싶어도 못 쓰는 상황이에요</p>
          </div>
        </div>
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-red-100 text-red-600">
              <X className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="font-semibold mb-2">HWP 파일 미지원</h3>
            <p className="text-sm text-muted-foreground">ChatGPT도 HWP파일을 지원하지 않아 매번 PDF로 변환해야 해요.</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
const Solution = () => <section className="section" aria-labelledby="solution-heading">
    <div className="container">
      <h2 id="solution-heading" className="text-2xl md:text-3xl font-semibold mb-8">이젠 localdocs 하나로 끝내세요.</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="feature-card flex items-start gap-4"><WifiOff className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">맥락까지 이해하는 한국어 특화 AI</h3><p className="text-sm text-muted-foreground">인터넷 연결 없이, 국내 업무 환경의 뉘앙스까지 파악해 완벽한 요약 결과를 제공합니다.</p></div></div>
        <div className="feature-card flex items-start gap-4"><FileText className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">HWP는 기본, 어떤 문서든 변환 없이 바로</h3><p className="text-sm text-muted-foreground">HWP, PDF, PPTX는 물론 스캔(OCR) 문서까지, 번거로운 변환 과정 없이 즉시 분석하세요.</p></div></div>
        <div className="feature-card flex items-start gap-4"><Quote className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">신뢰할 수 있는 답변: 모든 결과에 출처 표기</h3><p className="text-sm text-muted-foreground">AI의 답변이 어떤 문서, 어느 페이지에서 나왔는지 클릭 한 번으로 검증하여 보고서에 활용하세요.</p></div></div>
        <div className="feature-card flex items-start gap-4"><Lock className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">외부 유출 원천 차단: 100% 온디바이스(On-device) 처리</h3><p className="text-sm text-muted-foreground">당신의 모든 데이터는 오직 PC 안에서만 처리됩니다. 서버 전송 자체가 존재하지 않습니다.</p></div></div>
      </div>
      <div className="text-center mt-8"><a href="#cta"><Button variant="hero" size="lg">Waitlist 등록하기</Button></a></div>
    </div>
  </section>;
const Features = () => <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">핵심 기능</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <WifiOff className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">오프라인 요약 AI</h3>
          <p className="text-muted-foreground">인터넷 없이 대용량 문서를 빠르게 요약해요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Brain className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">한국어 특화 AI</h3>
          <p className="text-muted-foreground">한국어 문맥·문체에 최적화된 AI를 탑재했어요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">HWP 지원</h3>
          <p className="text-muted-foreground">HWP/HWPX 문서를 바로 읽을 수 있어요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Quote className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">모든 답변에 출처 제공</h3>
          <p className="text-muted-foreground">문서에서 찾은 출처를 바로 확인할 수 있어요. </p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <LinkIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">문서·링크·텍스트 통합</h3>
          <p className="text-muted-foreground">하나의 지식 베이스에서 한번에 통합 분석해요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">오프라인 지식 검색</h3>
          <p className="text-muted-foreground">선택한 문서 내에서 키워드·질문 기반 검색할 수 있어요.</p>
        </div>
      </div>
    </div>
  </section>;
const Comparison = () => <section className="section" aria-labelledby="comparison-heading">
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
  </section>;
const Scenarios = () => {
  const environments = [{
    id: 1,
    title: "엔터프라이즈 기업",
    description: "수백 페이지의 기술 표준 문서나 R&D 자료에서 필요한 스펙과 정보를 즉시 검색하여 개발 시간을 단축합니다.",
    icon: Building2,
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    overlayGradient: "from-blue-900/80 to-indigo-900/60",
    image: "/lovable-uploads/3098a8d7-6b45-47dc-abc4-9946c5c83a10.png"
  }, {
    id: 2,
    title: "법무법인",
    description: "수만 페이지에 달하는 증거 자료와 판례 더미 속에서 사건의 핵심 쟁점과 인용할 근거를 빠르게 찾아내 소송 전략을 수립합니다.",
    icon: Scale,
    gradient: "from-amber-600 via-orange-700 to-red-800",
    overlayGradient: "from-amber-900/80 to-red-900/60",
    image: "/lovable-uploads/964e7f8b-0bcd-47ff-972d-4595b6bebcd0.png"
  }, {
    id: 3,
    title: "투자사 및 금융권",
    description: "수십 개의 투자 보고서와 실사 데이터에서 핵심 성장 동력이나 잠재적 리스크를 신속하게 식별하여 투자 결정을 내립니다.",
    icon: TrendingUp,
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    overlayGradient: "from-emerald-900/80 to-cyan-900/60",
    image: "/lovable-uploads/9bd95de7-d285-4dd7-ac4a-8fcc6ab83d7d.png"
  }, {
    id: 4,
    title: "국방 및 공공기관",
    description: "인터넷이 차단된 폐쇄망 PC에서 대외비 보고서 및 정책 자료의 핵심 내용을 요약하고, 보안 유출 없이 신속하게 업무를 처리합니다.",
    icon: Shield,
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
    overlayGradient: "from-slate-900/80 to-zinc-900/60",
    image: "/lovable-uploads/ebf98bf4-9354-4eca-b2a5-310ff4a6c967.png"
  }];
  return <section id="scenarios" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black" aria-labelledby="scenarios-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="scenarios-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            이런 환경에서 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}효과적입니다
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            대용량 문서 처리가 필요한 전문 분야에서 AI의 힘으로 업무 효율성을 극대화하세요
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {environments.map((env, index) => {
          const IconComponent = env.icon;
          return <div key={env.id} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${env.gradient} 
                           hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 
                           hover:scale-[1.02] h-80`}>
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{
              backgroundImage: `url(${env.image})`
            }} />
                <div className={`absolute inset-0 bg-gradient-to-br ${env.overlayGradient}`} />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),rgba(255,255,255,0.02))]" />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  {/* Icon and Title */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                        {env.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-gray-100 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                      {env.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6">
                    <div className="w-full h-1 bg-gradient-to-r from-white/30 to-transparent rounded-full group-hover:from-white/50 transition-all duration-300" />
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>;
        })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-300 text-lg">
              당신의 업무 환경에 AI를 지금 바로 도입하세요
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
const Testimonials = () => {
  const testimonials = [{
    id: 1,
    name: "김민수",
    role: "변호사",
    company: "법무법인 정의",
    content: "수만 페이지의 판례 자료에서 핵심 쟁점을 찾는 시간이 90% 단축되었습니다. 이제 소송 전략 수립에 더 집중할 수 있어요.",
    rating: 5
  }, {
    id: 2,
    name: "박지영",
    role: "투자 분석가",
    company: "KL 투자증권",
    content: "실사 보고서 분석에 걸리던 시간이 하루에서 2시간으로 줄었어요. 정확한 출처까지 제공돼서 투자 결정에 확신을 가질 수 있습니다.",
    rating: 5
  }, {
    id: 3,
    name: "이상훈",
    role: "R&D 팀장",
    company: "테크이노베이션",
    content: "기술 문서가 HWP로만 되어 있어서 항상 불편했는데, 이제 바로 질문하고 답을 얻을 수 있어 개발 속도가 2배 빨라졌습니다.",
    rating: 5
  }];
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-heading">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-gray-900 mb-4">
            이미 경험한 분들의 이야기
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            업무 효율성이 눈에 띄게 향상되었다는 실제 사용자들의 생생한 후기
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            당신도 이런 효율성을 경험해보세요
          </p>
          <a href="#cta">
            <Button variant="hero" size="lg" className="px-8 py-4">
              Waitlist 등록하기
            </Button>
          </a>
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
        <h2 id="security-heading" className="text-2xl md:text-3xl font-semibold mb-4">보안을 최우선으로 고려합니다</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">내 PC에서 수행</h3>
          </div>
          <p className="text-sm text-muted-foreground">모든 처리는 사용자의 개인 컴퓨터 환경에서 처리됩니다.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">오프라인 동작</h3>
          </div>
          <p className="text-sm text-muted-foreground">인터넷 연결이 없는 상태에서도 완벽하게 동작합니다.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">간편 설치</h3>
          </div>
          <p className="text-sm text-muted-foreground">PC 앱 다운로드 후 바로 사용 가능합니다.</p>
        </div>
      </div>
    </div>
  </section>;
const HowItWorks = () => {
  const steps = [{
    id: 1,
    icon: Download,
    title: "앱 다운로드 및 설치",
    description: "PC에 앱을 설치하세요",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  }, {
    id: 2,
    icon: FileText,
    title: "나만의 AI 지식 베이스 만들기",
    description: "분석하고 싶은 파일들을 드래그 앤 드롭으로 간편하게 추가하세요",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  }, {
    id: 3,
    icon: Search,
    title: "AI에게 질문하고 핵심 요약받기",
    description: "\"이 계약서의 핵심 독소 조항은 뭐야?\"처럼 채팅하듯 질문하면 AI가 즉시 답변합니다",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  }, {
    id: 4,
    icon: Quote,
    title: "클릭 한 번으로 출처 확인",
    description: "AI 답변의 출처 위치를 원 클릭으로 찾고, 사실 여부를 파악하세요.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  }];
  return <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="how-heading">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="how-heading" className="text-4xl font-bold text-gray-900 mb-4">
            사용 방법
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            몇 분만에 AI 지식 베이스를 구축하고 스마트한 답변을 받아보세요
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          return <div key={step.id} className="relative group">
                {/* Connection Line - only show between steps */}
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0" style={{
              transform: 'translateX(-50%)'
            }} />}
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{step.id}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </div>;
        })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="#cta">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <span>바로 시작하기</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>;
};
const Pricing = () => <section id="pricing" className="section" aria-labelledby="pricing-heading">
    <div className="container">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-4">나에게 맞는 요금제를 선택하세요</h2>
      <p className="text-muted-foreground mb-8">개인적인 문서 탐색은 무료로 시작하세요. 데이터 분석, 보고서 작성 등 전문가 수준의 생산성이 필요하다면 Pro를, 조직을 위한 보안과 관리가 필요하다면 Enterprise를 선택하세요.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="pricing-card">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="mt-1 text-muted-foreground">핵심 기능을 경험하는 가장 좋은 방법</p>
          <p className="mt-4 text-2xl font-bold">₩0 <span className="text-sm font-medium text-muted-foreground">/ 평생</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>오프라인 AI 요약·검색</li>
            <li>기본 문서 지원(HWP, PDF, PPTX, DOCX)</li>
            <li>답변 내 인용 제공</li>
            <li>최대 10개의 지식 베이스 생성</li>
            <li>(지식 베이스 당 최대 10개 문서)</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">Waitlist 등록하기</Button></a>
          </div>
        </div>
        <div className="pricing-card featured">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="mt-1 text-muted-foreground">데이터 분석부터 보고서 작성까지, 전문가를 위한 생산성 도구</p>
          <p className="mt-4 text-2xl font-bold">$19 <span className="text-sm font-medium text-muted-foreground">/ 사용자 / 월</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Free의 모든 기능 포함</li>
            <li>고급 문서 지원(XLSX/CSV, 스캔 PDF OCR)</li>
            <li>요약 결과 내보내기(Word, PPTX, Markdown)</li>
            <li>커스텀 요약 템플릿(지원 예정)</li>
            <li>무제한 지식 베이스 및 무제한 문서</li>
            <li>이메일 우선 지원</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">Waitlist 등록하기</Button></a>
          </div>
        </div>
        <div className="pricing-card">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="mt-1 text-muted-foreground">보안, 배포, 중앙 관리가 중요한 조직을 위한 맞춤형 솔루션</p>
          <p className="mt-4 text-2xl font-bold">별도 문의</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Pro의 모든 기능 포함</li>
            <li>대규모 팀을 위한 중앙 라이선스 관리</li>
            <li>폐쇄망 환경을 위한 오프라인 설치 지원</li>
            <li>전담 기술 지원 매니저 및 SLA</li>
            <li>맞춤형 기능 개발 및 연동(협의)</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">Waitlist 등록하기</Button></a>
          </div>
        </div>
      </div>
    </div>
  </section>;
const CTA = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });
  const onSubmit = async (values: FormValues) => {
    try {
      const {
        error
      } = await supabase.from('email_signups').insert([{
        email: values.email,
        consent: values.consent
      }]);
      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation
          toast.error("이미 등록된 이메일입니다.");
        } else {
          toast.error("등록 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
        return;
      }
      toast.success("알림 신청이 완료되었습니다. 곧 소식을 전해 드릴게요!");
      reset();
    } catch (error) {
      console.error('Email signup error:', error);
      toast.error("등록 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };
  return <section id="cta" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-3 text-center">지금 바로 Waitlist에 등록하세요.</h2>
        <p className="text-muted-foreground mb-6 text-center">출시 소식을 가장 먼저 전해 드립니다.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">이메일 주소</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
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
const FAQ = () => {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: '인터넷 없이 정말 동작하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, PC앱만 설치하면 인터넷 없이 동작합니다. 문서가 외부에 유출될 일이 전혀 없습니다.'
      }
    }, {
      '@type': 'Question',
      name: '어떤 파일 형식을 지원하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HWP/HWPX, PDF, PPTX, DOCX 등을 지원합니다. 다만, 순차적으로 적용될 수 있습니다.'
      }
    }, {
      '@type': 'Question',
      name: '결과 출처는 어떻게 제공되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Localdocs는 모든 결과를 문서 기반으로 제공합니다. 그래서 모든 답변엔 문서 출처 링크 또는 문서 내 위치(페이지, 문단 등)를 결과와 함께 표시합니다. 인용 형식은 데이터 소스에 따라 달라질 수 있습니다.'
      }
    }, {
      '@type': 'Question',
      name: '클라우드로 데이터가 전송되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '절대 전송되지 않습니다. 데이터는 PC 내에서만 처리되며 클라우드로 일절 전송되지 않습니다. 불안하시면, 인터넷을 끄고 실행하셔도 됩니다.'
      }
    }, {
      '@type': 'Question',
      name: '기업용 배포 모델이 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, Enterprise 플랜을 통해 대규모 팀을 위한 중앙 라이선스 관리 및 폐쇄망 환경을 위한 오프라인 설치/배포를 지원합니다. 별도 문의를 통해 귀사의 환경에 맞는 최적의 솔루션을 상담해 드립니다.'
      }
    }, {
      '@type': 'Question',
      name: '한국어 특화 요약 정확도는 어느 정도인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '자체 개발한 한국어 특화 온디바이스 LLM을 기반으로, 국내 업무 환경의 보고서, 논문, 법률 문서 등에서 최고의 요약 성능을 목표로 하고 있습니다. 구체적인 성능 지표는 출시와 함께 투명하게 공개할 예정입니다.'
      }
    }]
  };
  return <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-6">FAQ</h2>
        <div className="grid gap-4">
          <details className="feature-card"><summary className="font-medium">인터넷 없이 정말 동작하나요?</summary><p className="mt-2 text-muted-foreground">네, PC앱만 설치하면 인터넷 없이 동작합니다. 문서가 외부에 유출될 일이 전혀 없습니다.</p></details>
          <details className="feature-card"><summary className="font-medium">어떤 파일 형식을 지원하나요?</summary><p className="mt-2 text-muted-foreground">HWP/HWPX, PDF, PPTX, DOCX 등을 지원합니다. 다만, 순차적으로 적용될 수 있습니다.</p></details>
          <details className="feature-card"><summary className="font-medium">결과 출처는 어떻게 제공되나요?</summary><p className="mt-2 text-muted-foreground">Localdocs는 모든 결과를 문서 기반으로 제공합니다. 그래서 모든 답변엔 문서 출처 링크 또는 문서 내 위치(페이지, 문단 등)를 결과와 함께 표시합니다. 인용 형식은 데이터 소스에 따라 달라질 수 있습니다.</p></details>
          <details className="feature-card"><summary className="font-medium">클라우드로 데이터가 전송되나요?</summary><p className="mt-2 text-muted-foreground">절대 전송되지 않습니다. 데이터는 PC 내에서만 처리되며 클라우드로 일절 전송되지 않습니다. 불안하시면, 인터넷을 끄고 실행하셔도 됩니다.</p></details>
          <details className="feature-card"><summary className="font-medium">기업용 배포 모델이 있나요?</summary><p className="mt-2 text-muted-foreground">네, Enterprise 플랜을 통해 대규모 팀을 위한 중앙 라이선스 관리 및 폐쇄망 환경을 위한 오프라인 설치/배포를 지원합니다. '별도 문의'를 통해 귀사의 환경에 맞는 최적의 솔루션을 상담해 드립니다.</p></details>
          <details className="feature-card"><summary className="font-medium">한국어 특화 요약 정확도는 어느 정도인가요?</summary><p className="mt-2 text-muted-foreground">자체 개발한 한국어 특화 온디바이스 LLM을 기반으로, 국내 업무 환경의 보고서, 논문, 법률 문서 등에서 최고의 요약 성능을 목표로 하고 있습니다. 구체적인 성능 지표는 출시와 함께 투명하게 공개할 예정입니다.</p></details>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqJsonLd)
      }} />
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
  return <div>
      <Nav />
      <main>
        <Hero />
        
        <Problem />
        <Solution />
        <Features />
        <Comparison />
        <Scenarios />
        <Testimonials />
        <Security />
        <HowItWorks />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>;
};
export default Index;