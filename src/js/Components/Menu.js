import React from "react";

import "../../scss/_menu.scss";
const Menu = (props) => {
    console.log(props);
    return (
        <nav>
            <ul>
            {props.items.map(item => (
                <li key={item.url}>
                    <a href={item.url}>
                        {item.title}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default Menu;