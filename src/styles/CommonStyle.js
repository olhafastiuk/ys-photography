import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-size: ${(props) => props.backgroundSize || "cover"};
  background: ${(props) => props.background};
  background-image: url(${(props) => props.bgimg || "./images/bg-1.png"});
  background-repeat: no-repeat;
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  max-height: ${(props) => props.maxHeight || "1400px"};
  z-index: ${(props) => props.z || "0"};
  position: ${(props) => props.position};

  }
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

const StyledIMG = styled.img`
  margin: ${({ margin }) => margin || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
`;

export const Img = (props) => {
  return <StyledIMG {...props} />;
};

const LinkStyler = styled(Link)`
  font-family: 'Forum', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 22px !important;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color || "#5B4340"};
  text-decoration: none;
  font-size: ${(props) => props.size || "medium"};
  margin: ${({ margin }) => margin || "0"};
  }
`;

export const LinK = (props) => {
  return <LinkStyler {...props} />;
};
