import styled from "styled-components";
import { Link } from "react-router-dom";

import { imgLogo } from "../assets";

const BeforeHeader = () => {
  return (
    <Div>
      <CoverIMGLogoLink to="/">
        <IMGLogo src={imgLogo} alt="IMGLogo" />
      </CoverIMGLogoLink>

      <TextsDiv>
        <LnSDiv>
          <Link to="/login">
            <LogInButton>로그인</LogInButton>
          </Link>

          <Link to="/signup">
            <SignUpButton>회원가입</SignUpButton>
          </Link>
        </LnSDiv>
      </TextsDiv>
    </Div>
  );
};

// css variable
const buttonStyle = {
  width: "110px",
  height: "35px",
  fontSize: "14px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 700,
  borderRadius: "60px",
  borderWidth: "2.35px",
  borderColor: "#4263EB",
  borderStyle: "solid",
};

// styled-components
const Div = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-width: 0 0 1px 0;
  border-color: #808080;
  border-style: solid;
`;
const CoverIMGLogoLink = styled(Link)`
  margin-left: 8%;
  width: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IMGLogo = styled.img`
  width: 125px;
`;

const TextsDiv = styled.div`
  margin-right: 8%;
  display: flex;
  justify-content: center;
`;
const LnSDiv = styled.div`
  width: 230px;
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

export default BeforeHeader;
