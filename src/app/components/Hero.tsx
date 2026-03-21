import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export function Hero() {
    return (
        <div className="hero page dark">
            <motion.section
                id="hero"
                className="py-20 px-10 bg-pixel-space min-h-dvh"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: false, amount: 0.3}}
                transition={{
                    duration: 0.2,
                    velocity: 100,
                }}
            >
                <div className="cross-layer"/>
                <div className="absolute top-120 left-5 lg:left-10 lg:top-60 -translate-y-1/2">
                    <h1>SOFTWARE</h1>
                    <h1>ENGINEER</h1>
                </div>
                <div className="absolute bottom-120 right-5 lg:bottom-10 lg:right-15 max-w-2xl lg:max-w-md text-right">
                    <h2 className="text-5xl lg:text-xl text-gray-300 gliding-text">I’m Kyra, a developer who blends code and creativity to build thoughtful digital experiences_</h2>
                </div>
                <div
                    onClick={() => {
                        const target = document.getElementById("about");
                        if (!target) return;

                        const targetY = target.offsetTop;
                        const startY = window.scrollY;
                        const distance = targetY - startY;
                        const duration = 1200; 

                        let startTime: number | null = null;

                        function scrollAnimation(currentTime: number | null) {
                            if (!startTime) startTime = currentTime;
                            if (currentTime === null || startTime === null) return;
                            const timeElapsed = currentTime - startTime;

                            const progress = Math.min(timeElapsed / duration, 1);

                            // easeInOut (smooth)
                            const ease = progress < 0.5
                            ? 2 * progress * progress
                            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                            window.scrollTo(0, startY + distance * ease);

                            if (timeElapsed < duration) {
                                requestAnimationFrame(scrollAnimation);
                            }
                        }

                        requestAnimationFrame(scrollAnimation);
                    }}
                    className="absolute bottom-6 left-1/2 lg:left-1/4 -translate-x-1/2 translate-y-5 flex flex-col items-center gap-3 text-white/60 cursor-pointer hover:text-[#e94560]"
                >
                    <span className="text-3xl lg:text-sm lg:tracking-[0.2em] mb-2">SCROLL DOWN FOR MORE</span>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        className="scale-x-150 w-25 h-25 lg:w-8 lg:h-8"
                    >
                        <ChevronsDown strokeWidth={2} className="hover:text-[#e94560] w-full h-full"/>
                    </motion.div>
                </div>
                
            </motion.section>
        </div>
    )
}