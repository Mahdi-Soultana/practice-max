import React from "react";
import styled from "styled-components";
import imgSrc from "./lily-banse--YHSwy6uqvk-unsplash.jpg";
const Hero = styled.div`
  height: 80vh;
  background-color: #eee;
  background: linear-gradient(
      35deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.2),
      transparent,
      rgba(250, 250, 250, 0.4)
    ),
    url(${imgSrc}) no-repeat center center/cover;
`;
function HeroComponent() {
  return <Hero></Hero>;
}

export default HeroComponent;
