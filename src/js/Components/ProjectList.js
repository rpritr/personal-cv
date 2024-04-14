import React, {useState, useEffect} from "react";
import Project from "./Project";
import "../../scss/_projects-list.scss";
const ProjectList = (props) => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {

            try {
                const response = await fetch("http://localhost:3000/projects");
                const result = await response.json();
                setProjects(result);
            } catch (error) {
                console.error(error);
            }
        }
        getProjects();
    }, []);
    return (
        <div className="projects-list">
            {projects.map(project => (
                <Project
                    image={project.image}
                    url={project.url}
                    description={project.description}
                    short={"Tech stack: " + project.short}
                    title={project.title}
                    button2={{
                        url: project.github,
                        title: "View Code",
                    }}
                    button1={{
                        url:project.url ,
                        title: "Live Preview",
                    }}
                />
            ))}

        </div>
    )
}

export default ProjectList;