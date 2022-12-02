import React from "react";
import styled from "styled-components";
import { Error404 } from "../assets";

const NotFound = () => {
  return (
    <Wrapper>
      <Div src={Error404} />
    </Wrapper>
  );
};
const Div = styled.img`
  margin-top: 70px;
  width: 70%;
  margin-left: 5%;
`;
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default NotFound;
