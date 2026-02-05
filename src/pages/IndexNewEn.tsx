import { usePageTracking } from "@/hooks/useAnalytics";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { Link } from "react-router-dom";
import { HeroNewEn } from "@/components/sections/HeroNewEn";
import { HowItWorksNewEn } from "@/components/sections/HowItWorksNewEn";
import { ComparisonSectionEn } from "@/components/sections/ComparisonSectionEn";
import { SecurityHybridEn } from "@/components/sections/SecurityHybridEn";
import { UseCasesTabsEn } from "@/components/sections/UseCasesTabsEn";
import { PricingNewEn } from "@/components/sections/PricingNewEn";
import { FeaturesNewEn } from "@/components/sections/FeaturesNewEn";
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
            q: "Is an internet connection required?",
            answer: "Yes. We use the latest cloud AI model (Gemini) to deliver smarter answers, so an internet connection is required. (If you need fully offline use, please contact us about the Enterprise plan.)"
        },
        {
            q: "Which file formats are supported?",
            answer: "We support most work documents, including PDF, HWP, PPTX, XLSX, DOCX, and TXT. We can even read text inside images. (PDF is prioritized for now, with ongoing updates.)"
        },
        {
            q: "Are my files really not stored on any server?",
            answer: "Yes, never. LocalDocs uses a hybrid security approach: originals stay on your PC, and only the minimum text snippets needed are encrypted and discarded immediately after use."
        },
        {
            q: "Does it understand complex data like tables or charts?",
            answer: "Yes. It analyzes not only plain text but also table values and chart context to reflect them in the answer."
        },
        {
            q: "Is the free version still useful?",
            answer: "Absolutely. You can connect far more documents than paid services and use the latest models for free."
        },
        {
            id: "faq-compatibility",
            q: "Can the app run on my computer?",
            answer: "Mac with Apple Silicon (M-series chips, 16GB RAM) is fully supported. Windows PC (Intel iGPU) support is coming soon.",
            content: <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm text-left text-gray-600 border-collapse">
                    <thead className="bg-gray-50 text-gray-700 font-medium">
                        <tr className="text-[11px] sm:text-sm">
                            <th className="px-2 sm:px-4 py-2 border border-gray-200">Device</th>
                            <th className="px-2 sm:px-4 py-2 border border-gray-200">GPU/Processor</th>
                            <th className="px-2 sm:px-4 py-2 border border-gray-200">Memory</th>
                            <th className="px-2 sm:px-4 py-2 border border-gray-200">Support</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-[11px] sm:text-sm">
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">Mac</td>
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">M-series chips</td>
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">16GB</td>
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">Supported</td>
                        </tr>
                        <tr className="text-[11px] sm:text-sm">
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">Windows</td>
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">Intel iGPU</td>
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">16GB</td>
                            <td className="px-2 sm:px-4 py-2 border border-gray-200">Supported</td>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111]">Have questions?</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">The knowledge on your PC,<br />it&apos;s time to wake it up.</h2>
                    <p className="text-lg text-gray-400 mb-8">
                        Security, perfected. Answers, powerful.<br />
                        Experience LocalDocs now.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'cta_new')} className="w-full sm:w-auto">
                                <button className="w-full sm:px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                    <AppleIcon className="w-5 h-5 mb-0.5" />
                                    Download for Mac
                                </button>
                            </a>
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'cta_new')} className="w-full sm:w-auto">
                                <button className="w-full sm:px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                    <WindowsIcon className="w-4 h-4" />
                                    Download for Windows
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
                        <img src={logo} alt="LocalDocs" width={24} height={24} />
                        <h3 className="text-base font-semibold">LocalDocs</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        AI assistant for document search and summaries
                    </p>
                    <p className="text-sm text-muted-foreground">
                        contact@peekaboolabs.ai
                    </p>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Legal</h3>
                    <div className="flex flex-col gap-3">
                        <a href="/en/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </a>
                        <a href="/en/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </a>
                        <Link to="/new/en/security-spec" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Security Spec
                        </Link>
                    </div>
                </div>

                {/* Language */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Language</h3>
                    <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground font-medium">
                            English
                        </span>
                        <a href="/new" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            한국어
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

            <div className="pt-8 border-t border-gray-200">
                <div className="text-left text-sm text-muted-foreground">
                    (c) 2026 PeekabooLabs. All rights reserved.
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
        { name: "How It Works", href: "how-it-works" },
        { name: "Comparison", href: "comparison" },
        { name: "Features", href: "features" },
        { name: "Security", href: "security" },
        { name: "Use Cases", href: "use-cases-tabs" },
        { name: "Pricing", href: "pricing" },
    ];

    return (
        <>
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
                <div className="px-6 flex items-center justify-between h-16 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link to="/new/en" className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
                        <img src={logo} alt="LocalDocs logo" width={32} height={32} loading="eager" />
                        <span className="text-lg font-semibold text-[#111] tracking-[-0.02em]">LocalDocs</span>
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
                        <DownloadDropdown lang="en" place="navbar" className="hidden md:block" />
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

                            <div className="mt-4 flex flex-col gap-2">
                                <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => {
                                    setMobileMenuOpen(false);
                                    analytics.trackButtonClick('download_mac', 'navbar_mobile_new');
                                }}>
                                    <button className="w-full px-5 py-3 bg-[#111] text-white text-base font-medium rounded-lg flex items-center justify-center gap-2">
                                        <AppleIcon className="w-5 h-5 mb-0.5" />
                                        Download for Mac
                                    </button>
                                </a>
                                <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => {
                                    setMobileMenuOpen(false);
                                    analytics.trackButtonClick('download_win', 'navbar_mobile_new');
                                }}>
                                    <button className="w-full px-5 py-3 bg-white border border-gray-200 text-[#111] text-base font-medium rounded-lg flex items-center justify-center gap-2">
                                        <WindowsIcon className="w-4 h-4" />
                                        Download for Windows
                                    </button>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};


const IndexNewEn = () => {
    usePageTracking();

    return (
        <div className="min-h-screen relative font-sans bg-white selection:bg-blue-100">
            <NavNew />
            <HeroNewEn />
            <HowItWorksNewEn />
            <ComparisonSectionEn />
            <FeaturesNewEn />
            <SecurityHybridEn />
            <UseCasesTabsEn />
            <PricingNewEn />
            <FAQNew />
            <CTANew />
            <Footer />
        </div>
    );
};

export default IndexNewEn;
