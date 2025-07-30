import './footer.css'

const Footer = () => {
    return (
        <footer className="flex">
            <ul className="flex">
                <li>
                    <a href="">About</a>
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

            <p>© {new Date().getFullYear()} by Eslam Shaban. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
