import { useState } from "react";
import "./header.css";
import { IoMenu } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



const Header = () => {
    const [showModal, setshowModal] = useState(false);
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
                        <a href="">About</a>
                    </li>

                    <li>
                        <a href="">Articles</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Speaking</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* theme button  */}
            <button className="mode flex">
                <IoMoonOutline />
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
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Articles</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Speaking</a>
                        </li>
                        <li>
                            <a href="">Uses</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;