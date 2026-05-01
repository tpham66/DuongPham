import { motion } from "framer-motion";

export function Skills() {
    return (
        <div className="skills page light">
            <motion.section
                id="skills"
                className="py-20 light bg-pixel-space"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: false, amount: 0.4}}
                transition={{
                    duration: 0.5,
                    velocity: 100,
                }}
            >
                <div className="cross-layer"></div>
                <div className="grid lg:grid-cols-[2fr_3fr] gap-20 lg:gap-12 items-center">
                    <h1 className="justify-start">
                        Skills
                    </h1>
                    <div className="space-y-8 flex flex-row gap-10">

                        {/* Languages */}
                        <div className="flex flex-col items-start gap-4 w-fit">
                            <h3 className="gliding-text">Programming Languages</h3>
                            <div className="flex flex-col gap-3">
                                <span className="skill">Python</span>
                                <span className="skill">Dart</span>
                                <span className="skill">JavaScript</span>
                                <span className="skill">TypeScript</span>
                                <span className="skill">Java</span>
                                <span className="skill">C/C++</span>
                                <span className="skill">SQL</span>
                                <span className="skill">Go</span>
                                <span className="skill">Scala</span>
                            </div>
                        </div>

                        {/* Frameworks / Tools */}
                        <div className="flex flex-col items-start gap-4 w-fit">
                            <h3 className="gliding-text">Frameworks & Tools</h3>
                            <div className="flex flex-col gap-5">
                                <span className="skill">React</span>
                                <span className="skill">Node.js</span>
                                <span className="skill">Django</span>
                                <span className="skill">Firebase</span>
                                <span className="skill">Flutter</span>
                                <span className="skill">TailwindCSS</span>
                                <span className="skill">FastAPI</span>
                                <span className="skill">MediaPipe</span>
                                <span className="skill">scikit-learn</span>
                                <span className="skill">OpenCV</span>
                                <span className="skill">WorkOS</span>
                                <span className="skill">Postman</span>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.section>
        </div>
    );
}