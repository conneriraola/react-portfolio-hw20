import React, { useEffect } from "react";
import styled from "styled-components";

const NavBar = styled.header`
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin: 0;
  }
`;

const HeaderText = styled.h1`
  color: #00AFB9;
  cursor: pointer;
`;

const NavElement = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #000000;
`;

const ButtonWrapper = styled.div`
  display: flex;
  min-width: 75%;
  max-width: 50vw;
  justify-content: space-around;
`;

function Nav(props) {
    const { sections = [], sectionSelected, setSectionSelected } = props;
  
    useEffect(() => {
      document.title = sectionSelected === "Conner Iraola" ? sectionSelected : `Conner Iraola/${sectionSelected}`;
    }, [sectionSelected]);
  
    return (
      <NavBar>
        <HeaderText
          onClick={() => document.location = "/"}
        >Casey Deriso</HeaderText>
        <ButtonWrapper>
          {sections.map((selection) => {
            return (
              <NavElement
                active={false}
                key={selection.name}
                onClick={(e) => setSectionSelected(e.target.textContent)}
                className={ sectionSelected === selection.name ? "active" : ""}
                href={ selection.name === "Resume" ? "https://docs.google.com/document/d/1xZ6cXRlSglJi-jQGnchGJdbWw0ZqbGkasdeMx8csDpY/edit" : "#"}
                target={ selection.name === "Resume" ? 
              "_blank" : "_self"}
              >
                {selection.name}
              </NavElement>
            );
          })}
        </ButtonWrapper>
      </NavBar>
    );
  }
  
  export default Nav;