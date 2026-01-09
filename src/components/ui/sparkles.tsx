"use client";
import { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface SparklesCoreProps {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
}

export const SparklesCore = ({
    id,
    className,
    background = "transparent",
    minSize = 1,
    maxSize = 3,
    speed = 4,
    particleColor = "#ffffff",
    particleDensity = 120,
}: SparklesCoreProps) => {
    const [init, setInit] = useState(false);
    const generatedId = useId();
    const particleId = id || generatedId;

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) {
        return null;
    }

    return (
        <Particles
            id={particleId}
            className={className}
            options={{
                background: {
                    color: {
                        value: background,
                    },
                },
                fullScreen: {
                    enable: false,
                    zIndex: 1,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: {
                            enable: true,
                            delay: 0.5,
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: particleColor,
                    },
                    move: {
                        enable: false,
                    },
                    number: {
                        value: particleDensity,
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 1,
                        },
                        animation: {
                            enable: true,
                            speed: speed,
                            sync: false,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {
                            min: minSize,
                            max: maxSize,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
