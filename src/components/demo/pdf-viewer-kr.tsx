'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PDFViewerKr = () => {
    const [highlightVisible, setHighlightVisible] = useState(false);

    useEffect(() => {
        // Show highlight after 1 second
        const timer = setTimeout(() => setHighlightVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto">
            {/* Safari-style browser frame */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="bg-white rounded-md px-3 py-1.5 text-xs text-gray-600 border border-gray-200">
                        개인정보보호_영향평가_보고서.pdf
                    </div>
                </div>

                {/* PDF content */}
                <div className="bg-white p-6 max-h-[280px] overflow-y-auto">
                    <div className="space-y-3 text-xs leading-relaxed text-gray-700">
                        <div className="font-semibold text-sm text-gray-900">
                            제34조 (개인정보 유출 통지 등)
                        </div>
                        <div className="font-medium text-gray-800 text-xs">
                            개인정보처리자의 유출 통지 및 신고 의무
                        </div>

                        <p>
                            <motion.span
                                initial={{ backgroundColor: 'transparent' }}
                                animate={{
                                    backgroundColor: highlightVisible ? 'rgba(59, 130, 246, 0.2)' : 'transparent'
                                }}
                                transition={{ duration: 0.5 }}
                                className="inline"
                            >
                                개인정보처리자는 개인정보가 유출되었음을 알게 되었을 때에는 지체 없이 해당 정보주체에게 유출된 개인정보의 항목, 유출 시점과 그 경위, 피해를 최소화하기 위하여 정보주체가 할 수 있는 방법 등에 관한 사항을 알려야 한다.
                            </motion.span>{' '}
                            또한, 대통령령으로 정하는 규모 이상의 개인정보가 유출된 경우에는 보호위원회 또는 전문기관에 신고하여야 한다.
                        </p>

                        <p className="text-gray-500">
                            수탁자는 개인정보가 유출된 사실을 알게 된 경우 지체 없이 위탁자에게 해당 사실을 알려야 한다.
                        </p>
                    </div>
                </div>            </div>
        </div>
    );
};
