import { motion } from "framer-motion";
import { Search, FileText, FileSpreadsheet, File } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const AfterDeepSearchEn = () => {
    // Mock search results depicting various file types
    const results = [
        { icon: FileText, title: "2024_Q3_Marketing_Strategy.pdf", snippet: "...key strategies to achieve Q3 sales targets..." },
        { icon: FileSpreadsheet, title: "2024_Sales_Status_Final.xlsx", snippet: "...monthly sales trend and YoY growth analysis sheet..." },
        { icon: File, title: "Competitor_Analysis_Report_v2.docx", snippet: "...market share changes of major competitor A..." },
        { icon: FileText, title: "Weekly_Meeting_Notes_20241024.txt", snippet: "...CEO directive: re-check the sales materials..." },
    ];

    return (
        <div className="relative w-full h-full bg-white p-4 sm:p-8 flex flex-col justify-center">
            {/* Search Bar (Question) */}
            <div className="flex items-center border-2 border-blue-500 rounded-full px-4 py-3 sm:px-6 mb-6 shadow-sm bg-blue-50/10">
                <Search className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <TypeAnimation
                    sequence={['Find those sales metrics I saw earlier', 1000]}
                    wrapper="div"
                    speed={50}
                    className="flex-1 ml-3 text-sm sm:text-base font-medium text-gray-800"
                    cursor={true}
                    repeat={Infinity}
                />
            </div>

            {/* Results List */}
            <div className="space-y-3">
                {results.map((result, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.15 }}
                        className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                    >
                        <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0 text-gray-500">
                            <result.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm text-[#111] mb-1 truncate">{result.title}</h4>
                            <p className="text-xs text-gray-500 line-clamp-1">{result.snippet}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* AI Answer Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-4 text-center text-xs text-blue-600 font-medium"
            >
                AI is finding information from documents related to your question.
            </motion.div>
        </div>
    );
};
