import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {

    const popularLinks = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "Teachers",
            link: "/teachers"
        },
        {
            label: "Holidays",
            link: "/holidays"
        },
        {
            label: "Contact Us",
            link: "/contact-us"
        },
    ]

    const socialLinks = [
        {
            label: "Youtube",
            icon: "ri-youtube-line",
            link: "#"
        },
        {
            label: "Facebook",
            icon: "ri-facebook-line",
            link: "#"
        },
        {
            label: "LinkedIn",
            icon: "ri-linkedin-line",
            link: "#"
        },
        {
            label: "Instagram",
            icon: "ri-instagram-line",
            link: "#"
        },
    ]

    return (

        <div className="footerBg">

            <div className="com-info">

                <div className="logo">

                    <img src="../../../public/assets/logo.avif" alt="Logo" />
                    <p>Coding School</p>

                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>

            <div className="pop-links">

                <p>Popular Links</p>

                <ul>

                    {popularLinks.map((menu, index) => (

                        <li key={index}>

                            <Link to={menu.link}>{menu.label}</Link>

                        </li>

                    ))}

                </ul>

            </div>

            <div className="social-link">

                <p>Social Profiles</p>

                <ul>

                    {socialLinks.map((menu, index) => (

                        <li key={index}>

                            <i className={menu.icon}></i>
                            <Link to={menu.link}>{menu.label}</Link>

                        </li>

                    ))}

                </ul>

            </div>

            <div className="form">

                <p>Contact Us</p>

                <form>

                    <input type="text" placeholder="Full Name" required/>
                    <input type="email" placeholder="Email ID" required/>
                    <textarea placeholder="Message" required></textarea>

                    <button>Submit</button>
                    
                </form>

            </div>

        </div>
    )

}

export default Footer