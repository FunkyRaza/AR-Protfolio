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
            // If at the very top, don't highlight anything specific
            if (window.scrollY < 50) {
                setActiveId("");
                return;
            }

            const scrollPosition = window.scrollY + offset;

            for (const id of ids) {
                const element = document.getElementById(id.replace("#", ""));
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveId(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [ids, offset]);

    return activeId;
};
