import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import { imgLogo, x } from "../assets";

const FindPw = () => {
  // 변수 선언
  let check = true;
  let numberComfirm = 0;
  let numberSend = 0;

  // axios POST

  // modal
  const [modal, setModal] = useState(false);

  // modal remove 함수
  const modalRemove = () => {
    setModal(false);
  };

  // email 전송하는 함수
  const sendEmail = () => {
    errorEmailConfirmM();
  };

  // error message 변수
  const [errorE, setErrorE] = useState(""); //   email error message
  const [errorEC, setErrorEC] = useState(""); // emailConfirm error message
  const [errorP, setErrorP] = useState(""); //   password error message
  const [errorCP, setErrorCP] = useState(""); // checkPassword error message

  // input value 변수
  const [inputs, setInputs] = useState({
    pw: "",
    checkPw: "",
    email: "",
    emailConfirm: "",
  });
  const { pw, checkPw, email, emailConfirm } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 인증번호 버튼 체크 함수
  const confirm = () => {
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
    // 이미 가입되어 있는 이메일 일 때
    else {
      setErrorE("");
      setModal(true);
    }
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

    // 인증번호 버튼 안 눌렀을 때
    else if (numberSend === 0) {
      setErrorE("인증번호 버튼을 눌러주세요.");
      check = false;
    } else {
      setErrorE("");
    }
  };

  // 2. email confirm
  const errorEmailConfirmM = () => {
    // 인증번호 입력 안 했을 때
    if (emailConfirm === "") {
      setErrorEC("인증번호를 입력해 주세요.");
      check = false;
    }
    // 인증번호 틀렸을 때
    else {
      setErrorEC("");
      setModal(false);
      numberSend += 1;
    }
  };

  // 3. password & check password
  const errorPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (pw === "" && checkPw === "") {
      setErrorP("비밀번호를 입력해 주세요.");
      setErrorCP("");
      check = false;
    }
    // 비밀번호와 비밀번호 확인이 다를 때
    else if (pw !== checkPw) {
      setErrorCP("비밀번호가 일치하지 않습니다.");
      setErrorP("");
      check = false;
    } else {
      setErrorP("");
      setErrorCP("");
    }
  };

  // 비밀번호 수정 체크 함수
  const checkRevisionPw = () => {
    errorEmailM();
    errorPwM();

    if (check) {
      setErrorE("");
      setErrorEC("");
      setErrorP("");
      setErrorCP("");

      // axios 연동
    }
  };

  return (
    <>
      <Header />

      <Div>
        <CoverModalDiv modal={modal}>
          <ModalDiv>
            <EmailConfirmDiv>
              <ECTitleDiv>
                <ModalImgsDiv>
                  <Link to="/beforelogin">
                    <IMGLogo src={imgLogo} alt="IMGLogo" />
                  </Link>

                  <XButton onClick={modalRemove}>
                    <X src={x} alt="X" />
                  </XButton>
                </ModalImgsDiv>
              </ECTitleDiv>

              <ModalBodyDiv>
                <TitleP
                  style={{
                    marginBottom: "25px",
                    color: "#000000",
                  }}
                >
                  이메일 인증하기
                </TitleP>
                <EmailConfirmInput
                  onChange={change}
                  name="emailConfirm"
                  value={emailConfirm}
                  type="text"
                  placeholder="인증번호 6자리를 입력해 주세요."
                />
                <EmailConfirmErrorDiv name="errorEC">
                  {errorEC}
                </EmailConfirmErrorDiv>

                <CoverSendDiv>
                  <SendButton onClick={sendEmail}>전송하기</SendButton>
                </CoverSendDiv>
              </ModalBodyDiv>
            </EmailConfirmDiv>
          </ModalDiv>
        </CoverModalDiv>

        <BoxDiv>
          <TitleLink to="beforelogin">
            <IMGLogo src={imgLogo} alt="IMGLogo" />
          </TitleLink>

          <FindPwP>비밀번호 재설정</FindPwP>

          <BodyDiv>
            <EmailDiv>
              <InputTitleDiv>
                <TitleP>이메일</TitleP>
                <ConfirmButton onClick={confirm}>인증하기</ConfirmButton>
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
                <TitleP>새 비밀번호</TitleP>
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

            <CheckPwDiv>
              <InputTitleDiv>
                <TitleP>비밀번호 확인</TitleP>
              </InputTitleDiv>
              <CheckPwInput
                onChange={change}
                name="checkPw"
                value={checkPw}
                type="password"
                placeholder="비밀번호 확인"
              />
              <CheckPwErrorDiv name="errorCP">{errorCP}</CheckPwErrorDiv>
            </CheckPwDiv>

            <RevisionPwButton onClick={checkRevisionPw}>
              비밀번호 수정
            </RevisionPwButton>
          </BodyDiv>
        </BoxDiv>
      </Div>
    </>
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
  marginTop: "24px",
  width: "100%",
  height: "129px",
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

const buttonStyle = {
  marginLeft: "11px",
  width: "70px",
  height: "26px",
  fontSize: "12px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 700,
  color: "#ffffff",
  backgroundColor: "#748FFC",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

const hoverButtonStyle = {
  color: "#748FFC",
  backgroundColor: "#ffffff",
  border: "2px solid #748FFC",
};

// styled-components
const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const CoverModalDiv = styled.div`
  position: absolute;
  display: ${({ modal }) => (modal ? "block" : "none")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;
const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;
const EmailConfirmDiv = styled.div`
  width: 662px;
  height: 430px;
  background: #ffffff;
  border: 1px solid #808080;
  border-radius: 14px;
`;
const ECTitleDiv = styled.div`
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
  margin-top: 48px;
  margin-left: 84px;
  width: 494px;
  height: 258px;
`;
const CoverSendDiv = styled.div`
  margin-top: 59px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SendButton = styled.button`
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

const BoxDiv = styled.div`
  margin-top: 210px;
  width: 662px;
  height: 790px;
  background-color: #ffffff;
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
const FindPwP = styled.p`
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
  margin: 16px 0 0 84px;
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

const EmailErrorDiv = styled.div`
  ${errorStyle}
`;
const EmailConfirmErrorDiv = styled.div`
  ${errorStyle}
`;
const PwErrorDiv = styled.div`
  ${errorStyle}
`;
const CheckPwErrorDiv = styled.div`
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
const ConfirmButton = styled.button`
  ${buttonStyle}
  &:hover {
    ${hoverButtonStyle}
  }
`;

const EmailConfirmInput = styled.input`
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
`;

const CheckPwDiv = styled.div`
  ${divStyle}
`;
const CheckPwInput = styled.input`
  ${inputStyle}
`;

const RevisionPwButton = styled.button`
  margin-top: 30px;
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

export default FindPw;
