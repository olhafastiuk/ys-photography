import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  flex: ${(props) => props.flex || "unset"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-size: ${(props) => props.backgroundSize || "cover"};
  background: ${(props) => props.background};
  background-image: url(${(props) => props.bgimg || "./images/bg-1.png"});
  background-repeat: no-repeat;
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  z-index: ${(props) => props.z || "0"};
  position: ${(props) => props.position};\
  font-family: 'Forum', cursive;
  font-style: normal;
  color: ${(props) => props.color || "#5B4340"};

  }
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

const LinkStyler = styled(Link)`
  font-family: 'Forum', cursive;
  font-style: normal;
  font-weight: 500;
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
