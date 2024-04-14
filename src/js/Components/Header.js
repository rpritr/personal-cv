import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

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
                        title: "Tech Stack",
                        url: '#tech-stack',
                    },
                ]
                }
            />
        </header>
    )
}

export  default Header;