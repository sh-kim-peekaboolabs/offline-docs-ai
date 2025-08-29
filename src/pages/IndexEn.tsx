import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, WifiOff, FileText, Link as LinkIcon, Quote, Search, Lock, Download, AlertTriangle, Cloud, X, CheckCircle, Zap, Brain, Building2, Scale, TrendingUp, Shield, Star, ChevronDown } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { useEffect } from "react";
import { usePageTracking, useSectionTracking } from "@/hooks/useAnalytics";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  consent: z.boolean().refine(val => val === true, {
    message: "Consent is required."
  }),
  utm_source: z.string().optional(),
  utm_campaign_id: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign_name: z.string().optional(),
  utm_adset_id: z.string().optional(),
  utm_adset_name: z.string().optional(),
  utm_ad_id: z.string().optional(),
  utm_ad_name: z.string().optional(),
  linkedin_campaign_name: z.string().optional(),
  linkedin_ad_id: z.string().optional(),
  linkedin_campaign_group_id: z.string().optional(),
  linkedin_campaign_group_name: z.string().optional(),
  linkedin_campaign_id: z.string().optional(),
  linkedin_ad_name: z.string().optional()
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
        <img src={logo} alt="localdocs 3D document stack logo" width={40} height={40} className="logo-interactive" loading="lazy" />
        <div className="text-xl font-bold text-primary">Localdocs</div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#features" className="story-link">Features</a>
        <a href="#scenarios" className="story-link">Use Cases</a>
        <a href="#security" className="story-link">Security</a>
        <a href="#pricing" className="story-link">Pricing</a>
        <a href="#faq" className="story-link">FAQ</a>
        <a href="#cta" className="story-link">Join Waitlist</a>
      </nav>
      <div className="flex items-center gap-4">
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
            <span className="text-sm">EN</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute right-0 top-full mt-1 w-32 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <a href="/" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">한국어 (KR)</a>
            <span className="block px-3 py-2 text-sm text-muted-foreground bg-accent rounded-md">English (EN)</span>
          </div>
        </div>
        <div className="hidden md:block">
          <a href="#cta"><Button variant="hero" size="lg">Join Waitlist</Button></a>
        </div>
      </div>
    </div>
  </header>;
};

const Hero = () => <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle" aria-hidden />
    <div className="container relative py-20 md:py-28 text-center">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-6">From your PC to Notion, all scattered documents</div>
      <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl leading-normal md:text-5xl font-bold">Find the answers you need with a single question.</h1>
      <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        Fast and secure AI enterprise search
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <a href="#cta"><Button variant="hero" size="xl">Join Waitlist</Button></a>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 animate-pulse">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <span className="text-sm font-medium text-green-700">🔥 100+ applications submitted already!</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{
          animationDelay: '0.2s'
        }}></div>
        </div>
        <p className="text-xs text-muted-foreground/70 animate-fade-in">* Limited beta testers recruitment *</p>
      </div>
    </div>
  </section>;

const Problem = () => <section className="section pt-8" aria-labelledby="problem-heading">
    <div className="container">
      <h2 id="problem-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">Why you should use Localdocs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-destructive/10 text-destructive">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
            <h3 className="font-semibold mb-2">Can't use ChatGPT with confidential documents</h3>
            <p className="text-sm text-muted-foreground mt-auto">Security documents cannot be leaked externally</p>
          </div>
        </div>
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
            <h3 className="font-semibold mb-2">Hundreds of pages document processing limits</h3>
            <p className="text-sm text-muted-foreground mt-auto">Token limits occur when there are many documents or large capacity</p>
          </div>
        </div>
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
              <WifiOff className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
            <h3 className="font-semibold mb-2">Can't use internet in air-gapped networks</h3>
            <p className="text-sm text-muted-foreground mt-auto">Situations where you want to use AI but can't</p>
          </div>
        </div>
      </div>
    </div>
  </section>;

