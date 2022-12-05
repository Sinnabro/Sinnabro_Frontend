import styled from "styled-components";
import { useState } from "react";

import { bell, pencil } from "../assets";

const Graph = ({ bar, setBar }) => {
  // 변수 선언

  return (
    <GraphDiv>
      <CoverBarDiv>
        <BarDiv bar={bar}></BarDiv>
      </CoverBarDiv>
    </GraphDiv>
  );
};

const TimeTable = ({ bar, setBar, setModal2 }) => {
  const arr = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    1, 2, 3, 4,
  ];

  return (
    <Div>
      <TitleDiv>
        <TitleP>Time Table</TitleP>
        <ExplainImg src={bell} alt="Bell" />
      </TitleDiv>

      <BodyDiv>
        {arr.map((i, idx) => {
          return (
            <GDiv key={idx}>
              <Bt
                onClick={() => {
                  setModal2(true);
                }}
              >
                {i}
              </Bt>
              <Graph bar={bar} setBar={setBar} />
            </GDiv>
          );
        })}
      </BodyDiv>
    </Div>
  );
};

// styled-components
const GraphDiv = styled.div`
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
`;
const CoverBarDiv = styled.div`
  width: 298px;
  height: 18px;
  border: 1px solid #808080;
  border-radius: 3px;
`;
const BarDiv = styled.div`
  width: ${({ bar }) => bar};
  text-align: center;
  background-color: #748ffc;
`;

const Div = styled.div`
  margin-top: 228px; // 개발 시 지우기
  width: 449px;
  height: 667px;
  border: 1px solid #808080;
  border-radius: 14px;
`;
const TitleDiv = styled.div`
  height: 78px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #808080;
`;
const TitleP = styled.p`
  margin: 21px 47px 23px 145px;
  font-size: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #5b5b5b;
`;
const ExplainImg = styled.img`
  margin: 21px 0 23px 0;
  width: 32px;
  height: 32px;
`;

const BodyDiv = styled.div`
  margin: 18px 0 0 61px;
  width: 319px;
`;

const GDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bt = styled.button`
  width: 18px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  color: #808080;
  background-color: transparent;
  border: none;
`;

// const Img = styled.img`
//   position: absolute;
//   width: 16px;

//   &:hover {
//     display: none;
//   }
// `;

export default TimeTable;
