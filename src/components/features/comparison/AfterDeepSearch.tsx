import { motion } from "framer-motion";
import { Search, FileText, FileSpreadsheet, File } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const AfterDeepSearch = () => {
    // Mock search results depicting various file types
    const results = [
        { icon: FileText, title: "2024_Q3_마케팅_전략.pdf", snippet: "...3분기 매출 목표 달성을 위한 핵심 전략은..." },
        { icon: FileSpreadsheet, title: "2024_매출_현황_최종.xlsx", snippet: "...월별 매출 추이 및 전년 대비 성장률 분석 시트..." },
        { icon: File, title: "경쟁사_분석_보고서_v2.docx", snippet: "...주요 경쟁사 A의 시장 점유율 변동 추이..." },
        { icon: FileText, title: "주간_회의록_20241024.txt", snippet: "...대표님 지시사항: 매출 자료 재검토 필요..." },
    ];

    return (
        <div className="relative w-full h-full bg-white p-4 sm:p-8 flex flex-col justify-center">
            {/* Search Bar (Question) */}
            <div className="flex items-center border-2 border-blue-500 rounded-full px-4 py-3 sm:px-6 mb-6 shadow-sm bg-blue-50/10">
                <Search className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <TypeAnimation
                    sequence={['아까 봤던 그 매출 지표 다시 찾아줘', 1000]}
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
                AI가 질문과 관련된 문서에서 정보를 찾고 있습니다.
            </motion.div>
        </div>
    );
};
