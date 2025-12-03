'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    InlineCitation,
    InlineCitationText,
    InlineCitationCard,
    InlineCitationCardTrigger,
    InlineCitationCardBody,
    InlineCitationSource,
    InlineCitationQuote,
} from '@/components/ui/inline-citation';
import logo from '/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png';

export const CitationDemoKr = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    React.useEffect(() => {
        // Show answer after 1 second
        const timer = setTimeout(() => setShowAnswer(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <img src={logo} alt="LocalDocs" className="w-8 h-8 flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-gray-900">LocalDocs</h3>
                </div>

                <AnimatePresence>
                    {showAnswer && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm text-gray-700 leading-relaxed space-y-3"
                        >
                            <p>
                                <InlineCitation>
                                    <InlineCitationText>
                                        개인정보보호 영향평가 결과, 데이터 처리 절차에서 3가지 주요 규정 준수 미비점이 확인되었으며
                                    </InlineCitationText>
                                    <InlineCitationCard>
                                        <InlineCitationCardTrigger source="[1]" />
                                        <InlineCitationCardBody>
                                            <InlineCitationSource
                                                title="개인정보보호_영향평가_보고서.pdf"
                                                description="3페이지, 2.1절 - 요약"
                                            >
                                                <InlineCitationQuote>
                                                    "평가 결과 세 가지 주요 미비점이 확인되었습니다: (1) 불충분한 정보주체 동의 메커니즘, (2) 부적절한 데이터 보존 정책, (3) 데이터 유출 통지 절차의 부재."
                                                </InlineCitationQuote>
                                            </InlineCitationSource>
                                        </InlineCitationCardBody>
                                    </InlineCitationCard>
                                </InlineCitation>
                                {' '}즉각적인 개선 조치가 권고됩니다.
                            </p>

                            <p>
                                <InlineCitation>
                                    <InlineCitationText>
                                        보고서는 향상된 사용자 동의 워크플로우의 필요성을 강조하고 있으며
                                    </InlineCitationText>
                                    <InlineCitationCard>
                                        <InlineCitationCardTrigger source="[2]" />
                                        <InlineCitationCardBody>
                                            <InlineCitationSource
                                                title="개인정보보호_영향평가_보고서.pdf"
                                                description="7페이지, 3.2절 - 동의 관리"
                                            >
                                                <InlineCitationQuote>
                                                    "현재의 동의 메커니즘은 개인정보보호법 요구사항을 충족하지 못합니다. 사용자는 동의를 할 때만큼 쉽게 철회할 수 있어야 하며, 감사 목적을 위해 동의 기록이 유지되어야 합니다."
                                                </InlineCitationQuote>
                                            </InlineCitationSource>
                                        </InlineCitationCardBody>
                                    </InlineCitationCard>
                                </InlineCitation>
                                {' '}모든 데이터 처리 활동에 대한 적절한 문서화를 요구합니다.
                            </p>

                            <p>
                                <InlineCitation>
                                    <InlineCitationText>
                                        자동화된 데이터 보존 정책 구현에 우선순위를 두어야 하며
                                    </InlineCitationText>
                                    <InlineCitationCard>
                                        <InlineCitationCardTrigger source="[3]" />
                                        <InlineCitationCardBody>
                                            <InlineCitationSource
                                                title="개인정보보호_영향평가_보고서.pdf"
                                                description="12페이지, 4.3절 - 데이터 보존"
                                            >
                                                <InlineCitationQuote>
                                                    "데이터 최소화 원칙을 준수하는 자동 데이터 삭제 워크플로우를 구현할 것을 권장합니다. 개인정보는 수집 목적에 필요한 기간보다 오래 보존되어서는 안 됩니다."
                                                </InlineCitationQuote>
                                            </InlineCitationSource>
                                        </InlineCitationCardBody>
                                    </InlineCitationCard>
                                </InlineCitation>
                                {' '}규정 준수를 위해 90일 이내에 완료해야 합니다.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
