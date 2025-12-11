"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface HighlightTextProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
}

export const HighlightText = ({
    children,
    className,
    color = "#fbbf24" // amber-400 default
}: HighlightTextProps) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 50%",
            }}
            animate={{
                backgroundSize: "100% 50%",
            }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left 85%",
                display: "inline",
                backgroundImage: `linear-gradient(to right, ${color}, ${color})`,
            }}
            className={cn(
                "px-1 rounded-sm box-decoration-clone",
                className
            )}
        >
            {children}
        </motion.span>
    );
};
