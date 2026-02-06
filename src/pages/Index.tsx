import { lazy, Suspense, memo, useEffect, useState, useRef } from "react";
import { HighlightText } from "@/components/ui/highlight-text";
import { Button } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { FileText, Lock, CheckCircle, Zap, ChevronDown, Menu, X, ArrowRight, Search, Shield, Layers, Monitor,
// Added Monitor icon
Apple // Added Apple icon for Hero/CTA buttons if needed, though Hero uses ArrowRight currently. I will replace ArrowRight with Apple for Mac and Monitor for Windows to be explicit.
} from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { Link } from "react-router-dom";
import { usePageTracking } from "@/hooks/useAnalytics";
import { analytics } from "@/lib/analytics";
import { DownloadDropdown } from "@/components/ui/download-dropdown";
import { WindowsIcon } from "@/components/icons/WindowsIcon";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { motion } from "framer-motion";

// Lazy load heavy demo components
const SearchInputKr = lazy(() => import("@/components/ui/search-input-kr").then(m => ({
  default: m.SearchInputKr
})));
const CitationDemoKr = lazy(() => import("@/components/demo/citation-demo-kr").then(m => ({
  default: m.CitationDemoKr
})));
const PDFViewerKr = lazy(() => import("@/components/demo/pdf-viewer-kr").then(m => ({
  default: m.PDFViewerKr
})));
const AutoCycleFilesKr = lazy(() => import("@/components/demo/auto-cycle-files-kr").then(m => ({
  default: m.AutoCycleFilesKr
})));
const DifferentiationSectionKr = lazy(() => import("@/components/sections/differentiation-section-kr").then(m => ({
  default: m.DifferentiationSectionKr
})));

// Simple loading placeholder
const DemoLoader = () => <div className="w-full h-full flex items-center justify-center"><div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" /></div>;
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setMobileMenuOpen(false);
  };
  const menuItems = [{
    name: "사용법",
    href: "#how-it-works"
  }, {
    name: "기능",
    href: "#features"
  }, {
    name: "보안",
    href: "/security-spec"
  }, {
    name: "요금제",
    href: "#pricing"
  }, {
    name: "엔터프라이즈",
    href: "/enterprise"
  }];
  return <>
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
                <div className="px-6 flex items-center justify-between h-16 max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
                        <img src={logo} alt="로컬독스 로고" width={32} height={32} loading="eager" />
                        <span className="text-lg font-semibold text-[#111] tracking-[-0.02em]">로컬독스</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {menuItems.map(item => item.href.startsWith('/') ? <Link key={item.name} to={item.href} state={{
            from: 'nav'
          }} className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors">
                                    {item.name}
                                </Link> : <a key={item.name} href={item.href} className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors">
                                    {item.name}
                                </a>)}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <a href="https://calendar.app.google/LD81XjYtbptocMKw8" target="_blank" rel="noopener noreferrer" className="hidden md:block" onClick={() => analytics.trackButtonClick('contact', 'navbar_kr')}>
                            <button className="px-4 py-2 text-sm font-medium text-[#666] hover:text-[#111] transition-colors">
                                문의하기
                            </button>
                        </a>
                        <DownloadDropdown lang="kr" place="navbar" className="hidden md:block" />

                        <button className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(true)}>
                            <Menu className="w-5 h-5 text-[#111]" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && <div className="fixed inset-0 z-50 md:hidden">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <nav className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl p-6">
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-50 rounded-lg">
                                <X className="w-5 h-5 text-[#111]" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            {menuItems.map(item => item.href.startsWith('/') ? <Link key={item.name} to={item.href} state={{
            from: 'nav'
          }} className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {item.name}
                                    </Link> : <a key={item.name} href={item.href} className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {item.name}
                                    </a>)}
                            <a href="https://cal.com/localdocs/15min" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => {
            setMobileMenuOpen(false);
            analytics.trackButtonClick('contact', 'navbar_mobile_kr');
          }}>
                                문의하기
                            </a>
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => {
            setMobileMenuOpen(false);
            analytics.trackButtonClick('download', 'navbar_mobile_kr');
          }} className="mt-4">
                                <button className="w-full px-5 py-3 bg-[#111] text-white text-base font-medium rounded-lg">
                                    다운로드
                                </button>
                            </a>
                        </div>
                    </nav>
                </div>}
        </>;
};

