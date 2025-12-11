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

export const SentenceCitationDemo = () => {
    return (
        <div className="w-full h-full bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <img src={logo} alt="LocalDocs" className="w-5 h-5" />
                <span className="text-sm font-semibold text-gray-900">Answer</span>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p className="leading-7">
                    <Highlighter color="#FFF59D50">
                        The quarterly revenue increased by 15.3% compared to Q2
                    </Highlighter>
                    <InlineCitation className="ml-1 align-baseline">
                        <InlineCitationCard>
                            <InlineCitationCardTrigger source="1" />
                            <InlineCitationCardBody>
                                <InlineCitationSource
                                    title="Q3 Financial Report"
                                    description="Page 3, Revenue Analysis Section"
                                />
                            </InlineCitationCardBody>
                        </InlineCitationCard>
                    </InlineCitation>
                    .
                </p>

                <p className="leading-7">
                    <Highlighter color="#C5E1A550">
                        Operating expenses decreased by 8.2% due to efficiency improvements
                    </Highlighter>
                    <InlineCitation className="ml-1 align-baseline">
                        <InlineCitationCard>
                            <InlineCitationCardTrigger source="2" />
                            <InlineCitationCardBody>
                                <InlineCitationSource
                                    title="Expense Breakdown Report"
                                    description="Page 12, Cost Optimization"
                                />
                            </InlineCitationCardBody>
                        </InlineCitationCard>
                    </InlineCitation>
                    .
                </p>

                <p className="leading-7">
                    <Highlighter color="#B3E5FC50">
                        Net profit margin reached 22.1%, exceeding projections
                    </Highlighter>
                    <InlineCitation className="ml-1 align-baseline">
                        <InlineCitationCard>
                            <InlineCitationCardTrigger source="3" />
                            <InlineCitationCardBody>
                                <InlineCitationSource
                                    title="Profit & Loss Statement"
                                    description="Page 5, Bottom Line Analysis"
                                />
                            </InlineCitationCardBody>
                        </InlineCitationCard>
                    </InlineCitation>
                    .
                </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                    <strong>3 sources cited</strong> - Click any number to view original document
                </p>
            </div>
        </div>
    );
};
