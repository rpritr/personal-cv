import React from "react";
import '../scss/main.scss';
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
    return (
        <>
            <Header/>
            <Hero title={["Hi 👋,",<br/>,"My name is",
                <br/>,<span>Robi Pritržnik</span>,<br/>,"I build things for web"]}
            image="../img/profile.png"/>
        </>
        )
}

export default App;