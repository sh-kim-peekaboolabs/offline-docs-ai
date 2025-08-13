import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ShieldCheck, WifiOff, FileText, Link as LinkIcon, Quote, Search, Lock, Download, AlertTriangle, Cloud, X, CheckCircle, Zap, Brain } from "lucide-react";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해 주세요."),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "동의가 필요합니다."
    })
  })
});
type FormValues = z.infer<typeof formSchema>;
const Nav = () => <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b">
    <div className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="localdocs 3D 문서 스택 로고" width={40} height={40} className="logo-interactive" loading="lazy" />
        <div className="text-xl font-bold text-primary">Localdocs</div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#features" className="story-link">제품 특징</a>
        <a href="#scenarios" className="story-link">사용 시나리오</a>
        <a href="#security" className="story-link">보안</a>
        <a href="#pricing" className="story-link">요금제</a>
        <a href="#faq" className="story-link">FAQ</a>
        <a href="#cta" className="story-link">알림 신청</a>
      </nav>
      <div className="hidden md:block">
        <a href="#cta"><Button variant="hero" size="lg">알림 신청하기</Button></a>
      </div>
    </div>
  </header>;
const Hero = () => <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle" aria-hidden />
    <div className="container relative py-20 md:py-28 text-center">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-6">오프라인 실행 · HWP 지원 · 한국어 특화 요약 · 인용 제공</div>
      <h1 className="mx-auto max-w-3xl text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">인터넷 없이
문서를 요약, 정리, 검색하세요.</h1>
      <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        나만의 AI 리서치 파트너, Localdocs
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#cta"><Button variant="hero" size="xl">출시 알림 신청하기</Button></a>
      </div>
    </div>
  </section>;
const Problem = () => <section className="section pt-8" aria-labelledby="problem-heading">
    <div className="container">
      <h2 id="problem-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">Localdocs를 써야하는 이유</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card flex flex-col items-center text-center p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-30"></div>
          <div className="relative z-10">
            <div className="p-4 rounded-2xl bg-destructive/10 text-destructive mb-4 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">기밀 문서 보안 때문에 ChatGPT를 사용할 수 없어요</h3>
            <p className="text-sm text-muted-foreground">기밀 문서는 클라우드 기반 ChatGPT를 사용할 수 없습니다.</p>
          </div>
        </div>
        <div className="feature-card flex flex-col items-center text-center p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-30"></div>
          <div className="relative z-10">
            <div className="p-4 rounded-2xl bg-orange-100 text-orange-600 mb-4">
              <WifiOff className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">인터넷이 안되는 폐쇄망이에요</h3>
            <p className="text-sm text-muted-foreground">인터넷 연결이 불안정하거나 
폐쇄망으로 운용되는 환경에서는 AI를 사용할 수 없습니다.</p>
          </div>
        </div>
        <div className="feature-card flex flex-col items-center text-center p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-30"></div>
          <div className="relative z-10">
            <div className="p-4 rounded-2xl bg-red-100 text-red-600 mb-4">
              <X className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">HWP 파일 미지원</h3>
            <p className="text-sm text-muted-foreground">HWP 파일은 ChatGPT 같은 서비스에서도 지원하지 않아서 
매번 PDF로 변환해야 해요.</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
const Solution = () => <section className="section" aria-labelledby="solution-heading">
    <div className="container">
      <h2 id="solution-heading" className="text-2xl md:text-3xl font-semibold mb-8">이젠 localdocs 하나로 끝내세요.</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="feature-card flex items-start gap-4"><WifiOff className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">인터넷 없이 PC에서 실행되는 한국어 특화 요약 AI</h3></div></div>
        <div className="feature-card flex items-start gap-4"><FileText className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">다양한 포맷 지원</h3><p className="text-sm text-muted-foreground">HWP, PPTX, PDF, DOCX, XLSX/CSV, 스캔 PDF(OCR) 등</p></div></div>
        <div className="feature-card flex items-start gap-4"><Quote className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">모든 답변에 인용 제공</h3><p className="text-sm text-muted-foreground">출처를 즉시 검증할 수 있습니다.</p></div></div>
        <div className="feature-card flex items-start gap-4"><Lock className="text-primary" /><div><h3 className="text-xl font-semibold mb-1">모든 문서는 로컬에서만 처리</h3><p className="text-sm text-muted-foreground">외부 유출 없이 안전합니다.</p></div></div>
      </div>
      <div className="text-center mt-8"><a href="#cta"><Button variant="hero" size="lg">출시 알림 신청하기</Button></a></div>
    </div>
  </section>;
