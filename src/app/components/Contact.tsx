import { motion } from "framer-motion";

export function Contact() {
    return (
        <motion.section
            id="projects"
            className="py-20 bg-gray-100"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once: true}}
        >
                <div className="page">
                    <h2 className="text-4xl mb-6 text-gray-900">
                        Contact Me
                    </h2>
                    <div className="space-y-12">
                        {/* Contact form will go here */}
                    </div>
                </div>
        </motion.section>
    )
}