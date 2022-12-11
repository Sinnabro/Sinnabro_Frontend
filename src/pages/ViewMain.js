import styled from "styled-components";
import WiseSaying from "../components/view/WiseSaying";
import Todo from "../components/view/Todo";
import Comment from "../components/view/Comment";
import DDay from "../components/DDay";
import { DDayPencil } from "../assets";
// import TimeTable from "../components/TimeTable";
import Temporary from "../components/Temporary";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TimeTable from "../components/main/TimeTable";
import { imgLogo, x } from "../assets";

const ViewMain = () => {
  // 변수 선언
  let check = true;
  const [bar, setBar] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  // modal
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  // modal remove 함수
  const modalRemove1 = () => {
    setModal1(false);
  };
  const modalRemove2 = () => {
    setModal2(false);
  };

  // error message 변수
  const [errorN, setErrorN] = useState(""); // name error message
  const [errorD, setErrorD] = useState(""); // date error message
  // const [errorNum, setErrorNum] = useState(""); // number error message

  // input value 변수
  const [inputs, setInputs] = useState({
    name: "",
    date: "",
  });
  const { name, date } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // error message 보내주는 함수들
  // // number
  // const errorNumberM = () => {
  //   if (number === "") {
  //     setErrorNum("숫자를 입력해 주세요.");
  //     check = false;
  //   } else {
  //     setErrorNum("");
  //     setModal2(false);
  //   }
  // };
  // 1. name
  const errorNameM = () => {
    // 디데이 이름 입력 안 했을 때
    if (name === "") {
      setErrorN("디데이 이름을 입력해 주세요.");
      check = false;
    } else {
      setErrorN("");
    }
  };

  // 2. date
  const errorDateM = () => {
    // 날짜 선택 안 했을 때
    if (date === "") {
      setErrorD("날짜를 선택해 주세요.");
      check = false;
    } else {
      setErrorD("");
    }
  };

  // 설정하기 체크 함수
  const checkSetting1 = () => {
    errorNameM();
    errorDateM();

    if (check) {
      setErrorN("");
      setErrorD("");

      // axios 연동
    }
  };

  // // 그래프 길이 조절 함수
  // const progress = () => {
  //   let i = 0;

  //   setInterval(() => {
  //     if (i <= number) {
  //       setBar(`${(i * 5) / 3}%`);
  //       i++;
  //     } else {
  //       clearInterval();
  //     }
  //   }, 16);
  // };

  // const checkSetting2 = () => {
  //   progress();
  //   errorNumberM();
  //   if (check) {
  //     setErrorNum("");
  //     // axios 연동
  //   }
  // };

  // useEffect(() => {
  //   setBar(bar);
  //   // console.log("useEffect", bar);
  // }, [bar]);
  return (
    <>
      <Temporary />
      <Wrapper>
        <BodyDiv>
          <CoverModal1Div modal1={modal1}>
            <ModalDiv>
              <DatesDiv>
                <DTitleDiv>
                  <ModalImgsDiv>
                    <Link to="/beforelogin">
                      <IMGLogo src={imgLogo} alt="IMGLogo" />
                    </Link>

                    <XButton onClick={modalRemove1}>
                      <X src={x} alt="X" />
                    </XButton>
                  </ModalImgsDiv>
                </DTitleDiv>

                <ModalBodyDiv>
                  <TitleP
                    style={{
                      marginBottom: "25px",
                      color: "#000000",
                    }}
                  >
                    D-day 설정하기
                  </TitleP>
                  <NameDiv>
                    <NameInput
                      onChange={change}
                      name="name"
                      value={name}
                      type="text"
                      placeholder="디데이 이름"
                    />
                  </NameDiv>
                  <NameErrorDiv name="errorN">{errorN}</NameErrorDiv>

                  <DateDiv>
                    <DateInput
                      onChange={change}
                      name="date"
                      value={date}
                      type="date"
                      placeholder="비밀번호"
                    />
                  </DateDiv>
                  <DateErrorDiv name="errorD">{errorD}</DateErrorDiv>

                  <CoverSettingDiv>
                    <SettingButton onClick={checkSetting1}>
                      설정하기
                    </SettingButton>
                  </CoverSettingDiv>
                </ModalBodyDiv>
              </DatesDiv>
            </ModalDiv>
          </CoverModal1Div>

          <Left>
            <Day>
              <DDay height="150px" />
              <ChangeDDAy
                onClick={() => {
                  setModal1(true);
                }}
              >
                <img src={DDayPencil} />
              </ChangeDDAy>
            </Day>
            <TimeTable
              bar={bar}
              setBar={setBar}
              setModal2={setModal2}
              modal2={modal2}
              setModal1={setModal1}
            />
          </Left>
          <Middle>
            <Todo />
          </Middle>
          <Right>
            <WiseSaying />
            <Comment />
          </Right>
        </BodyDiv>
      </Wrapper>
    </>
  );
};

export default ViewMain;

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

// styled-components
const CoverModal1Div = styled.div`
  position: absolute;
  display: ${({ modal1 }) => (modal1 ? "block" : "none")};
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
const DatesDiv = styled.div`
  width: 662px;
  height: 484px;
  background: #ffffff;
  border: 1px solid #808080;
  border-radius: 14px;
`;
const DTitleDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: end;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #808080;
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

const TitleP = styled.p`
  margin-top: 48px;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  color: #5b5b5b;
`;

const NameErrorDiv = styled.div`
  ${errorStyle}
`;
const DateErrorDiv = styled.div`
  ${errorStyle}
`;

const NameDiv = styled.div`
  ${divStyle}
`;
const NameInput = styled.input`
  ${inputStyle}

  &::placeholder {
    color: #808080;
  }
  &:focus {
    outline: none;
  }
`;

const DateDiv = styled.div`
  ${divStyle}
`;
const DateInput = styled.input`
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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 80px;
`;
const BodyDiv = styled.div`
  padding-top: 60px;
  width: 1519px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 449px;
  height: 850px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Middle = styled.div`
  height: 850px;
  width: 450px;
  display: flex;
`;
const Right = styled.div`
  height: 850px;
  width: 449px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1560px) {
    display: none;
  }
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const ChangeDDAy = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #5b5b5b;
  border: none;
  position: relative;
  top: -25px;
  left: 424px;

  & > img {
    margin: auto;
    width: 27px;
    margin-top: 1px;
  }
`;
// const TimeTable = styled.div`
//   margin-top: -17px;
//   background-color: red;
//   height: 667px;
// `;
