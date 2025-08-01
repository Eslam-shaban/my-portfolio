import './hero.css'
import { MdVerified } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiExpensify } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import Lottie from 'lottie-react';
import devAnimation from '../../animations/dev.json'
import { useRef } from 'react';
import { motion } from "motion/react"

const Hero = () => {
    const lottieRef = useRef();
    return (
        <section className="hero flex">
            <div className="left-section  ">
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ dumping: 6, type: "spring", stiffness: 100 }}
                        src="./me.jpg" className="avatar" alt="" />
                    <div className="icon-verified">
                        <MdVerified />
                    </div>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="title"
                    id="about"
                >
                    Software Engineer | Frontend Developer
                </motion.h1>
                <p className="sub-title">
                    I'm Eslam Shaban, a frontend developer with a degree in Computer Science and a strong drive toward full-stack development. I specialize in building modern, responsive user interfaces with React, and I’m actively expanding my backend skills to become a well-rounded full-stack engineer.
                </p>

                <div className="all-icons flex">
                    <div className="icon icon-linkedin"><a href="https://www.linkedin.com/in/eslam-shaban-170/" target="_blank" title="Connect with me on LinkedIn"><SiLinkedin /></a></div>
                    <div className="icon icon-github"><a href="https://github.com/Eslam-shaban" target="_blank" title="Visit my GitHub profile"><SiGithub /></a></div>
                    <div className="icon icon-my-portfolio"><a href="https://eslam-shaban.github.io/EslamPorfolio.github.io/DataScience.html" target="_blank"><SiExpensify /></a></div>
                    <div className="icon icon-gmail">
                        <button
                            onClick={() => {
                                window.location.href = "mailto:eslamshaban170@gmail.com";
                            }}
                            title="Send me an email"
                        >
                            <SiGmail />
                        </button>
                    </div>
                </div>
            </div>

            <div className="right-section animation ">
                <Lottie
                    lottieRef={lottieRef}
                    onLoadedImages={() => {
                        // https://lottiereact.com/
                        lottieRef.current.setSpeed(0.5)
                    }}
                    style={{ height: 350, width: 400 }} animationData={devAnimation} />

            </div>
        </section>
    );
}

export default Hero;
