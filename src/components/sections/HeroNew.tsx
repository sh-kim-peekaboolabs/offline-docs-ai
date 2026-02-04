import { HighlightText } from "@/components/ui/highlight-text";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { WindowsIcon } from "@/components/icons/WindowsIcon";
import { analytics } from "@/lib/analytics";

export const HeroNew = () => {
    return (
        <section className="relative bg-white overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col items-center text-center gap-12">
                    {/* Text Content */}
                    <div className="max-w-4xl mx-auto w-full">
                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111] tracking-tighter leading-[1.3] mb-6">
                            GPT도 못 읽는 대용량 문서,<br />
                            <span className="block mt-4">
                                <HighlightText className="text-[#111] inline-block whitespace-nowrap" color="#fef08a" thickness="30%">
                                    유출 걱정 없이 마음껏 물어보세요.
                                </HighlightText>
                            </span>
                        </h1>

                        {/* H2/Subhead */}
                        <div className="text-lg sm:text-xl text-[#666] leading-relaxed mb-10 space-y-1 mx-auto max-w-2xl">
                            <p>내 PC에 있는 <strong>10,000개의 파일</strong>, <strong>1GB가 넘는 전공 서적</strong>도 문제없습니다.</p>
                            <p>문서는 내 컴퓨터에 안전하게 두고, AI의 똑똑한 두뇌만 빌려 쓰세요.</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'hero_new')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-[#111] text-white text-base font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 whitespace-nowrap">
                                    <AppleIcon className="w-5 h-5 mb-0.5" />
                                    Mac 버전 다운로드
                                </button>
                            </a>
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'hero_new')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-[#111] text-base font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                                    <WindowsIcon className="w-4 h-4" />
                                    Windows 버전 다운로드
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Visual (Video) - Larger Container */}
                    <div className="w-full max-w-[1000px] mx-auto">
                        <div className="relative aspect-[16/9] rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden shadow-2xl">
                            <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="/videos/demo-poster.png">
                                <source src="/videos/localdocs-demo.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
