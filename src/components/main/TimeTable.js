import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../DB/data.json";

import { bell, imgLogo, x } from "../../assets";

const Graph = ({ bar }) => {
  // 함수

  return (
    <GraphDiv>
      <CoverBarDiv>
        <BarDiv bar={bar}></BarDiv>
      </CoverBarDiv>
    </GraphDiv>
  );
};

const TimeTable = ({ bar, setBar, setModal2, modal2, setModal1 }) => {
  // 변수 선언
  const [errorNum, setErrorNum] = useState(""); // number error message
  let check = true;

  // modal remove 함수
  const modalRemove2 = () => {
    setModal2(false);
  };

  // input value 변수
  const [inputs, setInputs] = useState({
    number: "",
  });
  const { number } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // number
  const errorNumberM = () => {
    if (number === "") {
      setErrorNum("숫자를 입력해 주세요.");
      check = false;
    } else {
      setErrorNum("");
      setModal2(false);
    }
  };

  // 그래프 길이 조절 함수
  const progress = () => {
    let large = bar[0];

    console.log(bar[0]);
    let i = 0;

    setInterval(() => {
      if (i <= number) {
        setBar(`${(i * 5) / 3}%`);
        i++;
      } else {
        clearInterval();
      }
    }, 16);
  };

  const checkSetting2 = () => {
    progress();
    errorNumberM();

    if (check) {
      setErrorNum("");
      // axios 연동
    }
  };

  useEffect(() => {
    setBar(bar);
    // console.log("useEffect", bar);
  }, [bar]);

  // const arr = [
  //   5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  //   1, 2, 3, 4,
  // ];

  return (
    <>
      <Div>
        <TitleDiv>
          <TitleP>Time Table</TitleP>
          <ExplainImg
            src={bell}
            alt="Bell"
            title="그래프 옆에 숫자를 눌러서 공부 시간을 기록해 보세요."
          />
        </TitleDiv>

        <BodyDiv>
          {dummy.number.map((id) => (
            <GDiv key={id.id}>
              <Bt
                onClick={() => {
                  setModal2(true);
                  setBar(++bar[id.id]);
                  console.log(bar);
                }}
              >
                {id.id}
              </Bt>
              <Graph bar={bar} />
            </GDiv>
          ))}
        </BodyDiv>
      </Div>

      <CoverModal2Div modal2={modal2}>
        <ModalDiv>
          <TimeTablesDiv>
            <TTitleDiv>
              <ModalImgsDiv>
                <Link to="/beforelogin">
                  <IMGLogo src={imgLogo} alt="IMGLogo" />
                </Link>

                <XButton onClick={modalRemove2}>
                  <X src={x} alt="X" />
                </XButton>
              </ModalImgsDiv>
            </TTitleDiv>

            <ModalBodyDiv>
              <Titlep
                style={{
                  marginBottom: "25px",
                  color: "#000000",
                }}
              >
                Time Table 설정하기
              </Titlep>
              <NumberDiv>
                <NumberInput
                  onChange={change}
                  name="number"
                  value={number}
                  type="text"
                  placeholder="0~60까지 숫자를 입력해주세요"
                />
              </NumberDiv>
              <NumberErrorDiv name="errorNum">{errorNum}</NumberErrorDiv>

              <CoverSettingDiv>
                <SettingButton
                  setBar={setBar}
                  bar={bar}
                  onClick={checkSetting2}
                >
                  설정하기
                </SettingButton>
              </CoverSettingDiv>
            </ModalBodyDiv>
          </TimeTablesDiv>
        </ModalDiv>
      </CoverModal2Div>
    </>
  );
};

// css variable
const errorStyle = {
  marginTop: "1.2px",
  height: "15px",
  fontSize: "11.5px",
  color: "red",
  fontWeight: 700,
};

const divStyle = {
  marginTop: "5px",
  width: "100%",
  height: "70px",
};

const inputStyle = {
  padding: "0 30px 0 30px",
  width: "432px",
  height: "70px",
  fontSize: "18px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 500,
  backgroundColor: "#FFFFFF",
  border: "1px solid #808080",
  borderRadius: "5px",
};

// Modal
const CoverModal2Div = styled.div`
  position: absolute;
  display: ${({ modal2 }) => (modal2 ? "block" : "none")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;

const TimeTablesDiv = styled.div`
  width: 662px;
  height: 430px;
  background: #ffffff;
  border: 1px solid #808080;
  border-radius: 14px;
`;
const TTitleDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: end;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #808080;
`;
const ModalImgsDiv = styled.div`
  margin-top: 19px;
`;

const IMGLogo = styled.img`
  width: 131px;
`;
const XButton = styled.button`
  margin: 0 26px 0 214px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const X = styled.img`
  width: 26px;
`;

const ModalBodyDiv = styled.div`
  margin-top: 28px;
  margin-left: 84px;
  width: 494px;
  height: 258px;
`;

const Titlep = styled.p`
  margin-top: 48px;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  color: #5b5b5b;
`;

const NumberErrorDiv = styled.div`
  ${errorStyle}
`;

const NumberDiv = styled.div`
  ${divStyle}
`;
const NumberInput = styled.input`
  padding-right: 20px;
  ${inputStyle}

  &::placeholder {
    color: #808080;
  }
  &:focus {
    outline: none;
  }
`;

const CoverSettingDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SettingButton = styled.button`
  width: 276px;
  height: 50px;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  background-color: #4263eb;
  border: none;
  border-radius: 5px;
`;

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
  height: 100%;
  text-align: center;
  background-color: #748ffc;
`;

const Div = styled.div`
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
  margin: 10px 0 0 61px;
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
