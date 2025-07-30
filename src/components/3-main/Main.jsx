import './main.css'
import { SiGithub } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
import { projectsArr } from './ProjectsData.jsx'
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
const Main = () => {
    const [activeBtn, setActiveBtn] = useState("all");
    const [arr, setArr] = useState(projectsArr);

    const getProjectsByCategory = (btnCategory) => {
        setActiveBtn(btnCategory);
        if (btnCategory === "all") {
            setArr(projectsArr); // show all projects
        } else {
            const newArr = projectsArr.filter((project) => {

                const cat = project.category.find((mycat) => {
                    // console.log('find', mycat)
                    return mycat === btnCategory;
                })
                // console.log('filter', cat)
                return cat === btnCategory;
            });
            setArr(newArr);
        }
    }
    return (
        <main className="flex" id='projects'>

            <section className="flex  left-section">
                <button className={activeBtn === "all" ? "active" : null}
                    onClick={() => getProjectsByCategory("all")}>all projects</button>
                <button className={activeBtn === "css" ? "active" : null}
                    onClick={() => getProjectsByCategory("css")}>HTML & CSS & JS</button>
                <button className={activeBtn === "libraries" ? "active" : null}
                    onClick={() => getProjectsByCategory("libraries")}>bootstap | tailwind</button>
                <button className={activeBtn === "react" ? "active" : null}
                    onClick={() => getProjectsByCategory("react")}>Reactjs | Nextjs</button>
                <button className={activeBtn === "fullstack" ? "active" : null}
                    onClick={() => getProjectsByCategory("fullstack")}>Full Stack</button>
            </section>

            <section className=" flex right-section">

                <AnimatePresence>
                    {arr.map((item) => {
                        return (

                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ damping: 10, type: "spring", stiffness: 70 }}


                                key={item.projectTitle} className="card">
                                <img width={266} height={150} src={item.imgPath} alt="" />

                                <div style={{ width: "266px" }} className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="sub-title">
                                        {item.description}
                                    </p>

                                    <div className="flex icons">
                                        <div style={{ gap: "20px" }} className="flex">
                                            <div className="icon-link" title='Live Demo'><a href={item.url} target="_blank" ><FiLink /></a></div>
                                            <div className="icon-github" title='Github Repo'><a href={item.github} target="_blank" ><SiGithub /></a></div>
                                        </div>

                                        <a className="link flex" href={item.url} target="_blank">
                                            <span>
                                                Live Demo
                                            </span>
                                            <FaArrowRightLong
                                                className="icon-arrow-right" />
                                        </a>
                                    </div>
                                    <div className='tech flex'>
                                        {item.tech ? (item.tech.map((tech, index) => {
                                            return (
                                                <span key={index} className="tech-item">{tech}</span>
                                            )
                                        }))
                                            :
                                            ""
                                        }

                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </section>
        </main>
    );
}

export default Main;
