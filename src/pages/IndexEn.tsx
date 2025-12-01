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
  Lock,
  CheckCircle,
  Zap,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Search,
  FileSearch,
  Shield,
} from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { useEffect, useState } from "react";
import { usePageTracking } from "@/hooks/useAnalytics";
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

// Linear-style Nav
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-white/10">
        <div className="px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="Localdocs logo" width={32} height={32} loading="eager" />
            <span className="text-lg font-semibold text-[#111] tracking-[-0.02em]">LocalDocs</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Use Cases", "Security", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-[#666] hover:text-[#111] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#666] hover:bg-gray-50 transition-colors">
                <span className="hidden sm:inline">EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-white/10 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <a href="/" className="block px-4 py-2.5 text-sm text-[#666] hover:bg-gray-50 rounded-t-xl">
                  한국어
                </a>
                <span className="block px-4 py-2.5 text-sm text-[#111] bg-gray-50 rounded-b-xl font-medium">
                  English
                </span>
              </div>
            </div>

            <a href="#cta" className="hidden md:block">
              <button className="px-5 py-2 bg-[#111] text-white text-sm font-medium rounded-lg hover:bg-[#333] transition-colors">
                Download for Mac
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
              {["Features", "Use Cases", "Security", "Pricing", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-3 text-base font-medium text-[#666] hover:text-[#111] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="mt-4">
                <button className="w-full px-5 py-3 bg-[#111] text-white text-base font-medium rounded-lg">
                  Download for Mac
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
    <section className="relative bg-transparent pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Ambient Glow 제거됨 (깨끗한 흰색 배경) */}

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-[#666] text-sm font-medium rounded-full mb-8 border border-gray-100">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Get early access and try it now!
        </div>

        {/* Massive H1 */}
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111] tracking-tighter leading-[1.05] mb-6">
          On-Device AI <br />
          PDF Search Assistant
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#666] leading-relaxed max-w-2xl mx-auto mb-10">
          LocalDocs gives instant, cited answers from your files
          <br />
          without sending any data to the cloud.
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

        {/* App Screenshot Placeholder */}
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
        </div>
      </div>
    </section>
  );
};

// Bento Grid Features
const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Search",
      description: "Find information across hundreds of pages in milliseconds. No more manual searching.",
      size: "large",
    },
    {
      icon: Lock,
      title: "100% Offline",
      description: "Runs entirely on your computer. No internet required after installation.",
      size: "small",
    },
    {
      icon: Shield,
      title: "Zero Data Leaks",
      description: "Your documents never leave your device. Complete privacy guaranteed.",
      size: "small",
    },
    {
      icon: FileText,
      title: "Source Citations",
      description: "Every answer includes the exact document and page number for verification.",
      size: "medium",
    },
    {
      icon: Search,
      title: "Table Analysis",
      description: "Accurately reads and analyzes tables, charts, and financial data from PDFs.",
      size: "medium",
    },
  ];

  return (
    <section id="features" className="bg-white py-20 md:py-32">
      <div className="px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Built for privacy-first teams
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#111]" />
            </div>
            <h3 className="text-xl font-semibold text-[#111] tracking-tight mb-2">Instant Search</h3>
            <p className="text-[#666] leading-relaxed">
              Find information across hundreds of pages in milliseconds. No more manual searching through documents.
            </p>
          </div>

          {/* Small Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-[#111]" />
            </div>
            <h3 className="text-xl font-semibold text-[#111] tracking-tight mb-2">100% Offline</h3>
            <p className="text-[#666] leading-relaxed">Runs entirely on your computer. No internet required.</p>
          </div>

          {/* Small Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-[#111]" />
            </div>
            <h3 className="text-xl font-semibold text-[#111] tracking-tight mb-2">Zero Data Leaks</h3>
            <p className="text-[#666] leading-relaxed">Your documents never leave your device. Complete privacy.</p>
          </div>

          {/* Medium Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-[#111]" />
            </div>
            <h3 className="text-xl font-semibold text-[#111] tracking-tight mb-2">Source Citations</h3>
            <p className="text-[#666] leading-relaxed">Every answer includes the exact document and page number.</p>
          </div>

          {/* Medium Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:bg-white/80 transition-all">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-[#111]" />
            </div>
            <h3 className="text-xl font-semibold text-[#111] tracking-tight mb-2">Table Analysis</h3>
            <p className="text-[#666] leading-relaxed">Accurately reads tables, charts, and financial data.</p>
          </div>
        </div>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Your data never leaves your computer
          </h2>
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

// Pricing Section
const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For personal use",
      features: ["3 documents", "1 folder", "Basic search"],
      featured: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      description: "For professionals",
      features: ["50 documents", "Unlimited folders", "Table analysis", "Priority support"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams",
      features: ["Unlimited documents", "SSO integration", "Custom training", "Dedicated support"],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#fafafa] py-20 md:py-32">
      <div className="px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Simple, transparent pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/60 backdrop-blur-sm rounded-xl border p-8 transition-all ${
                plan.featured
                  ? "border-[#111]/80 ring-1 ring-[#111]/80 bg-white/80"
                  : "border-gray-200 hover:border-gray-300 hover:bg-white/80"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-medium text-[#111] uppercase tracking-wider mb-4">Most Popular</div>
              )}
              <h3 className="text-lg font-semibold text-[#111] mb-1">{plan.name}</h3>
              <p className="text-sm text-[#666] mb-4">{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#111] tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-[#666]">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#666]">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="block">
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.featured
                      ? "bg-[#111] text-white hover:bg-[#333]"
                      : "bg-white/80 text-[#111] border border-white/10 hover:bg-gray-50"
                  }`}
                >
                  Get Started
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] tracking-[-0.02em]">
            Frequently asked questions
          </h2>
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
      const { error } = await supabase.from("email_signups").insert([
        {
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
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">Get Early Access</h2>
        <p className="text-lg text-gray-400 mb-8">Join the waitlist and get 1 month free Pro when we launch.</p>

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

          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              {...register("consent")}
              className="mt-1 border-gray-600 data-[state=checked]:bg-white data-[state=checked]:text-[#111]"
            />
            <Label htmlFor="consent" className="text-sm text-gray-400 text-left leading-relaxed cursor-pointer">
              I agree to receive product updates and marketing emails.
            </Label>
          </div>
          {errors.consent && <p className="text-sm text-red-400 text-left">{errors.consent.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-white text-[#111] font-medium rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-white py-12">
    <div className="px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Localdocs" width={24} height={24} />
          <span className="text-sm font-medium text-[#111]">LocalDocs</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="text-sm text-[#666] hover:text-[#111] transition-colors">
            Privacy
          </a>
          <a href="/terms" className="text-sm text-[#666] hover:text-[#111] transition-colors">
            Terms
          </a>
        </div>
        <p className="text-sm text-[#666]">© 2024 PeekabooLabs. All rights reserved.</p>
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
