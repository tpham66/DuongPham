import { motion } from "framer-motion";
import { BOOKS } from "@/styles/books.ts";

export function Books() {
  return (
    <div className="books page dark">
      <motion.section
        id="books"
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
        <div className="grid md:grid-cols-[1fr_3fr] gap-12 items-center min-h-screen">
          <div className="flex justify-center items-center">
            <h1 className="break-all w-min text-right">Books</h1>
          </div>
          <ul className="cards">
            {BOOKS.map((book, i) => (
              <li key={i}>
                <div className="card-inner">
                  <img src={book.img} alt={book.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  )
}