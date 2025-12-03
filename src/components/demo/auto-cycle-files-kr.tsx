'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Files, FolderItem, FolderTrigger, FolderPanel, SubFiles, FileItem } from "@/components/ui/files";

export const AutoCycleFilesKr = () => {
    const folders = ['compliance', 'security', 'legal'];
    const [currentFolder, setCurrentFolder] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [userInteracted, setUserInteracted] = useState(false);
    const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
    const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-cycle through folders
    useEffect(() => {
        if (!isAutoPlaying) return;

        autoPlayTimerRef.current = setInterval(() => {
            setCurrentFolder((prev) => (prev + 1) % folders.length);
        }, 3000); // Change folder every 3 seconds

        return () => {
            if (autoPlayTimerRef.current) {
                clearInterval(autoPlayTimerRef.current);
            }
        };
    }, [isAutoPlaying, folders.length]);

    // Resume auto-play after user interaction
    useEffect(() => {
        if (userInteracted) {
            setIsAutoPlaying(false);

            // Clear any existing resume timer
            if (resumeTimerRef.current) {
                clearTimeout(resumeTimerRef.current);
            }

            // Resume auto-play after 5 seconds of no interaction
            resumeTimerRef.current = setTimeout(() => {
                setIsAutoPlaying(true);
                setUserInteracted(false);
            }, 5000);

            return () => {
                if (resumeTimerRef.current) {
                    clearTimeout(resumeTimerRef.current);
                }
            };
        }
    }, [userInteracted]);

    const handleValueChange = (value: string[]) => {
        setUserInteracted(true);
        if (value.length > 0) {
            // Always take the last selected item to switch to it
            const lastSelected = value[value.length - 1];
            const index = folders.indexOf(lastSelected);
            if (index !== -1) {
                setCurrentFolder(index);
            }
        }
    };

    return (
        // Fixed height container to prevent layout shift
        <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-[320px] overflow-hidden flex flex-col">
            <Files
                type="multiple"
                className="w-full flex-1"
                value={[folders[currentFolder]]}
                onValueChange={handleValueChange}
            >
                <FolderItem value="compliance">
                    <FolderTrigger>2024년 규정 준수 감사</FolderTrigger>
                    <FolderPanel>
                        <SubFiles>
                            <FileItem>개인정보보호_영향평가_보고서.pdf</FileItem>
                            <FileItem>3분기_보안_사고_보고서.pdf</FileItem>
                            <FileItem>제3자_위험_검토.pdf</FileItem>
                        </SubFiles>
                    </FolderPanel>
                </FolderItem>

                <FolderItem value="security">
                    <FolderTrigger>보안 보고서</FolderTrigger>
                    <FolderPanel>
                        <SubFiles>
                            <FileItem>모의해킹_결과_보고서.pdf</FileItem>
                            <FileItem>취약점_진단_보고서.pdf</FileItem>
                            <FileItem>사고_대응_계획.pdf</FileItem>
                        </SubFiles>
                    </FolderPanel>
                </FolderItem>

                <FolderItem value="legal">
                    <FolderTrigger>기밀 법무 문서</FolderTrigger>
                    <FolderPanel>
                        <SubFiles>
                            <FileItem>M&A_실사_보고서.pdf</FileItem>
                            <FileItem>합의서_초안.pdf</FileItem>
                            <FileItem>임원_보상_계획.pdf</FileItem>
                        </SubFiles>
                    </FolderPanel>
                </FolderItem>
            </Files>
        </div>
    );
};
