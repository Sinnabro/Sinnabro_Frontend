import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { imgLogo } from "../assets";

// 전역 변수
let cookie = false; // true : 로그인 후, false : 로그인 전

const Header = () => {
  // 날짜
  const [date, setDate] = useState("0000.00.00");

  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getMonth() + 1 < 10 && time.getDate() < 10) {
        setDate(
          time.getFullYear() +
            ".0" +
            (time.getMonth() + 1) +
            ".0" +
            time.getDate()
        );
      } else if (time.getMonth() + 1 < 9 && time.getDate() > 10) {
        setDate(
          time.getFullYear() +
            ".0" +
            (time.getMonth() + 1) +
            "." +
            time.getDate()
        );
      } else if (time.getMonth() + 1 > 9 && time.getDate() < 10) {
        setDate(
          time.getFullYear() +
            "." +
            (time.getMonth() + 1) +
            ".0" +
            time.getDate()
        );
      } else if (time.getMonth() + 1 > 9 && time.getDate() > 10) {
        setDate(
          time.getFullYear() +
            "." +
            (time.getMonth() + 1) +
            "." +
            time.getDate()
        );
      } else {
        console.log("DateError (components/Header.js/51)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  // 시간
  const [clock, setClock] = useState("00:00");

  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getHours() < 10 && time.getMinutes() < 10) {
        setClock("0" + time.getHours() + " : 0" + time.getMinutes());
      } else if (time.getHours() < 10 && time.getMinutes() > 10) {
        setClock("0" + time.getHours() + " : " + time.getMinutes());
      } else if (time.getHours() > 10 && time.getMinutes() < 10) {
        setClock(time.getHours() + " : 0" + time.getMinutes());
      } else if (time.getHours() > 10 && time.getMinutes() > 10) {
        setClock(time.getHours() + " : " + time.getMinutes());
      } else {
        console.log("ClockError (components/Header.js/76)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <Div>
      <LogonTextDiv cookie={cookie}>
        <CoverIMGLogoLink to="/">
          <IMGLogo src={imgLogo} alt="IMGLogo" />
        </CoverIMGLogoLink>
        <CoverTextsDiv cookie={cookie}>
          <TextsDiv>
            <MainLink to="/main">메인페이지</MainLink>
            <WholeLink to="/studentwhole">학생전체보기</WholeLink>
            <StudyLink to="/studyplanner">스터디플래너</StudyLink>
            <MyPageLink to="/mypage">마이페이지</MyPageLink>
          </TextsDiv>
        </CoverTextsDiv>
      </LogonTextDiv>

      <CoverLnSDiv cookie={cookie}>
        <LnSDiv>
          <Link to="/login">
            <LogInButton>로그인</LogInButton>
          </Link>

          <Link to="/signup">
            <SignUpButton>회원가입</SignUpButton>
          </Link>
        </LnSDiv>
      </CoverLnSDiv>

      <CoverTimeDiv cookie={cookie}>
        <TimeDiv>{`${date} | ${clock}`}</TimeDiv>
      </CoverTimeDiv>
    </Div>
  );
};

// css variable
const buttonStyle = {
  width: "150px",
  height: "50px",
  fontSize: "20px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 700,
  borderRadius: "30px",
  borderWidth: "2px",
  borderColor: "#4263EB",
  borderStyle: "solid",
};

const linkStyle = {
  textDecoration: "none",
  color: "#000000",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "22px",
};

// styled-components
const Div = styled.div`
  text-decoration: none;
  position: fixed;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-width: 0 0 1px 0;
  border-color: #808080;
  border-style: solid;
`;
const LogonTextDiv = styled.div`
  margin-left: 8%;
  width: ${({ cookie }) => (cookie ? "882px" : "224px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CoverIMGLogoLink = styled(Link)`
  width: 224px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IMGLogo = styled.img`
  width: 224px;
`;

// before login
const CoverLnSDiv = styled.div`
  margin-right: 8%;
  display: ${({ cookie }) => (cookie ? "none" : "block")};
`;
const LnSDiv = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogInButton = styled.button`
  color: #ffffff;
  background-color: #4263eb;
  ${buttonStyle}
`;
const SignUpButton = styled.button`
  color: #4263eb;
  background-color: #ffffff;
  ${buttonStyle}
`;

// after login
const CoverTextsDiv = styled.div`
  display: ${({ cookie }) => (cookie ? "block" : "none")};
`;

const TextsDiv = styled.div`
  width: 598px;
  display: flex;
  justify-content: space-between;
`;

const MainLink = styled(Link)`
  ${linkStyle}
`;
const WholeLink = styled(Link)`
  ${linkStyle}
`;
const StudyLink = styled(Link)`
  ${linkStyle}
`;
const MyPageLink = styled(Link)`
  ${linkStyle}
`;

const CoverTimeDiv = styled.div`
  margin-right: 8%;
  display: ${({ cookie }) => (cookie ? "block" : "none")};
`;
const TimeDiv = styled.div`
  width: 283px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4263eb;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  background: #ffffff;
  border-width: 2px;
  border-color: #4263eb;
  border-style: solid;
  border-radius: 30px;
`;

export default Header;
