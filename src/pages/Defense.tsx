import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, Clock, Lock, FileText, Target, Zap, Shield, CheckCircle, Database, Users, ChevronDown } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해 주세요.").max(255, "이메일은 255자 이하여야 합니다."),
  consent: z.boolean().refine(val => val === true, {
    message: "동의가 필요합니다."
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
  linkedin_ad_name: z.string().max(200).optional()
});
type FormValues = z.infer<typeof formSchema>;
const CTASection = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors,
      isSubmitting
    },
    reset,
    setValue
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false,
      page_source: '/defense'
    }
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // UTM parameters
    const utmParams = {
      'utm_source': 'utm_source',
      'utm_campaign': 'utm_campaign_id',
      'utm_medium': 'utm_medium',
      'utm_campaign_name': 'utm_campaign_name',
      'utm_adset_id': 'utm_adset_id',
      'utm_adset_name': 'utm_adset_name',
      'utm_ad_id': 'utm_ad_id',
      'utm_ad_name': 'utm_ad_name'
    };
    Object.entries(utmParams).forEach(([paramName, fieldName]) => {
      const value = params.get(paramName);
      if (value) {
        setValue(fieldName as keyof FormValues, value);
      }
    });

    // LinkedIn parameters
    const linkedinParams = {
      'campaign_group_id': 'linkedin_campaign_group_id',
      'campaign_group_name': 'linkedin_campaign_group_name',
      'campaign_id': 'linkedin_campaign_id',
      'utm_campaign': 'linkedin_campaign_name',
      'utm_content': 'linkedin_ad_id',
      'creative_name': 'linkedin_ad_name'
    };
    Object.entries(linkedinParams).forEach(([paramName, fieldName]) => {
      const value = params.get(paramName);
      if (value) {
        setValue(fieldName as keyof FormValues, value);
      }
    });
  }, [setValue]);
  const onSubmit = async (values: FormValues) => {
    try {
      if (values.honeypot) {
        toast.error("잘못된 요청입니다.");
        return;
      }
      const insertData = {
        email: values.email,
        consent: values.consent,
        page_source: '/defense',
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
      const {
        error
      } = await supabase.from("email_signups").insert([insertData]);
      if (error) throw error;
      toast.success("등록이 완료되었습니다! 곧 연락드리겠습니다.");
      setIsSubmitSuccessful(true);
      reset();
      setTimeout(() => {
        setIsSubmitSuccessful(false);
      }, 3000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("등록 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };
  return <section id="cta" className="py-20 md:py-32 px-4 bg-gradient-to-br from-navy to-teal-dark relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/10 to-transparent animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          지금 바로 체험해보세요
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          설치부터 사용까지 5분이면 충분합니다.<br />
          폐쇄망에서도 안전하게 작동합니다.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 w-full">
              <Input type="email" placeholder="이메일 주소를 입력하세요" {...register("email")} className="h-14 text-lg bg-white text-navy border-0" disabled={isSubmitting} />
              {!isSubmitSuccessful && errors.email && <p className="text-sm text-red-300 mt-2 text-left">{errors.email.message}</p>}
            </div>
            
            <Button type="submit" size="lg" disabled={isSubmitting} className="bg-white text-navy hover:bg-gray-100 h-14 px-8 text-lg font-bold rounded-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all whitespace-nowrap">
              {isSubmitting ? "등록 중..." : "무료로 시작하기"} 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <input type="text" {...register("honeypot")} style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px'
        }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
          
          <input type="hidden" {...register("page_source")} />
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

          <div className="flex items-start gap-3 mt-4 justify-center">
            <Controller name="consent" control={control} render={({
            field
          }) => <Checkbox id="defense-consent" checked={field.value} onCheckedChange={field.onChange} className="mt-1 border-white data-[state=checked]:bg-white data-[state=checked]:text-navy" />} />
            <Label htmlFor="defense-consent" className="text-sm text-white/90 cursor-pointer leading-relaxed text-left">
              개인정보 수집 및 이용에 동의합니다
            </Label>
          </div>
          {!isSubmitSuccessful && errors.consent && <p className="text-sm text-red-300 mt-2">{errors.consent.message}</p>}
        </form>
        
        
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {[{
          icon: <Lock className="w-4 h-4" />,
          text: "완전 보안"
        }, {
          icon: <Clock className="w-4 h-4" />,
          text: "5분 설치"
        }, {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "무료 체험"
        }].map((item, idx) => <div key={idx} className="flex items-center gap-2 text-white/80">
              {item.icon}
              <span>{item.text}</span>
            </div>)}
        </div>
      </div>
    </section>;
};
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 64;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-white hover:text-teal transition-colors">
          로컬독스
        </button>
        <Button size="sm" onClick={() => scrollToSection('cta')} className="bg-teal hover:bg-teal-light text-white">
          무료 체험하기
        </Button>
      </div>
    </header>;
};
const Defense = () => {
  return <div className="min-h-screen bg-navy-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 md:pt-24 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            400페이지 군사 교범,<br />
            핵심만 10초에 찾으세요
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            폐쇄망에서도 동작하는 AI 문서 분석 솔루션<br />
            민감한 자료도 외부 유출 걱정 없이 사용하세요
          </p>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border-2 border-teal/30 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="aspect-video flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center mb-4 animate-pulse">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-teal border-b-[12px] border-b-transparent ml-1"></div>
              </div>
              <p className="text-lg font-semibold text-gray-300">데모 영상</p>
              <p className="text-sm text-gray-500 mt-2">(추후 삽입 예정)</p>
            </div>
          </div>
          
          <Button size="lg" onClick={() => scrollToSection('cta')} className="bg-teal hover:bg-teal-light text-white px-12 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-teal/50 transition-all hover:scale-105">
            무료 체험하기 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 md:py-32 px-4 bg-navy-dark scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in">
            이런 경험, 있으시죠?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[{
            icon: <Clock className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
            title: "400페이지 교범에서 Ctrl+F로 8시간",
            content: "작전 준비 시간은 촉박한데, 필요한 절차를 찾으려면 교범 여러 권을 뒤적이며 몇 시간씩 허비합니다.",
            delay: "0ms"
          }, {
            icon: <Lock className="w-10 h-10 md:w-12 md:h-12 text-red-500" />,
            title: "ChatGPT에 올릴 수 없는 민감 자료",
            content: "일반 AI 서비스는 인터넷이 필요하고, 보안 규정상 민감한 군사문서를 외부에 업로드할 수 없습니다.",
            delay: "100ms"
          }, {
            icon: <FileText className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />,
            title: "표와 수식이 뒤섞인 기술문서",
            content: "복잡한 표, 수식, 도표가 섞인 문서는 단순 검색으로는 정확한 정보를 찾기 어렵습니다.",
            delay: "200ms"
          }].map((item, idx) => <div key={idx} className="bg-gray-800 p-8 md:p-10 rounded-2xl border border-gray-700 hover:border-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in" style={{
            animationDelay: item.delay
          }}>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.content}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 md:py-32 px-4 bg-gradient-to-b from-navy-dark to-navy scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in">
            로컬독스가 해결합니다
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[{
            icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-teal" />,
            title: "8시간 → 10초",
            content: "400페이지 교범에서 필요한 절차를 10초 만에 찾아 정확한 출처와 함께 제공합니다.",
            delay: "0ms"
          }, {
            icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-teal" />,
            title: "폐쇄망에서도 동작",
            content: "인터넷 연결 없이 로컬에서만 작동. 민감한 군사문서도 외부 유출 걱정 없이 안전하게 분석할 수 있습니다.",
            delay: "100ms"
          }, {
            icon: <Target className="w-10 h-10 md:w-12 md:h-12 text-teal" />,
            title: "표, 수식도 완벽 인식",
            content: "복잡한 표, 기술 수식, 다이어그램도 정확하게 인식하고 분석합니다. 페이지가 넘어가는 내용도 놓치지 않습니다.",
            delay: "200ms"
          }].map((item, idx) => <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-2xl border-2 border-teal/50 hover:border-teal hover:shadow-2xl hover:shadow-teal/30 hover:scale-105 transition-all duration-300 animate-fade-in" style={{
            animationDelay: item.delay
          }}>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">{item.content}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-4 bg-gradient-to-br from-navy-dark via-navy to-teal-dark relative overflow-hidden scroll-mt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-12 md:mb-20 animate-fade-in text-white">
            왜 로컬독스인가요?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Feature 1 - Citations */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 md:p-14 rounded-3xl border-2 border-teal/30 hover:border-teal hover:shadow-2xl hover:shadow-teal/30 hover:scale-[1.03] transition-all duration-500 animate-fade-in" style={{
            animationDelay: '0ms'
          }}>
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-6xl">📄</span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-5 text-white">문장 단위로 출처 제공</h3>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  답변의 모든 문장마다 정확한 출처를 표시합니다. &apos;교범 p.47, 3번째 문단&apos;처럼 구체적으로 제공되어 신뢰도 높은 의사결정이 가능합니다.
                </p>
                
                {/* Visual Mockup */}
                <div className="w-full h-52 bg-gray-900 rounded-xl border border-teal/20 p-6 flex flex-col justify-center group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="space-y-4">
                    <p className="text-gray-200 font-mono text-sm leading-relaxed">
                      방어 작전의 핵심 원칙은 집중과 경제성입니다<sup className="text-teal font-bold">[1]</sup>
                    </p>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-teal" />
                      <p className="text-gray-400 text-xs font-mono">[출처: FM 3-90, p.47, 문단 3]</p>
                    </div>
                    <p className="text-gray-200 font-mono text-sm leading-relaxed">
                      화력 집중이 필수적입니다<sup className="text-teal font-bold">[2]</sup>
                    </p>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-teal" />
                      <p className="text-gray-400 text-xs font-mono">[출처: FM 3-90, p.51, 문단 2]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Table Recognition */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 md:p-14 rounded-3xl border-2 border-teal/30 hover:border-teal hover:shadow-2xl hover:shadow-teal/30 hover:scale-[1.03] transition-all duration-500 animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-6xl">📊</span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-5 text-white">표와 수식도 완벽 인식</h3>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  복잡한 기술 표, 수학 수식, 다이어그램을 정확하게 인식하고 분석합니다. 페이지가 넘어가는 표도 끊김 없이 처리합니다.
                </p>
                
                {/* Visual Mockup */}
                <div className="w-full h-52 bg-gray-900 rounded-xl border border-teal/20 p-6 flex flex-col justify-center group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="bg-gray-800 p-3 rounded font-semibold text-gray-200">장비</div>
                      <div className="bg-gray-800 p-3 rounded font-semibold text-gray-200">수량</div>
                      <div className="bg-gray-800 p-3 rounded font-semibold text-gray-200">상태</div>
                      <div className="text-gray-400 p-2">M4A1</div>
                      <div className="text-gray-400 p-2">240</div>
                      <div className="text-gray-400 p-2">정상</div>
                      <div className="text-gray-400 p-2">K2</div>
                      <div className="text-gray-400 p-2">180</div>
                      <div className="text-gray-400 p-2">정상</div>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-400 font-semibold text-sm">표 인식 완료 ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Offline */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 md:p-14 rounded-3xl border-2 border-teal/30 hover:border-teal hover:shadow-2xl hover:shadow-teal/30 hover:scale-[1.03] transition-all duration-500 animate-fade-in" style={{
            animationDelay: '400ms'
          }}>
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <div className="relative">
                    <span className="text-5xl">🔌</span>
                    <span className="absolute -top-1 -right-1 text-3xl">⚡</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-5 text-white">인터넷 연결 불필요</h3>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  완전히 로컬에서만 작동합니다. 폐쇄망 환경에서도 문제없이 사용 가능하며, 민감한 자료가 외부로 유출될 위험이 없습니다.
                </p>
                
                {/* Visual Mockup */}
                <div className="w-full h-52 bg-gray-900 rounded-xl border border-teal/20 p-6 flex items-center justify-center group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex items-center justify-around w-full">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-3xl border border-teal/30">
                        💻
                      </div>
                      <span className="text-teal font-semibold text-sm">로컬</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <ArrowRight className="w-8 h-8 text-teal" />
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                        <span className="text-red-400 text-2xl font-bold">✕</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-teal/20 rounded-xl flex items-center justify-center text-3xl border-2 border-teal">
                        🔒
                      </div>
                      <span className="text-teal font-semibold text-sm">안전</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 - Multiple Documents */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 md:p-14 rounded-3xl border-2 border-teal/30 hover:border-teal hover:shadow-2xl hover:shadow-teal/30 hover:scale-[1.03] transition-all duration-500 animate-fade-in" style={{
            animationDelay: '600ms'
          }}>
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-6xl">📚</span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-5 text-white">여러 문서 동시 분석</h3>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  교범, 매뉴얼, 보고서 등 여러 문서를 한 번에 업로드하고 통합 검색 및 비교 분석이 가능합니다.
                </p>
                
                {/* Visual Mockup */}
                <div className="w-full h-52 bg-gray-900 rounded-xl border border-teal/20 p-6 flex items-center justify-center group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="relative flex items-center justify-center">
                    {[1, 2, 3, 4].map((num, i) => <div key={num} className="absolute w-20 h-28 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border-2 border-teal/40 flex flex-col items-center justify-center text-lg font-bold transition-transform duration-300" style={{
                    transform: `translateX(${(i - 1.5) * 32}px) translateY(${i * 4}px) rotate(${(i - 1.5) * 8}deg)`,
                    zIndex: 4 - i
                  }}>
                        <span className="text-3xl mb-2">📄</span>
                        <span className="text-teal">{num}</span>
                      </div>)}
                  </div>
                  <div className="absolute bottom-8">
                    <span className="text-teal font-bold text-sm">통합 검색 가능</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 md:py-32 px-4 bg-navy scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in">
            실제로 어떻게 활용하나요?
          </h2>
          
          <div className="space-y-12">
            {[{
            situation: "긴급 작전 명령이 떨어졌는데, 관련 교범 내용을 빠르게 확인해야 할 때",
            label: "작전 계획 수립",
            before: ["교범 5권을 뒤적이며 8시간 소요", "중요한 절차를 놓칠 위험"],
            after: ["'방어 작전 체크리스트는?' 질문으로 10초 해결", "출처와 함께 정확한 절차 확인", "작전 계획 수립 시간 8시간 단축"]
          }, {
            situation: "장비 고장 시 기술교범에서 정비 절차를 찾아야 할 때",
            label: "장비 정비",
            before: ["300페이지 기술교범을 Ctrl+F로 검색", "표로 되어있는 부품 번호 찾기 어려움"],
            after: ["'XX 부품 교체 절차는?' 질문으로 즉시 해결", "표 안의 부품 번호도 정확히 인식", "정비 시간 2시간 단축"]
          }, {
            situation: "신병 교육을 위해 교범 내용을 정리해야 할 때",
            label: "교육 자료 준비",
            before: ["여러 교범에서 관련 내용 수작업 복사", "출처 정리에 시간 소요"],
            after: ["'기본 전술 개념 요약해줘' 질문으로 요약 생성", "출처가 자동으로 포함되어 교육자료 완성", "자료 준비 시간 5시간 단축"]
          }].map((useCase, idx) => <div key={idx} className="bg-gray-800 p-10 rounded-3xl border-2 border-teal/30 hover:border-teal/50 transition-all">
                <div className="inline-block bg-teal px-6 py-2 rounded-full text-sm font-bold mb-6">
                  {useCase.label}
                </div>
                <p className="text-xl font-bold mb-8 text-gray-100">"{useCase.situation}"</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center">
                      <span className="mr-2">Before</span>
                    </h4>
                    <ul className="space-y-3">
                      {useCase.before.map((item, i) => <li key={i} className="flex items-start text-gray-300">
                          <span className="text-red-400 mr-3">❌</span>
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                      <span className="mr-2">After</span>
                    </h4>
                    <ul className="space-y-3">
                      {useCase.after.map((item, i) => <li key={i} className="flex items-start text-gray-200">
                          <span className="text-green-400 mr-3">✅</span>
                          <span className={item.includes('단축') ? 'font-bold text-teal' : ''}>{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 md:py-32 px-4 bg-navy-dark relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in">
            보안이 최우선입니다
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[{
            icon: "💻",
            title: "모든 데이터는 로컬에만",
            points: ["인터넷 연결 불필요", "문서와 AI 모델 모두 로컬 저장", "외부 서버 전송 없음", "폐쇄망 환경 완벽 지원"],
            delay: "0ms"
          }, {
            icon: "🔒",
            title: "민감 정보 완벽 보호",
            points: ["업로드한 문서는 로컬에만 저장", "클라우드 동기화 없음", "삭제 시 완전히 제거", "보안 규정 준수"],
            delay: "100ms"
          }, {
            icon: "✅",
            title: "국방/금융권 적용 사례",
            points: ["보안에 민감한 기관에서 검증", "폐쇄망 환경 실전 테스트 완료", "안전한 AI 문서 분석 솔루션"],
            delay: "200ms"
          }].map((security, idx) => <div key={idx} className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border-2 border-teal/30 hover:border-teal hover:shadow-2xl hover:shadow-teal/20 transition-all duration-300 animate-fade-in" style={{
            animationDelay: security.delay
          }}>
                <div className="text-5xl md:text-6xl mb-6 text-center">{security.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-center mb-6">{security.title}</h3>
                <ul className="space-y-3">
                  {security.points.map((point, i) => <li key={i} className="flex items-start text-gray-200">
                      <span className="text-teal mr-3 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
          
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-teal bg-teal/10 animate-pulse">
              <div className="text-center">
                <Shield className="w-12 h-12 text-teal mx-auto mb-2" />
                <p className="text-xs font-bold text-teal">보안 검증</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 px-4 bg-navy scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            도입 문의
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            조직 규모에 맞는 맞춤형 솔루션을 제공합니다
          </p>
          
          {/* Single Enterprise Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-teal rounded-3xl p-16 text-center shadow-2xl shadow-teal/30 hover:shadow-teal/50 hover:scale-[1.02] transition-all duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="text-6xl">🏢</span>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                기업/기관용 솔루션
              </h3>
              
              {/* Description */}
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                국방, 금융, 연구기관 등<br />
                보안이 중요한 조직을 위한 맞춤형 솔루션
              </p>
              
              {/* Features */}
              <ul className="space-y-4 mb-12 text-left max-w-md mx-auto">
                {["폐쇄망 완전 지원", "온프레미스 설치", "무제한 사용자", "기술 지원 포함"].map((feature, idx) => <li key={idx} className="flex items-center gap-3 text-gray-200 text-lg">
                    <CheckCircle className="w-6 h-6 text-teal flex-shrink-0" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              
              {/* CTA Button */}
              <Button size="lg" onClick={() => scrollToSection('cta')} className="bg-teal hover:bg-teal-light text-white px-12 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-teal/50 transition-all hover:scale-105">
                도입 문의하기 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* Bottom Text */}
              <p className="text-xs md:text-sm text-gray-400 mt-8">데모 무료 시연 | 맞춤형 견적 상담</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 px-4 bg-[#0f1419] scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {[{
            question: "폐쇄망에서 정말 사용할 수 있나요?",
            answer: "네, 로컬독스는 인터넷 연결 없이 완전히 로컬 환경에서 작동합니다. 모든 데이터와 AI 모델이 로컬에 저장되어 폐쇄망에서도 문제없이 사용 가능합니다."
          }, {
            question: "어떤 문서 형식을 지원하나요?",
            answer: "현재 PDF 파일을 지원하며, 표, 이미지, 수식이 포함된 복잡한 PDF 문서도 정확하게 인식합니다. Word, Excel, PowerPoint 등 추가 문서 형식은 개발 예정입니다."
          }, {
            question: "설치가 어렵지 않나요?",
            answer: "설치부터 사용까지 5분이면 충분합니다. 간단한 설치 프로그램을 실행하면 자동으로 설정되며, 별도의 기술 지식이 필요하지 않습니다."
          }, {
            question: "보안은 어떻게 보장되나요?",
            answer: "모든 데이터는 로컬에만 저장되며 외부로 전송되지 않습니다. 클라우드 동기화가 없고, 삭제 시 완전히 제거되어 보안이 완벽하게 보장됩니다."
          }, {
            question: "가격은 어떻게 되나요?",
            answer: "조직 규모와 필요에 따라 맞춤형 견적을 제공합니다. POC(개념 검증)는 무료로 제공되며, 도입 문의를 통해 상담받으실 수 있습니다."
          }, {
            question: "기술 지원은 제공되나요?",
            answer: "네, 설치부터 운영까지 전 과정에서 기술 지원을 제공합니다. 이메일, 전화, 원격 지원 등 다양한 방법으로 도움을 드립니다."
          }].map((faq, idx) => <details key={idx} className="group bg-gray-900 border border-teal/20 rounded-xl overflow-hidden hover:border-teal/50 hover:shadow-lg hover:shadow-teal/10 transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${idx * 50}ms`
          }}>
                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none hover:bg-gray-800/50 transition-colors">
                  <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-6 pt-2 border-t border-teal/10 animate-accordion-down">
                  <p className="text-gray-300 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Defense;