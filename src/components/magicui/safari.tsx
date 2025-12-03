import { cn } from "@/lib/utils";

interface SafariProps {
    url?: string;
    className?: string;
    children: React.ReactNode;
}

export const Safari = ({ url, className, children }: SafariProps) => {
    return (
        <div className={cn("w-full rounded-xl border border-gray-200 shadow-lg overflow-hidden bg-white", className)}>
            {/* Browser Chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3">
                <div className="flex items-center gap-2">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 ml-4">
                        <div className="bg-white rounded-md px-3 py-1.5 text-sm text-gray-600 border border-gray-200">
                            {url || "document.pdf"}
                        </div>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="bg-white">
                {children}
            </div>
        </div>
    );
};
