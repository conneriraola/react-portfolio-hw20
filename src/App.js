import React, { useState } from "react";
import styled from "styled-components";

import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"

import projects from "./projects.json"

import "./index.css";

const MainElement = styled.main`
background-color: #fdfcdc;
height: 100vh;
`;
const App = () => {
    const [sections] = useState([
        {
            name: "About Me",
            description: `
            I am a Software Developer in trainig. during my bootcamp training I was able develop skills om the MERN stack (MongoDB, Express, React, Node.js). I graduated from Washington State University in 2015 with a Marketing degree and have been working at Offerup since 2016 as a Sr. Investigations Lead on the legal team.`,
        },
        {
            name: "Portfolio"
        },
        {
            name: "Contact",
        },
        {
            mame: "Resume",
        },
    ]);

    function renderSwitch() {
        switch (sectionSelected) {
            case sections[0].name:
                return <AboutMe section={sections[0]}></AboutMe>;
                case sections[2].name:
                    return <Contact></Contact>;

                    default:
                        return <Portfolio section={sections[1]} projects={projects}></Portfolio>;
        }
    }
    const [sectionSelected, setSectionSelected] = useState("Conner Iraola");

    return (
    <MainElement>
        <Nav
        sections={sections}
        setSectionSelected={setSectionSelected}
        sectionSelected={sectionSelected}
        ></Nav>
        {renderSwitch()}
    </MainElement>
    );
};

export default App;