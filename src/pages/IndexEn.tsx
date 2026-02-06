import { lazy, Suspense, memo, useEffect, useState } from "react";
import { HighlightText } from "@/components/ui/highlight-text";
import { Button } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { FileText, Lock, CheckCircle, Zap, ChevronDown, Menu, X, ArrowRight, Search, Shield, Layers, Apple } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { Link } from "react-router-dom";
import { usePageTracking } from "@/hooks/useAnalytics";
import { analytics } from "@/lib/analytics";
import { DownloadDropdown } from "@/components/ui/download-dropdown";
import { WindowsIcon } from "@/components/icons/WindowsIcon";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { motion } from "framer-motion";

// Lazy load heavy demo components
const SearchInput = lazy(() => import("@/components/ui/search-input").then(m => ({
  default: m.SearchInput
})));
const CitationDemo = lazy(() => import("@/components/demo/citation-demo").then(m => ({
  default: m.CitationDemo
})));
const PDFViewer = lazy(() => import("@/components/demo/pdf-viewer").then(m => ({
  default: m.PDFViewer
})));
const AutoCycleFiles = lazy(() => import("@/components/demo/auto-cycle-files").then(m => ({
  default: m.AutoCycleFiles
})));
const DifferentiationSection = lazy(() => import("@/components/sections/differentiation-section").then(m => ({
  default: m.DifferentiationSection
})));

// Simple loading placeholder
const DemoLoader = () => <div className="w-full h-full flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
  </div>;

// Linear-style Nav
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setMobileMenuOpen(false);
  };
  return <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-6 flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="Localdocs logo" width={32} height={32} loading="eager" />
            <span className="text-lg font-semibold text-[#111] tracking-[-0.02em]">LocalDocs</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["How It Works", "Features", "Security", "Pricing", "Enterprise"].map(item => item === "Security" || item === "Enterprise" ? <Link key={item} to={item === "Security" ? "/en/security-spec" : "/en/enterprise"} state={{
            from: "nav"
          }} className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors">
                  {item}
                </Link> : <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors">
                  {item}
                </a>)}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="https://cal.com/localdocs/15min" target="_blank" rel="noopener noreferrer" className="hidden md:block" onClick={() => analytics.trackButtonClick('contact', 'navbar_en')}>
              <button className="px-4 py-2 text-sm font-medium text-[#666] hover:text-[#111] transition-colors">
                Contact
              </button>
            </a>
            <DownloadDropdown lang="en" place="navbar" className="hidden md:block" />

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
              {["How It Works", "Features", "Security", "Pricing", "Enterprise"].map(item => item === "Security" || item === "Enterprise" ? <Link key={item} to={item === "Security" ? "/en/security-spec" : "/en/enterprise"} state={{
            from: "nav"
          }} className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {item}
                  </Link> : <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {item}
                  </a>)}
              <a href="https://cal.com/localdocs/15min" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => {
            setMobileMenuOpen(false);
            analytics.trackButtonClick('contact', 'navbar_mobile_en');
          }}>
                Contact
              </a>
              <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => {
            setMobileMenuOpen(false);
            analytics.trackButtonClick('download', 'navbar_mobile_en');
          }} className="mt-4">
                <button className="w-full px-5 py-3 bg-[#111] text-white text-base font-medium rounded-lg">
                  Download
                </button>
              </a>
            </div>
          </nav>
        </div>}
    </>;
};

