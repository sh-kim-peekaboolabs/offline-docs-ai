import { Download, FolderInput, MessageSquare, CheckCircle } from "lucide-react";

export const HowItWorksNewEn = () => {
    return (
        <section id="how-it-works" className="bg-[#fafafa] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">
                        No complex setup,<br className="sm:hidden" /> four steps are enough.
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
                        <h3 className="text-xl font-bold text-[#111] mb-3">1. Install</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            No complicated server setup needed.<br />
                            Just install it on your PC.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-6 z-10">
                            <FolderInput className="w-10 h-10 text-[#111]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-3">2. Connect files</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            Connect the files you want<br />
                            from your PC, and you're done.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-6 z-10">
                            <MessageSquare className="w-10 h-10 text-[#111]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-3">3. Ask questions</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            Ask like you're talking to a junior teammate.<br />
                            It picks only what you need.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-6 z-10">
                            <CheckCircle className="w-10 h-10 text-[#111]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-3">4. Verify</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            Click the sources to verify.<br />
                            We highlight the citations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
