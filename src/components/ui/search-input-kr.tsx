
"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Plus, ArrowUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from '/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png';

export const SearchInputKr = () => {
    const scenarios = [
        {
            text: "개인정보보호 영향평가의 핵심 결과는 무엇인가요?",
            result: "영향평가 결과, 데이터 처리 절차에서 3가지 주요 규정 준수 미비점이 확인되었으며 즉각적인 개선 조치가 권고됩니다...",
            source: "개인정보보호_영향평가_보고서.pdf"
        },
        {
            text: "3분기 보안 사고 내용을 요약해줘",
            result: "9월 15일, 고객 데이터베이스에 대한 무단 접근이 감지되었습니다. 2,847건의 기록이 잠재적으로 노출되었으며, 사고는 4시간 내에 격리되었습니다...",
            source: "3분기_보안_사고_보고서.pdf"
        },
        {
            text: "모의해킹 테스트에서 발견된 취약점은?",
            result: "모의해킹 결과, API 게이트웨이에서 SQL 인젝션 위험과 불충분한 인증을 포함한 5개의 고위험 취약점이 발견되었습니다...",
            source: "모의해킹_결과_보고서.pdf"
        }
    ];

    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState<"idle" | "typing" | "completed" | "searching" | "result">("idle");
    const [cursorVisible, setCursorVisible] = useState(true);

    const currentScenario = scenarios[currentScenarioIndex];

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => setCursorVisible(v => !v), 530);
        return () => clearInterval(interval);
    }, []);

    // Main Animation Loop
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const typeNextChar = () => {
            setDisplayText(prev => {
                const nextChar = currentScenario.text[prev.length];
                return prev + nextChar;
            });
        };

        switch (phase) {
            case "idle":
                timeout = setTimeout(() => setPhase("typing"), 1000);
                break;

            case "typing":
                if (displayText.length < currentScenario.text.length) {
                    timeout = setTimeout(typeNextChar, 50);
                } else {
                    setPhase("completed");
                }
                break;

            case "completed":
                // Wait a bit before "pressing" search
                timeout = setTimeout(() => setPhase("searching"), 800);
                break;

            case "searching":
                // Simulate search duration
                timeout = setTimeout(() => setPhase("result"), 1500);
                break;

            case "result":
                // Show result for a while then reset
                timeout = setTimeout(() => {
                    setDisplayText("");
                    setCurrentScenarioIndex(prev => (prev + 1) % scenarios.length);
                    setPhase("idle");
                }, 4000);
                break;
        }

        return () => clearTimeout(timeout);
    }, [phase, displayText, currentScenario.text, scenarios.length]);

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-[350px] flex flex-col">
                {/* Search Bar Area */}
                <div className="space-y-4 flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
                                <Plus className="w-4 h-4 text-gray-600" />
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[48px] flex items-center border border-gray-200 rounded-lg px-4 py-3 bg-gray-50">
                        <span className={cn(
                            "text-base transition-colors duration-300 flex-1",
                            displayText ? "text-gray-900" : "text-gray-400"
                        )}>
                            {displayText || "무엇이든 물어보세요"}
                            {phase === "typing" && (
                                <span className={cn("inline-block w-[2px] h-5 bg-blue-500 ml-1 align-middle", cursorVisible ? "opacity-100" : "opacity-0")} />
                            )}
                        </span>

                        <div className="flex-shrink-0 ml-2">
                            <motion.div
                                animate={{
                                    scale: phase === "searching" ? 0.9 : 1,
                                    backgroundColor: phase === "searching" ? "rgba(59, 130, 246, 1)" : "rgba(59, 130, 246, 1)"
                                }}
                                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer bg-blue-500 hover:bg-blue-600"
                            >
                                {phase === "searching" ? (
                                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                                ) : (
                                    <ArrowUp className="w-4 h-4 text-white" />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Result Area (Expands when needed) */}
                <div className="flex-1 overflow-auto">
                    <AnimatePresence mode="wait">
                        {phase === "searching" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="border-t border-gray-200 pt-4 mt-4 overflow-hidden"
                            >
                                <div className="flex items-start gap-3">
                                    <img src={logo} alt="LocalDocs" className="w-8 h-8 flex-shrink-0" />
                                    <div className="flex-1 space-y-2">
                                        <p className="text-xs text-gray-500">검색 중...</p>
                                        <div className="space-y-2">
                                            <div className="h-3 bg-gray-200 rounded animate-pulse" />
                                            <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
                                            <div className="h-3 bg-gray-200 rounded animate-pulse w-4/6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {phase === "result" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="border-t border-gray-200 pt-4 mt-4 overflow-hidden"
                            >
                                <div className="flex items-start gap-3">
                                    <img src={logo} alt="LocalDocs" className="w-8 h-8 flex-shrink-0" />
                                    <div className="flex-1 space-y-2">
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {currentScenario.result}
                                        </p>
                                        <div className="flex items-center gap-2 mt-3 text-xs text-blue-500 font-medium cursor-pointer hover:text-blue-600 transition-colors">
                                            <span>{currentScenario.source}</span>
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