// Linear-style Hero (Glow Removed)
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: "500px"
    });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto border-x border-gray-200 pt-12 md:pt-20 pb-20">
                <div className="relative max-w-4xl mx-auto px-8 text-center mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-[#666] text-sm font-medium rounded-full mb-8 border border-gray-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        지금 바로 사용해보세요!
                    </div>

                    {/* Massive H1 */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-[#111] tracking-tighter leading-[1.2] mb-7">
                        인터넷 없이 동작하는 PDF 요약・검색 AI,
                        <span className="block mt-3 sm:mt-2">
                            <HighlightText className="text-[#111]" color="#fef08a">
                                이젠, 자료 유출 걱정 없이 검색하세요.
                            </HighlightText>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg text-[#666] leading-relaxed max-w-4xl mx-auto mb-10">
                        로컬독스는 내 PC에서 작동하는 AI PDF 검색 도구입니다.
                        <br />
                        문서의 출처와 함께 즉각적인 답변을 받아보세요.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center gap-6 mb-16">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'hero_kr')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-[#111] text-white text-base font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 whitespace-nowrap">
                                    <AppleIcon className="w-5 h-5 mb-0.5" />
                                    Mac용 다운로드
                                </button>
                            </a>
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'hero_kr')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-[#111] text-white text-base font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 whitespace-nowrap">
                                    <WindowsIcon className="w-4 h-4" />
                                    Windows용 다운로드
                                </button>
                            </a>
                        </div>
                        <a href="#faq-compatibility" className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4" onClick={e => {
            e.preventDefault();
            const el = document.getElementById('faq-compatibility');
            if (el) {
              el.setAttribute('open', 'true');
              const offset = 100;
              const elementPosition = el.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }}>
                            기기 최소사양
                        </a>
                    </div>
                </div>

                {/* Video Section */}
                <div className="px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <video ref={videoRef} className="w-full h-auto" autoPlay muted loop playsInline poster="/videos/demo-poster.png">
                                {isVisible && <source src="/videos/localdocs-demo.mp4" type="video/mp4" />}
                                <p className="text-muted-foreground p-8">
                                    브라우저가 비디오 재생을 지원하지 않습니다.
                                </p>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};
const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "소스 설정",
    description: <>
                    PDF 파일을 드래그 앤 드롭하거나 선택하세요.
                    <br />
                    모든 RAG 임베딩과 벡터화는 로컬에서 안전하게 처리됩니다.
                </>
  }, {
    number: "02",
    title: "질문하기",
    description: <>
                    자연어로 자유롭게 질문하세요.
                    <br />
                    정확한 키워드나 페이지 번호를 기억할 필요가 없습니다.
                </>,
    component: <div className="w-full h-full flex items-center justify-center p-8">
                    <Suspense fallback={<DemoLoader />}>
                        <SearchInputKr />
                    </Suspense>
                </div>
  }, {
    number: "03",
    title: "출처와 함께 답변 확인",
    description: <>
                    문장 단위의 출처와 함께 답변을 확인하세요.
                    <br />
                    모든 주장은 정확한 출처를 바탕으로 합니다.
                </>,
    component: <div className="w-full h-full flex items-center justify-center p-8">
                    <Suspense fallback={<DemoLoader />}>
                        <CitationDemoKr />
                    </Suspense>
                </div>
  }, {
    number: "04",
    title: "원문에서 즉시 검증",
    description: <>
                    인용을 클릭하면 원문의 해당 페이지로 바로 이동합니다.
                    <br />
                    전체 맥락을 즉시 확인하고 검증하세요.
                </>,
    component: <div className="w-full h-full flex items-center justify-center p-8">
                    <Suspense fallback={<DemoLoader />}>
                        <PDFViewerKr />
                    </Suspense>
                </div>
  }];
  return <section id="how-it-works" className="w-full bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto border-x border-gray-200">
                {steps.map((step, index) => <div key={index} className="border-b border-gray-200">
                        {/* Header Row - Only for first step */}
                        {index === 0 && <div className="px-8 py-4 border-b border-gray-200 border-t border-gray-200 text-center">
                                <span className="text-sm font-semibold text-gray-600 tracking-widest uppercase">사용법</span>
                            </div>}

                        {/* Content Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] md:h-[550px]">
                            {/* Left Column - Text */}
                            <div className="px-8 md:px-10 py-12 md:py-16 border-r border-gray-200 flex flex-col justify-center h-full">
                                <div className="space-y-4">
                                    <div className="text-sm font-mono text-gray-400">{step.number}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed tracking-tight">{step.description}</p>
                                </div>
                            </div>

                            {/* Right Column - Graphic */}
                            <div className="bg-gray-50 px-8 md:px-12 py-12 md:py-16 flex items-center justify-center h-full overflow-hidden">
                                {index === 0 ? <Suspense fallback={<DemoLoader />}>
                                        <AutoCycleFilesKr />
                                    </Suspense> : step.component ? step.component : <div className="text-gray-300 text-8xl font-thin">{step.number}</div>}
                            </div>
                        </div>
                    </div>)}
            </div>
        </section>;
};

