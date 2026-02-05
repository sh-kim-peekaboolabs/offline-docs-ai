import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export const ComparisonSectionEn = () => {
    return (
        <section id="comparison" className="w-full bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">
                        While others read 50,<br className="sm:hidden" /> we read 10,000.
                    </h2>
                </div>

                <div className="overflow-x-auto -mx-6 px-6">
                    <table className="w-full border-collapse text-left min-w-[640px]">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 w-[20%]">Comparison</th>
                                <th className="py-4 px-4 text-base sm:text-lg font-bold text-[#111] w-[25%] bg-blue-50/30 border-t-2 border-blue-600">
                                    LocalDocs
                                </th>
                                <th className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 w-[18%]">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <img src="/images/logos/chatgpt_logo.png" alt="ChatGPT" className="h-4 sm:h-5 w-auto object-contain opacity-60" />
                                        <span>ChatGPT</span>
                                    </div>
                                </th>
                                <th className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 w-[18%]">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <img src="/images/logos/gemini_logo.png" alt="Gemini" className="h-4 sm:h-5 w-auto object-contain opacity-60" />
                                        <span>Gemini</span>
                                    </div>
                                </th>
                                <th className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 w-[19%]">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <img src="/images/logos/notebooklm_logo.png" alt="NotebookLM" className="h-4 sm:h-5 w-auto object-contain opacity-60" />
                                        <span>NotebookLM</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">Per-file size</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">1GB+ (Leading)</td>
                                <td className="py-4 px-4 text-gray-600">512MB</td>
                                <td className="py-4 px-4 text-gray-600">100MB</td>
                                <td className="py-4 px-4 text-gray-600">200MB</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">Connected documents</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">10,000+ (Unlimited)</td>
                                <td className="py-4 px-4 text-gray-600">10</td>
                                <td className="py-4 px-4 text-gray-600">10</td>
                                <td className="py-4 px-4 text-gray-600">50</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">Data security</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">
                                    Local storage
                                </td>
                                <td className="py-4 px-4 text-gray-600">Server storage</td>
                                <td className="py-4 px-4 text-gray-600">Server storage</td>
                                <td className="py-4 px-4 text-gray-600">Server storage</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">Source verification</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">
                                    Instant highlights
                                </td>
                                <td className="py-4 px-4 text-gray-600">Plain text</td>
                                <td className="py-4 px-4 text-gray-600">Plain text</td>
                                <td className="py-4 px-4 text-gray-600">Citations</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="md:hidden mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                        <span>&lt;-</span> Scroll to compare <span>-&gt;</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