const Solution = () => <section className="section" aria-labelledby="solution-heading">
    <div className="container">
      <h2 id="solution-heading" className="text-2xl md:text-3xl font-semibold mb-8">Now finish everything with localdocs.</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="feature-card flex items-start gap-4"><WifiOff className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">Korean-specialized AI that understands context</h3><p className="text-sm text-muted-foreground">Without internet connection, it grasps the nuances of domestic work environments and provides perfect summary results.</p></div></div>
        <div className="feature-card flex items-start gap-4"><FileText className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">HWP is basic, any document without conversion</h3><p className="text-sm text-muted-foreground">Instantly analyze HWP, PDF, PPTX, and even scanned (OCR) documents without the hassle of conversion.</p></div></div>
        <div className="feature-card flex items-start gap-4"><Quote className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">Trustworthy answers: Source citation for all results</h3><p className="text-sm text-muted-foreground">Verify which document and which page the AI's answer came from with one click and use it in your reports.</p></div></div>
        <div className="feature-card flex items-start gap-4"><Lock className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">Complete external leak prevention: 100% On-device processing</h3><p className="text-sm text-muted-foreground">All your data is processed only within your PC. Server transmission simply doesn't exist.</p></div></div>
      </div>
      <div className="text-center mt-8"><a href="#cta"><Button variant="hero" size="lg">Join Waitlist</Button></a></div>
    </div>
  </section>;

const Features = () => <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">Core Features</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <WifiOff className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Offline AI</h3>
          <p className="text-muted-foreground">AI works on your PC so your data never goes outside.</p>
        </div>
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Company Document Search AI</h3>
          <p className="text-muted-foreground">Search documents scattered across Notion, Google Drive, your PC, etc., all at once.</p>
        </div>
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">PDF, OCR, HWP support</h3>
          <p className="text-muted-foreground">Supports various documents from PDF to Korean Hangul files.</p>
        </div>
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <Quote className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Source provided for all answers</h3>
          <p className="text-muted-foreground">You can immediately check the source found in the document.</p>
        </div>
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <LinkIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Document·Link·Text integration</h3>
          <p className="text-muted-foreground">Analyze everything in one knowledge base at once.</p>
        </div>
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <Brain className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Korean-specialized AI</h3>
          <p className="text-muted-foreground">Equipped with AI optimized for Korean context and style.</p>
        </div>
      </div>
    </div>
  </section>;

