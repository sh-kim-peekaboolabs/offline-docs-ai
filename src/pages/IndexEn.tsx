import { lazy, Suspense, memo, useEffect, useState } from "react";
import { HighlightText } from "@/components/ui/highlight-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  FileText,
  Lock,
  CheckCircle,
  Zap,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Search,
  Shield,
  Layers,
} from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { Link } from "react-router-dom";
import { usePageTracking } from "@/hooks/useAnalytics";
import { trackLead } from "@/lib/facebook-pixel";
import { motion } from "framer-motion";

// Lazy load heavy demo components
const SearchInput = lazy(() => import("@/components/ui/search-input").then((m) => ({ default: m.SearchInput })));
const CitationDemo = lazy(() => import("@/components/demo/citation-demo").then((m) => ({ default: m.CitationDemo })));
const PDFViewer = lazy(() => import("@/components/demo/pdf-viewer").then((m) => ({ default: m.PDFViewer })));
const AutoCycleFiles = lazy(() =>
  import("@/components/demo/auto-cycle-files").then((m) => ({ default: m.AutoCycleFiles })),
);
const DifferentiationSection = lazy(() =>
  import("@/components/sections/differentiation-section").then((m) => ({ default: m.DifferentiationSection })),
);

// Simple loading placeholder
const DemoLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
  </div>
);

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address.").max(255, "Email must be less than 255 characters."),

  honeypot: z.string().max(0).optional(),
  page_source: z.string().optional(),
  utm_source: z.string().max(100).optional(),
  utm_campaign_id: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign_name: z.string().max(200).optional(),
  utm_adset_id: z.string().max(100).optional(),
  utm_adset_name: z.string().max(200).optional(),
  utm_ad_id: z.string().max(100).optional(),
  utm_ad_name: z.string().max(200).optional(),
  linkedin_campaign_name: z.string().max(200).optional(),
  linkedin_ad_id: z.string().max(100).optional(),
  linkedin_campaign_group_id: z.string().max(100).optional(),
  linkedin_campaign_group_name: z.string().max(200).optional(),
  linkedin_campaign_id: z.string().max(100).optional(),
  linkedin_ad_name: z.string().max(200).optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Linear-style Nav
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-6 flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="Localdocs logo" width={32} height={32} loading="eager" />
            <span className="text-lg font-semibold text-[#111] tracking-[-0.02em]">LocalDocs</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["How It Works", "Features", "Security", "Pricing"].map((item) =>
              item === "Security" ? (
                <Link
                  key={item}
                  to="/en/security-spec"
                  state={{ from: "nav" }}
                  className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://cal.com/localdocs/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <button className="px-4 py-2 text-sm font-medium text-[#666] hover:text-[#111] transition-colors">
                Contact
              </button>
            </a>
            <a href="#cta" className="hidden md:block">
              <button className="px-5 py-2 bg-[#111] text-white text-sm font-medium rounded-lg hover:bg-[#333] transition-colors">
                Download
              </button>
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
            <div className="flex flex-col gap-1">
              {["How It Works", "Features", "Security", "Pricing"].map((item) =>
                item === "Security" ? (
                  <Link
                    key={item}
                    to="/en/security-spec"
                    state={{ from: "nav" }}
                    className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
              <a
                href="https://cal.com/localdocs/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="mt-4">
                <button className="w-full px-5 py-3 bg-[#111] text-white text-base font-medium rounded-lg">
                  Download
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

// Linear-style Hero (Glow Removed)
const Hero = () => {
  return (
    <section className="relative bg-transparent pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#cta">
            <button className="px-8 py-3.5 bg-[#111] text-white text-base font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center gap-2 shadow-lg shadow-black/10">
              Download for Mac
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>

        {/* App Screenshot Placeholder
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl border border-gray-200 shadow-2xl overflow-hidden bg-white aspect-[16/10]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileSearch className="w-8 h-8 text-gray-300" />
                </div>
                <p className="text-gray-400 font-medium">Product Demo Coming Soon</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Set a source",
      description: (
        <>
          Drag and drop PDF files or select them from your PC.
          <br />
          All embedding and vectorization happen locally.
        </>
      ),
    },
    {
      number: "02",
      title: "Ask anything",
      description: (
        <>
          Type your question in natural language.
          <br />
          No need to remember exact keywords or page numbers.
        </>
      ),
      component: (
        <div className="w-full h-full flex items-center justify-center p-8">
          <Suspense fallback={<DemoLoader />}>
            <SearchInput />
          </Suspense>
        </div>
      ),
    },
    {
      number: "03",
      title: "Get answers with citation",
      description: (
        <>
          Get answers with sentence-level citations.
          <br />
          Every claim is backed by the exact source.
        </>
      ),
      component: (
        <div className="w-full h-full flex items-center justify-center p-8">
          <Suspense fallback={<DemoLoader />}>
            <CitationDemo />
          </Suspense>
        </div>
      ),
    },
    {
      number: "04",
      title: "Verify it from original content",
      description: (
        <>
          Click any citation to jump directly to the original page.
          <br />
          Verify and explore the full context instantly.
        </>
      ),
      component: (
        <div className="w-full h-full flex items-center justify-center p-8">
          <Suspense fallback={<DemoLoader />}>
            <PDFViewer />
          </Suspense>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="border-b border-gray-200">
            {/* Header Row - Only for first step */}
            {index === 0 && (
              <div className="px-8 py-4 border-b border-gray-200 border-t border-gray-200 text-center">
                <span className="text-sm font-semibold text-gray-600 tracking-widest uppercase">HOW IT WORKS</span>
              </div>
            )}

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
                {index === 0 ? (
                  <Suspense fallback={<DemoLoader />}>
                    <AutoCycleFiles />
                  </Suspense>
                ) : step.component ? (
                  step.component
                ) : (
                  <div className="text-gray-300 text-8xl font-thin">{step.number}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Bento Grid Features
const Features = () => {
  const features = [
    {
      Icon: Zap,
      name: "Instant Search",
      description: "Search 1000+ pages within seconds. No more Ctrl+F through dozens of PDFs.",
      className: "col-span-3 lg:col-span-2",
      background: (
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
        </motion.div>
      ),
    },
    {
      Icon: Lock,
      name: "100% Offline",
      description: "Runs entirely on your computer. No internet required.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50" />,
    },
    {
      Icon: Shield,
      name: "Zero Data Leaks",
      description: "Your documents never leave your device. Complete privacy.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />,
    },
    {
      Icon: FileText,
      name: "Source Citations",
      description:
        "Every answer includes exact page numbers and sentence-level citations. Verify information instantly.",
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />,
    },
    {
      Icon: Search,
      name: "Reads Tables & Formulas",
      description: "Reads tables, formulas, and financial statements perfectly. No more manual data extraction.",
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-50" />,
    },
    {
      Icon: Layers,
      name: "Handle 1000+ Pages",
      description: "Process massive documents instantly. No file size limits or cloud upload wait times.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-50 opacity-50" />,
    },
  ];

  return (
    <section id="features" className="bg-white py-20 md:py-32">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Built for privacy-first teams
          </h2>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCases = () => {
  const cases = [
    {
      title: "Legal Teams",
      description: "Search through contracts and legal documents instantly. Find specific clauses and references.",
    },
    {
      title: "Financial Analysts",
      description: "Extract data from annual reports and financial statements. Analyze tables with precision.",
    },
    {
      title: "Research Teams",
      description: "Cross-reference multiple papers and documents. Find citations and sources quickly.",
    },
    {
      title: "Engineering",
      description: "Search technical specifications and manuals. Find exact parameters in seconds.",
    },
  ];

  return (
    <section id="use-cases" className="bg-[#fafafa] py-20 md:py-32">
      <div className="px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Use Cases</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Built for sensitive documents
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all"
            >
              <h3 className="text-lg font-semibold text-[#111] tracking-tight mb-2">{item.title}</h3>
              <p className="text-[#666] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Security Section
const Security = () => {
  const points = [
    { title: "Local Processing", description: "All AI processing happens on your PC. Nothing transmitted externally." },
    { title: "Air-Gapped Ready", description: "Works in secure environments with no internet connection." },
    { title: "No Cloud Storage", description: "Documents are never uploaded to any server." },
    { title: "Enterprise Ready", description: "Designed for compliance-heavy industries." },
  ];

  return (
    <section id="security" className="bg-white py-20 md:py-32">
      <div className="px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Security</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em] mb-4">
            Your data never leaves your computer
          </h2>
          <Link
            to="/en/security-spec"
            state={{ from: "security" }}
            className="inline-block text-sm font-medium text-[#666] hover:text-[#111] transition-colors border-b border-[#666] hover:border-[#111]"
          >
            Security Spec
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:bg-white/80 transition-all"
            >
              <div className="w-10 h-10 bg-green-50/80 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-base font-semibold text-[#111] tracking-tight mb-1">{point.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="section" aria-labelledby="pricing-heading">
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
            <a href="#cta" className="w-full">
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
            <a href="#cta" className="w-full">
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
            <a href="https://cal.com/localdocs/15min" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQ = () => {
  const faqs = [
    { q: "Can I use it without internet?", a: "Yes, all features work completely offline after installation." },
    { q: "What file formats are supported?", a: "Currently PDF. HWP, PPTX, and XLSX coming soon." },
    { q: "Can it read tables and charts?", a: "Yes, it accurately analyzes tables and financial data." },
    { q: "Are sources provided?", a: "Yes, every answer includes document name and page number." },
    {
      q: "Is it secure for sensitive documents?",
      a: "Yes, 100% local processing means no data ever leaves your device.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section id="faq" className="bg-white py-20 md:py-32">
      <div className="px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">Any questions?</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-6 group hover:border-gray-300 hover:bg-white/80 transition-all"
            >
              <summary className="font-medium text-[#111] cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-[#9ca3af] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-[#666] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_source: urlParams.get("utm_source"),
      utm_campaign_id: urlParams.get("utm_campaign_id") || urlParams.get("campaignid") || urlParams.get("utm_content"),
      utm_medium: urlParams.get("utm_medium"),
      utm_campaign_name: urlParams.get("utm_campaign_name") || urlParams.get("utm_campaign"),
      utm_adset_id: urlParams.get("utm_adset_id") || urlParams.get("adsetid"),
      utm_adset_name: urlParams.get("utm_adset_name") || urlParams.get("adsetname"),
      utm_ad_id: urlParams.get("utm_ad_id") || urlParams.get("adid"),
      utm_ad_name: urlParams.get("utm_ad_name") || urlParams.get("adname"),
      linkedin_campaign_group_id: urlParams.get("campaign_group_id"),
      linkedin_campaign_group_name: urlParams.get("campaign_group_name"),
      linkedin_campaign_id: urlParams.get("campaign_id"),
      linkedin_ad_name: urlParams.get("creative_name"),
    };
    Object.entries(params).forEach(([key, value]) => {
      if (value) setValue(key as keyof FormValues, value);
    });
  }, [setValue]);

  const onSubmit = async (values: FormValues) => {
    try {
      if (values.honeypot) {
        toast.error("Invalid request.");
        return;
      }
      const { error } = await supabase.from("email_signups").insert([
        {
          email: values.email,
          consent: true,

          page_source: "/en",
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
          linkedin_ad_name: values.linkedin_ad_name || null,
        },
      ]);
      if (error) throw error;
      trackLead(values.email);
      toast.success("Successfully joined Early Access!");
      reset();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section id="cta" className="bg-[#111] py-20 md:py-32">
      <div className="px-8 max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">Try it now!</h2>
        <p className="text-lg text-gray-400 mb-8">
          It’s currently in closed beta.
          <br></br>Enter your email to get a 1-month free Pro plan.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full h-12 px-4 bg-white rounded-lg text-[#111] placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            {errors.email && <p className="text-sm text-red-400 mt-2 text-left">{errors.email.message}</p>}
          </div>

          <input
            type="text"
            {...register("honeypot")}
            className="absolute -left-[9999px] w-px h-px"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-white text-[#111] font-medium rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Joining..." : "Download for Mac"}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t bg-white">
    <div className="max-w-7xl mx-auto px-8 py-16 border-x border-gray-200">
      {/* Main Footer Content */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Company Info */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col items-start gap-2 mb-3">
            <img src={logo} alt="LocalDocs" width={24} height={24} />
            <h3 className="text-base font-semibold">LocalDocs</h3>
          </div>
          <p className="text-sm text-muted-foreground">Private AI document search</p>
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
            <a
              href="https://www.linkedin.com/company/peekaboolabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/PeekabooLabsInc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
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
  </footer>
);

// Section Divider with Plus Icons
const SectionDivider = () => (
  <div className="relative w-full border-b border-white/10">
    {/* Left Plus Icon */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 flex items-center justify-center">
      <span className="text-gray-200 text-lg font-light">+</span>
    </div>
    {/* Right Plus Icon */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 flex items-center justify-center">
      <span className="text-gray-200 text-lg font-light">+</span>
    </div>
  </div>
);

// Technical Grid Background (Solid Border)
const TechnicalGridBackground = ({ children }: { children: React.ReactNode }) => (
  <div
    className="min-h-screen relative"
    style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#ffffff",
    }}
  >
    {/* High-Density Dot Pattern */}
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.15) 1px, transparent 1px)`,
        backgroundSize: "14px 14px",
        maskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)",
      }}
    />

    {/* Main Content Container */}
    {/* [수정] border-dashed 삭제 -> 실선(기본값) 적용 / 색상은 gray-200 유지 */}
    <div className="relative max-w-6xl mx-auto bg-transparent min-h-screen border-x border-gray-200">{children}</div>
  </div>
);

// Main Page Component
const IndexEn = () => {
  usePageTracking();

  return (
    <TechnicalGridBackground>
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
    </TechnicalGridBackground>
  );
};

export default IndexEn;
