import React from "react";
const Logo = (props) => {
    return (
        <div className="logo">
            <img src={props.url} alt="Logo"/>
        </div>
    )
}
export default Logo;