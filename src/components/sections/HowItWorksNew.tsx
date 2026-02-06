import { Download, FolderInput, MessageSquare, CheckCircle } from "lucide-react";

export const HowItWorksNew = () => {
    return (
        <section id="how-it-works" className="bg-[#fafafa] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">
                        복잡한 설정 없이,<br className="sm:hidden" /> 4단계면 충분합니다.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-6 z-10">
                            <Download className="w-10 h-10 text-[#111]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-3">1. 설치하기</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            복잡한 서버 구축은 필요 없습니다.<br />
                            내 PC에 설치만 하세요.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-6 z-10">
                            <FolderInput className="w-10 h-10 text-[#111]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-3">2. 파일 연결</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            내 PC에서 파일만 연결하면<br />
                            준비 끝입니다.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-6 z-10">
                            <MessageSquare className="w-10 h-10 text-[#111]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-3">3. 질문하기</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            막내직원에게 묻듯이 물어보세요.<br />
                            필요한 정보만 골라 답합니다.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-6 z-10">
                            <CheckCircle className="w-10 h-10 text-[#111]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-3">4. 검증하기</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            출처를 눌러 확인하세요.<br />
                            인용처를 하이라이트했습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
