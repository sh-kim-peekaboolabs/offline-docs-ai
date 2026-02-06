import { motion } from "framer-motion";
import { MousePointer2, Loader2 } from "lucide-react";

export const BeforeTranslation = () => {
    return (
        <div className="relative w-full h-full bg-gray-100 overflow-hidden flex items-center justify-center">
            {/* Google Docs */}
            <motion.div
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-[10%] left-[5%] w-[45%] h-[40%] bg-white shadow-lg rounded-lg p-3 border-t-4 border-blue-500 z-10"
            >
                <div className="text-[10px] font-bold mb-2 flex items-center gap-1 text-gray-700">📄 Google Docs</div>
                <div className="space-y-1.5 opacity-60">
                    <div className="h-1.5 bg-gray-300 rounded w-full" />
                    <div className="h-1.5 bg-gray-300 rounded w-5/6" />
                    <div className="h-1.5 bg-gray-300 rounded w-4/5" />
                    <div className="h-1.5 bg-gray-300 rounded w-full" />
                </div>
            </motion.div>

            {/* Google Translate */}
            <motion.div
                animate={{ rotate: [0.5, -0.5, 0.5] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[40%] bg-white shadow-xl rounded-lg p-3 z-20 flex flex-col"
            >
                <div className="text-[10px] font-bold mb-2 flex items-center gap-1 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-sm"></span>
                    Google Translate
                </div>
                <div className="grid grid-cols-2 gap-2 flex-1">
                    <div className="border rounded p-1.5 text-[10px] bg-gray-50 border-gray-200">EN...</div>
                    <div className="border rounded p-1.5 text-[10px] bg-white border-gray-200">KO...</div>
                </div>
            </motion.div>

            {/* Papago */}
            <motion.div
                animate={{ rotate: [1, -1, 1] }}
                transition={{ repeat: Infinity, duration: 2.8 }}
                className="absolute bottom-[10%] right-[5%] w-[45%] h-[40%] bg-white shadow-lg rounded-lg p-3 border-t-4 border-green-500 z-10"
            >
                <div className="text-[10px] font-bold mb-2 text-gray-700">🌐 Papago</div>
                <div className="flex justify-center items-center h-full pb-4">
                    <Loader2 className="w-6 h-6 animate-spin text-green-500" />
                </div>
            </motion.div>

            {/* Moving Cursor */}
            <motion.div
                animate={{
                    x: [-40, 60, 100],
                    y: [-40, 20, 100],
                }}
                transition={{ repeat: Infinity, duration: 3, times: [0, 0.5, 1], ease: "easeInOut" }}
                className="absolute z-30 pointer-events-none top-1/2 left-1/2"
            >
                <MousePointer2 className="w-5 h-5 text-black drop-shadow-md fill-white" />
            </motion.div>

            <div className="absolute bottom-3 left-4 text-xs text-gray-400 font-mono">
                Ctrl+C ... Ctrl+V
            </div>
        </div>
    );
};
