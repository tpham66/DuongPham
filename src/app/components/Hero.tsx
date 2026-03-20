import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export function Hero() {
    return (
        <div className="hero page dark">
            <motion.section
                id="hero"
                className="py-20 px-10 bg-pixel-space min-h-screen"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: false, amount: 0.1}}
                transition={{
                    duration: 0.5,
                    velocity: 100,
                }}
            >
                <div className="containers">
                    <div className="absolute left-10 top-60 -translate-y-1/2 w-">
                        <h1 className="scroll-text ">SOFTWARE</h1>
                        <h1 className="scroll-text ">ENGINEER</h1>
                    </div>
                    <div className="absolute bottom-10 right-20 max-w-md text-right">
                        <h2 className="scroll-text text-xl text-gray-300 gliding-text">I’m Kyra, a developer who blends code and creativity to build thoughtful digital experiences_</h2>
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
                        className="absolute bottom-6 left-1/4 -translate-x-1/2 translate-y-5 flex flex-col items-center gap-3 text-white/60 cursor-pointer hover:text-[#e94560]"
                    >
                        <span className="text-sm tracking-[0.2em] mb-2">SCROLL DOWN FOR MORE</span>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                            className="scale-x-150"
                        >
                            <ChevronsDown size={40} strokeWidth={2} className="hover:text-[#e94560]"/>
                        </motion.div>
                    </div>
                </div>
                
            </motion.section>
        </div>
    )
}