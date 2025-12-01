import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  ShieldCheck,
  WifiOff,
  FileText,
  Link as LinkIcon,
  Quote,
  Search,
  Lock,
  CheckCircle,
  Zap,
  Shield,
  Star,
  ChevronDown,
  Settings,
  Scale,
  TrendingUp,
  BarChart3,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { useEffect, useState } from "react";
import { usePageTracking, useSectionTracking } from "@/hooks/useAnalytics";
import { trackLead } from "@/lib/facebook-pixel";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address.").max(255, "Email must be less than 255 characters."),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required.",
  }),
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

// Premium Nav Component
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="Localdocs logo" width={36} height={36} loading="eager" />
            <span className="text-lg font-semibold text-[#111827] tracking-[-0.02em]">Localdocs</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Use Cases", "Security", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#4B5563] hover:bg-[#F9FAFB] transition-colors">
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-[#E5E7EB] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/" className="block px-4 py-2.5 text-sm text-[#4B5563] hover:bg-[#F9FAFB] rounded-t-lg">한국어 (KR)</a>
                <span className="block px-4 py-2.5 text-sm text-[#111827] bg-[#F9FAFB] rounded-b-lg font-medium">English (EN)</span>
              </div>
            </div>

            <a href="#cta" className="hidden md:block">
              <button className="px-6 py-2.5 bg-[#111827] text-white text-sm font-semibold rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#1F2937] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                Join Early Access
              </button>
            </a>

            <button
              className="md:hidden p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-[#111827]" />
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
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-[#F9FAFB] rounded-lg">
                <X className="w-6 h-6 text-[#111827]" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {["Features", "Use Cases", "Security", "Pricing", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-3 text-base font-medium text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB] rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="mt-4">
                <button className="w-full px-6 py-3 bg-[#111827] text-white text-base font-semibold rounded-lg">
                  Join Early Access
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

// Hero Section - Problem → Solution
const Hero = () => {
  const features = [
    "100% offline (no internet needed)",
    "Zero data ever leaves your computer",
    "Reads tables from financial documents",
    "Shows exact sources for every answer",
  ];

  return (
    <section className="bg-gradient-to-b from-[#FEF2F2] to-white">
      {/* Problem Statement */}
      <div className="pt-20 pb-[60px] px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Warning Question */}
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#991B1B] tracking-[-0.02em] leading-[1.2] mb-6 max-w-[900px] mx-auto">
            🚨 Are Your Employees Uploading Confidential Documents to ChatGPT Right Now?
          </h1>

          {/* Warning Subtext */}
          <div className="space-y-2 mb-10">
            <p className="text-lg md:text-xl font-semibold text-[#DC2626] leading-[1.5]">
              Every upload = Compliance violation
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#DC2626] leading-[1.5]">
              Every ChatGPT conversation = Data leak risk
            </p>
          </div>

          {/* Divider */}
          <div className="w-[200px] h-[2px] bg-[#E5E7EB] mx-auto" />
        </div>
      </div>

      {/* Solution Statement */}
      <div className="pb-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Safe Alternative Badge */}
          <div className="inline-block bg-[#D1FAE5] text-[#065F46] text-sm font-semibold px-4 py-2 rounded-[20px] mb-6 mt-10">
            ✅ The Safe Alternative
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-[#111827] tracking-[-0.02em] leading-[1.2] mb-6 max-w-[900px] mx-auto">
            LocalDocs: AI Document Search That Never Leaves Your Computer
          </h2>

          {/* Subheadline */}
          <div className="max-w-[700px] mx-auto mb-12">
            <p className="text-lg md:text-xl text-[#4B5563] leading-[1.6]">
              No uploads. No cloud. No compliance risk.
            </p>
            <p className="text-lg md:text-xl text-[#4B5563] leading-[1.6]">
              Just instant answers from your PDFs, completely offline.
            </p>
          </div>

          {/* Features Grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border-2 border-[#10B981] shadow-[0_2px_4px_rgba(0,0,0,0.05)] text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#10B981] text-lg font-bold">✓</span>
                  <span className="text-base font-semibold text-[#111827]">{feature}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href="#cta">
              <button className="px-9 py-[18px] bg-[#111827] text-white text-base font-semibold rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#1F2937] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                Get Early Access Now
              </button>
            </a>
            <a href="#demo">
              <button className="px-9 py-[18px] bg-transparent text-[#111827] text-base font-semibold rounded-lg border-2 border-[#D1D5DB] hover:bg-[#F9FAFB] hover:-translate-y-0.5 transition-all duration-200">
                See How It Works
              </button>
            </a>
          </div>

          {/* Urgency Text */}
          <p className="text-sm font-semibold text-[#DC2626] mb-16">
            🔥 50 spots left · Free Pro for 1 month when we launch Dec 10
          </p>

          {/* Product Screenshot Placeholder */}
          <div className="max-w-[1000px] mx-auto mb-8">
            <div className="w-full aspect-[5/3] bg-[#F3F4F6] rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] flex items-center justify-center">
              <span className="text-base font-medium text-[#9CA3AF]">Product Demo Coming Soon</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-[#9CA3AF]">Technology Partners</span>
            <div className="flex items-center justify-center gap-8">
              <div className="w-[120px] h-10 bg-[#E5E7EB] rounded opacity-50 grayscale flex items-center justify-center text-xs text-[#9CA3AF]">
                Intel
              </div>
              <div className="w-[120px] h-10 bg-[#E5E7EB] rounded opacity-50 grayscale flex items-center justify-center text-xs text-[#9CA3AF]">
                LG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => (
  <section className="bg-[#F9FAFB] py-20 md:py-[120px]">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
          Get Started in Two Simple Steps
        </h2>
        <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
          No complex setup required — just upload files and ask questions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl p-10 border border-[rgba(0,0,0,0.05)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
          <div className="text-5xl mb-6">📄</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <h3 className="text-2xl font-semibold text-[#111827] tracking-[-0.02em]">Upload Files</h3>
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            Drag and drop your PDFs. Explore even 430-page documents seamlessly, all at once.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl p-10 border border-[rgba(0,0,0,0.05)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
          <div className="text-5xl mb-6">💬</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <h3 className="text-2xl font-semibold text-[#111827] tracking-[-0.02em]">Ask Questions</h3>
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            Ask anything and get accurate answers with precise sources and page numbers.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Features Section
const Features = () => {
  const features = [
    { icon: "⚡", title: "Instant Search", description: "Upload your PDFs and find information you need instantly." },
    { icon: "📌", title: "Source Citation", description: "Answers always include which document and page they came from." },
    { icon: "📊", title: "Advanced Analysis", description: "Analyzes tables, charts, and formulas with precision." },
    { icon: "📚", title: "Multi-Document", description: "Register multiple documents and have conversations across them." },
    { icon: "🔒", title: "100% Offline", description: "Runs only on your PC without connecting to external servers." },
    { icon: "📁", title: "Format Expansion", description: "Currently PDF only. Soon expanding to HWP, PPTX, XLSX." },
  ];

  return (
    <section id="features" className="bg-white py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2563EB] mb-4">FEATURES</p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
            Localdocs is Different
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
            Built for privacy-conscious professionals who need powerful document intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 border border-[rgba(0,0,0,0.05)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#111827] tracking-[-0.02em] mb-3">{feature.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Use Cases (Scenarios) Section
const Scenarios = () => {
  const scenarios = [
    {
      icon: Settings,
      title: "Technical Teams",
      description: "Upload ISO standards, OEM guidelines, and partner docs at once to find specs instantly.",
    },
    {
      icon: Scale,
      title: "Legal Teams",
      description: "Stop flipping through hundreds of pages. Ask about penalty clauses and get exact page references.",
    },
    {
      icon: TrendingUp,
      title: "Financial Teams",
      description: "Extract financial statement info from 400+ page reports. Synthesize internal data for insights.",
    },
    {
      icon: BarChart3,
      title: "Research",
      description: "Extract references from multiple papers instantly. Manage manuals and find info in seconds.",
    },
  ];

  return (
    <section id="use-cases" className="bg-[#F9FAFB] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2563EB] mb-4">USE CASES</p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
            When You Need Localdocs
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
            Designed for teams that handle sensitive documents daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827] tracking-[-0.02em] mb-3">{scenario.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{scenario.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a href="#cta">
            <button className="px-8 py-4 bg-[#111827] text-white text-base font-semibold rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#1F2937] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 mx-auto">
              Join Early Access Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

// Problem Section (Warning style)
const Problem = () => (
  <section className="bg-gradient-to-b from-white to-[#FEF2F2] py-20 md:py-[120px]">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 bg-[#FEE2E2] rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl">⚠️</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
          Are Your Documents Really Safe?
        </h2>
        <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-8">
          Cloud-based AI tools upload your sensitive documents to external servers. 
          One data breach could expose your confidential contracts, financial reports, and proprietary research.
        </p>
        <p className="text-xl font-semibold text-[#EF4444]">
          Localdocs processes everything locally. Your data never leaves your device.
        </p>
      </div>
    </div>
  </section>
);

// Security Section
const Security = () => {
  const securityFeatures = [
    { icon: Lock, title: "Local Processing", description: "All processing happens on your PC. No external transmission." },
    { icon: Shield, title: "Zero Data Leaks", description: "Not transmitted to servers, so there's no risk of leaks." },
    { icon: WifiOff, title: "Air-Gapped Ready", description: "Works in intranet and closed network environments." },
    { icon: CheckCircle, title: "Offline Execution", description: "Runs perfectly without any internet connection." },
  ];

  return (
    <section id="security" className="bg-white py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2563EB] mb-4">SECURITY</p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
            Your Data Never Leaves Your Computer
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
            Enterprise-grade security built for the most sensitive documents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827] tracking-[-0.02em] mb-2">{feature.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for getting started",
      features: ["PDF upload and chat", "1 folder provided", "Up to 3 documents per folder", "Personal learning use"],
      cta: "Join Early Access",
      featured: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      badge: "Recommended",
      description: "1 month free trial during Early Access",
      features: [
        "All Free features",
        "Max 50 PDFs upload",
        "Unlimited folders",
        "Table & formula support",
        "HWP, PPTX, XLSX support (soon)",
        "Export to Word, PPTX, TXT (soon)",
        "Email support",
      ],
      cta: "Join Early Access",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams with advanced needs",
      features: [
        "All Pro features",
        "Internal system integration",
        "Custom AI training",
        "Central admin dashboard",
        "SSO support",
        "Media-specific RAG",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#F9FAFB] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2563EB] mb-4">PRICING</p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
            Choose the Right Plan
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
            Start free, upgrade when you're ready
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 ${
                plan.featured ? "border-[#2563EB] shadow-[0_10px_40px_rgba(37,99,235,0.15)]" : "border-[rgba(0,0,0,0.05)]"
              } shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 relative flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2563EB] text-white text-xs font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[#111827] mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-[#111827]">{plan.price}</span>
                  {plan.period && <span className="text-[#6B7280]">{plan.period}</span>}
                </div>
                <p className={`text-sm ${plan.featured ? "text-[#2563EB] font-medium" : "text-[#6B7280]"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#cta" className="block">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.featured
                      ? "bg-[#111827] text-white hover:bg-[#1F2937] shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
                      : "bg-transparent text-[#111827] border-2 border-[#E5E7EB] hover:bg-[#F9FAFB] hover:border-[#D1D5DB]"
                  }`}
                >
                  {plan.cta}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => (
  <section className="bg-white py-20 md:py-[120px]">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-[#2563EB] mb-4">TESTIMONIALS</p>
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
          What Users Say
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <a
          href="https://x.com/sakshi_codess/status/1987857907283886434?s=20"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                S
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-semibold text-[#111827]">@sakshi_codess</span>
                  <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="text-[#4B5563] leading-relaxed space-y-3">
                  <p>"I was buried under 100+ PDFs while preparing for placements... notes, resumes, research papers, everything scattered."</p>
                  <p>"Then I stumbled upon <strong className="text-[#111827]">LocalDocs</strong>. I just typed a question, and it instantly pulled the exact paragraph from dozens of PDFs."</p>
                  <p>"It's like NotebookLM, but <strong className="text-[#111827]">private and offline</strong>."</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQ = () => {
  const faqs = [
    { q: "Can I use it without internet?", a: "Yes, all features work without internet after installation." },
    { q: "What file formats are supported?", a: "Currently PDF only. We plan to add HWP, PPTX, and XLSX soon." },
    { q: "Can it read tables and graphs?", a: "Yes, it can analyze tables and formulas accurately." },
    { q: "Are sources provided for answers?", a: "Yes, document name and page number are always provided." },
    { q: "Can it be used in security-critical environments?", a: "Yes, with 100% local processing, it's safe for air-gapped networks." },
    { q: "What's the difference between plans?", a: "Free has document limits, Pro offers unlimited + advanced features, Enterprise adds team management." },
    { q: "Are languages other than English supported?", a: "Yes, various languages are supported with excellent Korean performance." },
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
    <section id="faq" className="bg-[#F9FAFB] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2563EB] mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] tracking-[-0.02em] mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl p-6 border border-[rgba(0,0,0,0.05)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] group"
            >
              <summary className="font-semibold text-[#111827] cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-[#9CA3AF] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </section>
  );
};

// Final CTA Section
const CTA = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { consent: false },
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
      const { error } = await supabase.from("email_signups").insert([{
        email: values.email,
        consent: values.consent,
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
      }]);
      if (error) throw error;
      trackLead(values.email);
      toast.success("Successfully joined the Early Access!");
      reset();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section id="cta" className="bg-gradient-to-br from-[#667EEA] to-[#764BA2] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full mb-8">
            🔥 Only for the first 50 users
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white tracking-[-0.02em] mb-6">
            Chat Directly with Your PDFs
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
            Localdocs with no data leak concerns. Join Early Access and experience it first.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full h-14 px-5 bg-white rounded-lg text-[#111827] placeholder:text-[#9CA3AF] text-base focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              {errors.email && <p className="text-sm text-white/90 mt-2 text-left">{errors.email.message}</p>}
            </div>

            <input type="text" {...register("honeypot")} className="absolute -left-[9999px] w-px h-px" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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

            <div className="flex items-start gap-3 text-left">
              <Checkbox
                id="consent"
                checked={watch("consent")}
                onCheckedChange={(checked) => setValue("consent", !!checked)}
                className="mt-1 border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-[#667EEA]"
              />
              <Label htmlFor="consent" className="text-sm text-white/80 leading-relaxed">
                I agree to receive product updates and marketing emails.
              </Label>
            </div>
            {errors.consent && <p className="text-sm text-white/90 text-left">{errors.consent.message}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-white text-[#667EEA] text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70"
            >
              {isSubmitting ? "Joining..." : "Join Early Access"}
            </button>
          </form>

          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-white mb-1">🎁 Special Offer</p>
                <p className="text-sm text-white/80">
                  Join now and get <span className="font-bold text-white">1 month free Pro plan trial</span> when we launch!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-white border-t border-[#E5E7EB] py-12">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Localdocs logo" width={32} height={32} />
          <span className="text-lg font-semibold text-[#111827]">Localdocs</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="/terms" className="text-[#6B7280] hover:text-[#111827] transition-colors">Terms of Service</a>
          <a href="/privacy" className="text-[#6B7280] hover:text-[#111827] transition-colors">Privacy Policy</a>
          <span className="text-[#9CA3AF]">© 2024 Localdocs. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
);

// Main Component
export default function IndexEn() {
  usePageTracking();
  useSectionTracking();

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Scenarios />
        <Problem />
        <Security />
        <Pricing />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
