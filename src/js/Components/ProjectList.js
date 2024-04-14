import React from "react";
import Project from "./Project";
const ProjectList = (props) => {
    return (
        <>
            <Project
                image="../img/project.png"
                url="https://github.com/rpritr/personal-cv"
                description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                short="Tech stack : HTML , JavaScript, SASS, React"
                title="Project Tile goes here"
                button2={{
                    url: "https://github.com/rpritr/personal-cv",
                    title: "View Code",
                }}
                button1={{
                    url: "https://github.com/rpritr/personal-cv",
                    title: "Live Preview",

                }}
            />
        </>
    )
}

export default ProjectList;