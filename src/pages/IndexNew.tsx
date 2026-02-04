import { usePageTracking } from "@/hooks/useAnalytics";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { Link } from "react-router-dom";
import { HeroNew } from "@/components/sections/HeroNew";
import { HowItWorksNew } from "@/components/sections/HowItWorksNew";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { SecurityHybrid } from "@/components/sections/SecurityHybrid";
import { UseCasesTabs } from "@/components/sections/UseCasesTabs";
import { PricingNew } from "@/components/sections/PricingNew";
import { FeaturesNew } from "@/components/sections/FeaturesNew";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { WindowsIcon } from "@/components/icons/WindowsIcon";
import { analytics } from "@/lib/analytics";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { DownloadDropdown } from "@/components/ui/download-dropdown";

// FAQ Section
const FAQNew = () => {
    const faqs = [
        {
            q: "인터넷 연결이 꼭 필요한가요?",
            answer: "네, 더 똑똑한 답변을 위해 최신 클라우드 AI 모델(Gemini)을 사용하므로 인터넷 연결이 필요합니다. (완전 오프라인 사용을 원하시면 Enterprise 플랜을 문의해주세요.)"
        },
        {
            q: "어떤 파일 형식을 지원하나요?",
            answer: "PDF, HWP, PPTX, XLSX, DOCX, TXT 등 업무에 쓰이는 대부분의 문서를 지원합니다. 심지어 이미지 속 글자도 읽을 수 있습니다. (현재는 PDF 우선 지원, 순차 업데이트 중)"
        },
        {
            q: "정말 제 파일이 서버에 저장되지 않나요?",
            answer: "네, 절대 저장되지 않습니다. 로컬독스는 '하이브리드 보안' 기술을 사용하여, 문서 원본은 PC에 두고 질문에 필요한 텍스트 조각만 암호화하여 사용 후 즉시 폐기합니다."
        },
        {
            q: "표나 차트 같은 복잡한 데이터도 이해하나요?",
            answer: "네, 단순 텍스트뿐만 아니라 표의 수치와 차트의 맥락까지 정확하게 분석하여 답변에 반영합니다."
        },
        {
            q: "무료 버전도 쓸만한가요?",
            answer: "물론입니다. 타사 유료 서비스보다 압도적으로 많은 문서를 연결할 수 있으며, 최신 모델을 무료로 활용할 수 있습니다."
        },
        {
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
        }
    ];

    return (
        <section id="faq" className="bg-[#fafafa] py-24 md:py-32">
            <div className="max-w-3xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">FAQ</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111]">궁금한 점이 있으신가요?</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} id={faq.id} className="bg-white rounded-xl border border-gray-200 p-6 group hover:border-gray-300 transition-all">
                            <summary className="font-medium text-[#111] cursor-pointer list-none flex items-center justify-between">
                                {faq.q}
                                <ChevronDown className="w-5 h-5 text-[#9ca3af] group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-4 text-gray-600 leading-relaxed">
                                {faq.content || faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CTA Section
const CTANew = () => {
    return (
        <section id="cta" className="bg-white">
            <div className="max-w-7xl mx-auto border-x border-gray-800 py-20 md:py-32 bg-[#111]">
                <div className="px-8 max-w-xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">내 PC에 잠들어 있는 지식,<br />이제 깨울 시간입니다.</h2>
                    <p className="text-lg text-gray-400 mb-8">
                        보안은 완벽하게, 답변은 강력하게.<br />
                        지금 로컬독스를 경험하세요.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'cta_new')}>
                            <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                <AppleIcon className="w-5 h-5 mb-0.5" />
                                Mac용 다운로드
                            </button>
                        </a>
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'cta_new')}>
                            <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                <WindowsIcon className="w-4 h-4" />
                                Windows용 다운로드
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer 
const Footer = () => (
    <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16 border-x border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 items-start">
                <div className="col-span-2 md:col-span-1 flex flex-col items-start">
                    <div className="flex flex-col items-start gap-2 mb-3">
                        <img src={logo} alt="로컬독스" width={24} height={24} />
                        <h3 className="text-base font-semibold">로컬독스</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        업무용 문서 검색・요약 AI 어시스턴트
                    </p>
                    <p className="text-sm text-muted-foreground">
                        contact@peekaboolabs.ai
                    </p>
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
                        <Link to="/new/security-spec" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Security Spec
                        </Link>
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

            <div className="pt-8 border-t border-gray-200">
                <div className="text-left text-sm text-muted-foreground">
                    © 2026 PeekabooLabs. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
);

// Navigation (Nav)
const NavNew = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Smooth scroll function
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    const menuItems = [
        { name: "사용법", href: "how-it-works" },
        { name: "특장점", href: "comparison" },
        { name: "기능", href: "features" },
        { name: "보안", href: "security" },
        { name: "활용사례", href: "use-cases-tabs" },
        { name: "요금제", href: "pricing" },
    ];

    return (
        <>
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
                <div className="px-6 flex items-center justify-between h-16 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link to="/new" className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
                        <img src={logo} alt="로컬독스 로고" width={32} height={32} loading="eager" />
                        <span className="text-lg font-semibold text-[#111] tracking-[-0.02em]">로컬독스</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.href}`}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <DownloadDropdown lang="kr" place="navbar" className="hidden md:block" />
                        <button className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(true)}>
                            <Menu className="w-5 h-5 text-[#111]" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <nav className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl p-6">
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-50 rounded-lg">
                                <X className="w-5 h-5 text-[#111]" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={`#${item.href}`}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => {
                                setMobileMenuOpen(false);
                                analytics.trackButtonClick('download', 'navbar_mobile_new');
                            }} className="mt-4">
                                <button className="w-full px-5 py-3 bg-[#111] text-white text-base font-medium rounded-lg">
                                    다운로드
                                </button>
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};


const IndexNew = () => {
    usePageTracking();

    return (
        <div className="min-h-screen relative font-sans bg-white selection:bg-blue-100">
            <NavNew />
            <HeroNew />
            <HowItWorksNew />
            <ComparisonSection />
            <FeaturesNew />
            <SecurityHybrid />
            <UseCasesTabs />
            <PricingNew />
            <FAQNew />
            <CTANew />
            <Footer />
        </div>
    );
};

export default IndexNew;
