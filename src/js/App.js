import React from "react";
import '../scss/main.scss';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section from "./Components/Section";
import Gallery from "./Components/Gallery";
import Project from "./Components/Project";
const App = () => {
    return (
        <>
            <Header/>
            <Hero title={["Hi 👋,",<br/>,"My name is",
                <br/>,<span>Robi Pritržnik</span>,<br/>,"I build things for web"]}
            image="../img/profile.png"
            id="about"
            />
            <Section
                class="tech section"
                id="tech"
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
                    id="tech-stack"
                    class="projects section"
                    title="Projects"
                    subtitle="Things I’ve built so far"
            >
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
                </Section>
        </>
        )
}

export default App;