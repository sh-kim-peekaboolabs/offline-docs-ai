import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, FileText, ChevronRight } from "lucide-react";

const useCases = [
    {
        id: "research",
        label: "연구/R&D",
        prompt: "논문들 중에서 'EUV 공정 수율' 개선한 사례만 찾아서 표로 정리해 줘. 구체적인 수치랑 같이.",
        response: "네, 2024년 IEEE 논문 등에서 3가지 핵심 사례를 추출했습니다. 특히 '저온 플라즈마 공정(Paper_A.pdf, p.14)' 적용 시 수율이 15% 향상된 결과가 확인됩니다."
    },
    {
        id: "finance",
        label: "금융",
        prompt: "A사 3분기 실적이 예상보다 안 좋은데, 증권사 리포트에서는 원인을 뭐라고 분석하고 있어? 리스크 요인 위주로 요약해 줘.",
        response: "주요 원인은 **'원자재 가격 상승(23.4Q_Report.pdf, p.5)'**과 **'환율 변동성(Goldman_Analyst_Note.pdf, p.3)'**으로 분석됩니다. 두 리포트 모두 4분기까지는 보수적인 접근을 권장하고 있습니다."
    },
    {
        id: "automotive",
        label: "자동차",
        prompt: "지금 브레이크 센서 경고등(Code C1201) 떴는데, 정비 매뉴얼이랑 설계 도면 기준으로 점검해야 할 부품 리스트 뽑아줘.",
        response: "매뉴얼(V2.1, p.452)과 회로도(D-102)를 참조하여 점검 순서를 정리했습니다. ABS 모듈 커넥터 접촉 불량 확인. 휠 속도 센서 에어갭 측정 (기준치: 0.5~1.0mm)"
    },
    {
        id: "chem",
        label: "화학/바이오",
        prompt: "과산화수소(H2O2) 취급할 때 절대 섞으면 안 되는 물질이 뭐야? 사내 MSDS 데이터베이스에서 찾아서 알려줘.",
        response: "검색된 MSDS(CAS No. 77-22-3)에 따르면, **'강산화제' 및 '가연성 물질'**과 혼합 시 폭발 위험이 있습니다. 취급 시에는 반드시 **니트릴 계열 장갑(Safety_Manual_v3.pdf, p.12)**을 착용해야 합니다."
    },
    {
        id: "construction",
        label: "건설/건축",
        prompt: "지하층 방수 공사 기준이 최근 10년 사이에 어떻게 바뀌었어? 최신 시방서랑 법규 변경 내역 비교해 줘.",
        response: "2018년 건축법 시행령 개정(제52조)으로 기준이 강화되었습니다. 2017년 시방서(Spec_2017.pdf)와 달리, 최신 시방서에는 '이중 방수 시트 적용'이 의무화된 것을 확인했습니다."
    },
    {
        id: "legal",
        label: "법률",
        prompt: "방금 받은 용역 계약서 초안 좀 봐줘. 우리 표준 계약서랑 비교했을 때 독소 조항이나 불리한 내용 있어?",
        response: "네, 제12조 '손해배상' 조항을 주의해야 합니다. 귀책사유와 무관하게 귀사가 모든 책임을 지도록 명시되어 있는데, 이는 표준 계약서(Standard_Contract_v2.docx) 제10조와 배치됩니다. 수정을 제안합니다."
    }
];

export const UseCasesTabs = () => {
    const [activeTab, setActiveTab] = useState(useCases[0].id);

    return (
        <section id="use-cases-tabs" className="w-full bg-[#FAFAFA] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">내 업무에 이렇게 활용하세요.</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[400px]">
                    {/* Desktop Tabs */}
                    <div className="hidden lg:flex flex-col gap-2 w-1/3">
                        {useCases.map((useCase) => (
                            <button
                                key={useCase.id}
                                onClick={() => setActiveTab(useCase.id)}
                                className={cn(
                                    "text-left px-6 py-4 rounded-xl transition-all duration-200 text-lg font-medium",
                                    activeTab === useCase.id
                                        ? "bg-white shadow-md text-blue-600 border border-blue-100"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                )}
                            >
                                {useCase.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Accordion / Desktop Content */}
                    <div className="w-full lg:w-2/3">
                        {useCases.map((useCase) => (
                            <div key={useCase.id} className="lg:contents">
                                {/* Mobile Button */}
                                <button
                                    onClick={() => setActiveTab(activeTab === useCase.id ? "" : useCase.id)}
                                    className={cn(
                                        "flex lg:hidden w-full items-center justify-between px-6 py-4 bg-white border-b border-gray-100 text-left font-medium text-gray-900 first:rounded-t-xl last:rounded-b-xl last:border-0",
                                        activeTab === useCase.id && "bg-gray-50 text-blue-600"
                                    )}
                                >
                                    {useCase.label}
                                    <ChevronRight className={cn("w-5 h-5 transition-transform", activeTab === useCase.id && "rotate-90")} />
                                </button>

                                {/* Content Panel */}
                                <div
                                    className={cn(
                                        "overflow-hidden lg:h-full lg:opacity-100 lg:block transition-all duration-300",
                                        activeTab === useCase.id ? "max-h-[500px] opacity-100 block" : "max-h-0 opacity-0 hidden lg:hidden"
                                    )}
                                >
                                    <div className={cn(
                                        "bg-white rounded-2xl border border-gray-200 shadow-xl p-8 lg:h-full flex flex-col justify-center",
                                        // Desktop only styles for single panel effect
                                        activeTab !== useCase.id && "lg:hidden"
                                    )}>
                                        {/* User Prompt */}
                                        <div className="flex gap-4 mb-8">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                <span className="font-bold text-blue-600">Q</span>
                                            </div>
                                            <div className="bg-gray-50 rounded-2xl p-5 text-gray-800 text-lg leading-relaxed border border-gray-100">
                                                "{useCase.prompt}"
                                            </div>
                                        </div>

                                        {/* AI Response */}
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center flex-shrink-0 text-white">
                                                <span className="font-bold">A</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[#111] text-lg leading-relaxed mb-3">
                                                    {useCase.response}
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
                                                        <FileText className="w-3 h-3" />
                                                        Source Verified (p.14)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
