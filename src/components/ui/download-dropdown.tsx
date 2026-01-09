import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Apple } from "lucide-react";
import { analytics } from "@/lib/analytics";

import { AppleIcon } from "@/components/icons/AppleIcon";
import { WindowsIcon } from "@/components/icons/WindowsIcon";

interface DownloadDropdownProps {
    lang?: 'kr' | 'en';
    place?: string;
    className?: string;
}

export const DownloadDropdown = ({ lang = 'kr', place = 'navbar', className }: DownloadDropdownProps) => {
    const [open, setOpen] = useState(false);
    const isKr = lang === 'kr';

    const downloadLinks = {
        mac: "https://localdocs-download-prod.peekaboolabs.ai/localdocs/mac/latest/LocalDocs-latest.dmg",
        win: "https://localdocs-download-prod.peekaboolabs.ai/localdocs/win/latest/LocalDocsSetup-latest.exe",
    };

    const labels = {
        button: isKr ? "다운로드" : "Download",
        mac: isKr ? "Mac용" : "For Mac",
        win: isKr ? "Windows용" : "For Windows",
    };

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={className}
        >
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                    <button className="px-5 py-2 bg-[#111] text-white text-sm font-medium rounded-lg hover:bg-[#333] transition-colors flex items-center gap-2">
                        {labels.button}
                        <ChevronDown className="w-4 h-4 text-white/70" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2 bg-white border border-gray-200 shadow-xl rounded-xl">
                    <DropdownMenuItem className="p-0 focus:bg-transparent">
                        <a
                            href={downloadLinks.mac}
                            onClick={() => analytics.trackButtonClick('download_mac', `${place}_${lang}`)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <div className="w-8 h-8 flex items-center justify-center bg-black rounded-lg text-white">
                                <AppleIcon className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-[#111]">{labels.mac}</span>
                                <span className="text-xs text-gray-500">Apple Silicon</span>
                            </div>
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0 focus:bg-transparent">
                        <a
                            href={downloadLinks.win}
                            onClick={() => analytics.trackButtonClick('download_win', `${place}_${lang}`)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-lg">
                                <WindowsIcon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-[#111]">{labels.win}</span>
                                <span className="text-xs text-gray-500">Intel / AMD</span>
                            </div>
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
