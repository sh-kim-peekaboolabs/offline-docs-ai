'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Files, FolderItem, FolderTrigger, FolderPanel, SubFiles, FileItem } from "@/components/ui/files";

export const AutoCycleFiles = () => {
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
        <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-[280px] overflow-auto">
            <Files
                type="multiple"
                className="w-full"
                value={[folders[currentFolder]]}
                onValueChange={handleValueChange}
            >
                <FolderItem value="compliance">
                    <FolderTrigger>Compliance Audit 2024</FolderTrigger>
                    <FolderPanel>
                        <SubFiles>
                            <FileItem>GDPR_Assessment_Report.pdf</FileItem>
                            <FileItem>Data_Breach_Incident_Q3.pdf</FileItem>
                            <FileItem>Third_Party_Risk_Review.pdf</FileItem>
                        </SubFiles>
                    </FolderPanel>
                </FolderItem>

                <FolderItem value="security">
                    <FolderTrigger>Security Reports</FolderTrigger>
                    <FolderPanel>
                        <SubFiles>
                            <FileItem>Penetration_Test_Results.pdf</FileItem>
                            <FileItem>Vulnerability_Assessment.pdf</FileItem>
                            <FileItem>Incident_Response_Plan.pdf</FileItem>
                        </SubFiles>
                    </FolderPanel>
                </FolderItem>

                <FolderItem value="legal">
                    <FolderTrigger>Confidential Legal</FolderTrigger>
                    <FolderPanel>
                        <SubFiles>
                            <FileItem>M&A_Due_Diligence.pdf</FileItem>
                            <FileItem>Settlement_Agreement_Draft.pdf</FileItem>
                            <FileItem>Executive_Compensation.pdf</FileItem>
                        </SubFiles>
                    </FolderPanel>
                </FolderItem>
            </Files>
        </div>
    );
};
