import { Card } from "@/components/ui/card";
import { usePageTracking } from "@/hooks/useAnalytics";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const SecuritySpec = () => {
  usePageTracking();
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const from = location.state?.from;
    navigate("/");

    // Wait for navigation to complete, then scroll instantly to entry point
    setTimeout(() => {
      if (from === 'security') {
        const securitySection = document.getElementById("security");
        if (securitySection) {
          securitySection.scrollIntoView();
        }
      } else if (from === 'footer') {
        window.scrollTo({
          top: document.body.scrollHeight
        });
      } else {
        window.scrollTo({
          top: 0
        });
      }
    }, 100);
  };
  return <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button onClick={handleBackClick} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors cursor-pointer">
                    <ArrowLeft className="w-4 h-4" />
                    <span>홈으로 돌아가기</span>
                </button>

                {/* Main Content Card */}
                <Card className="p-8 md:p-12 bg-white shadow-lg">
                    {/* Header */}
                    <div className="text-center mb-12 border-b pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            로컬독스(LocalDocs) 보안 아키텍처 및<br />데이터 프라이버시 사양
                        </h1>
                        <p className="text-sm text-gray-500">
                            버전 1.0 | 최종 업데이트: 2025년 12월
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-gray max-w-none prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-3 prose-headings:mb-6">
                        {/* 1. 요약 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. 요약</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                로컬독스는 높은 컴플라이언스 준수가 요구되는 환경을 위해 설계된 에어갭(Air-gapped), 온디바이스(On-device) AI 검색 솔루션입니다.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                본 문서는 엔터프라이즈 에디션을 기준으로 데이터 유출 제로를 보장하기 위한 기술적 조치를 설명하며, B2C 에디션과의 차이점을 명시합니다.
                            </p>
                        </section>
                        {/* 2. 핵심 보안 아키텍처 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">2. 핵심 보안 아키텍처</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.1. 데이터 유출 제로 (물리적 격리)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                로컬독스 엔터프라이즈 에디션은 완전한 오프라인 환경을 위해 설계되었습니다.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>클라우드 추론 없음:</strong>클라우드 추론 없음: 모든 AI 처리(임베딩 및 생성)는 양자화된 AI 모델을 사용하여 로컬 CPU/GPU에서 실행됩니다.</li>
                                <li><strong>핵심 데이터 외부 API 차단:</strong> 애플리케이션은 OpenAI, Anthropic, Google 등 어떠한 타사 AI 제공업체에도 문서 데이터 처리, 임베딩, 질의 응답을 위한 API 호출을 하지 않습니다.</li>
                                <li><strong>네트워크 활동 (엔터프라이즈):</strong> 라이선스 키 방식을 사용하여 오프라인 인증이 가능하거나, 초기 1회 인증 외에는 네트워크가 필요 없습니다. 어떠한 문서 데이터, 임베딩 또는 쿼리도 네트워크를 통해 전송되지 않습니다.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.2. 로컬 벡터 저장소</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>저장 위치:</strong> OS가 제공하는 표준 샌드박스 디렉토리에 저장되며, 해당 영역은 사용자 권한 없이는 접근이 불가능합니다.</li>
                                <li><strong>암호화:</strong> 저장 데이터(Data at rest)는 호스트 운영 체제의 파일 시스템 암호화(예: Apple FileVault, Windows BitLocker)로 보호됩니다.</li>
                                <li><strong>데이터 제어:</strong> 사용자는 절대적인 제어 권한을 유지합니다. 애플리케이션 또는 로컬 데이터베이스 폴더를 삭제하면 인덱싱된 모든 데이터가 영구적으로 삭제됩니다.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.3. 휘발성 메모리 처리</h3>
                            <p className="text-gray-700 leading-relaxed">
                                활성 세션 중에 추론을 위해 RAM에 로드된 민감한 데이터는 <strong>일시적(Ephemeral)</strong>입니다. 메모리는 엄격하게 관리되며 애플리케이션 종료 시 삭제됩니다. 사용자가 명시적으로 저장하지 않는 한 세션 데이터는 영구 디스크 스토리지에 기록되지 않습니다.
                            </p>
                        </section>

                        {/* 3. 에디션별 네트워크 정책 비교 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">3. 에디션별 네트워크 정책 비교</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">기능</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">엔터프라이즈 (Enterprise)</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">개인용 (Free / Pro)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">문서 데이터 처리</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">100% 로컬</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">100% 로컬</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">인증 방식</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">라이선스 키</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">소셜 로그인 (Google OAuth)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">결제 시스템</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">별도 계약</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">외부 결제 모듈</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">외부 통신</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">없음</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">로그인/결제/모델,앱 업데이트 시에만 연결</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm text-gray-600 italic mb-8">
                                참고: B2C 버전의 경우 로그인 및 결제 처리를 위해 최소한의 네트워크 통신이 발생하지만, 사용자의 문서 데이터나 질의 내용은 여전히 로컬 장치를 벗어나지 않습니다.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-6 mt-8">네트워크 통신 정책 상세 (에디션별)</h3>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">A. 엔터프라이즈 에디션</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                LocalDocs 엔터프라이즈 에디션은 물리적 망분리(Air-gapped) 환경에서도 완벽하게 동작하도록 설계되었습니다.
                            </p>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-900 mb-3">문서 데이터</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>모든 데이터 처리(임베딩, 벡터 저장, 추론)는 로컬 장비 내에서만 수행됩니다.</li>
                                    <li>외부 AI 서비스나 클라우드 스토리지로의 데이터 전송 경로가 원천적으로 존재하지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="mb-8">
                                <p className="font-semibold text-gray-900 mb-3">네트워크 통신</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>인증: 라이선스 키(License Key) 방식을 사용하며, 완전 오프라인 활성화(Offline Activation)를 지원합니다.</li>
                                    <li>결제: 앱 내에 전자 결제 모듈이 탑재되지 않으며, 계약 기반으로 처리되므로 결제 관련 트래픽이 발생하지 않습니다.</li>
                                    <li>업데이트: 폐쇄망 환경을 위해 수동 업데이트 패키지(.msi/.dmg)를 제공하며, 자동 업데이트를 위한 외부 통신을 차단할 수 있습니다.</li>
                                </ul>
                            </div>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">B. Free / Pro 에디션</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Free / Pro 에디션은 데이터 프라이버시와 사용자 편의성(계정 관리)을 분리하여 운영합니다.
                            </p>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-900 mb-3">문서 데이터</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>사용자가 업로드한 PDF 본문, 생성된 벡터 인덱스, 검색 질의어는 어떠한 경우에도 외부 서버로 전송되지 않습니다.</li>
                                    <li>Google OAuth는 오직 '사용자 신원 확인(이메일 주소)'만을 위해 사용되며, 구글 서버는 사용자의 문서 내용에 접근할 수 없습니다.</li>
                                </ul>
                            </div>
                            <div className="mb-8">
                                <p className="font-semibold text-gray-900 mb-3">계정/라이선스</p>
                                <p className="text-gray-700 mb-3">다음의 목적을 위해서만 최소한의 암호화된 통신(HTTPS)을 수행합니다.</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>인증: accounts.google.com (로그인 시 1회)</li>
                                    <li>결제: lemonsqueezy.com (구독 상태 확인)</li>
                                    <li>업데이트: api.peekaboolabs.ai (최신 버전 확인)</li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. 컴플라이언스 및 인증 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">4. 컴플라이언스 및 인증</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">4.1. SOC 2 및 ISO 27001 (적용 범위)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                엄격한 온프레미스/로컬 소프트웨어 공급업체로서 피카부랩스는 자체 서버에서 고객 데이터를 처리, 저장 또는 전송하지 않습니다.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                따라서 로컬독스(LocalDocs)는 데이터 처리와 관련된 SOC 2 Type II 또는 ISO 27001 인증의 <strong>적용 범위 밖(Out of Scope)</strong>에 있습니다.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                당사는 고객이 인프라 보안에 대한 완전한 소유권과 책임을 유지하는 <strong>공동 책임 모델(Shared Responsibility Model)</strong>하에 운영됩니다.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5 mt-10">4.2. GDPR 및 HIPAA 준비</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                LocalDocs는 데이터 처리자(Data Processor)를 제거하므로 GDPR 및 HIPAA의 적용을 받는 기업에 이상적인 솔루션입니다.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>데이터 주권:</strong> 데이터가 물리적 장치를 떠나지 않으므로 GDPR 데이터 거주 요건을 자동으로 충족합니다.</li>
                                <li><strong>개인정보 보호 규칙:</strong> 공급업체에 PHI(보호 대상 건강 정보)가 전송되지 않으므로 소프트웨어 사용을 위해 기술적으로 BAA(사업 제휴 계약)가 필요하지 않습니다.</li>
                            </ul>
                        </section>

                        {/* 5. 소프트웨어 무결성 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">5. 소프트웨어 무결성</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.1. 코드 서명 및 공증</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>macOS:</strong> 모든 릴리스는 유효한 Apple Developer ID로 서명되고 Apple의 공증을 받아 소프트웨어가 변조되지 않았음을 보장합니다.</li>
                                <li><strong>Windows:</strong> 현재 EV(Extended Validation) 코드 서명 인증서 발급 절차가 진행 중이며, 곧 서명된 실행 파일이 제공될 예정입니다.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.2. 공급망 보안</h3>
                            <p className="text-gray-700 leading-relaxed">
                                모든 종속성 및 오픈 소스 라이브러리(예: ONNX Runtime, LangChain)는 특정 버전에 고정되며 빌드 전에 취약점(CVE) 검사를 받습니다.
                            </p>
                        </section>

                        {/* 6. 문의 */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. 문의</h2>
                            <p className="text-gray-700 leading-relaxed">
                                자세한 보안 문의나 특정 아키텍처 다이어그램을 요청하려면 다음으로 연락하십시오:<br />
                                <strong>보안 팀</strong> | <a href="mailto:contact@peekaboolabs.ai" className="text-blue-600 hover:underline">contact@peekaboolabs.ai</a>
                            </p>
                        </section>
                    </div>
                </Card>

                {/* Founders Message Card */}
                <Card className="mt-12 p-12 md:p-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 border border-gray-200 shadow-sm relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
                    </div>

                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear - gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear - gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                창업자의 메시지: 우리의 약속
                            </h2>
                            <p className="text-xl text-gray-700 font-medium mb-2">
                                "피카부랩스는 온디바이스 AI에 진심입니다."
                            </p>
                        </div>

                        {/* Message Body */}
                        <div className="mb-12 space-y-6 text-gray-700 leading-relaxed text-base">
                            <p>
                                저의 꿈은 언젠가 저 멀리 우주로 나아가 그곳에서 생을 마감하는 것입니다. 그 머나먼 여정에서 저에게 필요한 것은, 저와 대화를 나누고, 시스템을 정비하며, 필요한 지식을 즉시 찾아줄 수 있는 지능형 동반자입니다.
                            </p>
                            <p>
                                인터넷이 닿지 않는 심우주, 그 절대적인 고립 속에서도 작동하는 AI. 그것이 바로 제가 온디바이스 AI 기술에 목숨을 거는 이유입니다.
                            </p>
                            <p>
                                우리는 'Local-First' 기업이 되기 위해 모든 기술적 역량을 쏟아부을 것입니다. 고객의 데이터는 그 어떤 외부의 개입 없이, 오직 고객의 손끝에서만 완벽하게 제어될 것입니다.
                            </p>
                            <p>
                                우리의 미션은 <strong>"Empowering AI Everywhere"</strong>입니다. 인터넷이 터지지 않는 오지, 보안이 생명인 폐쇄망, 그리고 언젠가 인류가 닿을 별들까지. 모든 환경의 사람들에게 가장 강력하고 안전한 AI를 쥐어주는 날까지 우리는 멈추지 않겠습니다.
                            </p>
                        </div>

                        {/* Founders Photos */}
                        <div className="flex items-center gap-2 mb-8">
                            <a href="https://www.linkedin.com/in/junghwanseo/" target="_blank" rel="noopener noreferrer" className="group relative animate-float-subtle">
                                <img src="/team/junghwan.jpg" alt="서정환" className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 transition-all duration-300 group-hover:border-gray-400 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110 cursor-pointer" />
                            </a>
                            <a href="https://www.linkedin.com/in/hansol-nam/" target="_blank" rel="noopener noreferrer" className="group relative animate-float-subtle" style={{
              animationDelay: '0.5s'
            } as React.CSSProperties}>
                                <img src="/team/hansol.jpg" alt="남한솔" className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 transition-all duration-300 group-hover:border-gray-400 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110 cursor-pointer" />
                            </a>
                            <a href="https://www.linkedin.com/in/kim-seunghwan" target="_blank" rel="noopener noreferrer" className="group relative animate-float-subtle" style={{
              animationDelay: '1s'
            } as React.CSSProperties}>
                                <img src="/team/seunghwan.jpg" alt="김승환" className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 transition-all duration-300 group-hover:border-gray-400 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110 cursor-pointer" />
                            </a>
                        </div>

                        {/* Company Info */}
                        <div>
                            <p className="text-sm text-gray-600 italic mb-1">
                                피카부랩스(PeekabooLabs Co., Ltd.)
                            </p>
                            <p className="text-sm text-gray-500">
                                서정환, 남한솔, 김승환
                                <br />
                                창업자 일동
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>;
};
export default SecuritySpec;