// Bento Grid Features
const Features = () => {
  const features = [{
    Icon: Zap,
    name: "즉시 검색",
    description: "1000페이지가 넘는 문서도 몇 초 만에 검색하세요. 더 이상 수십 개의 PDF를 일일이 열어볼 필요가 없습니다.",
    className: "col-span-3 lg:col-span-2",
    background: <motion.div className="absolute inset-0 opacity-10" animate={{
      scale: [1, 1.05, 1]
    }} transition={{
      duration: 5,
      repeat: Infinity
    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
                </motion.div>
  }, {
    Icon: Lock,
    name: "100% 오프라인",
    description: "내 컴퓨터에서만 작동합니다. 인터넷 연결이 필요 없습니다.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50" />
  }, {
    Icon: Shield,
    name: "데이터 유출 제로",
    description: "문서가 기기를 벗어나지 않습니다. 완벽한 프라이버시를 보장합니다.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />
  }, {
    Icon: FileText,
    name: "출처 인용",
    description: "모든 답변에는 정확한 페이지 번호와 문장 단위의 출처가 포함됩니다. 즉시 검증하세요.",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />
  }, {
    Icon: Search,
    name: "표와 수식 인식",
    description: "표, 수식, 재무제표를 완벽하게 인식합니다. 더 이상 수동으로 데이터를 추출할 필요가 없습니다.",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-50" />
  }, {
    Icon: Layers,
    name: "대용량 문서 처리",
    description: "대용량 문서도 즉시 처리합니다. 파일 크기 제한이나 업로드 대기 시간이 없습니다.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-50 opacity-50" />
  }];
  return <section id="features" className="bg-white">
            <div className="px-8 max-w-7xl mx-auto border-x border-gray-200 py-20 md:py-32">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">기능</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
                        보안을 최우선으로 하는 팀을 위해
                    </h2>
                </div>

                <BentoGrid>
                    {features.map((feature, idx) => <BentoCard key={idx} {...feature} />)}
                </BentoGrid>
            </div>
        </section>;
};

// Use Cases Section
const UseCases = () => {
  const cases = [{
    title: "법무팀",
    description: "계약서와 법률 문서를 즉시 검색하세요. 특정 조항과 참조를 빠르게 찾을 수 있습니다."
  }, {
    title: "금융 분석가",
    description: "연례 보고서와 재무제표에서 데이터를 추출하세요. 표 데이터를 정밀하게 분석합니다."
  }, {
    title: "연구팀",
    description: "여러 논문과 문서를 교차 참조하세요. 인용과 출처를 빠르게 찾을 수 있습니다."
  }, {
    title: "엔지니어링",
    description: "기술 사양서와 매뉴얼을 검색하세요. 정확한 파라미터를 몇 초 만에 찾을 수 있습니다."
  }];
  return <section id="use-cases" className="bg-white">
            <div className="max-w-7xl mx-auto px-8 border-x border-gray-200 py-20 md:py-32 bg-[#fafafa]">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">활용 사례</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
                        민감한 문서를 위해 만들어졌습니다
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {cases.map((item, index) => <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all">
                            <h3 className="text-lg font-semibold text-[#111] tracking-tight mb-2">{item.title}</h3>
                            <p className="text-base text-[#666] leading-relaxed">{item.description}</p>
                        </div>)}
                </div>
            </div>
        </section>;
};

// Security Section
const Security = () => {
  const points = [{
    title: "로컬 처리",
    description: "모든 AI 처리는 PC에서 이루어집니다. 외부로 전송되지 않습니다."
  }, {
    title: "폐쇄망 환경 지원",
    description: "인터넷 연결이 없는 보안 환경에서도 작동합니다."
  }, {
    title: "클라우드 저장 없음",
    description: "문서는 어떤 서버에도 업로드되지 않습니다."
  }, {
    title: "엔터프라이즈 전용",
    description: "규정이 중요한 산업을 위해 설계되었습니다."
  }];
  return <section id="security" className="bg-white">
            <div className="max-w-7xl mx-auto px-8 border-x border-gray-200 py-20 md:py-32">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">보안</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em] mb-4">
                        데이터는 절대 외부로 나가지 않습니다
                    </h2>
                    <Link to="/security-spec" state={{
          from: 'security'
        }} className="inline-block text-sm font-medium text-[#666] hover:text-[#111] transition-colors border-b border-[#666] hover:border-[#111]">
                        Security Spec
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {points.map((point, index) => <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:bg-white/80 transition-all">
                            <div className="w-10 h-10 bg-green-50/80 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <h3 className="text-base font-semibold text-[#111] tracking-tight mb-1">{point.title}</h3>
                            <p className="text-sm text-[#666] leading-relaxed">{point.description}</p>
                        </div>)}
                </div>
            </div>
        </section>;
};
const Pricing = () => <section id="pricing" className="bg-white" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-8 border-x border-gray-200 py-20 md:py-32">
            <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                나에게 맞는 요금제를 선택하세요
            </h2>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
                {/* Free Plan */}
                <div className="pricing-card h-full flex flex-col border border-gray-200 rounded-lg p-6 bg-white">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold mb-2">Free</h3>
                        <div className="text-3xl font-bold mb-2">무료</div>
                        <div className="text-sm text-muted-foreground h-5"></div>
                    </div>
                    <ul className="space-y-3 flex-1 text-sm">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>PDF 업로드 및 대화</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>폴더 1개 생성</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>폴더당 PDF 3개까지</span>
                        </li>

                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>표 및 수식 완벽 지원</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>이메일 지원</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" className="w-full" onClick={() => analytics.trackButtonClick('download', 'pricing_free_kr')}>
                            <Button variant="outline" className="w-full">
                                Mac용 다운로드
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="pricing-card h-full flex flex-col border-2 border-primary rounded-lg p-6 bg-white relative">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                            Pro
                            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                                추천
                            </span>
                        </h3>
                        <div className="text-3xl font-bold mb-2">
                            $29<span className="text-lg font-normal">/월</span>
                        </div>
                        <div className="text-sm text-primary font-semibold">
                            클로즈 베타 기간 동안 Pro 플랜 1개월 무료 체험
                        </div>
                    </div>
                    <ul className="space-y-3 flex-1 text-sm">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Free의 모든 기능</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>무제한 폴더</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>폴더당 PDF 50개까지</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>HWPX·PPTX·XLSX (출시 예정)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>결과 내보내기 (출시 예정)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>우선 이메일 지원</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" className="w-full" onClick={() => analytics.trackButtonClick('download', 'pricing_pro_kr')}>
                            <Button variant="hero" className="w-full">
                                Mac용 다운로드
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="pricing-card h-full flex flex-col border border-gray-200 rounded-lg p-6 bg-white">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                        <div className="text-3xl font-bold mb-2">문의하기</div>
                        <div className="text-sm text-muted-foreground h-5"></div>
                    </div>
                    <ul className="space-y-3 flex-1 text-sm">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Pro의 모든 기능</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>사내 시스템 통합</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>폴더 공유</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>사내 데이터로 학습된 맞춤형 AI</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>관리자 대시보드 (라이선스 관리)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>보안 강화 (SSO 등)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>엔터프라이즈 RAG 패키지 지원</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>전담 지원 및 온보딩</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <a href="https://calendar.app.google/LD81XjYtbptocMKw8" target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => analytics.trackButtonClick('contact', 'pricing_enterprise_kr')}>
                            <Button variant="outline" className="w-full">
                                문의하기
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>;

// FAQ Section
const FAQ = () => {
  const faqs = [{
    q: "인터넷 없이 사용할 수 있나요?",
    answer: "네, 설치 후 모든 기능이 완전히 오프라인에서 작동합니다."
  }, {
    q: "어떤 파일 형식을 지원하나요?",
    answer: "현재는 PDF를 지원합니다. HWP, PPTX, XLSX도 곧 지원될 예정입니다."
  }, {
    q: "표와 차트도 읽을 수 있나요?",
    answer: "네, 표와 재무 데이터를 정확하게 분석합니다."
  }, {
    q: "출처가 제공되나요?",
    answer: "네, 모든 답변에는 문서 이름과 페이지 번호가 포함됩니다."
  }, {
    q: "민감한 문서에도 안전한가요?",
    answer: "네, 100% 로컬 처리로 데이터가 기기를 절대 떠나지 않습니다."
  }, {
    id: "faq-compatibility",
    q: "내 컴퓨터에서 앱 실행 가능한가요?",
    answer: "Mac with Apple Silicon (M-series chips, 16GB RAM)은 완벽하게 지원합니다. Windows PC (Intel iGPU)는 곧 지원 예정입니다.",
    content: <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm text-left text-gray-600 border-collapse">
                        <thead className="bg-gray-50 text-gray-700 font-medium">
                            <tr>
                                <th className="px-4 py-2 border border-gray-200">디바이스 종류</th>
                                <th className="px-4 py-2 border border-gray-200">GPU/Processor</th>
                                <th className="px-4 py-2 border border-gray-200">메모리(RAM)</th>
                                <th className="px-4 py-2 border border-gray-200">지원 여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-200">Mac</td>
                                <td className="px-4 py-2 border border-gray-200">M-series chips</td>
                                <td className="px-4 py-2 border border-gray-200">16GB</td>
                                <td className="px-4 py-2 border border-gray-200">✅ 완벽 지원</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-200">Windows PC (Intel iGPU)</td>
                                <td className="px-4 py-2 border border-gray-200">Intel integrated graphics</td>
                                <td className="px-4 py-2 border border-gray-200">16GB</td>
                                <td className="px-4 py-2 border border-gray-200">✅ 완벽 지원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
  }];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  return <section id="faq" className="bg-white">
            <div className="max-w-7xl mx-auto px-8 border-x border-gray-200 py-20 md:py-32">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">FAQ</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
                            궁금한 점이 있으신가요?
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => <details key={index} id={faq.id} className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-6 group hover:border-gray-300 hover:bg-white/80 transition-all">
                                <summary className="font-medium text-[#111] cursor-pointer list-none flex items-center justify-between">
                                    {faq.q}
                                    <ChevronDown className="w-5 h-5 text-[#9ca3af] group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="mt-4 text-[#666] leading-relaxed">
                                    {faq.content || faq.answer}
                                </div>
                            </details>)}
                    </div>

                    <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
        }} />
                </div>
            </div>
        </section>;
};

