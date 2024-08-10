import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="aboutme" className="border-b border-neutral-900 pb-4 px-4 lg:px-8">
            <h2 className="my-20 text-center text-4xl">Little More About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }} 
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8"
                >
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-10"
                >
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