const Features = () => <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">핵심 기능</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <WifiOff className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">오프라인 요약 AI</h3>
          <p className="text-muted-foreground">인터넷 없이 대용량 문서를 빠르게 요약해요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Brain className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">한국어 특화 AI</h3>
          <p className="text-muted-foreground">한국어 문맥·문체에 최적화된 AI를 탑재했어요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">HWP 지원</h3>
          <p className="text-muted-foreground">HWP/HWPX 문서를 바로 읽을 수 있어요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Quote className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">모든 답변에 출처 제공</h3>
          <p className="text-muted-foreground">문서에서 찾은 출처를 바로 확인할 수 있어요. </p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <LinkIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">문서·링크·텍스트 통합</h3>
          <p className="text-muted-foreground">하나의 지식 베이스에서 한번에 통합 분석해요.</p>
        </div>
        <div className="feature-card text-center group hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">오프라인 지식 검색</h3>
          <p className="text-muted-foreground">선택한 문서 내에서 키워드·질문 기반 검색할 수 있어요.</p>
        </div>
      </div>
    </div>
  </section>;
const Comparison = () => <section className="section" aria-labelledby="comparison-heading">
    <div className="container">
      <h2 id="comparison-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-center">클라우드 AI와 무엇이 다른가요</h2>
      <div className="overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-primary/5 to-primary/10">
              <tr>
                <th className="text-left p-6 font-semibold text-lg">항목</th>
                <th className="text-center p-6 font-semibold text-lg text-gray-600">일반 클라우드 AI</th>
                <th className="text-center p-6 font-semibold text-lg text-primary">Localdocs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">인터넷 없이 실행</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <X className="w-4 h-4 mr-1" />
                    제한적
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    가능
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">HWP 지원</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <X className="w-4 h-4 mr-1" />
                    미지원 또는 불안정
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    기본 지원
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">한국어 최적화 요약</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                    일반 수준
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                    <Zap className="w-4 h-4 mr-1" />
                    한국어 특화
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">인용 제공</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                    제한적
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    기본 제공
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium">데이터 이동</td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                    <Cloud className="w-4 h-4 mr-1" />
                    외부 전송
                  </span>
                </td>
                <td className="text-center p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    <Lock className="w-4 h-4 mr-1" />
                    로컬 유지
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>;
const Scenarios = () => <section id="scenarios" className="section" aria-labelledby="scenarios-heading">
    <div className="container">
      <h2 id="scenarios-heading" className="text-2xl md:text-3xl font-semibold mb-4">이런 환경에서 효과적입니다</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="feature-card"><strong>엔터프라이즈 기업</strong>: 반도체, 차량 등 NDA 문서 혹은 사내 표준서를 요약·검색</li>
        <li className="feature-card"><strong>법무법인</strong>: 방대한 소송 자료, 계약서, 판례의 핵심 쟁점 추출</li>
        <li className="feature-card"><strong>투자사 및 금융권</strong>: 기업 리포트, 실사 자료 핵심 자료 분석 및 정리</li>
        <li className="feature-card"><strong>군사 및 공공기관</strong>: 폐쇄망 환경에서 한글파일 분석 지원</li>
      </ul>
    </div>
  </section>;
const Security = () => <section id="security" className="section bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden" aria-labelledby="security-heading">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50"></div>
    <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-200/30 rounded-full blur-xl"></div>
    <div className="container relative z-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
          <Lock className="w-8 h-8" />
        </div>
        <h2 id="security-heading" className="text-2xl md:text-3xl font-semibold mb-4">보안을 최우선으로 고려합니다</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">로컬 처리</h3>
          </div>
          <p className="text-sm text-muted-foreground">모든 처리는 사용자의 개인 컴퓨터 환경에서 처리됩니다.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">오프라인 동작</h3>
          </div>
          <p className="text-sm text-muted-foreground">인터넷 연결이 없는 상태에서도 완벽하게 동작합니다.</p>
        </div>
        <div className="feature-card bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">간편 설치</h3>
          </div>
          <p className="text-sm text-muted-foreground">PC 앱 다운로드 후 바로 사용 가능합니다.</p>
        </div>
      </div>
    </div>
  </section>;
