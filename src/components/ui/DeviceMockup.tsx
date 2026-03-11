import React from "react";
import { cn } from "@/lib/utils";

interface DeviceMockupProps {
    type: "phone" | "laptop" | "browser";
    children: React.ReactNode;
    className?: string;
}

const DeviceMockup = ({ type, children, className }: DeviceMockupProps) => {
    if (type === "phone") {
        return (
            <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                    {children}
                </div>
            </div>
        );
    }

    if (type === "laptop") {
        return (
            <div className={cn("relative mx-auto w-full max-w-[900px] perspective-1000", className)}>
                {/* Screen / Lid */}
                <div className="relative mx-auto border-gray-950 bg-gray-950 border-[6px] rounded-t-3xl aspect-[16/10] shadow-2xl overflow-hidden ring-1 ring-white/10">
                    {/* Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-b-xl z-10 flex items-center justify-center gap-1.5 px-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-inner"></div>
                        <div className="w-1 h-1 rounded-full bg-blue-500/20"></div>
                    </div>

                    {/* Screen Content */}
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[1.2rem] overflow-hidden">
                        {children}
                    </div>
                </div>

                {/* Base / Keyboard Area */}
                <div className="relative mx-auto h-[12px] md:h-[18px] w-[104%] -left-[2%] bg-[#1c1c1e] rounded-b-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-start justify-center">
                    {/* Thumb Cut / Opening Notch */}
                    <div className="w-20 h-[4px] md:h-[6px] bg-[#0a0a0a] rounded-b-lg border-x border-b border-white/5"></div>

                    {/* Base side highlights */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-b-xl pointer-events-none"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("relative mx-auto border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 border rounded-t-xl shadow-2xl w-full max-w-[1000px]", className)}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <div className="ml-4 flex-1 bg-white dark:bg-gray-800 rounded-md h-5 border border-gray-200 dark:border-gray-700 px-3 flex items-center">
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full max-w-[120px]"></div>
                </div>
            </div>
            <div className="overflow-hidden bg-white dark:bg-gray-800 rounded-b-xl aspect-video w-full">
                {children}
            </div>
        </div>
    );
};

export default DeviceMockup;
