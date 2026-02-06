import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CompareProps {
    firstImage: string;
    secondImage: string;
    firstImageClassName?: string;
    secondImageClassname?: string;
    className?: string;
    slideMode?: "hover" | "drag";
}

export const Compare = ({
    firstImage,
    secondImage,
    firstImageClassName,
    secondImageClassname,
    className,
    slideMode = "hover",
}: CompareProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging && slideMode === "drag") return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        if (slideMode === "drag") {
            setIsDragging(true);
        }
    };

    const handleMouseUp = () => {
        if (slideMode === "drag") {
            setIsDragging(false);
        }
    };

    useEffect(() => {
        if (slideMode === "drag") {
            const handleGlobalMouseUp = () => setIsDragging(false);
            window.addEventListener("mouseup", handleGlobalMouseUp);
            return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
        }
    }, [slideMode]);


    return (
        <div
            className={cn("relative overflow-hidden select-none", className)}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* First Image (Underlay) */}
            <img
                src={firstImage}
                alt="First"
                className={cn(
                    "absolute inset-0 w-full h-full object-cover pointer-events-none",
                    firstImageClassName
                )}
            />

            {/* Second Image (Overlay with Clip Path) */}
            <img
                src={secondImage}
                alt="Second"
                className={cn(
                    "absolute inset-0 w-full h-full object-cover pointer-events-none",
                    secondImageClassname
                )}
                style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
            />

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><path d="m9 18 6-6-6-6" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 rotate-180 absolute"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </div>
        </div>
    );
};
