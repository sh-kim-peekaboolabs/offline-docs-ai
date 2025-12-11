"use client";

import {
    InlineCitation,
    InlineCitationCard,
    InlineCitationCardBody,
    InlineCitationCardTrigger,
    InlineCitationSource,
} from "@/components/ui/inline-citation";
import { motion } from "framer-motion";

import logo from '/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png';

const Highlighter = ({ color, children }: { color: string, children: React.ReactNode }) => (
    <motion.span
        initial={{ backgroundColor: "transparent" }}
        whileInView={{ backgroundColor: color }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-1 rounded box-decoration-clone"
    >
        {children}
    </motion.span>
);

export const SentenceCitationDemoKr = () => {
    return (
        <div className="w-full h-full bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <img src={logo} alt="LocalDocs" className="w-5 h-5" />
                <span className="text-sm font-semibold text-gray-900">답변</span>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p className="leading-7">
                    <Highlighter color="#FFF59D50">
                        분기 매출이 2분기 대비 15.3% 증가했습니다
                    </Highlighter>
                    <InlineCitation className="ml-1 align-baseline">
                        <InlineCitationCard>
                            <InlineCitationCardTrigger source="1" />
                            <InlineCitationCardBody>
                                <InlineCitationSource
                                    title="3분기 재무 보고서"
                                    description="3페이지, 매출 분석 섹션"
                                />
                            </InlineCitationCardBody>
                        </InlineCitationCard>
                    </InlineCitation>
                    .
                </p>

                <p className="leading-7">
                    <Highlighter color="#C5E1A550">
                        효율성 개선으로 운영 비용이 8.2% 감소했습니다
                    </Highlighter>
                    <InlineCitation className="ml-1 align-baseline">
                        <InlineCitationCard>
                            <InlineCitationCardTrigger source="2" />
                            <InlineCitationCardBody>
                                <InlineCitationSource
                                    title="비용 내역 보고서"
                                    description="12페이지, 비용 최적화"
                                />
                            </InlineCitationCardBody>
                        </InlineCitationCard>
                    </InlineCitation>
                    .
                </p>

                <p className="leading-7">
                    <Highlighter color="#B3E5FC50">
                        순이익률이 22.1%에 도달하여 예상치를 초과했습니다
                    </Highlighter>
                    <InlineCitation className="ml-1 align-baseline">
                        <InlineCitationCard>
                            <InlineCitationCardTrigger source="3" />
                            <InlineCitationCardBody>
                                <InlineCitationSource
                                    title="손익계산서"
                                    description="5페이지, 순이익 분석"
                                />
                            </InlineCitationCardBody>
                        </InlineCitationCard>
                    </InlineCitation>
                    .
                </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                    <strong>3개의 출처 인용됨</strong> - 원문을 보려면 번호를 클릭하세요
                </p>
            </div>
        </div>
    );
};
