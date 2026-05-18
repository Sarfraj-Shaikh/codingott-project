import "./nav.css";

const Nav = () => {

    return (

        <div>

            <nav>

                <div className="left">

                    <img src="../../../public/assets/logo.avif" alt="Logo" />
                    <p>Coding School</p>

                </div>

                <div className="right">

                    <ul>
                        <li>Home</li>
                        <li>Teachers</li>
                        <li>Holidays</li>
                        <li className="ctaBtn">Contact Us</li>
                    </ul>

                </div>

            </nav>
        </div>

    )

}

export default Nav