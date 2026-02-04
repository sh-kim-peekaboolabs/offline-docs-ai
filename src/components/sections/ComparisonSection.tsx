import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export const ComparisonSection = () => {
    return (
        <section id="comparison" className="w-full bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">
                        남들은 50개 읽을 때,<br className="sm:hidden" /> 우리는 10,000개를 읽습니다.
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 w-[20%]">비교 항목</th>
                                <th className="py-4 px-4 text-lg font-bold text-[#111] w-[25%] bg-blue-50/30 border-t-2 border-blue-600">
                                    로컬독스
                                </th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 w-[18%]">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/logos/chatgpt_logo.png" alt="ChatGPT" className="h-5 w-auto object-contain opacity-60" />
                                        ChatGPT
                                    </div>
                                </th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 w-[18%]">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/logos/gemini_logo.png" alt="Gemini" className="h-5 w-auto object-contain opacity-60" />
                                        Gemini
                                    </div>
                                </th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 w-[19%]">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/logos/notebooklm_logo.png" alt="NotebookLM" className="h-5 w-auto object-contain opacity-60" />
                                        NotebookLM
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">파일당 용량</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">1GB+ (압도적)</td>
                                <td className="py-4 px-4 text-gray-600">512MB</td>
                                <td className="py-4 px-4 text-gray-600">100MB</td>
                                <td className="py-4 px-4 text-gray-600">200MB</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">연결 문서 수</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">10,000개+ (무제한)</td>
                                <td className="py-4 px-4 text-gray-600">10개</td>
                                <td className="py-4 px-4 text-gray-600">10개</td>
                                <td className="py-4 px-4 text-gray-600">50개</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">데이터 보안</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">
                                    로컬 저장
                                </td>
                                <td className="py-4 px-4 text-gray-600">서버 저장</td>
                                <td className="py-4 px-4 text-gray-600">서버 저장</td>
                                <td className="py-4 px-4 text-gray-600">서버 저장</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-900">출처 검증</td>
                                <td className="py-4 px-4 font-bold text-[#111] bg-blue-50/30">
                                    즉시 하이라이트
                                </td>
                                <td className="py-4 px-4 text-gray-600">단순 텍스트</td>
                                <td className="py-4 px-4 text-gray-600">단순 텍스트</td>
                                <td className="py-4 px-4 text-gray-600">인용 표시</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="md:hidden mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                        <span>←</span> 스크롤하여 비교하기 <span>→</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
