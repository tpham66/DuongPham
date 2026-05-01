import { motion } from "framer-motion";
import { Button3D } from "./ui/button3d";
const projects = [
    {
        title: "Personal Portfolio",
        description: "My personal portfolio website",
        tag: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        link: "https://github.com/tpham66/DuongPham",
    },
    {
        title: "American Sign Language Translator",
        description: "A real-time webcam-based ASL translator",
        tag: ["Python", "FastAPI", "React", "TypeScript", "OpenCV", "MediaPipe", "scikit-learn", "machine learning"],
        link: "https://github.com/phungvg/Sign-Language-Translator",
    },
    {
        title: "furmate",
        description: "Pet daily routines management mobile app",
        tag: ["Dart", "Firebase"],
        link: "https://github.com/tpham66/furmate",
    },
    {
        title: "CivicConnect",
        description: "Civic data dashboard for voters",
        tag: ["Python", "React", "Django"],
        link: "https://github.com/ShimraHazmi/CS351Group7",
    },
    {
        title: "Pandapal",
        description: "Won first-prize in SparkHack24",
        tag: ["Figma"],
        link: "https://www.figma.com/design/Q0VVedWL0Ft8eXVTxZVWBu/SparkHack?m=auto&t=DOttpLx1IGumqrGm-6",
    },
    {
        title: "Student Task Manager",
        description: "Student Task Manager mobile app",
        tag: ["Dart", "Firebase"],
        link: "https://github.com/acm-uic/student-task-manager-sig-mobile-dev",
    },
    {
        title: "Blackjack",
        description: "A basic Blackjack game",
        tag: ["Java"],
        link: "https://github.com/tpham66/Blackjack-game",
    },
];

export function Projects() {
    return (
        <div className="projects page dark">
            <motion.section
                id="projects"
                className="py-20 bg-pixel-space"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: false, amount: 0.3}}
                transition={{
                    duration: 0.5,
                    velocity: 100,
                }}
            >
                <div className="cross-layer"></div>
                <div className="grid lg:grid-rows-[1fr_4fr] gap-20 lg:gap-12 items-center">
                    <div className="items-center">
                        <h1 className="justify-start">
                            Projects
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-20">

                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="proj-card"
                            >
                                {/* CONTENT */}
                                <div className="card_content">
                                    <div className="w-full max-w-full flex flex-col gap-5 border-2 border-white/0 bg-white/15 rounded-lg px-6 lg:px-10 py-10 hover:border-amber-200 hover:border-2">
                                        <h3>{project.title}</h3>

                                        <div className="flex flex-col gap-0.1">
                                            <p>{project.description}</p>
                                            <div className="flex gap-2 mt-5 flex-wrap">
                                                {project.tag?.map((t) => (
                                                <span key={t} className="px-2 py-1 text-xl lg:text-xs bg-white/70 text-black rounded">
                                                    {t}
                                                </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Button3D className="btn-flip text-4xl lg:text-lg tracking-widest" btn="View" link={project.link} />
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