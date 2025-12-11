import { LocalProcessingCardKr } from "@/components/demo/local-processing-card-kr";
import { TableReadDemoKr } from "@/components/demo/table-read-demo-kr";
import { SentenceCitationDemoKr } from "@/components/demo/sentence-citation-demo-kr";
import { PageScrollDemoKr } from "@/components/demo/page-scroll-demo-kr";

export const DifferentiationSectionKr = () => {
    const items = [
        {
            number: "01",
            title: "100% 로컬 처리",
            description: (
                <>
                    데이터가 기기 외부로 나가지 않습니다.
                    <br />
                    클라우드 업로드 제로, 보안 위험 제로.
                </>
            ),
            component: <LocalProcessingCardKr />
        },
        {
            number: "02",
            title: "표와 수식을 완벽하게 인식",
            description: "복잡한 표, 수학 공식, 페이지 간 참조에서 데이터를 정확하게 추출합니다.",
            component: <TableReadDemoKr />
        },
        {
            number: "03",
            title: "문장 단위 출처 인용",
            description: (
                <>
                    모든 답변에 정확한 출처가 포함됩니다.
                    <br />
                    클릭 한 번으로 즉시 검증하세요.
                </>
            ),
            component: <SentenceCitationDemoKr />
        },
        {
            number: "04",
            title: "1000페이지 이상의 대용량 문서 처리",
            description: (
                <>
                    1,000페이지가 넘는 문서도 몇 초 만에 검색하세요.
                    <br />
                    놓치는 내용이 없습니다.
                </>
            ),
            component: <PageScrollDemoKr />
        },
    ];

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto border-x border-gray-200 bg-stone-50">
                {items.map((item, index) => (
                    <div key={index} className="border-b border-stone-200">
                        {/* Header Row - Only for first item */}
                        {index === 0 && (
                            <div className="px-8 py-4 border-b border-stone-600 text-center bg-stone-800">
                                <span className="text-sm font-semibold text-stone-100 tracking-widest uppercase">
                                    LocalDocs만의 차별점
                                </span>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left Column - Text */}
                            <div className="px-8 md:px-10 py-12 md:py-16 border-r border-stone-200 flex flex-col justify-center">
                                <div className="space-y-4">
                                    <div className="text-sm font-mono text-stone-400">{item.number}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-stone-900 leading-tight">{item.title}</h3>
                                    <p className="text-base lg:text-lg text-stone-700 leading-relaxed tracking-tight">{item.description}</p>
                                </div>
                            </div>

                            {/* Right Column - Graphic Placeholder */}
                            <div className="bg-stone-100 px-8 md:px-12 py-12 md:py-16 flex items-center justify-center min-h-[400px]">
                                {item.component ? (
                                    <div className="w-full h-full min-h-[300px] bg-white rounded-xl border border-stone-200 overflow-hidden">
                                        {item.component}
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-400 font-medium">
                                        Graphic Placeholder for {item.title}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