// Linear-style Hero (Glow Removed)
const Hero = () => {
  return <section className="relative bg-transparent pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Ambient Glow 제거됨 (깨끗한 흰색 배경) */}

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-[#666] text-sm font-medium rounded-full mb-8 border border-gray-100">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Try it now!
        </div>

        {/* Massive H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-[#111] tracking-tighter leading-[1.2] mb-7">
          Search confidential PDFs with AI.
          <span className="block mt-3 sm:mt-2">
            <HighlightText className="text-[#111]" color="#fef08a">
              No uploads. No cloud.
            </HighlightText>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-[#666] leading-relaxed max-w-4xl mx-auto mb-10">
          Localdocs is an AI PDF search tool that runs entirely on your computer.
          <br />
          Get instant answers from your documents with source citations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'hero_en')}>
              <button className="w-64 sm:w-auto px-8 py-3.5 bg-[#111] text-white text-base font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 whitespace-nowrap">
                <AppleIcon className="w-5 h-5 mb-0.5" />
                Download for Mac
              </button>
            </a>
            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'hero_en')}>
              <button className="w-64 sm:w-auto px-8 py-3.5 bg-[#111] text-white text-base font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 whitespace-nowrap">
                <WindowsIcon className="w-4 h-4" />
                Download for Windows
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
            Device Compatibility
          </a>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <div className="relative rounded-xl border border-gray-200 shadow-2xl overflow-hidden bg-white aspect-[16/10]">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline controls poster="/videos/demo-poster.png">
              <source src="/videos/localdocs-demo-en.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>;
};
const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "Set a source",
    description: <>
          Drag and drop PDF files or select them from your PC.
          <br />
          All embedding and vectorization happen locally.
        </>
  }, {
    number: "02",
    title: "Ask anything",
    description: <>
          Type your question in natural language.
          <br />
          No need to remember exact keywords or page numbers.
        </>,
    component: <div className="w-full h-full flex items-center justify-center p-8">
          <Suspense fallback={<DemoLoader />}>
            <SearchInput />
          </Suspense>
        </div>
  }, {
    number: "03",
    title: "Get answers with citation",
    description: <>
          Get answers with sentence-level citations.
          <br />
          Every claim is backed by the exact source.
        </>,
    component: <div className="w-full h-full flex items-center justify-center p-8">
          <Suspense fallback={<DemoLoader />}>
            <CitationDemo />
          </Suspense>
        </div>
  }, {
    number: "04",
    title: "Verify it from original content",
    description: <>
          Click any citation to jump directly to the original page.
          <br />
          Verify and explore the full context instantly.
        </>,
    component: <div className="w-full h-full flex items-center justify-center p-8">
          <Suspense fallback={<DemoLoader />}>
            <PDFViewer />
          </Suspense>
        </div>
  }];
  return <section id="how-it-works" className="w-full bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {steps.map((step, index) => <div key={index} className="border-b border-gray-200">
            {/* Header Row - Only for first step */}
            {index === 0 && <div className="px-8 py-4 border-b border-gray-200 border-t border-gray-200 text-center">
                <span className="text-sm font-semibold text-gray-600 tracking-widest uppercase">HOW IT WORKS</span>
              </div>}

            {/* Content Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] md:h-[550px]">
              {/* Left Column - Text */}
              <div className="px-8 md:px-10 py-12 md:py-16 border-r border-gray-200 flex flex-col justify-center h-full">
                <div className="space-y-4">
                  <div className="text-sm font-mono text-gray-400">{step.number}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed tracking-tight">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Right Column - Graphic */}
              <div className="bg-gray-50 px-8 md:px-12 py-12 md:py-16 flex items-center justify-center h-full overflow-hidden">
                {index === 0 ? <Suspense fallback={<DemoLoader />}>
                    <AutoCycleFiles />
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
    name: "Instant Search",
    description: "Search 1000+ pages within seconds. No more Ctrl+F through dozens of PDFs.",
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
    name: "100% Offline",
    description: "Runs entirely on your computer. No internet required.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50" />
  }, {
    Icon: Shield,
    name: "Zero Data Leaks",
    description: "Your documents never leave your device. Complete privacy.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />
  }, {
    Icon: FileText,
    name: "Source Citations",
    description: "Every answer includes exact page numbers and sentence-level citations. Verify information instantly.",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />
  }, {
    Icon: Search,
    name: "Reads Tables & Formulas",
    description: "Reads tables, formulas, and financial statements perfectly. No more manual data extraction.",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-50" />
  }, {
    Icon: Layers,
    name: "Handle 1000+ Pages",
    description: "Process massive documents instantly. No file size limits or cloud upload wait times.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-50 opacity-50" />
  }];
  return <section id="features" className="bg-white py-20 md:py-32">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Built for privacy-first teams
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
    title: "Legal Teams",
    description: "Search through contracts and legal documents instantly. Find specific clauses and references."
  }, {
    title: "Financial Analysts",
    description: "Extract data from annual reports and financial statements. Analyze tables with precision."
  }, {
    title: "Research Teams",
    description: "Cross-reference multiple papers and documents. Find citations and sources quickly."
  }, {
    title: "Engineering",
    description: "Search technical specifications and manuals. Find exact parameters in seconds."
  }];
  return <section id="use-cases" className="bg-[#fafafa] py-20 md:py-32">
      <div className="px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Use Cases</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Built for sensitive documents
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((item, index) => <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all">
              <h3 className="text-lg font-semibold text-[#111] tracking-tight mb-2">{item.title}</h3>
              <p className="text-[#666] leading-relaxed">{item.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};

// Security Section
const Security = () => {
  const points = [{
    title: "Local Processing",
    description: "All AI processing happens on your PC. Nothing transmitted externally."
  }, {
    title: "Air-Gapped Ready",
    description: "Works in secure environments with no internet connection."
  }, {
    title: "No Cloud Storage",
    description: "Documents are never uploaded to any server."
  }, {
    title: "Enterprise Ready",
    description: "Designed for compliance-heavy industries."
  }];
  return <section id="security" className="bg-white py-20 md:py-32">
      <div className="px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Security</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em] mb-4">
            Your data never leaves your computer
          </h2>
          <Link to="/en/security-spec" state={{
          from: "security"
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
const Pricing = () => <section id="pricing" className="section" aria-labelledby="pricing-heading">
    <div className="container">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Choose the plan that works for you
      </h2>
      <div className="grid md:grid-cols-3 gap-6 pt-8">
        {/* Free Plan */}
        <div className="pricing-card h-full flex flex-col border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <div className="text-3xl font-bold mb-2">Free</div>
            <div className="text-sm text-muted-foreground h-5"></div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Upload PDF & Chat</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Create 1 Folder</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Up to 3 PDFs per folder</span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Full support for tables & formulas</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Email Support</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" className="w-full" onClick={() => analytics.trackButtonClick('download', 'pricing_free_en')}>
              <Button variant="outline" className="w-full">
                Download for Mac
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
                Recommended
              </span>
            </h3>
            <div className="text-3xl font-bold mb-2">
              $29<span className="text-lg font-normal">/mo</span>
            </div>
            <div className="text-sm text-primary font-semibold">
              1 Month Free Trial of Pro Plan during closed beta period
            </div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Everything in Free</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Unlimited Folders</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Up to 50 PDFs per folder</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>HWPX·PPTX·XLSX (Coming Soon)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Export Results (Coming Soon)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Priority Email Support</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" className="w-full" onClick={() => analytics.trackButtonClick('download', 'pricing_pro_en')}>
              <Button variant="hero" className="w-full">
                Download for Mac
              </Button>
            </a>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card h-full flex flex-col border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">Contact Us</div>
            <div className="text-sm text-muted-foreground h-5"></div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Internal System Integration</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Folder Sharing</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Custom AI trained on company data</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Admin Dashboard (License Management)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Enhanced Security (SSO, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Enterprise RAG Package Support</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Dedicated Support & Onboarding</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="https://cal.com/localdocs/15min" target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => analytics.trackButtonClick('contact', 'pricing_enterprise_en')}>
              <Button variant="outline" className="w-full">
                Contact Us
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
    q: "Can I use it without internet?",
    answer: "Yes, all features work completely offline after installation."
  }, {
    q: "What file formats are supported?",
    answer: "Currently PDF. HWP, PPTX, and XLSX coming soon."
  }, {
    q: "Can it read tables and charts?",
    answer: "Yes, it accurately analyzes tables and financial data."
  }, {
    q: "Are sources provided?",
    answer: "Yes, every answer includes document name and page number."
  }, {
    q: "Is it secure for sensitive documents?",
    answer: "Yes, 100% local processing means no data ever leaves your device."
  }, {
    id: "faq-compatibility",
    q: "Can my device run LocalDocs?",
    answer: "Mac with Apple Silicon (M-series chips, 16GB RAM) is fully supported. Windows PC (Intel iGPU) support is coming soon.",
    content: <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left text-gray-600 border-collapse">
            <thead className="bg-gray-50 text-gray-700 font-medium">
              <tr>
                <th className="px-4 py-2 border border-gray-200">Device Type</th>
                <th className="px-4 py-2 border border-gray-200">GPU/Processor</th>
                <th className="px-4 py-2 border border-gray-200">System RAM</th>
                <th className="px-4 py-2 border border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Mac</td>
                <td className="px-4 py-2 border border-gray-200">M-series chips</td>
                <td className="px-4 py-2 border border-gray-200">16GB</td>
                <td className="px-4 py-2 border border-gray-200">✅ Full support</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Windows PC <br></br>(Intel iGPU)</td>
                <td className="px-4 py-2 border border-gray-200">Intel integrated graphics</td>
                <td className="px-4 py-2 border border-gray-200">16GB</td>
                <td className="px-4 py-2 border border-gray-200">✅ Full support</td>
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
  return <section id="faq" className="bg-white py-20 md:py-32">
      <div className="px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">Any questions?</h2>
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
    </section>;
};

// CTA Section
const CTA = () => {
  return <section id="cta" className="bg-[#111] py-20 md:py-32">
      <div className="px-8 max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">Try it now!</h2>
        <p className="text-lg text-gray-400 mb-8">
          It’s currently in closed beta.
          <br></br>Get 1 month of Pro plan for free when you login to the app.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'cta_en')}>
            <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              <AppleIcon className="w-5 h-5 mb-0.5" />
              Download for Mac
            </button>
          </a>
          <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'cta_en')}>
            <button className="w-64 sm:w-auto px-8 py-3.5 bg-white text-[#111] font-semibold rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              <WindowsIcon className="w-4 h-4" />
              Download for Windows
            </button>
          </a>
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
            <Link to="/en/security-spec" state={{
            from: "footer"
          }} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security Spec
            </Link>
          </div>
        </div>

        {/* Language */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Language</h3>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-foreground font-medium">English</span>
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-200">
        <div className="text-left text-sm text-muted-foreground">© 2025 PeekabooLabs. All rights reserved.</div>
      </div>
    </div>
  </footer>;

// Section Divider with Plus Icons
const SectionDivider = () => <div className="relative w-full border-b border-white/10">
    {/* Left Plus Icon */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 flex items-center justify-center">
      <span className="text-gray-200 text-lg font-light">+</span>
    </div>
    {/* Right Plus Icon */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 flex items-center justify-center">
      <span className="text-gray-200 text-lg font-light">+</span>
    </div>
  </div>;

// Technical Grid Background (Solid Border)
const TechnicalGridBackground = ({
  children
}: {
  children: React.ReactNode;
}) => <div className="min-h-screen relative" style={{
  fontFamily: "'Inter', sans-serif",
  backgroundColor: "#ffffff"
}}>
    {/* High-Density Dot Pattern */}
    <div className="fixed inset-0 pointer-events-none" style={{
    backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.15) 1px, transparent 1px)`,
    backgroundSize: "14px 14px",
    maskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)",
    WebkitMaskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)"
  }} />

    {/* Main Content Container */}
    {/* [수정] border-dashed 삭제 -> 실선(기본값) 적용 / 색상은 gray-200 유지 */}
    <div className="relative max-w-6xl mx-auto bg-transparent min-h-screen border-x border-gray-200">{children}</div>
  </div>;

// Main Page Component
const IndexEn = () => {
  usePageTracking();
  return <TechnicalGridBackground>
      <Nav />
      <Hero />
      <SectionDivider />
      <HowItWorksSection />

      <Suspense fallback={<DemoLoader />}>
        <DifferentiationSection />
      </Suspense>
      <SectionDivider />
      <Features />
      <SectionDivider />
      <UseCases />
      <SectionDivider />
      <Security />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTA />
      <SectionDivider />
      <Footer />
      {/* Bottom Corner Dots */}
      <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full" />
      <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full" />
    </TechnicalGridBackground>;
};
export default IndexEn;
