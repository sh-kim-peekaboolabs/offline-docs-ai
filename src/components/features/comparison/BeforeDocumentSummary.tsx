import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export const BeforeDocumentSummary = () => {
    return (
        <div className="relative w-full h-full bg-gray-50 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b bg-white flex-shrink-0">
                <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-medium text-gray-700">보고서_2024_Q3.pdf</span>
                </div>
                <span className="text-[10px] text-red-500 font-bold bg-red-50 px-1.5 py-0.5 rounded">100페이지</span>
            </div>

            {/* PDF Content Simulation */}
            <div className="relative flex-1 overflow-hidden p-4 sm:p-6">
                <motion.div
                    animate={{ y: [0, -100] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="space-y-1.5"
                >
                    {Array.from({ length: 60 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-2.5 bg-gray-300 rounded-full opacity-60"
                            style={{ width: `${85 + Math.random() * 15}%` }}
                        />
                    ))}
                </motion.div>

                {/* Scrollbar */}
                <div className="absolute right-1 top-2 bottom-2 w-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 150, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="w-full h-8 bg-gray-400 rounded-full"
                    />
                </div>

                {/* Bottom Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />

                {/* Page Number */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm">
                    1 / 100
                </div>
            </div>
        </div>
    );
};
