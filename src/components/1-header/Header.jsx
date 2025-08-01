import { useEffect, useState } from "react";
import "./header.css";
import { IoMenu } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";



const Header = () => {
    const [showModal, setshowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        }
        else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }

    }, [theme]);

    return (
        <header className="  flex">
            {/* menu button  */}
            <button onClick={() => {
                setshowModal(true)
            }} className="menu icon-btn">
                <div className="menu-icon flex">
                    <IoMenu />
                </div>
            </button>

            <div />

            {/*  menu in large screen */}
            <nav>
                <ul className="flex">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experiance</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* theme button  */}
            <button className="mode flex"
                onClick={() => {
                    // Send the value to local storage
                    localStorage.setItem("currentMode", theme === "light" ? "dark" : "light");
                    // Get the value from local storage
                    setTheme(localStorage.getItem("currentMode"))
                }}>
                {theme === "dark" ? <IoMoonOutline /> : <LuSunMedium />}


            </button>

            {/*  menu in small screen */}
            {showModal && (
                <div className="fixed">
                    <ul className="modal ">
                        <li >
                            <button onClick={() => {
                                setshowModal(false)
                            }} >
                                <IoClose className="icon-close" />
                            </button>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setshowModal(false)}>About</a>
                        </li>
                        <li>
                            <a href="#articles" onClick={() => setshowModal(false)}>Articles</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setshowModal(false)}>Projects</a>
                        </li>
                        <li>
                            <a href="#speaking" onClick={() => setshowModal(false)}>Speaking</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setshowModal(false)}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;