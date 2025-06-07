import './main.css'
import { SiGithub } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
import { projectsArr } from './ProjectsData.js'
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
                    onClick={() => getProjectsByCategory("css")}>HTML & CSS</button>
                <button className={activeBtn === "js" ? "active" : null}
                    onClick={() => getProjectsByCategory("js")}>JavaScript</button>
                <button className={activeBtn === "libraries" ? "active" : null}
                    onClick={() => getProjectsByCategory("libraries")}>bootstap | tailwind</button>
                <button className={activeBtn === "react" ? "active" : null}
                    onClick={() => getProjectsByCategory("react")}>Reactjs</button>
                <button className={activeBtn === "fullStack" ? "active" : null}
                    onClick={() => getProjectsByCategory("fullStack")}>Full Stack</button>
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
                                <img width={266} src={item.imgPath} alt="" />

                                <div style={{ width: "266px" }} className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="sub-title">
                                        {item.description}
                                    </p>

                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <div className="icon-link"><FiLink /> </div>
                                            <div className="icon-github"><SiGithub /></div>
                                        </div>

                                        <a className="link flex" href="">
                                            <span>
                                                more
                                            </span>
                                            <FaArrowRightLong
                                                className="icon-arrow-right" />
                                        </a>
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
