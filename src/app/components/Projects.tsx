import { motion } from "framer-motion";
import { Button3D } from "./ui/button3d";
import furmate from "@/app/assets/furmate.png";
import pandapal from "@/app/assets/pandapal.png";
import blackjack from "@/app/assets/blackjack.png";
import civic from "@/app/assets/civicconnect.jpg";

const projects = [
{
    title: "CivicConnect",
    description: "Civic data dashboard for voters",
    img: civic,
    tag: ["Python", "React", "Django"],
    link: "https://github.com/ShimraHazmi/CS351Group7",
},
{
    title: "Pandapal",
    description: "Won first-prize in SparkHack24",
    img: pandapal,
    tag: ["Figma"],
    link: "https://www.figma.com/design/Q0VVedWL0Ft8eXVTxZVWBu/SparkHack?m=auto&t=DOttpLx1IGumqrGm-6",
},
{
    title: "furmate",
    description: "Pet tracking mobile app",
    img: furmate,
    tag: ["Dart", "Firebase"],
    link: "https://github.com/tpham66/furmate",
},
{
    title: "Student Task Manager",
    description: "Student Task Manager mobile app",
    img: furmate,
    tag: ["Dart", "Firebase"],
    link: "https://github.com/acm-uic/student-task-manager-sig-mobile-dev",
},
{
    title: "Blackjack",
    description: "A basic Blackjack game",
    img: blackjack,
    tag: ["Java"],
    link: "https://github.com/tpham66/Blackjack-game",
},
];

export function Projects() {
    return (
        <div className="projects page dark">
            <motion.section
                id="projects"
                className="py-20 px-10 bg-pixel-space"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: false, amount: 0.3}}
                transition={{
                    duration: 0.5,
                    velocity: 100,
                }}
            >
                <div className="cross-layer"></div>
                <div className="grid grid-rows-[1fr_4fr] items-center min-h-screen">
                    <div className="items-center">
                        <h1 className="justify-start">
                            Projects
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-20 w-full">

                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="proj-card"
                            >
                                {/* CONTENT */}
                                <div className="card_content">
                                    <div className="w-full flex flex-col gap-5 border-2 border-white/0 bg-white/15 rounded-lg px-10 py-10 hover:border-amber-200 hover:border-2">
                                        <h3 className="text-2xl">{project.title}</h3>

                                        <div className="flex flex-col gap-0.1">
                                            <p>{project.description}</p>
                                            <div className="flex gap-2 mt-5 flex-wrap">
                                                {project.tag?.map((t) => (
                                                <span key={t} className="px-2 py-1 text-xs bg-white/70 text-black rounded">
                                                    {t}
                                                </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Button3D className="btn-flip text-5xl lg:text-lg tracking-widest" btn="View" link={project.link} />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}