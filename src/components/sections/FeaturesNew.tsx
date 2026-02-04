import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, FileText, Globe, ScanText, ScanEye } from "lucide-react";

import { AfterDeepSearch } from "@/components/features/comparison/AfterDeepSearch";
import { AfterDocumentSummary } from "@/components/features/comparison/AfterDocumentSummary";
import { AfterTranslation } from "@/components/features/comparison/AfterTranslation";
import { AfterVision } from "@/components/features/comparison/AfterVision";

const features = [
    {
        id: "search",
        icon: Search,
        title: "심층 검색",
        description: (
            <>
                '아까 봤던 그 매출 자료 내용이 뭐였지?' 하고 친구에게 묻듯 대충 물어보세요.<br />
                AI가 문맥을 찰떡같이 알아듣고, 문서 더미 속에서 정확한 정보만 쏙 뽑아 알려줍니다.
            </>
        )
    },
    {
        id: "summary",
        icon: FileText,
        title: "문서 요약",
        description: "400페이지 보고서를 다 읽느라 야근하지 마세요. 커피 한 잔 마시는 동안 AI가 핵심만 쏙 뽑아드립니다. 요약본부터 먼저 확인하고 퇴근 시간을 앞당기세요."
    },
    {
        id: "translate",
        icon: Globe,
        title: "다국어 번역",
        description: (
            <>
                영어 논문, 일본어 매뉴얼... 번역기 돌리지 말고 그냥 파일만 연결하세요.<br />
                한국어로 물어보면 AI가 내용을 완벽히 이해하고 한국어로 술술 대답해 줍니다.
            </>
        )
    },
    {
        id: "vision", // 기존 ocr에서 vision으로 ID 변경 제안 (기능 성격 반영)
        icon: ScanEye, // 아이콘도 텍스트 스캔(ScanText)보다 눈(Eye) 관련 아이콘 추천
        title: "이미지 심층 이해 (AI Vision)",
        description: "단순히 글자만 읽는 게 아닙니다. 복잡한 도표의 흐름, 손으로 그린 약도, 사진 속 상황까지. AI가 사람의 눈처럼 이미지를 '통째로' 보고 이해해서 답변해 줍니다."
    }
];

export const FeaturesNew = () => {
    const [activeFeature, setActiveFeature] = useState("search");

    const renderFeatureDemo = () => {
        switch (activeFeature) {
            case "search": return <AfterDeepSearch />;
            case "summary": return <AfterDocumentSummary />;
            case "translate": return <AfterTranslation />;
            case "vision": return <AfterVision />;
            default: return <AfterDeepSearch />;
        }
    };

    return (
        <section id="features" className="w-full bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">
                        실제 업무는 이렇게 달라집니다.
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left: Features Selection */}
                    <div className="flex flex-col gap-4 h-full">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(feature.id)}
                                className={cn(
                                    "flex-1 w-full flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 text-left border relative overflow-hidden group",
                                    activeFeature === feature.id
                                        ? "bg-blue-50/50 border-blue-500 shadow-md"
                                        : "bg-white border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                                )}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                                    activeFeature === feature.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-gray-100 text-gray-500 group-hover:bg-white group-hover:text-blue-500"
                                )}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className={cn("text-lg font-bold mb-1 transition-colors", activeFeature === feature.id ? "text-blue-700" : "text-[#111]")}>
                                        {feature.title}
                                    </h3>
                                    <p className={cn("text-sm leading-relaxed transition-colors", activeFeature === feature.id ? "text-blue-600/80" : "text-gray-500")}>
                                        {feature.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Feature Demo (Fixed Size) */}
                    <div className="relative w-full h-[500px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
                        {renderFeatureDemo()}
                    </div>
                </div>
            </div>
        </section>
    );
};
