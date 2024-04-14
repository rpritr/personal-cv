import React from "react";
import "../../scss/_hero.scss";
const Hero = (props) => {
    return (
        <section className="hero" id={props.id}>
            <div className="row">
                <div className="col">
                    <h1 key="logo1">{props.title}</h1>
                </div>
                <div className="col">
                    <img src={props.image} alt="Profile"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;