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

export const CitationDemo = () => {
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
                                        The GDPR assessment identifies three critical compliance gaps in data processing procedures
                                    </InlineCitationText>
                                    <InlineCitationCard>
                                        <InlineCitationCardTrigger source="[1]" />
                                        <InlineCitationCardBody>
                                            <InlineCitationSource
                                                title="GDPR_Assessment_Report.pdf"
                                                description="Page 3, Section 2.1 - Executive Summary"
                                            >
                                                <InlineCitationQuote>
                                                    "Our assessment has identified three critical areas of non-compliance: (1) insufficient data subject consent mechanisms, (2) inadequate data retention policies, and (3) lack of proper data breach notification procedures."
                                                </InlineCitationQuote>
                                            </InlineCitationSource>
                                        </InlineCitationCardBody>
                                    </InlineCitationCard>
                                </InlineCitation>
                                {' '}and recommends immediate remediation actions.
                            </p>

                            <p>
                                <InlineCitation>
                                    <InlineCitationText>
                                        The report emphasizes the need for enhanced user consent workflows
                                    </InlineCitationText>
                                    <InlineCitationCard>
                                        <InlineCitationCardTrigger source="[2]" />
                                        <InlineCitationCardBody>
                                            <InlineCitationSource
                                                title="GDPR_Assessment_Report.pdf"
                                                description="Page 7, Section 3.2 - Consent Management"
                                            >
                                                <InlineCitationQuote>
                                                    "Current consent mechanisms do not meet GDPR Article 7 requirements. Users must be able to withdraw consent as easily as they gave it, and consent records must be maintained for audit purposes."
                                                </InlineCitationQuote>
                                            </InlineCitationSource>
                                        </InlineCitationCardBody>
                                    </InlineCitationCard>
                                </InlineCitation>
                                {' '}and proper documentation of all data processing activities.
                            </p>

                            <p>
                                <InlineCitation>
                                    <InlineCitationText>
                                        Priority should be given to implementing automated data retention policies
                                    </InlineCitationText>
                                    <InlineCitationCard>
                                        <InlineCitationCardTrigger source="[3]" />
                                        <InlineCitationCardBody>
                                            <InlineCitationSource
                                                title="GDPR_Assessment_Report.pdf"
                                                description="Page 12, Section 4.3 - Data Retention"
                                            >
                                                <InlineCitationQuote>
                                                    "We recommend implementing automated data deletion workflows that comply with the data minimization principle. Personal data should not be retained longer than necessary for the purposes for which it was collected."
                                                </InlineCitationQuote>
                                            </InlineCitationSource>
                                        </InlineCitationCardBody>
                                    </InlineCitationCard>
                                </InlineCitation>
                                {' '}within the next 90 days to ensure compliance.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