const Comparison = () => <section className="section" aria-labelledby="comparison-heading">
    <div className="container">
      <h2 id="comparison-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-center">What's different from other AIs?</h2>
      <div className="overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-primary/5 to-primary/10">
              <tr>
                <th className="text-left p-6 font-semibold text-lg">Category</th>
                <th className="text-center p-6 font-semibold text-lg text-gray-600">AI Services</th>
                <th className="text-center p-6 font-semibold text-lg text-primary">Localdocs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">Works without internet</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <X className="w-4 h-4 mr-1" />
                    Limited
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Available
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">HWP support</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <X className="w-4 h-4 mr-1" />
                    Unsupported or unstable
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Basic support
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">Korean-optimized model</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                    General level
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                    <Zap className="w-4 h-4 mr-1" />
                    Korean-specialized
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">Citation provision</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                    Limited
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Basic provision
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">Data movement</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <Cloud className="w-4 h-4 mr-1" />
                    External transmission
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <Lock className="w-4 h-4 mr-1" />
                    Local retention
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
    title: "Enterprise Companies",
    description: "Instantly search for necessary specs and information from hundreds of pages of technical standard documents or R&D materials to reduce development time.",
    icon: Building2,
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    overlayGradient: "from-blue-900/80 to-indigo-900/60",
    image: "/lovable-uploads/3098a8d7-6b45-47dc-abc4-9946c5c83a10.png"
  }, {
    id: 2,
    title: "Law Firms",
    description: "Quickly find key issues and citable evidence in tens of thousands of pages of evidence and precedent cases to formulate litigation strategies.",
    icon: Scale,
    gradient: "from-amber-600 via-orange-700 to-red-800",
    overlayGradient: "from-amber-900/80 to-red-900/60",
    image: "/lovable-uploads/964e7f8b-0bcd-47ff-972d-4595b6bebcd0.png"
  }, {
    id: 3,
    title: "Investment & Finance",
    description: "Rapidly identify key growth drivers or potential risks from dozens of investment reports and due diligence data to make investment decisions.",
    icon: TrendingUp,
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    overlayGradient: "from-emerald-900/80 to-cyan-900/60",
    image: "/lovable-uploads/9bd95de7-d285-4dd7-ac4a-8fcc6ab83d7d.png"
  }, {
    id: 4,
    title: "Defense & Government",
    description: "Summarize key content from classified reports and policy materials on internet-blocked air-gapped PCs and process tasks quickly without security leaks.",
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
            Effective in 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}these environments
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Maximize work efficiency with AI power in specialized fields that require large document processing
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {environments.map((env, index) => {
          const IconComponent = env.icon;
          return <div key={env.id} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${env.gradient} 
                           gpu-optimized h-80`}>
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center gpu-scale" style={{
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
              Implement AI in your work environment right now
            </p>
            <a href="#cta">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
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
    name: "Kim Minsu",
    role: "Lawyer",
    company: "Law Firm A",
    content: "The time to find key issues in tens of thousands of pages of precedent materials has been reduced by 90%. Now I can focus more on formulating litigation strategies.",
    rating: 5
  }, {
    id: 2,
    name: "Park Jiyoung",
    role: "Investment Analyst",
    company: "KL Investment Securities",
    content: "The time for due diligence report analysis has been reduced from a day to 2 hours. With accurate sources provided, I can make investment decisions with confidence.",
    rating: 5
  }, {
    id: 3,
    name: "Lee Sanghoon",
    role: "R&D Team Lead",
    company: "TechInnovation",
    content: "Technical documents were only in HWP format, which was always inconvenient, but now I can ask questions directly and get answers, making development 2x faster.",
    rating: 5
  }];

  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-heading">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Stories from those who have already experienced it
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vivid reviews from real users who have seen noticeable improvements in work efficiency
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl gpu-optimized border border-gray-100 group">
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
            Experience this efficiency yourself
          </p>
          <a href="#cta">
            <Button variant="hero" size="lg" className="px-8 py-4">
              Join Waitlist
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
        <h2 id="security-heading" className="text-2xl md:text-3xl font-semibold mb-4">We prioritize security first</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Runs on your PC</h3>
          </div>
          <p className="text-sm text-muted-foreground">All processing is handled in the user's personal computer environment.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Offline operation</h3>
          </div>
          <p className="text-sm text-muted-foreground">Works perfectly even without internet connection.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Easy installation</h3>
          </div>
          <p className="text-sm text-muted-foreground">Ready to use immediately after downloading the PC app.</p>
        </div>
      </div>
    </div>
  </section>;

const HowItWorks = () => {
  const steps = [{
    id: 1,
    icon: Download,
    title: "Download and install the app",
    description: "Install the app on your PC",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  }, {
    id: 2,
    icon: FileText,
    title: "Create your AI knowledge base",
    description: "Easily add files you want to analyze with drag and drop",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  }, {
    id: 3,
    icon: Search,
    title: "Ask AI and get key summaries",
    description: "Ask questions like \"What are the key poison pill clauses in this contract?\" and AI will answer immediately",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  }, {
    id: 4,
    icon: Quote,
    title: "Check sources with one click",
    description: "Find the source location of AI answers with one click and verify facts.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  }];

  return <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="how-heading">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="how-heading" className="text-4xl font-bold text-gray-900 mb-4">
            How to Use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build an AI knowledge base in minutes and get smart answers
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
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl gpu-optimized border border-gray-100 h-full">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{step.id}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 gpu-scale`}>
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold gpu-optimized cursor-pointer">
              <span>Get Started Now</span>
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
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-4">Choose the right plan for you</h2>
      <p className="text-muted-foreground mb-8">Start with personal document exploration for free. If you need professional-level productivity for data analysis and report writing, choose Pro. If you need security and management for your organization, choose Enterprise.</p>
      <div className="grid md:grid-cols-3 gap-6 pt-16 pb-4">
        <div className="pricing-card h-full flex flex-col">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="mt-1 text-muted-foreground">The best way to experience core features</p>
          <p className="mt-4 text-2xl font-bold">₩0 <span className="text-sm font-medium text-muted-foreground">/ lifetime</span></p>
          <ul className="mt-4 space-y-2 text-sm flex-1">
            <li>Offline AI summary & search</li>
            <li>Basic document support (HWP, PDF, PPTX, DOCX)</li>
            <li>Citation in answers</li>
            <li>Up to 10 knowledge bases</li>
            <li>(Up to 10 documents per knowledge base)</li>
            <li>Notion, Google Drive integration (coming soon)</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">Join Waitlist</Button></a>
          </div>
        </div>
        <div className="pricing-card featured h-full flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">Pro</h3>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">Popular</span>
          </div>
          <p className="mt-1 text-muted-foreground">Productivity tools for professionals, from data analysis to report writing</p>
          <p className="mt-4 text-2xl font-bold">$19 <span className="text-sm font-medium text-muted-foreground">/ user / month</span></p>
          <ul className="mt-4 space-y-2 text-sm flex-1">
            <li>All Free features included</li>
            <li>Advanced document support (XLSX/CSV, scanned PDF OCR)</li>
            <li>Export summary results (Word, PPTX, Markdown)</li>
            <li>Custom summary templates (coming soon)</li>
            <li>Unlimited knowledge bases and significantly expanded base capacity</li>
            <li>Various App connectors including Gmail, Slack, Github, Jira, Confluence (coming soon)</li>
            <li>Priority email support</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">Join Waitlist</Button></a>
          </div>
        </div>
        <div className="pricing-card h-full flex flex-col">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="mt-1 text-muted-foreground">Custom solutions for organizations where security, deployment, and central management are important</p>
          <p className="mt-4 text-2xl font-bold">Contact us</p>
          <ul className="mt-4 space-y-2 text-sm flex-1">
            <li>All Pro features included</li>
            <li>Central license management for large teams</li>
            <li>On-premise AI installation for air-gapped environments</li>
            <li>Dedicated technical support manager and SLA</li>
            <li>Company-specific AI training and deployment management</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">Join Waitlist</Button></a>
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
    getValues,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  // Read UTM and LinkedIn data from URL parameters and automatically set in form
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log('=== URL PARAMETER PARSING ===');
    console.log('Current URL:', window.location.href);
    console.log('URL search params:', window.location.search);
    console.log('All params:', Array.from(params.entries()));

    // Check utm_source
    const utmSource = params.get('utm_source');
    const isLinkedIn = utmSource === 'linkedin';
    console.log('UTM Source:', utmSource, 'Is LinkedIn:', isLinkedIn);

    // Process UTM parameters - including all UTM fields
    const utmFields = [
      'utm_source', 
      'utm_campaign_id', 
      'utm_medium',
      'utm_campaign_name',
      'utm_adset_id',
      'utm_adset_name', 
      'utm_ad_id',
      'utm_ad_name'
    ] as const;
    console.log('=== UTM PARAMETERS (ALL FIELDS) ===');
    utmFields.forEach(fieldName => {
      const paramValue = params.get(fieldName);
      console.log(`UTM ${fieldName}:`, paramValue);
      if (paramValue) {
        try {
          setValue(fieldName, paramValue);
          console.log(`✓ Successfully set ${fieldName} to:`, paramValue);
        } catch (error) {
          console.error(`✗ Failed to set ${fieldName}:`, error);
        }
      }
    });

    // Special processing for Facebook (if fbclid exists or utm_source is fb/facebook)
    const isFacebook = utmSource === 'fb' || utmSource === 'facebook' || params.has('fbclid');
    if (isFacebook) {
      console.log('=== FACEBOOK DYNAMIC PARAMETERS MAPPING (DEBUG) ===');
      console.log('🔍 All URL params:', Array.from(params.entries()));
      console.log('🎯 Facebook detection - utm_source:', utmSource, ', has fbclid:', params.has('fbclid'));
      console.log('📍 Key params check - utm_campaign:', params.get('utm_campaign'), ', utm_content:', params.get('utm_content'));
      const facebookParamsMap = {
        'utm_campaign': 'utm_campaign_name',  // Map Facebook's utm_campaign to utm_campaign_name
        'utm_content': 'utm_campaign_id',     // Map Facebook's utm_content to utm_campaign_id
        'fbclid': 'utm_campaign_id',
        'fb_campaign_id': 'utm_campaign_id',
        'fb_campaign_name': 'utm_campaign_name',
        'campaign_id': 'utm_campaign_id',
        'campaign_name': 'utm_campaign_name',
        'adset_id': 'utm_adset_id',
        'adset_name': 'utm_adset_name',
        'ad_id': 'utm_ad_id',
        'ad_name': 'utm_ad_name'
      };
      console.log('📝 Current form values before Facebook mapping:', getValues());
      Object.entries(facebookParamsMap).forEach(([paramName, fieldName]) => {
        const rawValue = params.get(paramName);
        console.log(`🔎 Checking Facebook param [${paramName}]: raw value =`, rawValue);
        if (rawValue) {
          let processedValue = rawValue;
          
          // URL decoding (for name parameters only)
          if (paramName.includes('_name') || paramName === 'campaign_name') {
            try {
              processedValue = decodeURIComponent(rawValue.replace(/\+/g, ' '));
              console.log(`🔄 Decoded [${paramName}]: "${rawValue}" → "${processedValue}"`);
            } catch (e) {
              console.error(`❌ Decode failed for [${paramName}]:`, e);
              processedValue = rawValue;
            }
          }
          console.log(`📤 Setting Facebook [${fieldName}] = "${processedValue}"`);
          try {
            setValue(fieldName as any, processedValue);
            console.log(`✅ Successfully set Facebook ${fieldName} to:`, processedValue);
          } catch (error) {
            console.error(`❌ Failed to set Facebook ${fieldName}:`, error);
          }
        }
      });
      console.log('📝 Form values after Facebook mapping:', getValues());
    }

    // Special processing for LinkedIn
    if (isLinkedIn) {
      console.log('=== LINKEDIN DYNAMIC PARAMETERS MAPPING (DEBUG) ===');
      console.log('🔍 All URL params:', Array.from(params.entries()));
      const linkedinParamsMap = {
        'campaign_group_id': 'linkedin_campaign_group_id',
        'campaign_group_name': 'linkedin_campaign_group_name',
        'campaign_id': 'linkedin_campaign_id',
        'utm_campaign': 'linkedin_campaign_name',
        'utm_content': 'linkedin_ad_id',
        'creative_name': 'linkedin_ad_name'
      };
      console.log('📝 Current form values before LinkedIn mapping:', getValues());
      Object.entries(linkedinParamsMap).forEach(([paramName, fieldName]) => {
        const rawValue = params.get(paramName);
        console.log(`🔎 Checking param [${paramName}]: raw value =`, rawValue);
        if (rawValue) {
          let processedValue = rawValue;

          // URL decoding (for name parameters only)
          if (paramName.includes('_name') || paramName === 'utm_campaign') {
            try {
              processedValue = decodeURIComponent(rawValue.replace(/\+/g, ' '));
              console.log(`🔄 Decoded [${paramName}]: "${rawValue}" → "${processedValue}"`);
            } catch (e) {
              console.error(`❌ Decode failed for [${paramName}]:`, e);
              processedValue = rawValue; // Use original value on failure
            }
          }
          console.log(`📤 Setting [${fieldName}] = "${processedValue}"`);
          try {
            setValue(fieldName as keyof FormValues, processedValue);
            const verifyValue = getValues(fieldName as keyof FormValues);
            console.log(`✅ Successfully set [${fieldName}]. Verify:`, verifyValue);
          } catch (error) {
            console.error(`❌ Failed to set [${fieldName}]:`, error);
            console.error('Error details:', error.message);
          }
        } else {
          console.log(`⚪ Parameter [${paramName}] not found in URL`);
        }
      });
      console.log('📝 Final form values after LinkedIn mapping:', getValues());
    }
    console.log('=== PARAMETER PARSING COMPLETE ===');
  }, [setValue]);

  const onSubmit = async (values: FormValues) => {
    console.log('=== FORM SUBMISSION STARTED ===');
    console.log('Form submission values:', JSON.stringify(values, null, 2));
    try {
      console.log('=== ATTEMPTING SUPABASE INSERT ===');
      const insertData = {
        email: values.email,
        consent: values.consent,
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
        linkedin_ad_name: values.linkedin_ad_name || null
      };
      console.log('Insert data:', JSON.stringify(insertData, null, 2));
      const result = await supabase.from('email_signups').insert([insertData]);
      console.log('=== SUPABASE INSERT RESULT ===');
      console.log('Full result:', JSON.stringify(result, null, 2));
      console.log('Error:', result.error);
      console.log('Data:', result.data);
      if (result.error) {
        console.error('=== SUPABASE ERROR DETAILS ===');
        console.error('Error code:', result.error.code);
        console.error('Error message:', result.error.message);
        console.error('Error details:', result.error.details);
        console.error('Error hint:', result.error.hint);

        // Analytics: Track form submission failure
        import('@/lib/analytics').then(({
          analytics
        }) => {
          analytics.trackFormSubmit('waitlist', false);
        });
        if (result.error.code === '23505') {
          toast.error("This email is already registered.");
        } else {
          toast.error(`Error occurred during registration: ${result.error.message}`);
        }
        return;
      }
      console.log('=== SUCCESS ===');
      // Analytics: Track form submission success
      import('@/lib/analytics').then(({
        analytics
      }) => {
        analytics.trackFormSubmit('waitlist', true);
      });
      toast.success("Notification signup completed. We'll send you news soon!");
      reset();
    } catch (error) {
      console.error('=== CATCH ERROR ===');
      console.error('Catch error type:', typeof error);
      console.error('Catch error:', error);
      console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
      console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');

      // Analytics: Track form submission error
      import('@/lib/analytics').then(({
        analytics
      }) => {
        analytics.trackFormSubmit('waitlist', false);
      });
      toast.error(`Error occurred during registration: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return <section id="cta" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-3 text-center">Join the Waitlist now.</h2>
        <p className="text-muted-foreground mb-6 text-center">You can use the beta version faster than anyone else.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="hello@localdocs.ai" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            
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
            
            <div className="flex items-center gap-2">
              <Checkbox id="consent" checked={watch("consent")} onCheckedChange={checked => setValue("consent", !!checked)} />
              <Label htmlFor="consent" className="text-sm text-muted-foreground">I agree to the collection of personal information and receiving notifications.</Label>
            </div>
            {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
            <div>
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">Join Waitlist</Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">The email you submit will not be used for purposes other than beta notifications and guidance.</p>
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
      name: 'Does it really work without internet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it works without internet once you install the PC app. Your documents will never be leaked externally.'
      }
    }, {
      '@type': 'Question',
      name: 'What file formats are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support HWP/HWPX, PDF, PPTX, DOCX, etc. However, they may be applied sequentially.'
      }
    }, {
      '@type': 'Question',
      name: 'How are result sources provided?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Localdocs provides all results based on documents. Therefore, all answers display document source links or locations within documents (pages, paragraphs, etc.) along with the results. Citation format may vary depending on the data source.'
      }
    }, {
      '@type': 'Question',
      name: 'Is data transmitted to the cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is never transmitted. Data is processed only within the PC and is never transmitted to the cloud. If you are concerned, you can run it with the internet turned off.'
      }
    }, {
      '@type': 'Question',
      name: 'Is there an enterprise deployment model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through the Enterprise plan, we support central license management for large teams and offline installation/deployment for air-gapped environments. We will consult on the optimal solution for your company environment through separate inquiries.'
      }
    }, {
      '@type': 'Question',
      name: 'How accurate is the Korean-specialized summary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on our self-developed Korean-specialized on-device LLM, we aim for the best summary performance in reports, papers, legal documents, etc. in the domestic work environment. Specific performance metrics will be transparently disclosed with the launch.'
      }
    }]
  };

  return <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-6">FAQ</h2>
        <div className="grid gap-4">
          <details className="feature-card"><summary className="font-medium">Does it really work without internet?</summary><p className="mt-2 text-muted-foreground">Yes, it works without internet once you install the PC app. Your documents will never be leaked externally.</p></details>
          <details className="feature-card"><summary className="font-medium">What file formats are supported?</summary><p className="mt-2 text-muted-foreground">We support HWP/HWPX, PDF, PPTX, DOCX, etc. However, they may be applied sequentially.</p></details>
          <details className="feature-card"><summary className="font-medium">How are result sources provided?</summary><p className="mt-2 text-muted-foreground">Localdocs provides all results based on documents. Therefore, all answers display document source links or locations within documents (pages, paragraphs, etc.) along with the results. Citation format may vary depending on the data source.</p></details>
          <details className="feature-card"><summary className="font-medium">Is data transmitted to the cloud?</summary><p className="mt-2 text-muted-foreground">No, data is not transmitted externally. Since AI operates on your personal PC, you can use it normally even in air-gapped networks or when the internet is disconnected.</p></details>
          <details className="feature-card"><summary className="font-medium">Is there an enterprise deployment model?</summary><p className="mt-2 text-muted-foreground">Yes, through the Enterprise plan, we support central license management for large teams and offline installation/deployment for air-gapped environments. We will consult on the optimal solution for your company environment through 'separate inquiries'.</p></details>
          <details className="feature-card"><summary className="font-medium">How accurate is the Korean-specialized summary?</summary><p className="mt-2 text-muted-foreground">Based on our self-developed Korean-specialized on-device LLM, we aim for the best summary performance in reports, papers, legal documents, etc. in the domestic work environment. Specific performance metrics will be transparently disclosed with the launch.</p></details>
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

const IndexEn = () => {
  // Enable automatic page view and section view tracking
  usePageTracking();
  useSectionTracking();
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

export default IndexEn;