const HowItWorks = () => <section className="section bg-secondary-lighter/30" aria-labelledby="how-heading">
    <div className="container">
      <h2 id="how-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">사용 방법</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300">1</div>
          <div className="feature-card p-4">
            <h3 className="font-semibold mb-2">PC 앱 설치</h3>
            <p className="text-sm text-muted-foreground">PC 앱을 설치합니다.</p>
          </div>
        </div>
        <div className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300">2</div>
          <div className="feature-card p-4">
            <h3 className="font-semibold mb-2">문서를 업로드하세요</h3>
            <p className="text-sm text-muted-foreground">지식 베이스를 만듭니다</p>
          </div>
        </div>
        <div className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300">3</div>
          <div className="feature-card p-4">
            <h3 className="font-semibold mb-2">채팅으로 확인</h3>
            <p className="text-sm text-muted-foreground">채팅창을 통해 유용한 정보를 빠르게 확인하세요.</p>
          </div>
        </div>
        <div className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300">4</div>
          <div className="feature-card p-4">
            <h3 className="font-semibold mb-2">근거 기반 답변</h3>
            <p className="text-sm text-muted-foreground">질문 검색으로 근거 기반 답변과 문서 위치를 바로 확인하세요.</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
const Pricing = () => <section id="pricing" className="section" aria-labelledby="pricing-heading">
    <div className="container">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-semibold mb-4">나에게 맞는 요금제를 선택하세요</h2>
      <p className="text-muted-foreground mb-8">개인적인 문서 탐색은 무료로 시작하세요. 데이터 분석, 보고서 작성 등 전문가 수준의 생산성이 필요하다면 Pro를, 조직을 위한 보안과 관리가 필요하다면 Enterprise를 선택하세요.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="pricing-card">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="mt-1 text-muted-foreground">핵심 기능을 경험하는 가장 좋은 방법</p>
          <p className="mt-4 text-2xl font-bold">₩0 <span className="text-sm font-medium text-muted-foreground">/ 평생</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>오프라인 AI 요약·검색</li>
            <li>기본 문서 지원(HWP, PDF, PPTX, DOCX)</li>
            <li>답변 내 인용 제공</li>
            <li>최대 10개의 지식 베이스 생성</li>
            <li>(지식 베이스 당 최대 10개 문서)</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">출시 알림 신청하기</Button></a>
          </div>
        </div>
        <div className="pricing-card featured">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="mt-1 text-muted-foreground">데이터 분석부터 보고서 작성까지, 전문가를 위한 생산성 도구</p>
          <p className="mt-4 text-2xl font-bold">$19 <span className="text-sm font-medium text-muted-foreground">/ 사용자 / 월</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Free의 모든 기능 포함</li>
            <li>고급 문서 지원(XLSX/CSV, 스캔 PDF OCR)</li>
            <li>요약 결과 내보내기(Word, PPTX, Markdown)</li>
            <li>커스텀 요약 템플릿(지원 예정)</li>
            <li>무제한 지식 베이스 및 무제한 문서</li>
            <li>이메일 우선 지원</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">출시 알림 신청하기</Button></a>
          </div>
        </div>
        <div className="pricing-card">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="mt-1 text-muted-foreground">보안, 배포, 중앙 관리가 중요한 조직을 위한 맞춤형 솔루션</p>
          <p className="mt-4 text-2xl font-bold">별도 문의</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Pro의 모든 기능 포함</li>
            <li>대규모 팀을 위한 중앙 라이선스 관리</li>
            <li>폐쇄망 환경을 위한 오프라인 설치 지원</li>
            <li>전담 기술 지원 매니저 및 SLA</li>
            <li>맞춤형 기능 개발 및 연동(협의)</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="#cta"><Button variant="hero" size="lg" className="w-full">출시 알림 신청하기</Button></a>
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
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });
  const onSubmit = async (values: FormValues) => {
    // TODO: wire to Supabase or email service if needed
    toast.success("알림 신청이 완료되었습니다. 곧 소식을 전해 드릴게요!");
    reset();
  };
  return <section id="cta" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-3 text-center">출시 알림을 신청하세요.</h2>
        <p className="text-muted-foreground mb-6 text-center">출시 소식을 가장 먼저 전해 드립니다. 사내 파일로 실제 테스트할 수 있는 환경을 준비 중입니다.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">이메일 주소</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">알림 신청하기</Button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox id="consent" {...register("consent")} />
            <Label htmlFor="consent" className="text-sm text-muted-foreground">개인정보 수집 및 알림 수신에 동의합니다.</Label>
          </div>
          {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
          <p className="text-xs text-muted-foreground text-center mt-4">제출하신 이메일은 베타 알림과 안내 외 용도로 사용하지 않습니다.</p>
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
      name: '인터넷 없이 정말 동작하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, PC앱만 설치하면 인터넷 없이 동작합니다. 문서가 외부에 유출될 일이 전혀 없습니다.'
      }
    }, {
      '@type': 'Question',
      name: '어떤 파일 형식을 지원하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HWP/HWPX, PDF, PPTX, DOCX 등을 지원합니다. 다만, 순차적으로 적용될 수 있습니다.'
      }
    }, {
      '@type': 'Question',
      name: '결과 출처는 어떻게 제공되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Localdocs는 모든 결과를 문서 기반으로 제공합니다. 그래서 모든 답변엔 문서 출처 링크 또는 문서 내 위치(페이지, 문단 등)를 결과와 함께 표시합니다. 인용 형식은 데이터 소스에 따라 달라질 수 있습니다.'
      }
    }, {
      '@type': 'Question',
      name: '클라우드로 데이터가 전송되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '절대 전송되지 않습니다. 데이터는 PC 내에서만 처리되며 클라우드로 일절 전송되지 않습니다. 불안하시면, 인터넷을 끄고 실행하셔도 됩니다.'
      }
    }, {
      '@type': 'Question',
      name: '기업용 배포 모델이 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, Enterprise 플랜을 통해 대규모 팀을 위한 중앙 라이선스 관리 및 폐쇄망 환경을 위한 오프라인 설치/배포를 지원합니다. 별도 문의를 통해 귀사의 환경에 맞는 최적의 솔루션을 상담해 드립니다.'
      }
    }, {
      '@type': 'Question',
      name: '한국어 특화 요약 정확도는 어느 정도인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '자체 개발한 한국어 특화 온디바이스 LLM을 기반으로, 국내 업무 환경의 보고서, 논문, 법률 문서 등에서 최고의 요약 성능을 목표로 하고 있습니다. 구체적인 성능 지표는 출시와 함께 투명하게 공개할 예정입니다.'
      }
    }]
  };
  return <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-6">FAQ</h2>
        <div className="grid gap-4">
          <details className="feature-card"><summary className="font-medium">인터넷 없이 정말 동작하나요?</summary><p className="mt-2 text-muted-foreground">네, PC앱만 설치하면 인터넷 없이 동작합니다. 문서가 외부에 유출될 일이 전혀 없습니다.</p></details>
          <details className="feature-card"><summary className="font-medium">어떤 파일 형식을 지원하나요?</summary><p className="mt-2 text-muted-foreground">HWP/HWPX, PDF, PPTX, DOCX 등을 지원합니다. 다만, 순차적으로 적용될 수 있습니다.</p></details>
          <details className="feature-card"><summary className="font-medium">결과 출처는 어떻게 제공되나요?</summary><p className="mt-2 text-muted-foreground">Localdocs는 모든 결과를 문서 기반으로 제공합니다. 그래서 모든 답변엔 문서 출처 링크 또는 문서 내 위치(페이지, 문단 등)를 결과와 함께 표시합니다. 인용 형식은 데이터 소스에 따라 달라질 수 있습니다.</p></details>
          <details className="feature-card"><summary className="font-medium">클라우드로 데이터가 전송되나요?</summary><p className="mt-2 text-muted-foreground">절대 전송되지 않습니다. 데이터는 PC 내에서만 처리되며 클라우드로 일절 전송되지 않습니다. 불안하시면, 인터넷을 끄고 실행하셔도 됩니다.</p></details>
          <details className="feature-card"><summary className="font-medium">기업용 배포 모델이 있나요?</summary><p className="mt-2 text-muted-foreground">네, Enterprise 플랜을 통해 대규모 팀을 위한 중앙 라이선스 관리 및 폐쇄망 환경을 위한 오프라인 설치/배포를 지원합니다. '별도 문의'를 통해 귀사의 환경에 맞는 최적의 솔루션을 상담해 드립니다.</p></details>
          <details className="feature-card"><summary className="font-medium">한국어 특화 요약 정확도는 어느 정도인가요?</summary><p className="mt-2 text-muted-foreground">자체 개발한 한국어 특화 온디바이스 LLM을 기반으로, 국내 업무 환경의 보고서, 논문, 법률 문서 등에서 최고의 요약 성능을 목표로 하고 있습니다. 구체적인 성능 지표는 출시와 함께 투명하게 공개할 예정입니다.</p></details>
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
        <nav className="flex items-center gap-4">
          <a href="#" className="story-link">개인정보처리방침</a>
          <a href="#" className="story-link">이용약관</a>
          <a href="#cta" className="story-link">문의</a>
        </nav>
      </div>
    </div>
  </footer>;
const Index = () => {
  return <div>
      <Nav />
      <main>
        <Hero />
        
        <Problem />
        <Solution />
        <Features />
        <Comparison />
        <Scenarios />
        <Security />
        <HowItWorks />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>;
};
export default Index;