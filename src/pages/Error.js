import React from "react";
import styled from "styled-components";
import { Error404 } from "../assets";

const NotFound = () => {
  return <Wrapper>{/* <Div src={Error404} /> */}</Wrapper>;
};
// const Div = styled.img`
//   margin-top: 90px;
//   width: 70%;
//   margin-left: 5%;
// `;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* padding-top: 160px; */
  background-image: url(${Error404});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
`;
export default NotFound;
