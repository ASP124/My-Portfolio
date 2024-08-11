import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div id="contactme" className="border-b border-neutral-900 pb-20">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }} 
                className="my-10 text-center text-4xl font-bold text-white"
            >
                Get in Touch
            </motion.h1>
            <div className="text-center text-lg">
                <a 
                    href="https://www.linkedin.com/in/amarjot-singh-phull-18a102259/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mb-4 inline-block hover:text-purple-500 hover:underline transition-colors"
                >
                    {CONTACT.Ldn}
                </a>
                <br />
                <a 
                    href="https://github.com/ASP124" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mb-4 inline-block hover:text-purple-500 hover:underline transition-colors"
                >
                    {CONTACT.Git}
                </a>
                <br />
                <a 
                    href="mailto:{CONTACT.Email}" 
                    className="inline-block hover:text-purple-500 hover:underline transition-colors"
                >
                    {CONTACT.Email}
                </a>
            </div>
        </div>
    );
}

export default Contact;
