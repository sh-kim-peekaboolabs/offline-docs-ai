import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, FileText, ChevronRight } from "lucide-react";

const useCases = [
    {
        id: "research",
        label: "Research/R&D",
        prompt: "From the papers, find only cases that improved 'EUV process yield' and summarize them in a table with specific figures.",
        response: "Yes, I extracted three key cases from 2024 IEEE papers and others. In particular, applying the 'low-temperature plasma process (Paper_A.pdf, p.14)' shows a 15% yield improvement."
    },
    {
        id: "finance",
        label: "Finance",
        prompt: "Company A's Q3 results are worse than expected. What do broker reports say is the cause? Summarize focusing on risk factors.",
        response: "Key causes are analyzed as 'raw material price increases (23.4Q_Report.pdf, p.5)' and 'exchange-rate volatility (Goldman_Analyst_Note.pdf, p.3)'. Both reports recommend a conservative approach through Q4."
    },
    {
        id: "automotive",
        label: "Automotive",
        prompt: "The brake sensor warning light (Code C1201) just came on. Based on the service manual and design drawings, list the parts to inspect.",
        response: "Referring to the manual (V2.1, p.452) and schematic (D-102), I organized the inspection order. Check ABS module connector contact. Measure wheel speed sensor air gap (spec: 0.5-1.0mm)."
    },
    {
        id: "chem",
        label: "Chem/Bio",
        prompt: "When handling hydrogen peroxide (H2O2), what substances must never be mixed with it? Find it in the internal MSDS database.",
        response: "According to the MSDS found (CAS No. 77-22-3), mixing with 'strong oxidizers' and 'flammable substances' poses an explosion risk. When handling, nitrile gloves (Safety_Manual_v3.pdf, p.12) must be worn."
    },
    {
        id: "construction",
        label: "Construction",
        prompt: "How have basement waterproofing standards changed over the last 10 years? Compare the latest specifications with regulation changes.",
        response: "The standards were strengthened with the 2018 Enforcement Decree revision (Article 52). Unlike the 2017 spec (Spec_2017.pdf), the latest spec mandates 'double waterproofing sheet application'."
    },
    {
        id: "legal",
        label: "Legal",
        prompt: "Review the service contract draft we just received. Compared to our standard contract, are there any poison clauses or unfavorable terms?",
        response: "Yes, pay attention to Article 12 'Damages.' It states your company bears all liability regardless of fault, which conflicts with Article 10 of the standard contract (Standard_Contract_v2.docx). I recommend revisions."
    }
];

export const UseCasesTabsEn = () => {
    const [activeTab, setActiveTab] = useState(useCases[0].id);

    return (
        <section id="use-cases-tabs" className="w-full bg-[#FAFAFA] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">Use it like this in your work.</h2>
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
                                        <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                <span className="font-bold text-blue-600 text-sm sm:text-base">Q</span>
                                            </div>
                                            <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 text-gray-800 text-base sm:text-lg leading-relaxed border border-gray-100 italic">
                                                "{useCase.prompt}"
                                            </div>
                                        </div>

                                        {/* AI Response */}
                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111] flex items-center justify-center flex-shrink-0 text-white">
                                                <span className="font-bold text-sm sm:text-base">A</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[#111] text-base sm:text-lg leading-relaxed mb-3">
                                                    {useCase.response}
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-[10px] sm:text-xs font-medium rounded-full border border-green-100">
                                                        <FileText className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                        Source Verified
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
