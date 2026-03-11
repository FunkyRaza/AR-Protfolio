import { useState, useEffect } from "react";

/**
 * useScrollSpy
 * @param ids - Array of element IDs to track
 * @param offset - Offset from the top of the viewport
 * @returns - The ID of the currently active element
 */
export const useScrollSpy = (ids: string[], offset: number = 100) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset + 50; // Add safe buffer

            // If at the very top, highlight home or nothing
            if (window.scrollY < 100) {
                setActiveId(ids.includes("#home") ? "#home" : "");
                return;
            }

            let currentActive = "";
            for (const id of ids) {
                const element = document.getElementById(id.replace("#", ""));
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const top = rect.top + window.scrollY;
                    if (scrollPosition >= top && scrollPosition < top + element.offsetHeight) {
                        currentActive = id;
                    }
                }
            }
            setActiveId(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [ids, offset]);

    return activeId;
};
