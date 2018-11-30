import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import icon from "./static/noshadow_180pxCompressed.png";
import facebook from "./static/facebook.png";
import instagram from "./static/instagram.png";

const SuperContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: white;
  filter: drop-shadow(0px 0px 5px black);
`;
const StickyBacker = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  font: 112.5%/1.45em georgia, serif;
`;
const SocialLogo = styled.img`
  height: 40px;
  margin: 0px 10px 0px 10px;
  transition: all 0.3s ease;
  flex: 0;

  &:hover {
    height: 45px;
    margin: -2.5px 7.5px 0px 7.5px;
  }
`;
const A = styled.a`
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const HomeLink = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: black;
  }
`;
const LinkText = styled.h3`
  flex: 1;
  color: rgb(148, 148, 148);
  margin: 15px 20px 15px 20px;
  transition: color 0.5s ease;
  &:hover {
    color: black;
  }
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.38316rem;
  line-height: 1.1;
`;
const Clean = styled.h1`
  color: rgb(113, 194, 0);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
`;

const CleanFareLogo = styled.img`
  margin: 0px 20px 0px 20px;
  height: 50px;
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SuperContainer>
        <StickyBacker>
          <a href="/" style={{ textDecoration: "none" }}>
            <HomeLink>
              <CleanFareLogo src={icon} />
              <div style={{ height: "50px" }}>
                <Clean>
                  Clean<span style={{ color: "black" }}>Fare</span>
                </Clean>
              </div>
            </HomeLink>
          </a>
          <A href="https://www.facebook.com/CleanFareApp" target="_blank">
            <SocialLogo src={facebook} />
          </A>
          <A href="https://www.instagram.com/cleanfare" target="_blank">
            <SocialLogo src={instagram} />
          </A>
          <a href="/" style={{ textDecoration: "none" }}>
            <LinkText>Home</LinkText>
          </a>
          <a href="/businesses/" style={{ textDecoration: "none" }}>
            <LinkText>Businesses</LinkText>
          </a>
          <a href="/competitions/" style={{ textDecoration: "none" }}>
            <LinkText>Competitions</LinkText>
          </a>
          <a href="/contact/" style={{ textDecoration: "none" }}>
            <LinkText>Contact</LinkText>
          </a>
        </StickyBacker>
      </SuperContainer>
    );
  }
}

NavBar.propTypes = {
  isHome: PropTypes.bool
};

export default NavBar;
