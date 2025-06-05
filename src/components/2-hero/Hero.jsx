import './hero.css'
import { MdVerified } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiExpensify } from "react-icons/si";
import { SiGmail } from "react-icons/si";


const Hero = () => {
    return (
        <section className="hero flex">
            <div className="left-section  ">
                <div className="parent-avatar flex">
                    <img src="./me.jpg" className="avatar" alt="" />
                    <div className="icon-verified">
                        <MdVerified />
                    </div>
                </div>

                <h1 className="title">
                    {/* Software designer, founder, and amateur astronaut. */}
                    Software Engineer | Frontend Developer | Passionate about Data Analytics.
                </h1>
                <p className="sub-title">
                    {/* I’m Ali Hassan, a software designer and entrepreneur based in New York
                    City. I’m the founder and CEO of Planetaria, where we develop
                    technologies that empower regular people to explore space on their own
                    terms. */}
                    I’m Eslam Shaban, a frontend developer with a strong interest in full-stack development and a passion for data. While I focus on building modern, responsive user interfaces, I’m actively expanding my skills across the stack. I’m also deeply interested in data analytics, data science, and AI—fields I believe are driving the future of technology.
                </p>

                <div className="all-icons flex">
                    <div className="icon icon-linkedin"><SiLinkedin /></div>
                    <div className="icon icon-github"> <SiGithub /></div>
                    <div className="icon icon-my-portfolio"><SiExpensify /></div>
                    <div className="icon icon-gmail"><SiGmail /> </div>
                </div>
            </div>

            <div className="right-section animation border">animation</div>
        </section>
    );
}

export default Hero;
