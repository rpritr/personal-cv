import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./Social";
import "../../scss/_header.scss";
const Header = () => {
    return (
        <header>
            <Logo url="../img/logo.svg" />
            <Menu
                items={
                [
                    {
                        title: "Home",
                        url: '#home',
                    },
                    {
                        title: "About",
                        url: '#about',
                    },
                    {
                        title: "Tech Stack",
                        url: '#tech-stack',
                    },
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
            />
        </header>
    )
}

export  default Header;