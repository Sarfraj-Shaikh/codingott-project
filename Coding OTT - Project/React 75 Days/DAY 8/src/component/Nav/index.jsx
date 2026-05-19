import "./nav.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Nav = () => {

    const navMenu = [
        {
            label: "Home",
            link: "/",
            class: ""
        },
        {
            label: "Teachers",
            link: "/teachers",
            class: ""
        },
        {
            label: "Holidays",
            link: "/holidays",
            class: ""
        },
        {
            label: "Contact Us",
            link: "/contact-us",
            class: "ctaBtn"
        }
    ]

    return (

        <div>

            <nav>

                <div className="left">

                    <img src="../../../public/assets/logo.avif" alt="Logo" />
                    <p>Coding School</p>

                </div>

                <div className="right">

                    <ul>

                        {navMenu.map((menu, index) => (

                            <li key={index} className={menu.class}>

                                <Link to={menu.link}>{menu.label}</Link>

                            </li>

                        ))}

                    </ul>

                </div>

            </nav>
        </div>

    )

}

export default Nav