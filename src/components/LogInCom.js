import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import { imgLogo } from "../assets";

const LogIn = () => {
  // 변수 선언
  let check = true;

  // axios POST

  // error message 변수
  const [errorE, setErrorE] = useState(""); //   email error message
  const [errorP, setErrorP] = useState(""); //   password error message

  // input value 변수
  const [inputs, setInputs] = useState({
    email: "",
    pw: "",
  });
  const { email, pw } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 이메일 형식 체크 함수
  const testEmail = () => {
    var reg =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!reg.test(email)) {
      return false;
    }

    return true;
  };

  // error message 보내주는 함수들
  // 1. email
  const errorEmailM = () => {
    // 이메일 입력 안 했을 때
    if (email === "") {
      setErrorE("이메일을 입력해 주세요.");
      check = false;
    }
    // 이메일 형식 틀렸을 때
    else if (!testEmail()) {
      setErrorE("잘못된 이메일 형식입니다.");
      check = false;
    }
    // 존재하지 않는 이메일 일 때
    else {
      setErrorE("");
    }
  };
  // 2. password
  const errorPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (pw === "") {
      setErrorP("비밀번호를 입력해 주세요.");
      check = false;
    }
    // 비밀번호 틀릴 때
    else {
      setErrorP("");
    }
  };

  // 로그인 체크 함수
  const checkLogIn = () => {
    errorEmailM();
    errorPwM();

    if (check) {
      setErrorE("");
      setErrorP("");

      // axios 연동
    }
  };

  return (
    <Div>
      <BoxDiv>
        <TitleLink to="/beforelogin">
          <IMGLogo src={imgLogo} alt="IMGLogo" />
        </TitleLink>

        <LogInP>로그인</LogInP>

        <BodyDiv>
          <EmailDiv>
            <InputTitleDiv>
              <TitleP>이메일</TitleP>
            </InputTitleDiv>
            <EmailInput
              onChange={change}
              name="email"
              value={email}
              type="email"
              placeholder="이메일"
            />
            <EmailErrorDiv name="errorE">{errorE}</EmailErrorDiv>
          </EmailDiv>

          <PwDiv>
            <InputTitleDiv>
              <TitleP>비밀번호</TitleP>
            </InputTitleDiv>
            <PwInput
              onChange={change}
              name="pw"
              value={pw}
              type="password"
              placeholder="비밀번호"
            />
            <PwErrorDiv name="errorP">{errorP}</PwErrorDiv>
          </PwDiv>

          <LogInButton onClick={checkLogIn}>로그인</LogInButton>

          <CoverGoFindPwDiv>
            <GoFindPwLink to="/findpw">비밀번호를 잊어버리셨나요?</GoFindPwLink>
          </CoverGoFindPwDiv>
        </BodyDiv>
      </BoxDiv>
    </Div>
  );
};

// css variable
const errorStyle = {
  marginTop: "1.2px",
  fontSize: "11.5px",
  height: "20px",
  color: "red",
  fontWeight: 700,
};

const divStyle = {
  marginTop: "38px",
  width: "100%",
  height: "114px",
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
const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const BoxDiv = styled.div`
  width: 662px;
  height: 700px;
  background: #ffffff;
  border: 1px solid #808080;
  border-radius: 14px;
`;
const TitleLink = styled(Link)`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IMGLogo = styled.img`
  width: 131px;
`;
const LogInP = styled.p`
  margin-top: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 44px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
`;

const BodyDiv = styled.div`
  margin: 13px 0 0 84px;
  width: 480px;
`;

const InputTitleDiv = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: start;
`;
const TitleP = styled.p`
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  color: #5b5b5b;
`;

const EmailErrorDiv = styled.div`
  ${errorStyle}
`;
const PwErrorDiv = styled.div`
  ${errorStyle}
`;

const EmailDiv = styled.div`
  ${divStyle}
`;
const EmailInput = styled.input`
  ${inputStyle}

  &::placeholder {
    color: #808080;
  }
  &:focus {
    outline: none;
  }
`;

const PwDiv = styled.div`
  ${divStyle}
`;
const PwInput = styled.input`
  ${inputStyle}

  &::placeholder {
    color: #808080;
  }
  &:focus {
    outline: none;
  }
`;

const LogInButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 70px;
  font-size: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  border: none;
  background-color: #4263eb;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const CoverGoFindPwDiv = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GoFindPwLink = styled(Link)`
  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  color: #5b5b5b;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default LogIn;
