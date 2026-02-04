import { motion } from "framer-motion";
import { XCircle, AlertCircle } from "lucide-react";

export const BeforeOCR = () => {
    return (
        <div className="relative w-full h-full bg-gray-200 overflow-hidden flex items-center justify-center">
            {/* Scanned Document */}
            <motion.div
                initial={{ rotate: -3 }}
                animate={{ rotate: [-3, -2, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[80%] h-[80%] bg-[#fdfbf7] rounded shadow-2xl p-6 border border-gray-300"
            >
                {/* Blurry Texts */}
                <div className="space-y-3 opacity-70 blur-[1.5px]">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-2.5 bg-gray-600 rounded-sm skew-x-1"
                            style={{
                                width: `${40 + Math.random() * 50}%`,
                                marginLeft: `${Math.random() * 10}%`
                            }}
                        />
                    ))}
                </div>

                {/* Noise/Dirt */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-40"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Error Markers */}
                <div className="absolute top-[30%] left-[20%] w-8 h-4 border border-red-500 bg-red-500/10 rounded flex items-center justify-center">
                    <XCircle className="w-3 h-3 text-red-500 opacity-80" />
                </div>
                <div className="absolute bottom-[40%] right-[30%] w-12 h-4 border border-red-500 bg-red-500/10 rounded" />

                {/* Scan Line */}
                <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                />
            </motion.div>

            {/* Status Bar */}
            <div className="absolute bottom-4 left-8 right-8 bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 border border-gray-200">
                <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">OCR Processing...</span>
                    <span className="text-[10px] text-red-500 font-bold">인식률: 65%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-full">
                    <motion.div
                        animate={{ width: ["0%", "65%"] }}
                        transition={{ duration: 2 }}
                        className="h-full bg-red-400 rounded-full"
                    />
                </div>
                <div className="mt-1.5 text-[10px] text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    오류: 23개 발견
                </div>
            </div>
        </div>
    );
};
