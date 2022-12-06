import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { imgLogo } from "../assets";

// 쿠키 선언
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
        setClock("0" + time.getHours() + ":0" + time.getMinutes());
      } else if (time.getHours() < 10 && time.getMinutes() > 10) {
        setClock("0" + time.getHours() + ":" + time.getMinutes());
      } else if (time.getHours() > 10 && time.getMinutes() < 10) {
        setClock(time.getHours() + ":0" + time.getMinutes());
      } else if (time.getHours() > 10 && time.getMinutes() > 10) {
        setClock(time.getHours() + ":" + time.getMinutes());
      } else {
        console.log("ClockError (components/Header.js/76)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Container1 cookie={cookie}>
          <Link to="beforelogin">
            <Img1 src={imgLogo} alt="IMGLogo" />
          </Link>

          <CookieTrue cookie={cookie}>
            <Texts>
              <Main to="/main">메인 페이지</Main>
              <Student to="/studentwhole">학생전체보기</Student>
              <StudyPlanner to="/studyplanner">스터디플래너</StudyPlanner>
              <MyPage to="/mypage">마이페이지</MyPage>
            </Texts>
          </CookieTrue>
        </Container1>

        <CookieFalse cookie={cookie} style={{ marginRight: "8%" }}>
          <Container2>
            <Link to="/login">
              <LogInBt>로그인</LogInBt>
            </Link>

            <Link to="signup">
              <SignUpBt>회원가입</SignUpBt>
            </Link>
          </Container2>
        </CookieFalse>

        <CookieTrue cookie={cookie} style={{ marginRight: "8%" }}>
          <Time>{`${date} I ${clock}`}</Time>
        </CookieTrue>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Header;

// css variable
const linkStyle = {
  fontSize: "22px",
  color: "#000000",
  fontWeight: 700,
  textDecoration: "none",
};

const btStyle = {
  width: "150px",
  height: "50px",
  fontSize: "20px",
  fontWeight: 700,
  border: "2px solid #4263eb",
  borderRadius: "30px",
};

// styled-components
const CookieTrue = styled.div`
  display: ${({ cookie }) => (cookie ? "block" : "none")};
`;
const CookieFalse = styled.div`
  display: ${({ cookie }) => (cookie ? "none" : "block")};
`;

const Wrapper = styled.div`
  z-index: 10000;
  position: fixed;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #808080;
`;
const Container1 = styled.div`
  margin-left: 8%;
  width: ${({ cookie }) => (cookie ? "882px" : "224px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Img1 = styled.img`
  width: 224px;
`;
const Texts = styled.div`
  width: 598px;
  display: flex;
  justify-content: space-between;
`;

const Main = styled(Link)`
  ${linkStyle}
`;
const Student = styled(Link)`
  ${linkStyle}
`;
const StudyPlanner = styled(Link)`
  ${linkStyle}
`;
const MyPage = styled(Link)`
  ${linkStyle}
`;

const Container2 = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogInBt = styled.button`
  color: #ffffff;
  background-color: #4263eb;
  ${btStyle}
`;
const SignUpBt = styled.button`
  color: #4263eb;
  background-color: #ffffff;
  ${btStyle}
`;

const Time = styled.div`
  width: 283px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #4263eb;
  font-weight: 700;
  background-color: #ffffff;
  border: 2px solid #4263eb;
  border-radius: 30px;
`;
