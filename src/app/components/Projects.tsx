import { motion } from "framer-motion";
import { Button3D } from "./ui/button3d";

export function Projects() {
    return (
        <div className="projects page dark">
            <motion.section
                id="projects"
                className="py-20 bg-pixel-space"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: false, amount: 0.4}}
                transition={{
                    duration: 0.5,
                    velocity: 100,
                }}
            >
                <div className="cross-layer"></div>
                <div className="grid md:grid-cols-[2fr_3fr] gap-20 items-center min-h-screen">
                    <h1>
                        Projects
                    </h1>
                    <div className="space-y-8 flex flex-row gap-12">

                        {/* Languages */}
                        <div className="flex flex-col items-start gap-4 w-max">
                            <div className="flex flex-col gap-10">
                                <Button3D btn={"Election Website"} link={"https://github.com/tpham66/CS-351-App-Demonstration---Django-React"}></Button3D>
                                <Button3D btn={"furmate"} link={"https://github.com/tpham66/furmate"}></Button3D>
                                <Button3D btn={"Blackjack"} link={"https://github.com/tpham66/Blackjack-game"}></Button3D>

                            </div>
                        </div>

                        {/* Frameworks / Tools */}
                        {/* <div className="flex flex-col items-start gap-4 w-max">
                            <div className="flex flex-col gap-5">
                                <span className="skill">React</span>
                                <span className="skill">Node.js</span>
                                <span className="skill">Django</span>
                            </div>
                        </div> */}

                    </div>
                </div>
            </motion.section>
        </div>
    );
}