import React from "react";
import "../../scss/_social.scss";

const Social = (props) => {
    return (
        <div className="social">
            {props.items.map(item => (
                <li key={item.url}>
                    <a href={item.url}>
                        <img src={item.img} alt={item.alt}/>
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Social;