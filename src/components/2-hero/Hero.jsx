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
                    className="title" id='about'>
                    {/* Software designer, founder, and amateur astronaut. */}
                    Software Engineer | Frontend Developer | Passionate about Data Analytics.
                </motion.h1 >
                <p className="sub-title">
                    {/* I’m Ali Hassan, a software designer and entrepreneur based in New York
                    City. I’m the founder and CEO of Planetaria, where we develop
                    technologies that empower regular people to explore space on their own
                    terms. */}
                    I’m Eslam Shaban, a frontend developer with a strong interest in full-stack development and a passion for data. While I focus on building modern, responsive user interfaces, I’m actively expanding my skills across the stack. I’m also deeply interested in data analytics, data science, and AI—fields I believe are driving the future of technology.
                </p>

                <div className="all-icons flex">
                    <div className="icon icon-linkedin"><a href="https://www.linkedin.com/in/eslam-shaban-170/" target="_blank"><SiLinkedin /></a></div>
                    <div className="icon icon-github"><a href="https://github.com/Eslam-shaban" target="_blank"><SiGithub /></a></div>
                    <div className="icon icon-my-portfolio"><a href="https://eslam-shaban.github.io/EslamPorfolio.github.io/DataScience.html" target="_blank"><SiExpensify /></a></div>
                    <div className="icon icon-gmail"><button
                        onClick={() => {
                            window.location.href = "mailto:eslamshaban170@gmail.com";
                        }}><SiGmail /></button> </div>
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
