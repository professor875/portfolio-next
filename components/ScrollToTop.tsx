"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Automatically scrolls to top on route change.
 */
export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top whenever the route changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null; // nothing visible
}
