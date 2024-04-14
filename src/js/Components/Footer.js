import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./Social";
import "../../scss/_footer.scss";
const Footer = (props) => {
    return (
        <footer id="contact">
            <div className="row">
                <Logo url="../img/logo-white.svg" />
                <Menu
                    items={
                        [
                            {
                                title: "+386 31 262 903",
                                url: 'tel:+386 31 262 903',
                            },
                            {
                                title: "robi@pritrznik.si",
                                url: 'mailto:robi@pritrznik.si',
                            }
                        ]
                    }
                />
                <Social
                    items={
                        [
                            {
                                img: "../img/github.svg",
                                url: 'https://github.com/rpritr/',
                                alt: 'GitHub'
                            },
                            {
                                img: "../img/linkedin.svg",
                                url: 'https://www.linkedin.com/in/robipritrznik/',
                                alt: 'LinkedIn'
                            },
                        ]
                    }
                    asList={true}
                />
            </div>
            <div className="row">
                <Menu
                    items={
                        [
                            {
                                title: "Tech Stack",
                                url: '#tech-stack',
                            },
                            {
                                title: "Projects",
                                url: '#projects',
                            },
                        ]
                    }
                    asList={true}
                />
                <div className="copyright">
                    <p>Built by <span className="colorful">Robi Pritržnik</span> with <span className="colorful">Love</span> & <span className="colorful">Coffee</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;