// CTA Section
const CTA = () => {
  return <section id="cta" className="bg-white">
            <div className="max-w-7xl mx-auto border-x border-gray-800 py-20 md:py-32 bg-[#111]">
                <div className="px-8 max-w-xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">지금 바로 시작하세요!</h2>
                    <p className="text-lg text-gray-400 mb-8">
                        현재 클로즈 베타 기간입니다.
                        <br />앱 로그인 시 Pro 플랜 무료 1개월 제공해드려요.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'cta_kr')}>
                            <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                <AppleIcon className="w-5 h-5 mb-0.5" />
                                Mac용 다운로드
                            </button>
                        </a>
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'cta_kr')}>
                            <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                <WindowsIcon className="w-4 h-4" />
                                Windows용 다운로드
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>;
};
const Footer = () => <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16 border-x border-gray-200">
            {/* Main Footer Content */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 items-start">
                {/* Company Info */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-start">
                    <div className="flex flex-col items-start gap-2 mb-3">
                        <img src={logo} alt="로컬독스" width={24} height={24} />
                        <h3 className="text-base font-semibold">로컬독스</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        온디바이스AI 문서 검색,요약 솔루션
                    </p>
                    <p className="text-sm text-muted-foreground">
                        contact@peekaboolabs.ai
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Product</h3>
                    <div className="flex flex-col gap-3">
                        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => window.scrollTo(0, 0)}>
                            Personal
                        </Link>
                        <Link to="/enterprise" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => window.scrollTo(0, 0)}>
                            Enterprise
                        </Link>
                    </div>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Legal</h3>
                    <div className="flex flex-col gap-3">
                        <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            이용약관
                        </a>
                        <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            개인정보처리방침
                        </a>
                        <Link to="/security-spec" state={{
            from: 'footer'
          }} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Security Spec
                        </Link>
                    </div>
                </div>

                {/* Language */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Language</h3>
                    <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground font-medium">
                            한국어
                        </span>
                        <a href="/en" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            English
                        </a>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Social</h3>
                    <div className="flex flex-col gap-3">
                        <a href="https://www.linkedin.com/company/peekaboolabs/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://x.com/PeekabooLabsInc" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            X
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-200">
                <div className="text-left text-sm text-muted-foreground">
                    © 2025 PeekabooLabs. All rights reserved.
                </div>
            </div>
        </div>
    </footer>;
const IndexNew = () => {
  usePageTracking();
  return <div className="min-h-screen bg-white font-sans text-[#111]">
            <Nav />
            <Hero />
            <HowItWorksSection />
            <Suspense fallback={<DemoLoader />}>
                <DifferentiationSectionKr />
            </Suspense>
            <Features />
            <UseCases />
            <Security />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </div>;
};
export default IndexNew;
