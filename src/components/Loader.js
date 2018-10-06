import React from "react";
import styled from "styled-components";

const LoadingText = styled.h2`
  text-align: center;
  ${props => props.isCentered &&
    `
    position: absolute;
    top: 50%;
    left 50%;
    transform: translate(-50%, 50%);
  `};
`;

export const Loader = ({ isCentered }) => {
  return (
    <div>
      <LoadingText isCentered={isCentered}>Loading...</LoadingText>
    </div>
  );
};
