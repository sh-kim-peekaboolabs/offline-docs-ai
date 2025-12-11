import { LocalProcessingCard } from "@/components/demo/local-processing-card";
import { TableReadDemo } from "@/components/demo/table-read-demo";
import { SentenceCitationDemo } from "@/components/demo/sentence-citation-demo";
import { PageScrollDemo } from "@/components/demo/page-scroll-demo";

export const DifferentiationSection = () => {
    const items = [
        {
            number: "01",
            title: "100% Local Processing",
            description: (
                <>
                    Your data never leaves your device.
                    <br />
                    Zero cloud uploads, zero security risks.
                </>
            ),
            component: <LocalProcessingCard />
        },
        {
            number: "02",
            title: "Reads Tables & Formulas Perfectly",
            description: "Accurately extracts data from complex tables, mathematical formulas, and cross-page references.",
            component: <TableReadDemo />
        },
        {
            number: "03",
            title: "Sentence-Level Citations",
            description: (
                <>
                    Every answer comes with precise citations.
                    <br />
                    Verify sources instantly with one click.
                </>
            ),
            component: <SentenceCitationDemo />
        },
        {
            number: "04",
            title: "Handle 1000+ page documents",
            description: (
                <>
                    Search through 1,000+ page documents in seconds.
                    <br />
                    Nothing gets missed.
                </>
            ),
            component: <PageScrollDemo />
        },
    ];

    return (
        <section className="w-full bg-stone-50">
            <div className="max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div key={index} className="border-b border-stone-200">
                        {/* Header Row - Only for first item */}
                        {index === 0 && (
                            <div className="px-8 py-4 border-b border-stone-600 text-center bg-stone-800">
                                <span className="text-sm font-semibold text-stone-100 tracking-widest uppercase">
                                    WHAT MAKES LOCALDOCS DIFFERENT?
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
