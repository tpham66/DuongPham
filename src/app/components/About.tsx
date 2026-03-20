import { motion, AnimatePresence　} from "framer-motion";
import { ChevronsRight, ChevronsLeft, Github, Linkedin, Mail } from "lucide-react";
import myPhoto from "../assets/my_photo.jpg";
import { useState　} from "react";
import myResume from "@/app/assets/resume.pdf";



const info = [
  {
    id: 1,
    title: "I AM_",
    description:
      `
      Phạm Thuỳ Dương/ Duong Thuy Pham
      Preferred: Kyra
      She/Her
      `
  },

  {
    id: 2,
    title: "MY JOURNEY_",
    description:
      `
      23-year-old Vietnamese software developer
      B.S. in Computer Science from UIC
      Keen eye for design
      `,
  },

  {
    id: 3,
    title: "BEYOND CODING_",
    description:
      `
      Books • Music • Ukulele
      Guitar • Painting
      DIY Crafts • Bicycle
      AOT • JoJo's Bizarre Adventure
      `
  },

  {
    id: 4,
    title: "LET'S CONNECT",
    image: myPhoto,
    description:
      "I'm always open to connecting with fellow developers, tech enthusiasts, and anyone interested in discussing ideas or potential collaborations. Feel free to reach out to me through my contact page or connect with me on LinkedIn!",
    }

]
export function About() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < info.length) {
      setCurrentIndex([newIndex, newDirection]);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentCard = info[currentIndex];

  return (
    <div className="about page dark">
      <motion.section
        id="about"
        className="py-20 bg-pixel-space"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 0.5,
          velocity: 100,
        }}
      >
        <div className="cross-layer pointer-events-none"></div>
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">

          {/* Left Column - Info Cards */}
          <div className="flex gap-6 items-center w-full min-h-dvh">

            {/* LEFT ARROW */}
            <button
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className="arrow-button"
            >
              <ChevronsLeft size={96} strokeWidth={1}/>
            </button>

            {/* CARD */}
            <div className="card">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 25
                    }}
                    className="flex-1 flex flex-col justify-center items-center text-center"
                  >
                    {currentCard.image ? (
                      <div className="aspect-video overflow-hidden rounded-xl w-full">
                        <img
                          src={currentCard.image}
                          alt={currentCard.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <>
                        <h2>
                          {currentCard.title}
                        </h2>

                        <p>
                          {currentCard.description}
                        </p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                
                <div className="flex justify-center gap-3 mt-8">
                  {info.map((_, index) => (
                    <div
                      key={index}
                      className="relative w-6 h-2 bg-white/30 rounded-full overflow-hidden"
                    >
                      {index === currentIndex && (
                        <motion.div
                          layoutId="worm"
                          className="absolute inset-0 bg-[#e94560] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 100
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() => paginate(1)}
              disabled={currentIndex === info.length - 1}
              className="arrow-button"
            >
              <ChevronsRight size={96} strokeWidth={1}/>
            </button>

          </div>
  
          { /* Right Column - Title */ }
          <div className="flex flex-col justify-center items-center md:justify-end space-y-20">
            <h1>
              ABOUT
            </h1>
            <motion.div 
              className="flex justify-center gap-6 mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <a href="https://github.com/tpham66" target="_blank" rel="noopener noreferrer" className="hover:text-[#e94560] transition-colors border-2 border-white p-3 hover:border-[#e94560]">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/thuy-duong-pham-/" target="_blank" rel="noopener noreferrer" className=" hover:text-[#e94560] transition-colors border-2 border-white p-3 hover:border-[#e94560]">
                <Linkedin size={20} />
              </a>
              <a href="mailto:phamduong2604@gmail.com" className="hover:text-[#e94560] transition-colors border-2 border-white p-3 hover:border-[#e94560]">
                <Mail size={20} />
              </a>
            </motion.div>

            <a
              href={myResume}
              download="Kyra-CV.pdf"
              className="inline-flex items-center justify-center border-2 border-[#e94560] px-6 py-3 text-sm tracking-[0.2em] hover:bg-white hover:text-black hover:border-black hover:shadow-[10px_10px_0px_#e94560]  transition-colors w-fit"
            >
              My Resume
            </a>
          </div>

        </div>
      </motion.section>
      
    </div>
  );
}