import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, WifiOff, FileText, Link as LinkIcon, Quote, Search, Lock, Download, AlertTriangle, Cloud, X, CheckCircle, Zap, Brain, Building2, Scale, TrendingUp, Shield, Star } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { useEffect } from "react";
import { usePageTracking, useSectionTracking } from "@/hooks/useAnalytics";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { translations } from "@/data/translations";

const formSchema = z.object({
  email: z.string().min(1, "이메일을 입력해 주세요.").email("유효한 이메일을 입력해 주세요."),
  consent: z.boolean().refine(val => val === true, {
    message: "동의가 필요합니다."
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
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
          <img src={logo} alt="localdocs 3D 문서 스택 로고" width={40} height={40} className="logo-interactive" loading="lazy" />
          <div className="text-xl font-bold text-primary">Localdocs</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="story-link">{t.nav.features}</a>
          <a href="#scenarios" className="story-link">{t.nav.scenarios}</a>
          <a href="#security" className="story-link">{t.nav.security}</a>
          <a href="#pricing" className="story-link">{t.nav.pricing}</a>
          <a href="#faq" className="story-link">{t.nav.faq}</a>
          <a href="#cta" className="story-link">{t.nav.waitlist}</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a href="#cta"><Button variant="hero" size="lg">{t.hero.cta}</Button></a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" aria-hidden />
      <div className="container relative py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-6">
          {t.hero.badge}
        </div>
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl leading-normal md:text-5xl font-bold">
          {t.hero.title}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <a href="#cta"><Button variant="hero" size="xl">{t.hero.cta}</Button></a>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-700">{t.hero.status}</span>
          </div>
          <p className="text-xs text-muted-foreground/70 animate-fade-in">{t.hero.beta}</p>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const icons = [ShieldCheck, AlertTriangle, WifiOff, FileText];
  const colors = [
    { bg: "from-red-50 to-red-100", icon: "bg-destructive/10 text-destructive" },
    { bg: "from-blue-50 to-blue-100", icon: "bg-blue-100 text-blue-600" },
    { bg: "from-orange-50 to-orange-100", icon: "bg-orange-100 text-orange-600" },
    { bg: "from-red-50 to-red-100", icon: "bg-red-100 text-red-600" }
  ];

  return (
    <section className="section pt-8" aria-labelledby="problem-heading">
      <div className="container">
        <h2 id="problem-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          {t.problem.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.problem.items.map((item, index) => {
            const IconComponent = icons[index];
            const color = colors[index];
            return (
              <div key={index} className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-30`}></div>
                <div className="relative z-10 flex-shrink-0">
                  <div className={`p-3 rounded-xl ${color.icon}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-auto">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const icons = [Lock, FileText, Quote, Lock];

  return (
    <section className="section" aria-labelledby="solution-heading">
      <div className="container">
        <h2 id="solution-heading" className="text-2xl md:text-3xl font-semibold mb-8">
          {t.solution.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.solution.items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="feature-card flex items-start gap-4">
                <IconComponent className="text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <a href="#cta"><Button variant="hero" size="lg">{t.hero.cta}</Button></a>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const icons = [WifiOff, Search, FileText, Quote, LinkIcon, language === 'ko' ? Brain : Lock];

  return (
    <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          {t.features.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.features.items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="feature-card text-center group gpu-optimized">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section" aria-labelledby="comparison-heading">
      <div className="container">
        <h2 id="comparison-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          {t.comparison.title}
        </h2>
        <div className="overflow-x-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary/5 to-primary/10">
                <tr>
                  {t.comparison.headers.map((header, index) => (
                    <th key={index} className={`text-${index === 0 ? 'left' : 'center'} p-6 font-semibold text-lg ${index === 2 ? 'text-primary' : index === 1 ? 'text-gray-600' : ''}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {t.comparison.rows.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="text-center p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                        <X className="w-4 h-4 mr-1" />
                        {row.others}
                      </span>
                    </td>
                    <td className="text-center p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {row.localdocs}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const Scenarios = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const environments = language === 'ko' ? [
    {
      id: 1,
      title: "엔터프라이즈 기업",
      description: "수백 페이지의 기술 표준 문서나 R&D 자료에서 필요한 스펙과 정보를 즉시 검색하여 개발 시간을 단축합니다.",
      icon: Building2,
      bgColor: "from-blue-500 to-blue-700",
      image: "/lovable-uploads/964e7f8b-0bcd-47ff-972d-4595b6bebcd0.png"
    },
    {
      id: 2,
      title: "법무법인",
      description: "수만 페이지에 달하는 증거 자료와 판례 DB에 속에서 사건의 핵심 쟁점과 인용할 근거를 빠르게 찾아내 소송 전략을 수립합니다.",
      icon: Scale,
      bgColor: "from-amber-700 to-orange-800",
      image: "/lovable-uploads/3098a8d7-6b45-47dc-abc4-9946c5c83a10.png"
    },
    {
      id: 3,
      title: "투자사 및 금융권",
      description: "수십 개의 투자 보고서와 실사 데이터에서 핵심 성장 동력이나 잠재적 리스크를 신속하게 식별하여 투자 결정을 내립니다.",
      icon: TrendingUp,
      bgColor: "from-emerald-600 to-teal-700",
      image: "/lovable-uploads/9bd95de7-d285-4dd7-ac4a-8fcc6ab83d7d.png"
    },
    {
      id: 4,
      title: "국방 및 공공기관",
      description: "인터넷이 차단된 폐쇄망 PC에서 대량의 보고서 및 정책 자료의 핵심 내용을 요약하고, 보안 유출 없이 신속하게 업무를 처리합니다.",
      icon: Shield,
      bgColor: "from-slate-600 to-gray-700",
      image: "/lovable-uploads/ebf98bf4-9354-4eca-b2a5-310ff4a6c967.png"
    }
  ] : [
    {
      id: 1,
      title: "Enterprise Companies",
      description: "Instantly search through hundreds of pages of technical standards and R&D materials to find required specs and information, reducing development time.",  
      icon: Building2,
      bgColor: "from-blue-500 to-blue-700",
      image: "/lovable-uploads/964e7f8b-0bcd-47ff-972d-4595b6bebcd0.png"
    },
    {
      id: 2,
      title: "Law Firms",
      description: "Quickly identify key issues and citations from tens of thousands of pages of evidence and case law databases to build litigation strategies.",
      icon: Scale,
      bgColor: "from-amber-700 to-orange-800", 
      image: "/lovable-uploads/3098a8d7-6b45-47dc-abc4-9946c5c83a10.png"
    },
    {
      id: 3,
      title: "Investment & Finance",
      description: "Rapidly identify key growth drivers and potential risks from dozens of investment reports and due diligence data to make investment decisions.",
      icon: TrendingUp,
      bgColor: "from-emerald-600 to-teal-700",
      image: "/lovable-uploads/9bd95de7-d285-4dd7-ac4a-8fcc6ab83d7d.png"
    },
    {
      id: 4,
      title: "Defense & Government",
      description: "Summarize key content from massive reports and policy materials on offline PCs in closed networks, processing work quickly without security breaches.",
      icon: Shield,
      bgColor: "from-slate-600 to-gray-700",
      image: "/lovable-uploads/ebf98bf4-9354-4eca-b2a5-310ff4a6c967.png"
    }
  ];

  return (
    <section id="scenarios" className="section bg-slate-900 text-white" aria-labelledby="scenarios-heading">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="scenarios-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ko' ? '이런 환경에서' : 'Effective in these environments'} <span className="text-blue-400">{language === 'ko' ? '효과적입니다' : ''}</span>
          </h2>
          <p className="text-lg text-gray-300">
            {language === 'ko' ? '대용량 문서 처리가 필요한 전문 분야에서 AI의 힘으로 업무 효율성을 극대화하세요' : 'Maximize work efficiency with AI power in professional fields requiring large document processing'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {environments.map((env) => {
            const IconComponent = env.icon;
            return (
              <div key={env.id} className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${env.bgColor} p-8 min-h-[280px] group hover:scale-[1.02] transition-transform duration-300`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{env.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">{env.description}</p>
                </div>
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                  <img 
                    src={env.image} 
                    alt={`${env.title} background`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />  
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">{language === 'ko' ? '당신의 업무 환경에 AI를 지금 바로 도입하세요' : 'Introduce AI to your work environment right now'}</p>
          <a href="#cta">
            <Button variant="hero" size="lg" className="bg-blue-600 hover:bg-blue-700">
              {language === 'ko' ? '바로 시작하기' : 'Get Started'} →
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
const Testimonials = () => {
  const { language } = useLanguage();
  
  const testimonials = language === 'ko' ? [
    {
      name: "김민수",
      role: "변호사",
      company: "법무법인 A",
      rating: 5,
      content: "수만 페이지의 판례 자료에서 핵심 쟁점을 찾는 시간이 90% 단축되었습니다. 이제 소송 전략 수립에 더 집중할 수 있어요.",
      avatar: "김"
    },
    {
      name: "박지영", 
      role: "투자 분석가",
      company: "KL 투자증권",
      rating: 5,
      content: "실사 보고서 분석에 걸리던 시간이 하루에서 2시간으로 줄었어요. 정확한 출처까지 제공돼서 투자 결정의 확신을 가질 수 있습니다.",
      avatar: "박"
    },
    {
      name: "이상훈",
      role: "R&D 팀장",
      company: "테크노나비에선",
      rating: 5,
      content: "기술 문서가 HWP로만 되어 있어서 방법 못 찾았는데, 이제 바로 질문하고 답을 얻을 수 있어서 개발 속도가 2배 빨라졌습니다.",
      avatar: "이"
    }
  ] : [
    {
      name: "Minsu Kim",
      role: "Attorney",
      company: "Law Firm A", 
      rating: 5,
      content: "The time it takes to find key issues from tens of thousands of case law materials has been reduced by 90%. Now I can focus more on developing litigation strategies.",
      avatar: "M"
    },
    {
      name: "Jiyoung Park",
      role: "Investment Analyst", 
      company: "KL Securities",
      rating: 5,
      content: "The time spent analyzing due diligence reports has been reduced from a day to 2 hours. With accurate citations provided, I can make investment decisions with confidence.",
      avatar: "J"
    },
    {
      name: "Sanghoon Lee",
      role: "R&D Team Lead",
      company: "TechnoNavison",
      rating: 5,
      content: "Technical documents were only available in proprietary formats, but now I can ask questions and get answers immediately, making development 2x faster.",
      avatar: "S"
    }
  ];

  return (
    <section className="section bg-gray-50 py-20" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {language === 'ko' ? '이미 경험한 분들의 이야기' : 'Stories from those who have experienced it'}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {language === 'ko' ? '업무 효율성이 눈에 띄게 향상되었다는 실제 사용자들의 생생한 후기' : 'Real user testimonials showing significant improvements in work efficiency'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} · {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            {language === 'ko' ? '당신도 이런 효율성을 경험해보세요' : 'Experience this efficiency yourself'}
          </p>
          <a href="#cta">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
              {language === 'ko' ? 'Waitlist 등록하기' : 'Join Waitlist'}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const securityFeatures = language === 'ko' ? [
    {
      title: "완전한 오프라인 처리",
      description: "모든 AI 처리가 사용자의 로컬 디바이스에서 실행되어 데이터가 외부로 전송되지 않습니다.",
      icon: Shield,
      color: "green"
    },
    {
      title: "엔드투엔드 암호화",
      description: "문서 저장부터 검색까지 모든 과정이 암호화되어 보호됩니다.",
      icon: Lock,
      color: "blue"
    },
    {
      title: "네트워크 독립성",
      description: "인터넷 연결 없이도 완전히 작동하여 폐쇄망 환경에서도 사용 가능합니다.",
      icon: WifiOff,
      color: "purple"
    }
  ] : [
    {
      title: "Complete Offline Processing",
      description: "All AI processing runs on your local device with no data transmitted externally.",
      icon: Shield,
      color: "green"
    },
    {
      title: "End-to-End Encryption",
      description: "All processes from document storage to search are encrypted and protected.",
      icon: Lock,
      color: "blue"
    },
    {
      title: "Network Independence",
      description: "Works completely without internet connection, usable even in closed network environments.",
      icon: WifiOff,
      color: "purple"
    }
  ];

  return (
    <section id="security" className="section bg-secondary-lighter/50" aria-labelledby="security-heading">
      <div className="container">
        <h2 id="security-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">{t.security.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/964e7f8b-0bcd-47ff-972d-4595b6bebcd0.png" 
              alt={language === 'ko' ? "보안 기능을 나타내는 방패와 자물쇠 3D 아이콘" : "3D icons of shield and lock representing security features"}
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClasses = {
                green: "bg-green-100 text-green-600",
                blue: "bg-blue-100 text-blue-600", 
                purple: "bg-purple-100 text-purple-600"
              };
              
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex-shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const plans = language === 'ko' ? [
    {
      name: "Personal",
      price: "무료",
      description: "개인 사용자를 위한 기본 기능",
      features: [
        "최대 100개 문서",
        "기본 검색 기능",
        "PDF, TXT 지원"
      ],
      buttonText: "무료로 시작하기",
      popular: false
    },
    {
      name: "Professional",
      price: "월 29,000원",
      description: "전문가와 소규모 팀을 위한 고급 기능",
      features: [
        "무제한 문서",
        "고급 AI 검색",
        "모든 파일 형식 지원",
        "HWP, OCR 지원",
        "우선 지원"
      ],
      buttonText: "14일 무료 체험",
      popular: true
    },
    {
      name: "Enterprise",
      price: "문의",
      description: "대기업과 기관을 위한 맞춤형 솔루션",
      features: [
        "온프레미스 배포",
        "맞춤형 AI 모델",
        "전담 지원팀",
        "SSO 통합",
        "고급 보안 기능"
      ],
      buttonText: "문의하기",
      popular: false
    }
  ] : [
    {
      name: "Personal",
      price: "Free",
      description: "Basic features for individual users",
      features: [
        "Up to 100 documents",
        "Basic search functionality",
        "PDF, TXT support"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$29/month",
      description: "Advanced features for professionals and small teams",
      features: [
        "Unlimited documents",
        "Advanced AI search",
        "All file formats supported",
        "PDF, OCR, XLSX, PPTX support",
        "Priority support"
      ],
      buttonText: "14-day Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact us",
      description: "Custom solutions for large organizations",
      features: [
        "On-premises deployment",
        "Custom AI models",
        "Dedicated support team",
        "SSO integration",
        "Advanced security features"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section" aria-labelledby="pricing-heading">
      <div className="container">
        <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">{t.pricing.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl border p-8 ${plan.popular ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {language === 'ko' ? '가장 인기' : 'Most Popular'}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const faqs = language === 'ko' ? [
    {
      question: "Localdocs는 어떤 운영체제를 지원하나요?",
      answer: "Windows, macOS, Linux 모든 운영체제를 지원합니다. 웹 브라우저를 통해 접근할 수 있어 별도의 설치가 필요하지 않습니다."
    },
    {
      question: "인터넷 연결 없이 정말 사용할 수 있나요?",
      answer: "네, 완전히 가능합니다. 모든 AI 처리가 로컬에서 이루어지므로 인터넷 연결이 전혀 필요하지 않습니다. 폐쇄망 환경에서도 안전하게 사용하실 수 있습니다."
    },
    {
      question: "지원하는 파일 형식은 어떻게 되나요?",
      answer: "PDF, DOCX, PPTX, XLSX, TXT, HWP, 그리고 스캔된 문서(OCR)까지 다양한 형식을 지원합니다. 특히 한국에서 많이 사용하는 HWP 파일도 완벽하게 지원합니다."
    },
    {
      question: "데이터는 어떻게 보호되나요?",
      answer: "모든 데이터는 사용자의 로컬 디바이스에서만 처리되며, 외부 서버로 전송되지 않습니다. 또한 저장된 모든 데이터는 암호화되어 보호됩니다."
    },
    {
      question: "문서 개수에 제한이 있나요?",
      answer: "Personal 플랜은 100개 문서까지, Professional 이상 플랜에서는 무제한으로 문서를 처리할 수 있습니다."
    }
  ] : [
    {
      question: "What operating systems does Localdocs support?",
      answer: "Localdocs supports all operating systems including Windows, macOS, and Linux. You can access it through a web browser without needing separate installation."
    },
    {
      question: "Can it really be used without internet connection?",
      answer: "Yes, absolutely. All AI processing happens locally, so no internet connection is required at all. You can safely use it in closed network environments."
    },
    {
      question: "What file formats are supported?",
      answer: "We support a wide variety of formats including PDF, DOCX, PPTX, XLSX, TXT, and even scanned documents (OCR). Multiple document formats are supported natively."
    },
    {
      question: "How is data protected?",
      answer: "All data is processed only on your local device and is never transmitted to external servers. Additionally, all stored data is encrypted for protection."
    },
    {
      question: "Is there a limit on the number of documents?",
      answer: "The Personal plan supports up to 100 documents, while Professional and higher plans allow unlimited document processing."
    }
  ];

  return (
    <section id="faq" className="section bg-secondary-lighter/50" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">{t.faq.title}</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      consent: false,
      utm_source: "",
      utm_campaign_id: "",
      utm_medium: "",
      utm_campaign_name: "",
      utm_adset_id: "",
      utm_adset_name: "",
      utm_ad_id: "",
      utm_ad_name: "",
      linkedin_campaign_name: "",
      linkedin_ad_id: "",
      linkedin_campaign_group_id: "",
      linkedin_campaign_group_name: "",
      linkedin_campaign_id: "",
      linkedin_ad_name: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // Ensure email is provided and consent is true
      if (!values.email || !values.consent) {
        toast.error(language === 'ko' ? "이메일과 동의가 필요합니다." : "Email and consent are required.");
        return;
      }

      // Prepare data for database insertion, converting empty strings to null for optional fields
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

      const { error } = await supabase
        .from('email_signups')
        .insert([insertData]);

      if (error) throw error;

      toast.success(language === 'ko' ? "Waitlist 등록이 완료되었습니다! 곧 연락드리겠습니다." : "Waitlist registration completed! We'll contact you soon.");
      form.reset();
    } catch (error) {
      console.error('Waitlist submission error:', error);
      toast.error(language === 'ko' ? "등록 중 오류가 발생했습니다. 다시 시도해 주세요." : "An error occurred during registration. Please try again.");
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_campaign_id: urlParams.get('utm_campaign_id') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign_name: urlParams.get('utm_campaign_name') || '',
      utm_adset_id: urlParams.get('utm_adset_id') || '',
      utm_adset_name: urlParams.get('utm_adset_name') || '',
      utm_ad_id: urlParams.get('utm_ad_id') || '',
      utm_ad_name: urlParams.get('utm_ad_name') || '',
      linkedin_campaign_name: urlParams.get('linkedin_campaign_name') || '',
      linkedin_ad_id: urlParams.get('linkedin_ad_id') || '',
      linkedin_campaign_group_id: urlParams.get('linkedin_campaign_group_id') || '',
      linkedin_campaign_group_name: urlParams.get('linkedin_campaign_group_name') || '',
      linkedin_campaign_id: urlParams.get('linkedin_campaign_id') || '',
      linkedin_ad_name: urlParams.get('linkedin_ad_name') || ''
    };

    Object.entries(utmData).forEach(([key, value]) => {
      if (value) {
        form.setValue(key as keyof FormValues, value);
      }
    });
  }, [form]);

  return (
    <section id="cta" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-4">{t.cta.title}</h2>
          <p className="text-muted-foreground mb-8">
            {language === 'ko' ? '베타 출시 알림을 받고 무료로 먼저 사용해 보세요.' : 'Get beta launch notifications and try it for free first.'}
          </p>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder={language === 'ko' ? "이메일 주소를 입력해 주세요" : "Enter your email address"}
                {...form.register("email")}
                className="text-center"
              />
              {form.formState.errors.email && (
                <p className="text-destructive text-sm mt-2">{form.formState.errors.email.message}</p>
              )}
            </div>
            
            <div className="flex items-center space-x-2 justify-center">
              <Checkbox
                id="consent"
                {...form.register("consent")}
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground">
                {language === 'ko' ? '개인정보 수집 및 이용에 동의합니다' : 'I agree to the collection and use of personal information'}
              </Label>
            </div>
            {form.formState.errors.consent && (
              <p className="text-destructive text-sm">{form.formState.errors.consent.message}</p>
            )}
            
            <Button type="submit" size="lg" className="w-full md:w-auto">
              {language === 'ko' ? '무료 얼리 액세스 신청' : 'Apply for Free Early Access'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Localdocs 로고" width={32} height={32} loading="lazy" />
            <span className="font-semibold">Localdocs</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Localdocs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  const { language } = useLanguage();
  console.log('Current language in Index:', language);
  
  usePageTracking();
  useSectionTracking();

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Comparison />
      <Scenarios />
      <Testimonials />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
