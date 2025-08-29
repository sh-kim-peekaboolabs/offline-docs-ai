import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, WifiOff, FileText, Link as LinkIcon, Quote, Search, Lock, Download, AlertTriangle, Cloud, X, CheckCircle, Zap, Brain, Building2, Scale, TrendingUp, Shield, Star, Globe } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { useEffect, useState } from "react";
import { usePageTracking, useSectionTracking } from "@/hooks/useAnalytics";

const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해 주세요."),
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

const LanguageToggle = ({ language, onToggle }: { language: 'ko' | 'en', onToggle: () => void }) => (
  <Button 
    variant="outline" 
    size="sm" 
    onClick={onToggle}
    className="flex items-center gap-2 min-w-[80px]"
  >
    <Globe className="w-4 h-4" />
    <span>{language === 'ko' ? '한국어' : 'English'}</span>
  </Button>
);

const Nav = ({ language, onLanguageToggle }: { language: 'ko' | 'en', onLanguageToggle: () => void }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const navItems = language === 'ko' ? {
    features: '제품 특징',
    scenarios: '사용 시나리오', 
    security: '보안',
    pricing: '요금제',
    faq: 'FAQ',
    cta: 'Waitlist 등록',
    ctaButton: 'Waitlist 등록하기'
  } : {
    features: 'Features',
    scenarios: 'Use Cases',
    security: 'Security', 
    pricing: 'Pricing',
    faq: 'FAQ',
    cta: 'Join Waitlist',
    ctaButton: 'Join Waitlist'
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
          <img src={logo} alt="localdocs 3D 문서 스택 로고" width={40} height={40} className="logo-interactive" loading="lazy" />
          <div className="text-xl font-bold text-primary">Localdocs</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="story-link">{navItems.features}</a>
          <a href="#scenarios" className="story-link">{navItems.scenarios}</a>
          <a href="#security" className="story-link">{navItems.security}</a>
          <a href="#pricing" className="story-link">{navItems.pricing}</a>
          <a href="#faq" className="story-link">{navItems.faq}</a>
          <a href="#cta" className="story-link">{navItems.cta}</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle language={language} onToggle={onLanguageToggle} />
          <a href="#cta"><Button variant="hero" size="lg">{navItems.ctaButton}</Button></a>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ language }: { language: 'ko' | 'en' }) => {
  const content = language === 'ko' ? {
    badge: '내 PC부터 Notion까지, 흩어진 모든 문서에서',
    title: '한 번의 질문으로, 원하는 답을 찾으세요.',
    subtitle: '빠르고 안전한 AI 사내 문서 탐색기',
    ctaButton: 'Waitlist 등록하기',
    statusText: '🔥 벌써 100명+ 신청 완료!',
    betaText: '* 한정된 베타 테스터 모집 중 *'
  } : {
    badge: 'From your PC to Notion, across all scattered documents',
    title: 'Find the answers you need with a single question.',
    subtitle: 'Fast and secured AI enterprise search',
    ctaButton: 'Join Waitlist',
    statusText: '🔥 100+ people already signed up!',
    betaText: '* Limited beta tester recruitment *'
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-70" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-70" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-70" style={{ animationDelay: '4s' }} />
      
      <div className="container relative z-10 py-20 md:py-32 text-center">
        {/* Enhanced badge with better styling */}
        <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8 shadow-lg animate-fade-in">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          {content.badge}
        </div>
        
        {/* Enhanced title with better typography */}
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 animate-fade-in bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
          {content.title}
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium">
          {content.subtitle}
        </p>
        
        {/* Enhanced CTA section */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 animate-fade-in">
          <a href="#cta" className="group">
            <Button variant="hero" size="xl" className="text-lg px-8 py-4 shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              {content.ctaButton}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Button>
          </a>
          
          {/* Enhanced status badge */}
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce shadow-lg shadow-green-500/50" />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/50" style={{ animationDelay: '0.1s' }} />
              <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce shadow-lg shadow-green-300/50" style={{ animationDelay: '0.2s' }} />
            </div>
            <span className="text-sm font-semibold text-green-700">{content.statusText}</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce shadow-lg shadow-green-300/50" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/50" style={{ animationDelay: '0.4s' }} />
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce shadow-lg shadow-green-500/50" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          {/* Enhanced beta text */}
          <p className="text-sm text-muted-foreground/80 animate-fade-in font-medium tracking-wide">
            {content.betaText}
          </p>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

const Problem = ({ language }: { language: 'ko' | 'en' }) => {
  const content = language === 'ko' ? {
    title: 'Localdocs를 써야하는 이유',
    problems: [
      {
        title: '기밀 문서라 ChatGPT를 사용할 수 없어요',
        description: '보안 문서라 외부에 유출되면 안돼요',
        icon: ShieldCheck,
        color: 'red'
      },
      {
        title: '수백 페이지 문서 처리 한계',
        description: '문서 개수가 많거나, 용량이 크면 토큰 제한이 걸려요',
        icon: AlertTriangle,
        color: 'blue'
      },
      {
        title: '폐쇄망이라 인터넷을 못 써요',
        description: 'AI를 쓰고 싶어도 못 쓰는 상황이에요',
        icon: WifiOff,
        color: 'orange'
      },
      {
        title: 'HWP 파일 미지원',
        description: 'ChatGPT도 HWP파일을 지원하지 않아 매번 PDF로 변환해야 해요.',
        icon: X,
        color: 'red'
      }
    ]
  } : {
    title: 'Why you need Localdocs',
    problems: [
      {
        title: "Can't use ChatGPT with confidential documents",
        description: "Security documents cannot be leaked externally",
        icon: ShieldCheck,
        color: 'red'
      },
      {
        title: 'Hundreds of pages document processing limits',
        description: 'Token limits apply when there are many documents or large files',
        icon: AlertTriangle,
        color: 'blue'
      },
      {
        title: "Can't access internet in closed networks",
        description: "Want to use AI but can't in this environment",
        icon: WifiOff,
        color: 'orange'
      },
      {
        title: 'Limited document format support',
        description: 'Need to convert files to supported formats every time',
        icon: X,
        color: 'red'
      }
    ]
  };

  return (
    <section className="section pt-8" aria-labelledby="problem-heading">
      <div className="container">
        <h2 id="problem-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">{content.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.problems.map((problem, index) => (
            <div key={index} className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br from-${problem.color}-50 to-${problem.color}-100 opacity-30`}></div>
              <div className="relative z-10 flex-shrink-0">
                <div className={`p-3 rounded-xl ${problem.color === 'red' ? 'bg-destructive/10 text-destructive' : `bg-${problem.color}-100 text-${problem.color}-600`}`}>
                  <problem.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
                <h3 className="font-semibold mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground mt-auto">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = ({ language }: { language: 'ko' | 'en' }) => {
  const content = language === 'ko' ? {
    title: '핵심 기능',
    features: [
      {
        icon: WifiOff,
        title: '오프라인 AI',
        description: 'AI가 내 PC에서 동작해 자료가 외부로 나갈 일이 없어요.'
      },
      {
        icon: Search,
        title: '사내 문서 검색 AI',
        description: 'Notion, Google Drive, 내 PC 등 여러 곳에 흩어져 있는 문서를 한번에 검색하세요.',
        highlight: true
      },
      {
        icon: FileText,
        title: 'PDF, OCR, XLSX, PPTX 등 지원',
        description: 'PDF부터 XLSX, PPTX까지 다양한 문서를 지원해요.'
      },
      {
        icon: Quote,
        title: '모든 답변에 출처 제공',
        description: '문서에서 찾은 출처를 바로 확인할 수 있어요.'
      },
      {
        icon: LinkIcon,
        title: '문서·링크·텍스트 통합',
        description: '하나의 지식 베이스에서 한번에 분석해요.'
      },
      {
        icon: Brain,
        title: '한국어 특화 AI',
        description: '한국어 문맥·문체에 최적화된 AI를 탑재했어요.'
      },
      {
        icon: Shield,
        title: '기업급 보안',
        description: '데이터가 PC를 벗어나지 않아 완벽한 보안을 보장합니다.'
      }
    ]
  } : {
    title: 'Core Features',
    features: [
      {
        icon: WifiOff,
        title: 'Offline AI',
        description: 'AI runs on your PC so your data never leaves your device.'
      },
      {
        icon: Search,
        title: 'Enterprise Document Search AI',
        description: 'Search documents scattered across Notion, Google Drive, your PC and more all in one place.',
        highlight: true
      },
      {
        icon: FileText,
        title: 'PDF, OCR, XLSX, PPTX Support',
        description: 'Support for diverse documents from PDF to XLSX, PPTX and more.'
      },
      {
        icon: Quote,
        title: 'Source Citation for All Answers',
        description: 'Instantly verify sources found in documents.'
      },
      {
        icon: LinkIcon,
        title: 'Document·Link·Text Integration',
        description: 'Analyze everything in one unified knowledge base.'
      },
      {
        icon: Shield,
        title: 'Enterprise-Grade Security',
        description: 'Your data stays on your device with zero external transmission.'
      }
    ]
  };

  return (
    <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">{content.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content.features.map((feature, index) => (
            <div key={index} className={`feature-card text-center group gpu-optimized ${feature.highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simplified components with optional language props for now
const Solution = ({ language }: { language?: 'ko' | 'en' }) => null;
const Comparison = ({ language }: { language?: 'ko' | 'en' }) => null;
const Scenarios = ({ language }: { language?: 'ko' | 'en' }) => null;
const Testimonials = ({ language }: { language?: 'ko' | 'en' }) => null;
const Security = ({ language }: { language?: 'ko' | 'en' }) => {
  const content = language === 'ko' ? {
    title: '보안',
    subtitle: '당신의 데이터는 절대 외부로 나가지 않습니다',
    features: [
      {
        icon: Lock,
        title: '100% 온디바이스 처리',
        description: '모든 AI 처리가 당신의 PC에서만 이루어집니다. 서버 전송이 존재하지 않습니다.'
      },
      {
        icon: Shield,
        title: '기업급 보안',
        description: '금융, 의료, 정부 기관에서 요구하는 최고 수준의 보안을 제공합니다.'
      },
      {
        icon: WifiOff,
        title: '폐쇄망 환경 지원',
        description: '인터넷 연결 없이도 완벽하게 동작하여 완전한 격리 환경을 보장합니다.'
      }
    ]
  } : {
    title: 'Security',
    subtitle: 'Your data never leaves your device',
    features: [
      {
        icon: Lock,
        title: '100% On-Device Processing',
        description: 'All AI processing happens only on your PC. No server transmission exists.'
      },
      {
        icon: Shield,
        title: 'Enterprise-Grade Security',
        description: 'Provides the highest level of security required by financial, medical, and government institutions.'
      },
      {
        icon: WifiOff,
        title: 'Air-Gapped Environment Support',
        description: 'Works perfectly without internet connection, ensuring complete isolation.'
      }
    ]
  };

  return (
    <section id="security" className="section bg-secondary-lighter/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <div key={index} className="feature-card text-center">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ language }: { language?: 'ko' | 'en' }) => {
  const content = language === 'ko' ? {
    title: '요금제',
    subtitle: '출시 예정인 요금제를 미리 확인하세요',
    plans: [
      {
        name: 'Personal',
        price: '월 29,000원',
        description: '개인 사용자를 위한 기본 플랜',
        features: [
          '무제한 문서 처리',
          '기본 AI 모델',
          '5GB 저장공간',
          '이메일 지원'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '월 59,000원',
        description: '전문가와 소규모 팀을 위한 플랜',
        features: [
          '무제한 문서 처리',
          '고급 AI 모델',
          '50GB 저장공간',
          '우선 지원',
          '팀 공유 기능'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '별도 문의',
        description: '대기업을 위한 맞춤형 솔루션',
        features: [
          '무제한 모든 기능',
          '맞춤형 AI 모델',
          '무제한 저장공간',
          '전담 지원',
          '온프레미스 배포',
          'SSO 연동'
        ],
        popular: false
      }
    ]
  } : {
    title: 'Pricing',
    subtitle: 'Check out our upcoming pricing plans',
    plans: [
      {
        name: 'Personal',
        price: '$29/month',
        description: 'Basic plan for individual users',
        features: [
          'Unlimited document processing',
          'Standard AI models',
          '5GB storage',
          'Email support'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$59/month',
        description: 'Perfect for professionals and small teams',
        features: [
          'Unlimited document processing',
          'Advanced AI models',
          '50GB storage',
          'Priority support',
          'Team sharing features'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Contact us',
        description: 'Custom solution for large organizations',
        features: [
          'Unlimited everything',
          'Custom AI models',
          'Unlimited storage',
          'Dedicated support',
          'On-premises deployment',
          'SSO integration'
        ],
        popular: false
      }
    ]
  };

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {content.plans.map((plan, index) => (
            <div key={index} className={`feature-card ${plan.popular ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {language === 'ko' ? '인기' : 'Popular'}
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
                asChild
              >
                <a href="#cta">
                  {language === 'ko' ? 'Waitlist 등록' : 'Join Waitlist'}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const HowItWorks = ({ language }: { language?: 'ko' | 'en' }) => null;

const CTA = ({ language }: { language?: 'ko' | 'en' }) => {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log('=== URL PARAMETER PARSING ===');
    console.log('Current URL:', window.location.href);
    console.log('URL search params:', window.location.search);
    console.log('All params:', Array.from(params.entries()));

    // utm_source 확인
    const utmSource = params.get('utm_source');
    const isLinkedIn = utmSource === 'linkedin';
    console.log('UTM Source:', utmSource, 'Is LinkedIn:', isLinkedIn);

    // UTM 파라미터 처리 - 모든 UTM 필드 포함
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

    // Facebook인 경우 특별 처리 (fbclid가 있거나 utm_source가 fb/facebook인 경우)
    const isFacebook = utmSource === 'fb' || utmSource === 'facebook' || params.has('fbclid');
    if (isFacebook) {
      console.log('=== FACEBOOK DYNAMIC PARAMETERS MAPPING (DEBUG) ===');
      console.log('🔍 All URL params:', Array.from(params.entries()));
      console.log('🎯 Facebook detection - utm_source:', utmSource, ', has fbclid:', params.has('fbclid'));
      console.log('📍 Key params check - utm_campaign:', params.get('utm_campaign'), ', utm_content:', params.get('utm_content'));
      const facebookParamsMap = {
        'utm_campaign': 'utm_campaign_name',  // Facebook의 utm_campaign을 utm_campaign_name으로 매핑
        'utm_content': 'utm_campaign_id',     // Facebook의 utm_content를 utm_campaign_id로 매핑
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
          
          // URL 디코딩 (이름 파라미터들만)
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

    // LinkedIn인 경우 특별 처리
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

          // URL 디코딩 (이름 파라미터들만)
          if (paramName.includes('_name') || paramName === 'utm_campaign') {
            try {
              processedValue = decodeURIComponent(rawValue.replace(/\+/g, ' '));
              console.log(`🔄 Decoded [${paramName}]: "${rawValue}" → "${processedValue}"`);
            } catch (e) {
              console.error(`❌ Decode failed for [${paramName}]:`, e);
              processedValue = rawValue; // 실패시 원본값 사용
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
  }, [setValue, getValues]);

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

        // Analytics: 폼 제출 실패 추적
        import('@/lib/analytics').then(({
          analytics
        }) => {
          analytics.trackFormSubmit('waitlist', false);
        });
        if (result.error.code === '23505') {
          toast.error("이미 등록된 이메일입니다.");
        } else {
          toast.error(`등록 중 오류가 발생했습니다: ${result.error.message}`);
        }
        return;
      }
      console.log('=== SUCCESS ===');
      // Analytics: 폼 제출 성공 추적
      import('@/lib/analytics').then(({
        analytics
      }) => {
        analytics.trackFormSubmit('waitlist', true);
      });
      toast.success("알림 신청이 완료되었습니다. 곧 소식을 전해 드릴게요!");
    } catch (error) {
      console.error('=== CATCH ERROR ===');
      console.error('Catch error type:', typeof error);
      console.error('Catch error:', error);
      console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
      console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');

      // Analytics: 폼 제출 에러 추적
      import('@/lib/analytics').then(({
        analytics
      }) => {
        analytics.trackFormSubmit('waitlist', false);
      });
      toast.error(`등록 중 오류가 발생했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
    }
  };

  const content = language === 'ko' ? {
    title: '지금 바로 Waitlist에 등록하세요.',
    description: '누구보다 빠르게 베타 버전을 사용할 수 있습니다.',
    emailPlaceholder: 'hello@localdocs.ai',
    consentText: '개인정보 수집 및 알림 수신에 동의합니다.',
    submitButton: 'Waitlist 등록하기'
  } : {
    title: 'Join the Waitlist Now!',
    description: 'Be among the first to use the beta version.',
    emailPlaceholder: 'hello@localdocs.ai',
    consentText: 'I agree to the collection and use of personal information',
    submitButton: 'Join Waitlist'
  };

  return (
    <section id="cta" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-3 text-center">{content.title}</h2>
        <p className="text-muted-foreground mb-6 text-center">{content.description}</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">이메일 주소</Label>
              <Input id="email" type="email" placeholder={content.emailPlaceholder} {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            
            {/* Hidden UTM 필드들 */}
            <input type="hidden" {...register("utm_source")} />
            <input type="hidden" {...register("utm_campaign_id")} />
            <input type="hidden" {...register("utm_medium")} />
            <input type="hidden" {...register("utm_campaign_name")} />
            <input type="hidden" {...register("utm_adset_id")} />
            <input type="hidden" {...register("utm_adset_name")} />
            <input type="hidden" {...register("utm_ad_id")} />
            <input type="hidden" {...register("utm_ad_name")} />
            
            {/* Hidden LinkedIn 필드들 */}
            <input type="hidden" {...register("linkedin_campaign_name")} />
            <input type="hidden" {...register("linkedin_ad_id")} />
            <input type="hidden" {...register("linkedin_campaign_group_id")} />
            <input type="hidden" {...register("linkedin_campaign_group_name")} />
            <input type="hidden" {...register("linkedin_campaign_id")} />
            <input type="hidden" {...register("linkedin_ad_name")} />
            
            <div className="flex items-center gap-2">
              <Checkbox id="consent" {...register("consent")} />
              <Label htmlFor="consent" className="text-sm text-muted-foreground">{content.consentText}</Label>
            </div>
            {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
            
            <div>
              <Button type="submit" variant="hero" size="lg" className="w-full">{content.submitButton}</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

const FAQ = ({ language }: { language?: 'ko' | 'en' }) => {
  const content = language === 'ko' ? {
    title: 'FAQ',
    faqs: [
      {
        question: '인터넷 없이 정말 동작하나요?',
        answer: '네, PC앱만 설치하면 인터넷 없이 동작합니다. 문서가 외부에 유출될 일이 전혀 없습니다.'
      },
      {
        question: '어떤 파일 형식을 지원하나요?',
        answer: 'PDF, PPTX, DOCX, XLSX, OCR 등을 지원합니다. 다만, 순차적으로 적용될 수 있습니다.'
      },
      {
        question: '결과 출처는 어떻게 제공되나요?',
        answer: 'Localdocs는 모든 결과를 문서 기반으로 제공합니다. 그래서 모든 답변엔 문서 출처 링크 또는 문서 내 위치를 표시합니다.'
      }
    ]
  } : {
    title: 'FAQ',
    faqs: [
      {
        question: 'Does it really work without internet?',
        answer: 'Yes, just install the PC app and it works without internet. Your documents will never be leaked externally.'
      },
      {
        question: 'What file formats do you support?',
        answer: 'We support PDF, PPTX, DOCX, XLSX, OCR and more. However, they may be applied sequentially.'
      },
      {
        question: 'How are result sources provided?',
        answer: 'Localdocs provides all results document-based. So all answers display document source links or document locations.'
      }
    ]
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{content.title}</h2>
        <div className="grid gap-4">
          {content.faqs.map((faq, index) => (
            <details key={index} className="feature-card">
              <summary className="font-medium">{faq.question}</summary>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ language }: { language?: 'ko' | 'en' }) => (
  <footer className="border-t">
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
  </footer>
);

const Index = () => {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };
  
  // 페이지뷰와 섹션뷰 자동 추적 활성화
  usePageTracking();
  useSectionTracking();
  
  return (
    <div>
      <Nav language={language} onLanguageToggle={toggleLanguage} />
      <main>
        <Hero language={language} />
        <Problem language={language} />
        <Features language={language} />
        <Solution language={language} />
        <Comparison language={language} />
        <Scenarios language={language} />
        <Testimonials language={language} />
        <Security language={language} />
        <HowItWorks language={language} />
        <Pricing language={language} />
        <CTA language={language} />
        <FAQ language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
