import { HighlightText } from "@/components/ui/highlight-text";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { WindowsIcon } from "@/components/icons/WindowsIcon";
import { analytics } from "@/lib/analytics";

export const HeroNewEn = () => {
    return (
        <section className="relative bg-white overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col items-center text-center gap-12">
                    {/* Text Content */}
                    <div className="max-w-4xl mx-auto w-full">
                        {/* H1 */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111] tracking-tighter leading-[1.2] sm:leading-[1.3] mb-6">
                            Massive files GPT can't read,<br className="hidden sm:block" />
                            <HighlightText className="text-[#111] inline-block" color="#fef08a" thickness="30%">
                                ask safely, no leaks.
                            </HighlightText>
                        </h1>

                        {/* H2/Subhead */}
                        {/* Unified Subhead for Mobile/Desktop */}
                        <div className="text-base sm:text-lg lg:text-xl text-[#666] leading-relaxed mb-10 mx-auto max-w-2xl px-4 sm:px-0">
                            <p className="hidden sm:block">
                                Even <strong>10,000 files</strong> and <strong>1GB+ textbooks</strong> are no problem.<br />
                                Keep documents on your computer and borrow only AI's brain.
                            </p>
                            <p className="sm:hidden text-base">
                                Large documents and tens of thousands of files are no problem.<br />
                                Keep documents local and chat safely.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download_mac', 'hero_new')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-[#111] text-white text-base font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 whitespace-nowrap">
                                    <AppleIcon className="w-5 h-5 mb-0.5" />
                                    Download for Mac
                                </button>
                            </a>
                            <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe" onClick={() => analytics.trackButtonClick('download_win', 'hero_new')}>
                                <button className="w-64 sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-[#111] text-base font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                                    <WindowsIcon className="w-4 h-4" />
                                    Download for Windows
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Visual (Video) - Larger Container */}
                    <div className="w-full max-w-[1000px] mx-auto">
                        <div className="relative aspect-[16/9] rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden shadow-2xl">
                            <video className="w-full h-full object-cover" autoPlay muted loop playsInline controls preload="auto" poster="/videos/demo-poster.png">
                                <source src="/videos/localdocs-demo-en.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
