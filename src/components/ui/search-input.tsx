
"use client";

import React, { useState, useEffect } from "react";
import { Search, Loader2, Plus, ArrowUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from '/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png';

export const SearchInput = () => {
    const scenarios = [
        {
            text: "What are the key findings in the GDPR assessment?",
            result: "The GDPR assessment identifies 3 critical compliance gaps in data processing procedures and recommends immediate remediation actions...",
            source: "GDPR_Assessment_Report.pdf"
        },
        {
            text: "Summarize the Q3 data breach incident",
            result: "On September 15, unauthorized access was detected in the customer database. 2,847 records were potentially exposed. Incident was contained within 4 hours...",
            source: "Data_Breach_Incident_Q3.pdf"
        },
        {
            text: "What vulnerabilities were found in the penetration test?",
            result: "The penetration test revealed 5 high-severity vulnerabilities in the API gateway, including SQL injection risks and insufficient authentication...",
            source: "Penetration_Test_Results.pdf"
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
                            {displayText || "Search or ask anything"}
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
                                        <p className="text-xs text-gray-500">Searching...</p>
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