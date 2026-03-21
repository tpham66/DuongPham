import { motion, AnimatePresence　} from "framer-motion";
import { ChevronsRight, ChevronsLeft, Github, Linkedin, Mail, Download } from "lucide-react";
import myPhoto from "../assets/my_photo.jpg";
import { useState　} from "react";
import myResume from "@/app/assets/resume.pdf";

const isMobile = window.innerWidth < 1024;

const info = [
  {
    id: 1,
    title: "I AM_",
    description:
      `
      Duong Thuy Pham
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
        <div className="cross-layer"></div>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-20 lg:gap-12 items-center">

          {/* Left Column - Info Cards */}
          <div className="flex gap-6 items-center w-full">

            {/* LEFT ARROW */}
            <button
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className="hidden lg:block arrow-button"
            >
              <ChevronsLeft size={96} strokeWidth={1}/>
            </button>

            {/* CARD */}
            <div className="card overflow-hidden">
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
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: -50, right: 50 }}
                    dragElastic={isMobile ? 0.2 : 0}
                    onDragEnd={(_e, { offset, velocity }) => {
                      if (!isMobile) return;

                      const swipe = offset.x + velocity.x * 100;

                      if (swipe < -100) paginate(1);
                      else if (swipe > 100) paginate(-1);
                    }}
                    whileDrag={{scale: 0.95}}
                    dragDirectionLock
                    className="w-full flex-1 flex flex-col justify-center items-center text-center"
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
              className="hidden lg:block arrow-button"
            >
              <ChevronsRight size={96} strokeWidth={1}/>
            </button>

          </div>
  
          { /* Right Column - Title */ }
          <div className="flex flex-col -order-1 lg:order-1 items-center md:justify-end space-y-40 lg:space-y-20">
            <h1>
              ABOUT
            </h1>
            <motion.div 
              className="flex justify-center gap-15 mb-10 lg:gap-6 lg:mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <a href="https://github.com/tpham66" target="_blank" rel="noopener noreferrer" className="contact">
                <Github className="max-lg:w-15 max-lg:h-15"/>
              </a>
              <a href="https://www.linkedin.com/in/thuy-duong-pham-/" target="_blank" rel="noopener noreferrer" className="contact">
                <Linkedin className="max-lg:w-15 max-lg:h-15"/>
              </a>
              <a href="mailto:phamduong2604@gmail.com" className="contact">
                <Mail className="max-lg:w-15 max-lg:h-15"/>
              </a>
            </motion.div>

            <a
              href={myResume}
              download="Kyra_Resume.pdf"
              className="inline-flex items-center justify-center gap-3 border-6 lg:border-2 border-[#e94560] px-15 py-10 lg:px-6 lg:py-3 text-4xl lg:text-sm tracking-[0.2em] hover:bg-white hover:text-black hover:border-black hover:shadow-[10px_10px_0px_#e94560] transition-colors w-fit"
            >
              <Download className="w-10 h-10 lg:w-5 lg:h-5" />
              Resume
            </a>
          </div>

        </div>
      </motion.section>
      
    </div>
  );
}