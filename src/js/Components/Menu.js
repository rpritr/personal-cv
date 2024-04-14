import React, {useState, useEffect} from "react";

import "../../scss/_menu.scss";
const Menu = (props) => {
    const [mobile, setMobile] = useState(false);

    const openMenu = () => {
        setMobile(!mobile);
    }

    let displayMenu = () => {
        if(mobile) {
            return (
                <ul
                    style={{display: displayMenu}}
                >
                    {props.items.map(item => (
                        <li key={item.url}>
                            <a href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )
        } else
        {
            return (
                <ul></ul>
            )
        }
    }
    return (

        <nav>
            <ul className="menu">
            {props.items.map(item => (
                <li key={item.url}>
                    <a href={item.url}>
                        {item.title}
                    </a>
                </li>
            ))}
            </ul>
            <div className="mobile-menu">
                <img src="../../img/toggle.svg" className="toggle"
                onClick={openMenu}/>
                {displayMenu()}
            </div>

        </nav>
    )
}

export default Menu;