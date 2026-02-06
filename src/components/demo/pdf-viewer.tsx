'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PDFViewer = () => {
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
                        GDPR_Assessment_Report.pdf
                    </div>
                </div>

                {/* PDF content */}
                <div className="bg-white p-6 max-h-[280px] overflow-y-auto">
                    <div className="space-y-3 text-xs leading-relaxed text-gray-700">
                        <div className="font-semibold text-sm text-gray-900">
                            Art. 33 GDPR
                        </div>
                        <div className="font-medium text-gray-800 text-xs">
                            Notification of a personal data breach to the supervisory authority
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
                                In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the supervisory authority competent in accordance with Article 55, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons.
                            </motion.span>{' '}
                            Where the notification to the supervisory authority is not made within 72 hours, it shall be accompanied by reasons for the delay.
                        </p>

                        <p className="text-gray-500">
                            The processor shall notify the controller without undue delay after becoming aware of a personal data breach.
                        </p>
                    </div>
                </div>            </div>
        </div>
    );
};
