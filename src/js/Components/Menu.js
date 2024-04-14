import React, {useState} from "react";

import "../../scss/_menu.scss";
const Menu = (props) => {
    const [mobile, setMobile] = useState(false);

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
                <img src="../../img/toggle.svg" className="toggle"/>
                <ul
                    style={{display:"none"}}
                >
                    {props.items.map(item => (
                        <li key={item.url}>
                            <a href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}

export default Menu;