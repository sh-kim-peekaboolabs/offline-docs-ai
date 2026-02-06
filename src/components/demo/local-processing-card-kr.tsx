"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Lock } from "lucide-react";

export const LocalProcessingCardKr = ({
    className,
}: {
    className?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        let str = generateRandomString(2000);
        setRandomString(str);
    }, []);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString(2000);
        setRandomString(str);
    }

    return (
        <div
            className={cn(
                "p-0.5 bg-transparent flex items-center justify-center w-full h-full relative",
                className
            )}
        >
            <div
                onMouseMove={onMouseMove}
                className="group/card rounded-xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
            >
                <CardPattern
                    mouseX={mouseX}
                    mouseY={mouseY}
                    randomString={randomString}
                />
                <div className="relative z-10 flex items-center justify-center">
                    <div className="relative h-44 w-44 rounded-full flex items-center justify-center">
                        <div className="absolute w-full h-full bg-stone-50/80 backdrop-blur-xl rounded-full shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)]" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-transparent blur-xl opacity-50" />
                        <div className="z-20 flex flex-col items-center gap-2">
                            <Lock className="w-6 h-6 text-stone-500 group-hover/card:text-teal-600 transition-colors duration-500" />
                            <span className="text-stone-800 font-bold text-2xl tracking-tight group-hover/card:text-teal-700 transition-colors duration-500">Local</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
    let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-stone-50" />

            {/* Faint background text always visible */}
            <div className="absolute inset-0 opacity-[0.03]">
                <p className="absolute inset-x-0 top-0 h-full break-words whitespace-pre-wrap text-stone-900 font-mono text-xs font-bold p-8 leading-relaxed select-none">
                    {randomString}
                </p>
            </div>

            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-emerald-100/50 to-amber-100/50 opacity-0 group-hover/card:opacity-100 transition duration-500"
                style={style}
            />

            <motion.div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100"
                style={style}
            >
                <p className="absolute inset-x-0 top-0 h-full break-words whitespace-pre-wrap text-teal-900/40 font-mono text-xs font-bold transition duration-500 p-8 leading-relaxed select-none">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
}

const characters = "가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
const securityWords = ["기밀", "대외비", "비공개", "보안", "로컬", "오프라인", "안전", "암호화", "클라우드_없음", "데이터_보호", "개인정보보호", "AES_256", "제로_널리지", "일급비밀", "사내용"];

export const generateRandomString = (length: number) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        if (Math.random() < 0.03) {
            const word = securityWords[Math.floor(Math.random() * securityWords.length)];
            result += " " + word + " ";
            i += word.length + 2;
        } else {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }
    return result;
};
