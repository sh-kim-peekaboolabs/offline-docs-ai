import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Sparkles } from "lucide-react";

export const AfterVisionEn = () => {
    return (
        <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4">
            {/* Image Container with Scanning Effect */}
            <div className="relative w-full max-w-[500px] mb-6">
                <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 aspect-video">
                    <img
                        src="/images/vision-demo-en.png"
                        alt="Regulation Image"
                        className="w-full h-full object-contain"
                    />

                    {/* Simple Scan Line */}
                    <motion.div
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-10"
                    />
                </div>

                {/* AI Processing Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <div className="text-[10px] font-medium text-blue-600 bg-white/90 px-2 py-1 rounded-full border border-blue-100 shadow-sm flex items-center gap-1 backdrop-blur">
                        <Sparkles className="w-3 h-3" /> AI Vision Analysis
                    </div>
                </div>
            </div>

            {/* AI Insight Result */}
            <div className="w-full max-w-[500px] bg-blue-50/30 rounded-xl p-5 border border-blue-50">
                <div className="flex items-center gap-2 mb-3">
                    <img src="/images/logos/localdocs_symbol.png" alt="LocalDocs" className="w-4 h-4 object-contain" />
                    <h3 className="text-sm font-bold text-gray-900">LocalDocs Analysis</h3>
                </div>

                <TypeAnimation
                    sequence={[
                        500,
                        'We analyzed the image and text context together.\nThis image explains safety regulations for a "hazardous material storage area" and visually emphasizes the importance of the "no unauthorized entry" measure.',
                    ]}
                    wrapper="div"
                    speed={60}
                    cursor={false}
                    className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line"
                />
            </div>
        </div>
    );
};
