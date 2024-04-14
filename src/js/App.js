import React from "react";
import '../scss/main.scss';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section from "./Components/Section";
import Gallery from "./Components/Gallery";
import ProjectList from "./Components/ProjectList";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <Hero title={["Hi 👋,",<br/>,"My name is",
                <br/>,<span className="colorful">Robi Pritržnik</span>,<br/>,"I build things for web"]}
            image="../img/profile.png"
            id="about"
            />
            <Section
                class="tech section"
                id="tech-stack"
                title="My Tech Stack"
                subtitle="Technologies I’ve been working with recently"
            >
            <Gallery
                items={
                    [
                        {
                            url: "../img/html.svg",
                            alt: 'HTML',
                        },
                        {
                            url: "../img/css.svg",
                            alt: 'CSS',
                        },
                        {
                            url: "../img/js.svg",
                            alt: 'JS',
                        },
                        {
                            url: "../img/react.svg",
                            alt: 'React',
                        },
                        {
                            url: "../img/sass.svg",
                            alt: 'Saas',
                        },
                        {
                            url: "../img/git.svg",
                            alt: 'GIT',
                        },
                    ]
                }
            />
            </Section>
                <Section
                    id="projects"
                    class="projects section"
                    title="Projects"
                    subtitle="Things I’ve built so far">
                    <ProjectList/>
                </Section>
            <Footer/>
        </>
        )
}

export default App;