import { motion } from "framer-motion";

const timeline = [
  {
    year: "Aug 2022",
    title: "Went to UIC",
    desc: "Began my journey in Computer Science.",
  },
  {
    year: "Jan 2025 - Present",
    title: "Computer Specialist I",
    desc: "Started working at Educational Technology Lab, UIC.",
  },
  {
    year: "May 2025 - Jun 2026",
    title: "SWE Intern",
    desc: "Interned for 1-search project, UI Health.",
  },
  {
    year: "May 2026",
    title: "Graduation",
    desc: "Completing B.S. in Computer Science.",
  },
];

export function Experience() {
  return (
    <div className="page experience light">
      <motion.section
        id="experience"
        className="py-20 bg-pixel-space"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: false, amount: 0.2}}
        transition={{
          duration: 0.5,
          velocity: 100,
        }}
      >
        <div className="cross-layer"></div>
          <div className="space-y-8 grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-50 items-center">
            {/* vertical line */}
            <div className="max-w-5xl mx-auto flex flex-col gap-20">

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative w-full flex ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >

                  {/* dot */}
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-black shadow-[8px_8px_0px_#e04560] rounded-full -translate-x-1/2" />

                  {/* card */}
                  <div className="w-[45%] lg:w-[45%] bg-white text-black p-6 rounded-xl border-2 border-black shadow-[10px_10px_0px_#e94560]">
                    <h3 className="text-xl font-bold">{item.year}</h3>
                    <h4 className="text-lg mt-2">{item.title}</h4>
                    <p className="text-sm mt-2 text-gray-700">{item.desc}</p>
                  </div>

                </motion.div>
              ))}
            </div>
            <h1 className="-order-1 lg:order-1">Experience</h1>
          </div>
      </motion.section>
    </div>
  );
}