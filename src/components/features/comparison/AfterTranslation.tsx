import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { User, FileText } from "lucide-react";

export const AfterTranslation = () => {
    // Nvidia 10-K text context
    const englishContext = `
    Item 1A. Risk Factors
    
    Dependence on Data Center Revenue.
    A significant portion of our revenue is derived from our Data Center platform...
    Any decline in demand for our data center products, including our GPUs 
    for AI and high-performance computing, could harm our financial results.
    
    Competition.
    The data center market is highly competitive. We face competition from 
    established semiconductor companies and cloud service providers who are 
    developing their own internal AI accelerators...
    
    Supply Chain Constraints.
    Our data center products require complex manufacturing processes and 
    advanced packaging (CoWoS). Shortages in HBM memory or packaging 
    capacity could limit our ability to meet demand...
    `;

    return (
        <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
            {/* Background: English Document View */}
            <div className="absolute inset-0 bg-white p-6 opacity-100 pointer-events-none select-none overflow-hidden">
                <div className="max-w-xl mx-auto space-y-4">
                    {/* Document Header Mockup */}
                    <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
                        <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white font-serif font-bold">N</div>
                        <div className="text-xs text-gray-500 font-sans">NVIDIA Corporation | Form 10-K | Fiscal Year 2024</div>
                    </div>

                    <div className="space-y-3 font-serif text-sm text-gray-800 leading-relaxed opacity-70">
                        {englishContext.split('\n').map((line, i) => (
                            <p key={i} className={line.trim().startsWith("Item") || line.trim().endsWith(".") === false ? "font-bold text-black" : ""}>
                                {line}
                            </p>
                        ))}
                        {/* More mock text lines */}
                        <div className="h-2 bg-gray-200 w-full mt-2"></div>
                        <div className="h-2 bg-gray-200 w-full"></div>
                        <div className="h-2 bg-gray-200 w-full"></div>
                        <div className="h-2 bg-gray-200 w-5/6"></div>
                        <div className="h-2 bg-gray-200 w-full"></div>
                    </div>
                </div>
            </div>

            {/* Overlay Gradient for Readability of Chat */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent z-0"></div>

            <div className="relative z-10 w-full h-full flex flex-col justify-end p-4 sm:p-6 space-y-4">

                {/* User Query */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-end"
                >
                    <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tr-none max-w-[90%] text-xs sm:text-sm font-medium shadow-sm flex items-start gap-3">
                        <span className="leading-relaxed">
                            이번 분기 엔비디아 실적 보고서에서 <strong>'데이터센터 매출'</strong> 관련 리스크 요인만 찾아서 한국어로 요약해 줘.
                        </span>
                        <User className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                    </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-start"
                >
                    <div className="bg-blue-50 border border-blue-100 text-gray-800 px-5 py-4 rounded-2xl rounded-tl-none max-w-[95%] shadow-sm ring-1 ring-blue-100/50">
                        <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-xs border-b border-blue-200/50 pb-2">
                            {/* LocalDocs Logo */}
                            <img src="/images/logos/localdocs_symbol.png" alt="LocalDocs" className="w-5 h-5 object-contain" />
                            로컬독스
                        </div>
                        <TypeAnimation
                            sequence={[
                                1500,
                                "엔비디아 2024 10-K 보고서의 'Risk Factors' 섹션 분석 결과입니다.\n\n1. 경쟁 심화 (Competition): CSP(클라우드 제공사)들의 자체 AI 칩 개발로 인한 시장 점유율 위협.\n2. 공급망 제약 (Supply Chain): CoWoS 패키징 및 HBM 메모리 공급 부족 시 매출 타격 가능성.\n3. 수요 변동성: AI 및 HPC용 GPU 수요 감소 시 재무 실적에 직접적 악영향."
                            ]}
                            wrapper="div"
                            speed={80}
                            className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-medium"
                            cursor={false}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
