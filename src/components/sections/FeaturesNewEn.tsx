import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search, FileText, Globe, ScanText, ScanEye } from "lucide-react";
import { useInView } from "framer-motion";

import { AfterDeepSearchEn } from "@/components/features/comparison/AfterDeepSearchEn";
import { AfterDocumentSummaryEn } from "@/components/features/comparison/AfterDocumentSummaryEn";
import { AfterTranslationEn } from "@/components/features/comparison/AfterTranslationEn";
import { AfterVisionEn } from "@/components/features/comparison/AfterVisionEn";

const features = [
    {
        id: "search",
        icon: Search,
        title: "Deep Search",
        description: (
            <>
                Ask casually like, "What was in that sales report I saw earlier?"<br />
                AI understands the context and pulls only the exact info from the pile of documents.
            </>
        )
    },
    {
        id: "summary",
        icon: FileText,
        title: "Document Summary",
        description: "Don't stay late reading a 400-page report. While you grab a coffee, AI extracts just the essentials. Check the summary first and leave earlier."
    },
    {
        id: "translate",
        icon: Globe,
        title: "Multilingual Translation",
        description: (
            <>
                English papers, Japanese manuals... don't run a translator-just connect the file.<br />
                Ask in Korean and AI will understand perfectly and answer fluently in Korean.
            </>
        )
    },
    {
        id: "vision", // Changed from OCR to vision to better reflect the feature
        icon: ScanEye, // Eye icon fits better than text scan
        title: "Deep Image Understanding (AI Vision)",
        description: "Not just reading text. Complex diagram flows, hand-drawn maps, even scenes in photos. AI sees the image as a whole like a human and answers accordingly."
    }
];

export const FeaturesNewEn = () => {
    const [activeFeature, setActiveFeature] = useState("search");

    const renderFeatureDemo = (id: string = activeFeature) => {
        switch (id) {
            case "search": return <AfterDeepSearchEn />;
            case "summary": return <AfterDocumentSummaryEn />;
            case "translate": return <AfterTranslationEn />;
            case "vision": return <AfterVisionEn />;
            default: return <AfterDeepSearchEn />;
        }
    };

    return (
        <section id="features" className="w-full bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">
                        This is how your work changes.
                    </h2>
                </div>

                {/* Desktop: Tab Grid */}
                <div className="hidden lg:grid grid-cols-2 gap-6 lg:gap-12 items-stretch">
                    {/* Left: Features Selection */}
                    <div className="flex flex-col gap-3 h-full">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(feature.id)}
                                className={cn(
                                    "flex-1 w-full flex items-start gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 text-left border relative overflow-hidden group",
                                    activeFeature === feature.id
                                        ? "bg-blue-50/50 border-blue-500 shadow-md translate-x-2"
                                        : "bg-white border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                                )}
                            >
                                <div className={cn(
                                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                                    activeFeature === feature.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-gray-100 text-gray-500 group-hover:bg-white group-hover:text-blue-500"
                                )}>
                                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className={cn("text-base sm:text-lg font-bold mb-1 transition-colors", activeFeature === feature.id ? "text-blue-700" : "text-[#111]")}>
                                        {feature.title}
                                    </h3>
                                    <p className={cn("text-xs sm:text-sm leading-relaxed transition-colors", activeFeature === feature.id ? "text-blue-600/80" : "text-gray-500")}>
                                        {feature.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Feature Demo */}
                    <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
                        {renderFeatureDemo()}
                    </div>
                </div>

                {/* Mobile: Interleaved (Card + Demo) */}
                <div className="flex flex-col gap-10 lg:hidden">
                    {features.map((feature) => (
                        <FeatureItem key={feature.id} feature={feature} renderFeatureDemo={renderFeatureDemo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Sub-component for Mobile Interleaved Items to handle independent "InView" triggering
const FeatureItem = ({ feature, renderFeatureDemo }: { feature: any, renderFeatureDemo: any }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const [key, setKey] = useState(0);

    // Replay animation when clicked
    const handleReplay = () => {
        setKey(prev => prev + 1);
    };

    return (
        <div ref={ref} className="flex flex-col gap-5">
            <button
                onClick={handleReplay}
                className={cn(
                    "flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 text-left active:scale-[0.98]",
                    isInView
                        ? "bg-blue-50/50 border-blue-500 shadow-md translate-x-1"
                        : "bg-white border-gray-200"
                )}
            >
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-colors duration-300",
                    isInView ? "bg-blue-600 text-white shadow-blue-200" : "bg-gray-100 text-gray-500"
                )}>
                    <feature.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className={cn("text-base font-bold mb-1 transition-colors", isInView ? "text-blue-700" : "text-[#111]")}>
                            {feature.title}
                        </h3>
                        {isInView && <span className="text-[10px] text-blue-400 font-medium animate-pulse">Replay</span>}
                    </div>
                    <p className={cn("text-sm leading-relaxed transition-colors", isInView ? "text-blue-600/80" : "text-gray-500")}>
                        {feature.description}
                    </p>
                </div>
            </button>
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50">
                {/* Remount component when isInView changes to true or when manually clicked */}
                <div key={`${key}-${isInView ? 'visible' : 'hidden'}`}>
                    {isInView && renderFeatureDemo(feature.id)}
                </div>
            </div>
        </div>
    );
};
