import { motion } from "framer-motion";
import { Search, FileText, MessageSquare, Mail, Folder } from "lucide-react";

export const BeforeDeepSearch = () => {
    const apps = [
        { icon: Search, name: "Google", x: "5%", y: "5%" },
        { icon: FileText, name: "Notion", x: "60%", y: "10%" },
        { icon: MessageSquare, name: "Slack", x: "10%", y: "45%" },
        { icon: Mail, name: "Gmail", x: "55%", y: "50%" },
        { icon: Folder, name: "Drive", x: "30%", y: "75%" },
    ];

    return (
        <div className="relative w-full h-full bg-gray-100 overflow-hidden flex items-center justify-center">
            {/* Background chaos hint */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/50" />

            {apps.map((app, index) => (
                <motion.div
                    key={index}
                    animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2 + Math.random(),
                        delay: Math.random()
                    }}
                    className="absolute bg-white shadow-md rounded-lg p-3 flex flex-col items-center justify-center w-[100px] h-[80px] sm:w-[120px] sm:h-[100px]"
                    style={{
                        left: app.x,
                        top: app.y,
                        zIndex: index
                    }}
                >
                    <app.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 mb-2" />
                    <p className="text-[10px] sm:text-xs font-medium text-gray-500">{app.name}</p>
                    {/* Loading dots */}
                    <div className="flex gap-1 mt-1">
                        {[0, 1, 2].map((dot) => (
                            <motion.div
                                key={dot}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ repeat: Infinity, duration: 1, delay: dot * 0.2 }}
                                className="w-1 h-1 bg-gray-400 rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
