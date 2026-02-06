"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CheckCircle2, ScanLine, Loader2 } from "lucide-react";

import logo from '/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png';

export const TableReadDemo = () => {
    const [isScanning, setIsScanning] = useState(true); // Start scanning immediately
    const [isExtracted, setIsExtracted] = useState(false);

    useEffect(() => {
        const startScan = () => {
            setIsScanning(true);
            setIsExtracted(false);

            // Scanning duration
            setTimeout(() => {
                setIsScanning(false);
                setIsExtracted(true);
            }, 2000);

            // Reset and restart - increased duration to 8000ms (8 seconds)
            setTimeout(() => {
                setIsExtracted(false);
                // Small pause before restarting
                setTimeout(startScan, 500);
            }, 6000);
        };

        // Initial start - reduced delay
        const timer = setTimeout(startScan, 500);
        return () => clearTimeout(timer);
    }, []);

    const data = [
        { category: "Revenue", q1: "$12,450", q2: "$14,200", q3: "$15,800", growth: "+12.5%" },
        { category: "Op. Expenses", q1: "$8,200", q2: "$8,500", q3: "$8,900", growth: "+4.2%" },
        { category: "Net Income", q1: "$4,250", q2: "$5,700", q3: "$6,900", growth: "+21.0%" },
        { category: "Margins", q1: "34.1%", q2: "40.1%", q3: "43.6%", growth: "+3.5%" },
    ];

    return (
        <div className="w-full max-w-md mx-auto relative bg-white rounded-xl overflow-hidden h-[340px] flex flex-col">
            {/* Header / Status Bar */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50 h-[52px] flex-none">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="LocalDocs" className="w-5 h-5" />
                    <span className="text-xs font-semibold text-gray-700">Financial Report Q3</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <AnimatePresence mode="wait">
                        {isScanning ? (
                            <motion.div
                                key="scanning"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="flex items-center gap-1.5 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                            >
                                <Loader2 className="w-3 h-3 animate-spin" />
                                Reading...
                            </motion.div>
                        ) : isExtracted ? (
                            <motion.div
                                key="extracted"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"
                            >
                                <CheckCircle2 className="w-3 h-3" />
                                Analyzed
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>
            </div>

            {/* Table Content */}
            <div className="relative p-4 flex-1">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-gray-100">
                            <TableHead className="w-[100px] text-xs font-semibold text-gray-500">Metric</TableHead>
                            <TableHead className="text-right text-xs font-semibold text-gray-500">Q1 2024</TableHead>
                            <TableHead className="text-right text-xs font-semibold text-gray-500">Q2 2024</TableHead>
                            <TableHead className="text-right text-xs font-semibold text-gray-500">Q3 2024</TableHead>
                            <TableHead className="text-right text-xs font-semibold text-gray-500">YoY</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i} className="hover:bg-transparent border-gray-100">
                                <TableCell className="font-medium text-xs text-gray-700">{row.category}</TableCell>
                                <TableCell className="text-right text-xs text-gray-600">{row.q1}</TableCell>
                                <TableCell className="text-right text-xs text-gray-600">{row.q2}</TableCell>
                                <TableCell className="text-right text-xs text-gray-600">{row.q3}</TableCell>
                                <TableCell className={cn("text-right text-xs font-medium", row.growth.startsWith('+') ? "text-emerald-600" : "text-red-600")}>
                                    {row.growth}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Scanning Overlay */}
                <AnimatePresence>
                    {isScanning && (
                        <motion.div
                            initial={{ top: 0, opacity: 0 }}
                            animate={{ top: "100%", opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, ease: "linear" }}
                            className="absolute left-0 right-0 h-1 bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10 pointer-events-none"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Summary Overlay for Extracted State */}
                <AnimatePresence>
                    {isExtracted && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px]"
                        >
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-[80%] w-full">
                                <div className="flex items-center gap-2 mb-2">
                                    <img src={logo} alt="LocalDocs" className="w-4 h-4" />
                                    <span className="text-xs font-semibold text-gray-900">Summary</span>
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    <span className="font-medium text-gray-900">Net Income</span> grew by <span className="text-emerald-600 font-medium">21.0%</span> in Q3, driven by improved margins and revenue growth.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
