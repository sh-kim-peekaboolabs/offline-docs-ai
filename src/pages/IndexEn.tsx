import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
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
  Download,
  AlertTriangle,
  Cloud,
  X,
  CheckCircle,
  Zap,
  Brain,
  Building2,
  Scale,
  TrendingUp,
  Shield,
  Star,
  ChevronDown,
  Settings,
  Users,
  BarChart3,
  Menu,
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
  // Anti-spam honeypot field
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
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b">
        <div className="container flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={scrollToTop}>
            <img
              src={logo}
              alt="localdocs 3D document stack logo"
              width={40}
              height={40}
              className="logo-interactive"
              loading="eager"
            />
            <div className="text-lg md:text-xl font-bold text-primary">Localdocs</div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="story-link">
              Features
            </a>
            <a href="#scenarios" className="story-link">
              Use Cases
            </a>
            <a href="#security" className="story-link">
              Security
            </a>
            <a href="#pricing" className="story-link">
              Pricing
            </a>
            <a href="#faq" className="story-link">
              FAQ
            </a>
            <a href="#cta" className="story-link">
              Join Early Access
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm">
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-1 w-32 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                  한국어 (KR)
                </a>
                <span className="block px-3 py-2 text-sm text-muted-foreground bg-accent rounded-md">English (EN)</span>
              </div>
            </div>

            <div className="hidden md:block">
              <a href="#cta">
                <Button variant="hero" size="lg">
                  Join Early Access
                </Button>
              </a>
            </div>

            <button
              className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <nav className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-end mb-6">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-accent rounded-md">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-base py-2 hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                Features
              </a>
              <a
                href="#scenarios"
                className="text-base py-2 hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                Use Cases
              </a>
              <a
                href="#security"
                className="text-base py-2 hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                Security
              </a>
              <a
                href="#pricing"
                className="text-base py-2 hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                Pricing
              </a>
              <a href="#faq" className="text-base py-2 hover:text-primary transition-colors" onClick={handleNavClick}>
                FAQ
              </a>
              <a href="#cta" onClick={handleNavClick}>
                <Button variant="hero" size="lg" className="w-full mt-4">
                  Join Early Access
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative py-8 md:py-16 pb-4 text-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 md:py-2 bg-accent text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
          Offline ChatPDF, Localdocs
        </div>

        <h1 className="mx-auto max-w-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-normal px-4 text-xl font-extrabold">
          Find Answers in Dozens of PDFs at Once, Locally
        </h1>
        <p className="mt-4 md:mt-5 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          Works without internet connection, <br />
          all data stays completely private on your device
        </p>

        {/* Early Access 등록 버튼 */}
        <div className="mt-6 md:mt-8">
          <a href="#cta">
            <Button variant="hero" size="lg" className="h-12 md:h-14 px-6 md:px-10 text-base md:text-lg font-semibold">
              Join Early Access
            </Button>
          </a>
        </div>

        {/* Urgency Badge - Below Button */}
        <div className="mt-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold shadow-lg animate-pulse">
            🔥 Only 50 More Spots Left
          </div>
        </div>
      </div>
    </section>
  );
};
const HowItWorks = () => (
  <section className="section bg-white" aria-labelledby="how-it-works-heading">
    <div className="container">
      <div className="text-center mb-12">
        <h2 id="how-it-works-heading" className="text-2xl md:text-3xl font-semibold mb-3">
          Get Started in Two Simple Steps
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No complex setup required - just upload files and ask questions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* File Upload */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold">
                1
              </span>
              <h3 className="text-xl font-bold">Upload Files</h3>
            </div>
            <p className="text-lg font-semibold text-primary mb-2">Intuitive Interface</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upload your files.
              <br />
              Explore even 430-page documents seamlessly, all at once.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
              <Zap className="w-4 h-4" />
              <span>Simple drag and drop</span>
            </div>
          </div>
        </div>

        {/* Q&A */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 border border-purple-100 hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <Search className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white text-sm font-bold">
                2
              </span>
              <h3 className="text-xl font-bold">Ask Questions</h3>
            </div>
            <p className="text-lg font-semibold text-primary mb-2">Accurate Answers</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ask 'Samsung Electronics 2025 H1 Sales by Division'.
              <br />
              Every page is carefully read, with sources provided!
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>Precise sources with page numbers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const Features = () => (
  <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
    <div className="container">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-4">
          Features
        </div>
        <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-4">
          Localdocs is Different
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Instant Document Search</h3>
          </div>
          <p className="text-sm text-muted-foreground">Upload your PDFs and find the information you need instantly.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-green-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <Quote className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Source Citation</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Answers always include 'which document, which page' they came from.
          </p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Advanced Analysis</h3>
          </div>
          <p className="text-sm text-muted-foreground">Analyzes tables and formulas as well.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-orange-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Multi-Document Support</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Register multiple documents at once and have conversations across them.
          </p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">100% Offline</h3>
          </div>
          <p className="text-sm text-muted-foreground">Runs only on your PC without connecting to external servers.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-indigo-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Format Expansion</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Currently supports PDF only. Soon expanding to HWP, PPTX, XLSX.
          </p>
        </div>
      </div>
    </div>
  </section>
);
const Scenarios = () => {
  const scenarios = [
    {
      id: 1,
      title: "Technical Teams",
      icon: Settings,
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      points: [
        "Upload ISO26262, OEM standards, and partner guideline documents at once to find the specs you need instantly.",
        "Find necessary items in seconds even from technical books over 600 pages.",
      ],
    },
    {
      id: 2,
      title: "Legal Teams",
      icon: Scale,
      gradient: "from-amber-600 via-orange-700 to-red-800",
      points: [
        "Reduce time spent flipping through hundreds of pages of contract documents looking for specific clauses.",
        "Example: Ask about penalty clauses and get the exact page reference immediately.",
      ],
    },
    {
      id: 3,
      title: "Financial Teams",
      icon: TrendingUp,
      gradient: "from-purple-600 via-pink-700 to-rose-800",
      points: [
        "When you need to quickly extract financial statement information from disclosure reports exceeding 400 pages.",
        "When you want to synthesize internal financial information to gain insights.",
      ],
    },
    {
      id: 4,
      title: "Public & Research Institutions",
      icon: BarChart3,
      gradient: "from-emerald-600 via-teal-700 to-cyan-800",
      points: [
        "Extract only the references you need from multiple research papers. Example: Search for 'Kim○○(2021) dataset name' and verify instantly.",
        "Register various manuals and check them when needed. Example: Find 'Chapter 5 emergency contact system in disaster prevention manual' in seconds.",
      ],
    },
  ];
  return (
    <section id="scenarios" className="section" aria-labelledby="scenarios-heading">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-4">
            Scenarios
          </div>
          <h2 id="scenarios-heading" className="text-2xl md:text-3xl font-semibold mb-4">
            When You Need Localdocs
          </h2>
          <p className="text-lg text-muted-foreground">This is when Localdocs is needed</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario) => {
            const IconComponent = scenario.icon;
            return (
              <div
                key={scenario.id}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${scenario.gradient} p-8 text-white shadow-2xl`}
              >
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-white/20 p-2">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{scenario.title}</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    {scenario.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/5" />
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Improve your work efficiency 10x by introducing Localdocs right now
          </p>
          <a href="#cta">
            <Button
              variant="hero"
              size="xl"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-2xl"
            >
              Join Early Access Now →
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
const Security = () => (
  <section
    id="security"
    className="section bg-gradient-to-br from-gray-50 to-blue-50/30"
    aria-labelledby="security-heading"
  >
    <div className="container">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-4">
          Security
        </div>
        <h2 id="security-heading" className="text-2xl md:text-3xl font-semibold mb-4">
          Your Data Never Leaves Your Computer
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Processed Only on Your PC</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            All processing is safely done only on your PC. Data is not transmitted externally.
          </p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-green-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Block External Data Leaks</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Not transmitted to external servers, so there's absolutely no risk of leaks.
          </p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Air-gapped Network Compatible</h3>
          </div>
          <p className="text-sm text-muted-foreground">Works fine in intranet and closed network environments.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Offline Execution</h3>
          </div>
          <p className="text-sm text-muted-foreground">Runs as-is even without internet connection.</p>
        </div>
      </div>
    </div>
  </section>
);
const Pricing = () => (
  <section id="pricing" className="section" aria-labelledby="pricing-heading">
    <div className="container">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Choose the Right Plan for You
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
              <span>PDF upload and chat available</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>1 folder provided</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Up to 3 documents per folder</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Personal learning & small-scale use</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="#cta" className="w-full">
              <Button variant="outline" className="w-full">
                Join Early Access
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
              $29<span className="text-lg font-normal">/month</span>
            </div>
            <div className="text-sm text-primary font-semibold">1 month free Pro plan trial during Early Access</div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>All Free plan features included</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Max 50 PDFs upload</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Unlimited folder creation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Full table and formula support</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Includes HWP, PPTX, XLSX support (upcoming)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Summary export (Word, PPTX, TXT) (upcoming)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Email support</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="#cta" className="w-full">
              <Button variant="hero" className="w-full">
                Join Early Access
              </Button>
            </a>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card h-full flex flex-col border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">Custom Pricing</div>
            <div className="text-sm text-muted-foreground h-5"></div>
          </div>
          <ul className="space-y-3 flex-1 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>All Pro plan features included</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Internal system integration</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Custom AI trained on enterprise data</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Central admin dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Enhanced account management with SSO</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Media-specific RAG package support</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Dedicated technical support and onboarding</span>
            </li>
          </ul>
          <div className="mt-6">
            <a href="#cta" className="w-full">
              <Button variant="outline" className="w-full">
                Join Waitlist
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const FAQ = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I use it without internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all features work without internet after installation.",
        },
      },
      {
        "@type": "Question",
        name: "What file formats are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently only PDF is supported. We plan to add various formats like HWP, PPTX, and XLSX soon.",
        },
      },
      {
        "@type": "Question",
        name: "Can it read tables and graphs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it can analyze tables and formulas.",
        },
      },
      {
        "@type": "Question",
        name: "Are sources provided for answers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, document name and page number are always provided together.",
        },
      },
      {
        "@type": "Question",
        name: "Can it be used in security-critical environments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it can be safely used in air-gapped networks and intranets with 100% local processing.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between free and paid plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Free has limitations on document/folder count, Pro offers unlimited + advanced features, and Enterprise provides team management and security features.",
        },
      },
      {
        "@type": "Question",
        name: "Are languages other than Korean supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, various languages are supported, with exceptional performance on Korean documents.",
        },
      },
    ],
  };
  return (
    <section id="faq" className="section bg-secondary-lighter/50" aria-labelledby="faq-heading">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid gap-4 max-w-3xl mx-auto">
          <details className="feature-card">
            <summary className="font-medium cursor-pointer">Can I use it without internet?</summary>
            <p className="mt-2 text-muted-foreground">Yes, all features work without internet after installation.</p>
          </details>
          <details className="feature-card">
            <summary className="font-medium cursor-pointer">What file formats are supported?</summary>
            <p className="mt-2 text-muted-foreground">
              Currently only PDF is supported. We plan to add various formats like HWP, PPTX, and XLSX soon.
            </p>
          </details>
          <details className="feature-card">
            <summary className="font-medium cursor-pointer">Can it read tables and graphs?</summary>
            <p className="mt-2 text-muted-foreground">Yes, it can analyze tables and formulas.</p>
          </details>
          <details className="feature-card">
            <summary className="font-medium cursor-pointer">Are sources provided for answers?</summary>
            <p className="mt-2 text-muted-foreground">
              Yes, document name and page number are always provided together.
            </p>
          </details>
          <details className="feature-card">
            <summary className="font-medium cursor-pointer">Can it be used in security-critical environments?</summary>
            <p className="mt-2 text-muted-foreground">
              Yes, it can be safely used in air-gapped networks and intranets with 100% local processing.
            </p>
          </details>
          <details className="feature-card">
            <summary className="font-medium cursor-pointer">What's the difference between free and paid plans?</summary>
            <p className="mt-2 text-muted-foreground">
              Free has limitations on document/folder count, Pro offers unlimited + advanced features, and Enterprise
              provides team management and security features.
            </p>
          </details>
          <details className="feature-card">
            <summary className="font-medium cursor-pointer">Are languages other than Korean supported?</summary>
            <p className="mt-2 text-muted-foreground">
              Yes, various languages are supported, with exceptional performance on Korean documents.
            </p>
          </details>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </div>
    </section>
  );
};
const Testimonials = () => {
  return (
    <section className="section bg-white" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-semibold mb-4">
            What Users Say
          </h2>
          <p className="text-lg text-muted-foreground">Real feedback from our community</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <a
            href="https://x.com/sakshi_codess/status/1987857907283886434?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-foreground">@sakshi_codess</h3>
                    <svg
                      className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>
                      I was buried under 100+ PDFs while preparing for my campus placements at NIT Silchar .. notes, resumes, research papers, old project docs… everything scattered.
                    </p>
                    <p>
                      Every time I needed one specific line or stat, it felt like finding a needle in a haystack. Ctrl+F gave up on me halfway.
                    </p>
                    <p>
                      Then I stumbled upon <strong>LocalDocs</strong>, an AI that runs entirely offline.
                      I just typed a question, and it instantly pulled the exact paragraph I was looking for ... from dozens of PDFs.
                    </p>
                    <p>
                      No uploads. No cloud. No waiting. Just pure local magic.
                      It's like NotebookLM, but <strong>private and offline</strong>, built by engineers who actually lived this pain.
                    </p>
                    <p>
                      If you deal with research papers, study materials, or technical docs, this one's a must-try.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <LinkIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
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
    defaultValues: {
      consent: false,
    },
  });
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    const utmCampaignId =
      urlParams.get("utm_campaign_id") || urlParams.get("campaignid") || urlParams.get("utm_content");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaignName = urlParams.get("utm_campaign_name") || urlParams.get("utm_campaign");
    const utmAdsetId = urlParams.get("utm_adset_id") || urlParams.get("adsetid");
    const utmAdsetName = urlParams.get("utm_adset_name") || urlParams.get("adsetname");
    const utmAdId = urlParams.get("utm_ad_id") || urlParams.get("adid");
    const utmAdName = urlParams.get("utm_ad_name") || urlParams.get("adname");

    // LinkedIn specific parameters (LinkedIn 전용만)
    const linkedinCampaignGroupId = urlParams.get("campaign_group_id");
    const linkedinCampaignGroupName = urlParams.get("campaign_group_name");
    const linkedinCampaignId = urlParams.get("campaign_id");
    const linkedinAdName = urlParams.get("creative_name");
    if (utmSource) setValue("utm_source", utmSource);
    if (utmCampaignId) setValue("utm_campaign_id", utmCampaignId);
    if (utmMedium) setValue("utm_medium", utmMedium);
    if (utmCampaignName) setValue("utm_campaign_name", utmCampaignName);
    if (utmAdsetId) setValue("utm_adset_id", utmAdsetId);
    if (utmAdsetName) setValue("utm_adset_name", utmAdsetName);
    if (utmAdId) setValue("utm_ad_id", utmAdId);
    if (utmAdName) setValue("utm_ad_name", utmAdName);
    if (linkedinCampaignGroupId) setValue("linkedin_campaign_group_id", linkedinCampaignGroupId);
    if (linkedinCampaignGroupName) setValue("linkedin_campaign_group_name", linkedinCampaignGroupName);
    if (linkedinCampaignId) setValue("linkedin_campaign_id", linkedinCampaignId);
    if (linkedinAdName) setValue("linkedin_ad_name", linkedinAdName);
  }, [setValue]);
  const onSubmit = async (values: FormValues) => {
    try {
      // Honeypot check - reject if filled
      if (values.honeypot) {
        toast.error("Invalid request.");
        return;
      }
      const insertData = {
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
      };
      const { error } = await supabase.from("email_signups").insert([insertData]);
      if (error) throw error;

      // Facebook Pixel Lead 이벤트 추적
      trackLead(values.email);
      toast.success("Successfully joined the Early Access!");
      reset();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <section id="cta" className="section bg-gradient-to-b from-background to-secondary/5" aria-labelledby="cta-heading">
      <div className="container">
        <div className="max-w-xl mx-auto">
          {/* Urgency Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold shadow-md">
              🔥 Only for the first 50 users
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Chat Directly with Your PDFs
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Localdocs with no data leak concerns.
              <br />
              Join the Early Access now and experience it first.
            </p>

            {/* Social Proof */}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full h-14 text-base px-4"
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>

            {/* Honeypot field - hidden from users, catches bots */}
            <input
              type="text"
              {...register("honeypot")}
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
              }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Hidden UTM fields */}
            <input type="hidden" {...register("utm_source")} />
            <input type="hidden" {...register("utm_campaign_id")} />
            <input type="hidden" {...register("utm_medium")} />
            <input type="hidden" {...register("utm_campaign_name")} />
            <input type="hidden" {...register("utm_adset_id")} />
            <input type="hidden" {...register("utm_adset_name")} />
            <input type="hidden" {...register("utm_ad_id")} />
            <input type="hidden" {...register("utm_ad_name")} />

            {/* Hidden LinkedIn fields */}
            <input type="hidden" {...register("linkedin_campaign_name")} />
            <input type="hidden" {...register("linkedin_ad_id")} />
            <input type="hidden" {...register("linkedin_campaign_group_id")} />
            <input type="hidden" {...register("linkedin_campaign_group_name")} />
            <input type="hidden" {...register("linkedin_campaign_id")} />
            <input type="hidden" {...register("linkedin_ad_name")} />

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={watch("consent")}
                onCheckedChange={(checked) => setValue("consent", !!checked)}
                className="shrink-0 mt-0.5"
                style={{
                  width: "14px",
                  height: "14px",
                  minWidth: "14px",
                  minHeight: "14px",
                }}
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                I agree to receive product updates and marketing emails.
              </Label>
            </div>
            {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Early Access"}
            </Button>
          </form>

          {/* Promo Offer */}
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-green-900 mb-1">🎁 Special Offer</p>
                <p className="text-sm text-green-800">
                  Join now and get <span className="font-bold">1 month free Pro plan trial</span> when we launch!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Footer = () => (
  <footer className="bg-muted py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Localdocs logo" width={32} height={32} loading="lazy" />
          <div className="text-lg font-bold text-primary">Localdocs</div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <span className="text-muted-foreground hidden md:inline">|</span>
          <div className="text-muted-foreground">© 2024 Localdocs. All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
export default function IndexEn() {
  usePageTracking();
  useSectionTracking();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Scenarios />
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
