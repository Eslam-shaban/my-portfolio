import './main.css'
import { SiGithub } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const Main = () => {
    const projects = ["aa", "bb", "cc", 1, 7]
    return (
        <main className="flex">

            <section className="flex  left-section">
                <button className="active">all projects</button>
                <button>HTML & CSS</button>
                <button>JavaScript</button>
                <button>Reactjs</button>
                <button>Full Stack</button>
            </section>

            <section className=" flex right-section">
                {projects.map((item) => {
                    return (
                        <article key={item} className="  card">
                            <img width={266} src="./1.jpg" alt="" />

                            <div style={{ width: "266px" }} className="box">
                                <h1 className="title">Landing Page 2 </h1>
                                <p className="sub-title">
                                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                                    tempore dolor in, accusantium laudantium accusamus.
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
                        </article>
                    );
                })}
            </section>
        </main>
    );
}

export default Main;
