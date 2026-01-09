import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { Button } from "@/components/ui/button";
import { usePageTracking } from "@/hooks/useAnalytics";
import { analytics } from "@/lib/analytics";
import { WindowsIcon } from "@/components/icons/WindowsIcon";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { SparklesCore } from "@/components/ui/sparkles";

// Reuse Footer (English)
const Footer = () => (
    <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16 border-x border-gray-200">
            {/* Main Footer Content */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 items-start">
                {/* Company Info */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-start">
                    <div className="flex flex-col items-start gap-2 mb-3">
                        <img src={logo} alt="LocalDocs" width={24} height={24} />
                        <h3 className="text-base font-semibold">LocalDocs</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        On-device AI document search & summary solution
                    </p>
                    <p className="text-sm text-muted-foreground">
                        contact@peekaboolabs.ai
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Product</h3>
                    <div className="flex flex-col gap-3">
                        <Link to="/en" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => window.scrollTo(0, 0)}>
                            Personal
                        </Link>
                        <Link to="/en/enterprise" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => window.scrollTo(0, 0)}>
                            Enterprise
                        </Link>
                    </div>
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
                        <Link
                            to="/en/security-spec"
                            state={{ from: "footer" }}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Security Spec
                        </Link>
                    </div>
                </div>

                {/* Language */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Language</h3>
                    <div className="flex flex-col gap-3">
                        <a href="/enterprise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            한국어
                        </a>
                        <span className="text-sm text-foreground font-medium">
                            English
                        </span>
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
    </footer>
);

export default function EnterpriseEn() {
    usePageTracking();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-sans text-[#111]">
            {/* Nav */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
                <div className="px-6 flex items-center justify-between h-16 max-w-7xl mx-auto">
                    <Link to="/en" className="flex items-center gap-3 cursor-pointer">
                        <img src={logo} alt="Localdocs logo" width={32} height={32} />
                        <span className="text-lg font-semibold text-[#111] tracking-[-0.02em]">LocalDocs</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">Enterprise</span>
                    </Link>

                    {/* Desktop Nav - Empty */}
                    <nav className="hidden md:flex items-center gap-6">
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="https://calendar.app.google/LD81XjYtbptocMKw8" target="_blank" rel="noopener noreferrer" className="hidden md:block" onClick={() => analytics.trackButtonClick('contact', 'enterprise_nav_en')}>
                            <Button variant="outline" className="h-9">Contact Sales</Button>
                        </a>
                        <button
                            className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                        >
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
                        <div className="flex flex-col gap-4">
                            <a href="https://calendar.app.google/LD81XjYtbptocMKw8" target="_blank" rel="noopener noreferrer">
                                <Button className="w-full">Contact Sales</Button>
                            </a>
                        </div>
                    </nav>
                </div>
            )}

            {/* Hero */}
            <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden">
                {/* Sparkles Background */}
                <SparklesCore
                    id="enterprise-sparkles-en"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="absolute inset-0 w-full h-full"
                    particleColor="#60A5FA"
                    speed={0.5}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-10 pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
                <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full mb-8 border border-blue-500/20">
                        For Enterprise
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Local NotebookLM <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            for Enterprise
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                        Experience the powerful LocalDocs directly in your enterprise environment.
                        <br className="hidden md:block" />
                        Search and summarize internal data securely without internet connection.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Download Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/enterprise/offline/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'enterprise_hero_en')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] text-base font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                    <AppleIcon className="w-5 h-5 mb-0.5" />
                                    Download for Mac
                                </button>
                            </a>
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/enterprise/offline/win/latest/LocalDocs-Setup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'enterprise_hero_en')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] text-base font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                    <WindowsIcon className="w-4 h-4" />
                                    Download for Windows
                                </button>
                            </a>
                        </div>

                        <p className="text-xs text-gray-500">
                            * Enterprise License Key required.
                        </p>

                        <div className="mt-4">
                            {/* Email added to footer left side as requested */}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
