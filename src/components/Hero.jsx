import profilePic from "../assets/AmarSinghProfile1.jpg"
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div id="hero" className="flex flex-col items-center lg:ml-20 lg:items-start" >
                        <motion.h1 variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Amarjot Singh</motion.h1>
                        <motion.span variants={container(0.5)}
                            initial="hidden"
                            animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p variants={container(1)}
                            initial="hidden"
                            animate="visible" className="my-2 max-w-xl pt-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                variants={container(1)}

                                initial="hidden"
                                animate="visible"
                                className="my-2 px-8 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
                            >
                                See My Works
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-5">
                    <div className="flex justify-center">
                        <motion.img initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }} src={profilePic} alt="Amarjot Singh"
                            className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero
