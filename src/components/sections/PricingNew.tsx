import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";

export const PricingNew = () => {
    return (
        <section id="pricing" className="bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111] mb-4 break-keep px-4 sm:px-0">
                        나에게 맞는 요금제를 선택하세요.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="flex flex-col border border-gray-200 rounded-2xl p-8 bg-white hover:border-gray-300 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Free</h3>
                            <div className="text-4xl font-bold mb-2">무료</div>
                            <p className="text-sm text-gray-500">기본 기능으로도 충분한 분들을 위한 플랜</p>
                        </div>
                        <ul className="space-y-4 flex-1 text-sm text-gray-600 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>무제한 문서 연결 및 검색</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>1GB+ 대용량 파일 지원</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>표/차트/이미지 심층 분석(AI Vision)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>출처 표시 및 하이라이트</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>적정 사용량 (일 50개 쿼리)</span>
                            </li>
                        </ul>
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download', 'pricing_free_new')}>
                            <Button variant="outline" className="w-full h-12 text-base border-gray-300 hover:bg-gray-50 text-gray-900">
                                바로 시작하기
                            </Button>
                        </a>
                    </div>

                    {/* Pro Plan */}
                    <div className="flex flex-col border-2 border-[#111] rounded-2xl p-8 bg-white relative shadow-2xl shadow-gray-200/50">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Recommended
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-[#111]">Pro</h3>
                            <div className="text-4xl font-bold mb-2 flex items-baseline gap-1">
                                $9 <span className="text-lg font-normal text-gray-500">/ 월</span>
                            </div>
                            <p className="text-sm text-blue-600 font-medium">연 결제 시 $99 (1개월 무료)</p>
                        </div>
                        <ul className="space-y-4 flex-1 text-sm text-gray-600 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span className="font-semibold text-[#111]">Free의 모든 기능 포함</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>복잡한 문맥/의도 파악</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>멀티 포맷 지원 예정(HWP, DOCX, PPTX, XLSX)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>더 많은 사용량 (일 500개 쿼리)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>우선 고객 지원</span>
                            </li>
                        </ul>
                        <a href="https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg" onClick={() => analytics.trackButtonClick('download', 'pricing_pro_new')}>
                            <Button className="w-full h-12 text-base bg-[#111] hover:bg-[#333] text-white">
                                바로 시작하기
                            </Button>
                        </a>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col border border-gray-200 rounded-2xl p-8 bg-gray-50">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Enterprise</h3>
                            <div className="text-4xl font-bold mb-2">문의하기</div>
                            <p className="text-sm text-gray-500">보안이 중요한 기업/팀을 위한 플랜</p>
                        </div>
                        <ul className="space-y-4 flex-1 text-sm text-gray-600 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>SSO / 감사 로그</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>라이센스 키 로그인</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>사내 데이터 학습 맞춤형 AI</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>관리자 대시보드</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>전담 지원 및 온보딩</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>온프레미스/전용 모델 지원</span>
                            </li>
                        </ul>
                        <a href="https://calendar.app.google/LD81XjYtbptocMKw8" target="_blank" rel="noopener noreferrer" onClick={() => analytics.trackButtonClick('contact', 'pricing_enterprise_new')}>
                            <Button variant="outline" className="w-full h-12 text-base bg-white border-gray-300 hover:bg-gray-50 text-gray-900">
                                도입 문의하기
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
