import { Shield, Lock, Database, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const SecurityHybrid = () => {
    return (
        <section id="security" className="w-full bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">Security</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111] mb-6 px-2 sm:px-0">
                        금융권 수준의 보안,<br />문서는 PC 밖으로 나가지 않습니다.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-6 px-4">
                        로컬독스는 문서 저장(Local)과 답변 생성(Cloud)을 분리해<br className="hidden sm:block" />
                        보안과 성능을 동시에 잡습니다.
                    </p>
                    <Link to="/new/security-spec" className="inline-block text-sm font-medium text-[#666] hover:text-[#111] transition-colors border-b border-[#666] hover:border-[#111]">
                        Security Spec 확인하기
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Feature 1 */}
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-6">
                            <Database className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#111] mb-3">문서 원본 100% 로컬 저장</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
                            당신의 파일은 하드디스크에만 존재합니다.<br className="sm:hidden" /> 클라우드로 파일이 업로드되지 않습니다.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-6">
                            <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#111] mb-3">최소 전송 & 즉시 삭제</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
                            최소한의 정보만 암호화하여 프록시 서버로 전송되며,<br className="sm:hidden" /> 대화내역은 일체 저장되지 않습니다.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#111] mb-3">학습 금지 (Zero Retention)</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
                            데이터는 절대 AI 모델 학습에 쓰이지 않습니다. <br className="sm:hidden" /> 안심하고 사용하세요.
                        </p>
                    </div>
                </div>

                {/* Hybrid Security Diagram Placeholder (Optional/Future enhancement) */}
                <div className="relative rounded-3xl bg-[#111] p-8 md:p-12 overflow-hidden text-center text-white">
                    <div className="relative z-10">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 break-keep">Enterprise 에디션이 필요하신가요?</h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            완전한 오프라인 환경(Air-gapped)이나 온프레미스 LLM 연동이 필요하다면<br />
                            Enterprise 플랜을 확인해보세요. 인터넷 연결 없이도 완벽하게 동작합니다.
                        </p>
                        <a href="https://calendar.app.google/WvUp8jzgeLHgP9jm9" target="_blank" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                            도입 문의하기
                        </a>
                    </div>
                    {/* Decorators */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-20 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 opacity-20 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </section>
    );
};
