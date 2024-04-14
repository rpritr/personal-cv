import React from "react";
import "../../scss/_project.scss";

const Project = (props) => {
    return (
        <div className="project">
            <img src={props.image} alt={props.title} />
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.short}</p>
                <div className="buttons">
                    <a href={props.button1.url} target="_blank">
                        <img src="../../img/link.svg" alt="Live Preview" className="icon"/><button>{props.button1.title}</button>
                    </a>
                    <a href={props.button2.url} target="_blank">
                        <img src="../../img/github-white.svg" alt="View Code" className="icon"/><button>{props.button2.title}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;