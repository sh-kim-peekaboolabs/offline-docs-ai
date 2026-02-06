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

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
                            버전 2.0 | 적용 대상: LocalDocs API Edition & Enterprise
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-gray max-w-none prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-3 prose-headings:mb-6">
                        {/* 1. 요약 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. 요약</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                로컬독스는 사용자의 데이터 주권을 최우선으로 하는 <strong>Hybrid Security AI 솔루션</strong>입니다.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                문서의 저장과 색인(Indexing)은 전적으로 사용자의 로컬 장치에서 수행되며, 답변 생성을 위해 필요한 최소한의 맥락만을 암호화하여 클라우드 AI와 통신합니다. (단, Enterprise 플랜은 온프레미스 모델과 연동하여 외부 통신이 차단된 완전한 폐쇄망 환경을 지원합니다.)
                            </p>
                        </section>

                        {/* 2. 핵심 보안 아키텍처 (Hybrid Security Engine) */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">2. 핵심 보안 아키텍처 (Hybrid Security Engine)</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.1. 로컬 우선 데이터 처리 (Local-First Processing)</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                로컬독스의 모든 에디션은 기본적으로 '로컬 저장소'를 기반으로 작동합니다.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>원본 불변성:</strong> 사용자가 추가한 PDF, 문서 파일, 그리고 이를 분석한 벡터 인덱스(Vector Index)는 100% 사용자의 PC에만 저장됩니다.</li>
                                <li><strong>서버 업로드 없음:</strong> 사용자의 문서 파일 전체가 클라우드 스토리지나 외부 서버로 통째로 업로드되는 일은 결코 발생하지 않습니다.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.2. 컨텍스트 최소화 및 암호화 전송 (Free/Pro)</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                최신 클라우드 LLM(Gemini)을 사용하는 Free/Pro 에디션은 다음과 같은 <strong>4단계 보안 터널</strong>을 통해 데이터를 보호합니다.
                            </p>
                            <ol className="list-decimal pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Local Retrieval:</strong> 사용자의 질문과 관련된 텍스트 조각(Chunk)을 PC 내부에서 먼저 검색합니다.</li>
                                <li><strong>Minimal Context Extraction:</strong> 문서 전체가 아닌, 답변에 꼭 필요한 몇 문장(Context)만을 추출합니다.</li>
                                <li><strong>AES-256 Encryption:</strong> 추출된 텍스트는 군사 등급인 AES-256 및 TLS 1.3 프로토콜로 암호화되어 API로 전송됩니다.</li>
                                <li><strong>Zero-Retention (즉시 폐기):</strong> AI 모델이 답변을 생성하는 즉시, 전송되었던 텍스트 데이터는 서버 메모리에서 영구 삭제됩니다. 어떠한 로그도 남기지 않으며, AI 학습에 사용되지 않습니다.</li>
                            </ol>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.3. 데이터 유출 제로 (Enterprise)</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Enterprise 에디션은 물리적 망분리(Air-gapped) 환경을 위해 <strong>Cloud Inference(클라우드 추론)를 완전히 차단</strong>합니다. 외부 API 호출 없이 온프레미스 LLM을 사용하여 추론하므로 데이터가 장치 밖으로 나갈 가능성이 0%입니다.
                            </p>
                        </section>

                        {/* 3. 에디션별 데이터 및 네트워크 정책 비교 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">3. 에디션별 데이터 및 네트워크 정책 비교</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">구분</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Free / Pro (API Edition)</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Enterprise (On-Premise)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">문서 원본 저장</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>100% 로컬 (내 PC)</strong></td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>100% 로컬 (사내 서버/PC)</strong></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">벡터 인덱스 생성</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">로컬 CPU/GPU 처리</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">로컬 CPU/GPU 처리</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">답변 생성 (추론)</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>Cloud LLM (암호화 통신)</strong></td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>On-premis LLM (오프라인)</strong></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">데이터 학습 여부</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>학습 금지 (Zero-Retention)</strong></td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">학습 불가능 (물리적 차단)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">외부 네트워크</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">API 호출, 로그인, 결제 시 연결</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">차단 가능 (완전 오프라인)</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">인증 방식</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">소셜 로그인 (Google OAuth)</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">라이선스 키 / SSO</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-6 mt-8">네트워크 통신 정책 상세</h3>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">A. Free / Pro 에디션 (Hybrid)</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                사용자의 편의성과 AI 성능을 극대화하기 위해 제한적인 네트워크 통신을 수행합니다.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>LLM API 통신:</strong> 질문에 대한 답변 생성을 위해 암호화된 텍스트 조각(Context)을 프록시 서버를 통해 통신합니다. 그래서 데이터는 누구도 볼 수 없고, 저장되지 않습니다.</li>
                                <li><strong>인증 및 결제:</strong> 사용자 식별(Google OAuth) 및 구독 상태 확인을 위한 최소한의 HTTPS 통신만 수행합니다. 구글이나 결제 대행사는 귀하의 문서 내용에 접근할 수 없습니다.</li>
                            </ul>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">B. Enterprise 에디션 (Air-gapped)</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                최고 수준의 보안이 요구되는 환경을 위해 설계되었습니다.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>100% 오프라인:</strong> 설치 및 초기 인증 후 랜선(LAN)을 뽑아도 완벽하게 동작합니다.</li>
                                <li><strong>No API Calls:</strong> OpenAI, Google, Anthropic 등 외부 AI 서버로 향하는 트래픽이 원천 차단되어 있습니다.</li>
                            </ul>
                        </section>

                        {/* 4. 데이터 통제 및 컴플라이언스 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">4. 데이터 통제 및 컴플라이언스</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">4.1. 사용자 절대 제어권 (User Control)</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>데이터 소유권:</strong> 로컬독스는 사용자의 데이터에 대한 소유권을 주장하지 않습니다.</li>
                                <li><strong>물리적 삭제:</strong> 사용자가 로컬독스 앱을 삭제하거나 데이터 폴더를 지우는 즉시, 모든 인덱싱 데이터와 대화 기록은 물리적으로 영구 파기됩니다. (서버에 백업본이 없으므로 복구가 불가능합니다.)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">4.2. 기업 규정 준수 (GDPR & ISO)</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Enterprise:</strong> 고객의 인프라 내에서만 작동하므로, 고객사가 보유한 기존의 SOC 2 / ISO 27001 통제 환경을 그대로 승계합니다. 데이터 이동이 없으므로 GDPR 데이터 거주 요건을 자동으로 충족합니다.</li>
                                <li><strong>Free/Pro:</strong> 전송되는 데이터는 암호화 처리되며, 프록시 서버를 통해 데이터를 주고받기 때문에 어디에도 저장되지 않으므로 개인정보 보호 규정 준수에 유리한 구조를 갖추고 있습니다.</li>
                            </ul>
                        </section>

                        {/* 5. 소프트웨어 무결성 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">5. 소프트웨어 무결성</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.1. 코드 서명 및 공증</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>macOS:</strong> 모든 릴리스는 유효한 Apple Developer ID로 서명되고 Apple의 공증(Notarization)을 통과하여, 바이너리가 변조되지 않았음을 보장합니다.</li>
                                <li><strong>Windows:</strong> EV(Extended Validation) 코드 서명 인증서를 통해 실행 파일의 신뢰성을 보장합니다.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.2. 공급망 보안</h3>
                            <p className="text-gray-700 leading-relaxed">
                                오픈소스 라이브러리(LangChain, LanceDB 등)는 엄격한 보안 검수(CVE Scan)를 거친 특정 버전만 빌드에 포함되며, 임의의 외부 코드 실행을 방지합니다.
                            </p>
                        </section>

                        {/* 6. 보안 문의 */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. 보안 문의</h2>
                            <p className="text-gray-700 leading-relaxed">
                                특정 아키텍처 다이어그램 요청이나 기업용 보안 감사(Audit) 관련 문의는 아래 보안 팀으로 연락해 주십시오.<br />
                                <strong>Email: </strong> <a href="mailto:contact@peekaboolabs.ai" className="text-blue-600 hover:underline">contact@peekaboolabs.ai</a>
                            </p>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SecuritySpec;