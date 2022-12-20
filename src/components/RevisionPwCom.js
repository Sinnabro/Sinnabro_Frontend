import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import { imgLogo } from "../assets";
import axios from "axios";
import { useCookies } from "react-cookie";

const baseUrl = "http://172.20.10.2:8080";

const RevisionPwCom = () => {
  const [cookies, setCookie] = useCookies(["accessToken"]); // 쿠키 훅

  // 변수 선언
  let check = true;

  // error message 변수
  const [errorP, setErrorP] = useState(""); //     password error message
  const [errorNP, setErrorNP] = useState(""); //   newPassword error message
  const [errorCNP, setErrorCNP] = useState(""); // checkNewPassword error message

  // input value 변수
  const [inputs, setInputs] = useState({
    pw: "",
    newPw: "",
    checkNewPw: "",
  });
  const { pw, newPw, checkNewPw } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // error message 보내주는 함수들
  const errorPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (pw === "") {
      setErrorP("현재 비밀번호를 입력해 주세요.");
      check = false;
    }
    // 비밀번호 틀릴 때
    else {
      setErrorP("");
    }
  };

  // 2. new password & check new password
  const errorNewPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (newPw === "" && checkNewPw === "") {
      setErrorNP("새로운 비밀번호를 입력해 주세요.");
      setErrorCNP("");
      check = false;
    }
    // 비밀번호와 비밀번호 확인이 다를 때
    else if (newPw !== checkNewPw) {
      setErrorCNP("비밀번호가 일치하지 않습니다.");
      setErrorNP("");
      check = false;
    } else {
      setErrorNP("");
      setErrorCNP("");
    }
  };

  // 비밀번호 수정 체크 함수
  const checkRevision = () => {
    const token = cookies.accessToken;

    errorPwM();
    errorNewPwM();

    if (check) {
      setErrorP("");
      setErrorNP("");
      setErrorCNP("");

      // axios 연동
      axios
        .patch({
          url: `${baseUrl}/user/password`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            password: pw,
            new_password: newPw,
          },
        })
        .then((response) => {
          check = true;
          setErrorCNP("비밀번호가 수정되었습니다.");
        })
        .catch((error) => {
          if (error.response.status === 400) {
            if ((error.response.data.message = "잘못된 요청입니다.")) {
              alert("fail");
            } else if (
              (error.response.data.message =
                "현재 비밀번호가 올바르지 않습니다.")
            ) {
              setErrorP("현재 비밀번호가 올바르지 않습니다.");
            } else if (
              (error.response.data.message =
                "현재 비밀번호와 같지 않도록 수정하세요.")
            ) {
              setErrorNP("현재 비밀번호와 같지 않도록 수정하세요.");
            }
          } else if (error.response.status === 401) {
            alert(`로그인이 필요합니다. (${error.response.status})`);
          } else {
            alert(`오류 ${error.response.status}`);
          }
        });
    }
  };

  return (
    <CoverDiv>
      <Div>
        <BoxDiv>
          <TitleLink to="/beforelogin">
            <IMGLogo src={imgLogo} alt="IMGLogo" />
          </TitleLink>

          <RevisionPwP>비밀번호 재설정</RevisionPwP>

          <BodyDiv>
            <PwDiv>
              <InputTitleDiv>
                <TitleP>기존 비밀번호</TitleP>
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
            <NewPwDiv>
              <InputTitleDiv>
                <TitleP>새 비밀번호</TitleP>
              </InputTitleDiv>
              <NewPwInput
                onChange={change}
                name="newPw"
                value={newPw}
                type="password"
                placeholder="새로운 비밀번호"
              />
              <NewPwErrorDiv name="errorCP">{errorNP}</NewPwErrorDiv>
            </NewPwDiv>
            <CheckNewPwDiv>
              <InputTitleDiv>
                <TitleP>비밀번호 확인</TitleP>
              </InputTitleDiv>
              <CheckNewPwInput
                onChange={change}
                name="checkNewPw"
                value={checkNewPw}
                type="password"
                placeholder="새로운 비밀번호 확인"
              />
              <CheckNewPwErrorDiv name="errorCNP">
                {errorCNP}
              </CheckNewPwErrorDiv>
            </CheckNewPwDiv>
            <RevisionButton onClick={checkRevision}>수정하기</RevisionButton>
          </BodyDiv>
        </BoxDiv>
      </Div>
    </CoverDiv>
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
const CoverDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  margin-top: 180px;
`;
const BoxDiv = styled.div`
  width: 662px;
  height: 790px;
  background: #ffffff;
  border: 1px solid #808080;
  border-radius: 14px;
`;
const TitleLink = styled(Link)`
  margin-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IMGLogo = styled.img`
  width: 131px;
`;
const RevisionPwP = styled.p`
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
  margin: 17px 0 0 84px;
  width: 494px;
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

const PwErrorDiv = styled.div`
  ${errorStyle}
`;
const NewPwErrorDiv = styled.div`
  ${errorStyle}
`;
const CheckNewPwErrorDiv = styled.div`
  ${errorStyle}
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

const NewPwDiv = styled.div`
  ${divStyle}
`;
const NewPwInput = styled.input`
  ${inputStyle}

  &::placeholder {
    color: #808080;
  }
  &:focus {
    outline: none;
  }
`;

const CheckNewPwDiv = styled.div`
  ${divStyle}
`;
const CheckNewPwInput = styled.input`
  ${inputStyle}

  &::placeholder {
    color: #808080;
  }
  &:focus {
    outline: none;
  }
`;

const RevisionButton = styled.button`
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

export default RevisionPwCom;
