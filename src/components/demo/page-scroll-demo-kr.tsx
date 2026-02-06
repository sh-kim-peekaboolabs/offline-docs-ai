"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PageScrollDemoKr = () => {
    const [isComplete, setIsComplete] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    const totalPages = 30;
    const processingDuration = 6; // seconds
    const completePauseDuration = 3; // seconds
    const targetPages = 1247;

    useEffect(() => {
        // Reset state
        setIsComplete(false);
        setCurrentPage(0);

        const startTime = Date.now();
        let animationFrameId: number;
        let isRunning = true;

        const updatePage = () => {
            if (!isRunning) return;

            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (processingDuration * 1000), 1);
            const newPage = Math.floor(progress * targetPages);

            setCurrentPage(newPage);

            if (progress < 1 && isRunning) {
                animationFrameId = requestAnimationFrame(updatePage);
            }
        };

        animationFrameId = requestAnimationFrame(updatePage);

        // Mark as complete - stop animation and set exact value
        const completeTimer = setTimeout(() => {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);
            setCurrentPage(targetPages);
            // Small delay to ensure state is updated before showing completion
            setTimeout(() => {
                setIsComplete(true);
            }, 50);
        }, processingDuration * 1000);

        // Reset after pause
        const resetTimer = setTimeout(() => {
            setResetKey((prev) => prev + 1);
        }, (processingDuration + completePauseDuration) * 1000);

        return () => {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);
            clearTimeout(completeTimer);
            clearTimeout(resetTimer);
        };
    }, [resetKey]);

    return (
        <div className="w-full h-full overflow-hidden bg-white">
            {/* Browser Chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3">
                <div className="flex items-center gap-2">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 ml-4">
                        <div className="bg-white rounded-md px-3 py-1.5 text-sm text-gray-600 border border-gray-200">
                            2024_연례_보고서.pdf
                        </div>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="relative h-[340px] bg-gray-50 overflow-hidden">

                {/* 스크롤되는 PDF 페이지들 - 완료되면 숨김 */}
                <AnimatePresence>
                    {!isComplete && (
                        <motion.div
                            key={resetKey}
                            className="absolute inset-x-0 top-0 flex flex-col items-center pt-4 space-y-3"
                            animate={{
                                y: [0, -2400]
                            }}
                            transition={{
                                duration: processingDuration,
                                ease: "linear",
                            }}
                            exit={{ opacity: 0 }}
                        >
                            {Array.from({ length: totalPages }, (_, i) => (
                                <div
                                    key={i}
                                    className="bg-white w-[100px] h-[100px] rounded-lg shadow-sm border border-gray-200 p-3 flex-shrink-0"
                                >
                                    <div className="space-y-1.5">
                                        <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                                        <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
                                        <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 중앙 오버레이 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <AnimatePresence mode="wait">
                        {!isComplete ? (
                            <motion.div
                                key={`processing-${resetKey}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white/95 backdrop-blur-md px-6 py-5 rounded-xl shadow-xl border border-gray-200"
                            >
                                <div className="flex items-baseline gap-2 justify-center mb-1">
                                    <span className="text-3xl font-bold text-gray-900 tabular-nums">
                                        {currentPage.toLocaleString()}
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">pages</span>
                                </div>
                                <p className="text-center text-xs text-gray-400 mb-3">
                                    문서 읽는 중...
                                </p>

                                {/* 진행 바 */}
                                <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-blue-500"
                                        animate={{ width: ["0%", "100%"] }}
                                        transition={{ duration: processingDuration, ease: "linear" }}
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={`complete-${resetKey}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white/95 backdrop-blur-md px-6 py-5 rounded-xl shadow-xl border border-gray-200"
                            >
                                <div className="flex items-center gap-2 justify-center mb-1">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span className="text-sm font-semibold text-gray-900">모든 페이지 색인 완료</span>
                                </div>
                                <p className="text-center text-xs text-gray-400">
                                    {targetPages.toLocaleString()}페이지 검색 준비 완료
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 상하단 그라데이션 */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};
