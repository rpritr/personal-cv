import React from "react";
import "../../scss/_section.scss";

const Section = (props) => {
    return (
        <section className={props.class} id={props.id}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            {props.children}
        </section>
    )
}

export default Section;