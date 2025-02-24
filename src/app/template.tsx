'use client';

import { useEffect, useState } from "react";
import { animatePgaeIn } from "./utils/animation";

export default function Template({ children }: { children: React.ReactNode }) {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        async function runAnimation() {
            await animatePgaeIn(); // Wait for the initial animation to finish
            setAnimationComplete(true); // Mark template animation as complete

            // Add 2 seconds delay before showing children
            setTimeout(() => {
                setShowChildren(true); // Show children after the 2-second delay
            }, 1000); // 2 seconds delay (2000 milliseconds)
        }
        runAnimation();
    }, []);

    return (
        <div>
            {/* Banners for initial animation */}
            {!animationComplete ? (
                <>
                    <div id="banner1" className="min-h-screen bg-pink-600 z-10 fixed top-0 left-0 w-1/4" />
                    <div id="banner2" className="min-h-screen bg-pink-600 z-10 fixed top-0 left-1/4 w-1/4" />
                    <div id="banner3" className="min-h-screen bg-pink-600 z-10 fixed top-0 left-2/4 w-1/4" />
                    <div id="banner4" className="min-h-screen bg-pink-600 z-10 fixed top-0 left-3/4 w-1/4" />
                </>
            ) : (
                showChildren && children // Show children after the 2-second delay
            )}
        </div>
    );
}
