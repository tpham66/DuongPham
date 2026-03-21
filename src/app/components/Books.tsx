import { motion } from "framer-motion";
import { BOOKS } from "../../styles/books";
import type { Key } from "react";

export function Books() {
  return (
    <div className="books page dark">
      <motion.section
        id="books"
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
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-20 lg:gap-12 items-center">
          <ul className="cards">
            {BOOKS.map((book: { img: string | undefined; title: string | undefined; }, i: Key | null | undefined) => (
              <li key={i}>
                <div className="card-inner">
                  <img src={book.img} alt={book.title} />
                </div>
              </li>
            ))}
          </ul>
          <h1 className="-order-1 lg:order-1">Books</h1>
        </div>
      </motion.section>
    </div>
  )
}