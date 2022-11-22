import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  Computer,
  FaceBookImg,
  GithubImg,
  Logo,
  MeetingImg,
  TodoImg,
} from "../assets";

const BeforeLogin = () => {
  return (
    <Wrapper>
      <Container1>
        <div>
          <Title>SINABRO,</Title>
          <SubTitle>
            당신이 찾는
            <br />
            스터디 플래너 서비스
          </SubTitle>
          <Link to="/signup">
            <LoginButton>바로가기</LoginButton>
          </Link>
        </div>
        <Img1 src={TodoImg} />
      </Container1>

      <Container2>
        <Explain>
          <Circle />
          <ExplainTitle>
            나만의 웹<br />
            스터디 플래너
          </ExplainTitle>
          <ExplainSub>My own</ExplainSub>
        </Explain>
        <Explain>
          <MiddleCircle />
          <ExplainTitle>
            쉽고 편리한
            <br />
            학습 기록하기
          </ExplainTitle>
          <ExplainSub>Simple</ExplainSub>
        </Explain>
        <Explain>
          <Circle />
          <ExplainTitle>
            깔끔한
            <br />
            UI/UX 제공
          </ExplainTitle>
          <ExplainSub>Neat</ExplainSub>
        </Explain>
      </Container2>

      <Container3>
        <div>
          <Title>
            일정 등록부터
            <br />
            학습시간 관리까지!
          </Title>
          <ExplainSub2>
            D-day와 Time Table 설정을 통해 학습시간을 관리해보세요.
            <br />
            To Do List를 통해 목표를 설정하고 계획해보세요.
          </ExplainSub2>
        </div>
        <Img2 src={Computer} />
      </Container3>

      <Container4>
        <Title3>
          서로의 스터디 플래너를 공유하고
          <br />
          실시간으로 소통해보세요
        </Title3>
        <Img3 src={MeetingImg} />
      </Container4>

      <Footer>
        <Footerup>
          <div>
            <LogoImg src={Logo} />
            <NameWrapper>
              <EachName>
                <Major>Front-end</Major>
                <Name
                  onClick={() => window.open("https://github.com/applely25")}
                >
                  김규하
                </Name>
                <Name onClick={() => window.open("https://github.com/kjh0512")}>
                  김지훈
                </Name>
                <Name onClick={() => window.open("https://github.com/SEOg-u")}>
                  서유정
                </Name>
              </EachName>
              <EachName>
                <Major>Back-end</Major>
                <Name
                  onClick={() =>
                    window.open("https://github.com/soyeonkim0227")
                  }
                >
                  김소연
                </Name>
                <Name onClick={() => window.open("https://github.com/yusooo")}>
                  유나현
                </Name>
              </EachName>
              <EachName>
                <Major>Designer</Major>
                <Name
                  onClick={() =>
                    window.open("https://github.com/waterbeen0530")
                  }
                >
                  임수빈
                </Name>
              </EachName>
            </NameWrapper>
          </div>
          <div>
            <LinkWrapper>
              <LinkLogo
                onClick={() =>
                  window.open("https://www.facebook.com/DSMSinabro")
                }
                src={FaceBookImg}
              />
              <LinkLogo
                onClick={() => window.open("https://github.com/Sinnabro")}
                src={GithubImg}
              />
            </LinkWrapper>
          </div>
        </Footerup>
        <Line />
      </Footer>
    </Wrapper>
  );
};

export default BeforeLogin;

const mainColor = "#4263EB";
const subCollor = "#192975";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1512px;
  height: 410px;
  margin: 0px auto;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0px;
  color: ${subCollor};
`;
const SubTitle = styled(Title)`
  font-weight: normal;
`;
const LoginButton = styled.button`
  width: 160px;
  height: 70px;
  font-size: 26px;
  background-color: ${mainColor};
  border-radius: 40px;
  border: 0px;
  color: white;
`;
const Img1 = styled.img`
  width: 738px;
  height: 392px;
`;

const Container2 = styled(Container1)`
  height: 300px;
  margin: 323px auto;
`;
const Explain = styled.div`
  width: 476px;
  height: 300px;
  background-color: white;
  border-radius: 14px;
  text-align: center;
  overflow: hidden;
  user-select: none;
`;
const ExplainTitle = styled.h2`
  font-size: 38px;
  font-weight: bold;
  color: ${subCollor};
  margin: 0;
  margin-top: -60px;
`;
const ExplainSub = styled.p`
  font-size: 28px;
  color: #636b95;
  margin: 0;
`;
const Circle = styled.div`
  background-color: ${mainColor};
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  left: 380px;
  top: -35px;
`;
const MiddleCircle = styled(Circle)`
  top: 200px;
`;

const Container3 = styled(Container1)`
  height: 505.57px;
  margin-bottom: 336px;
`;
const Img2 = styled.img`
  width: 596.91px;
  height: 505.57px;
`;
const ExplainSub2 = styled(ExplainSub)`
  color: ${subCollor};
  padding-left: 10px;
`;

const Container4 = styled(Container1)`
  height: 923px;
  flex-direction: column;
  margin-bottom: 266px;
`;
const Img3 = styled.img`
  width: 1512px;
  height: m 701px;
`;
const Title3 = styled.h1`
  font-size: 60px;
  color: ${subCollor};
  text-align: center;
`;

const Footer = styled.div`
  height: 560px;
  background-color: ${mainColor};
  display: flex;
  flex-direction: column;
  padding: 99px 224px;
  color: white;
`;
const Footerup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const LogoImg = styled.img`
  width: 224px;
  height: 46px;
`;

const NameWrapper = styled.div`
  height: 184px;
  width: 693px;
  margin: 71px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EachName = styled.div`
  display: flex;
  text-align: center;
`;
const Major = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 30px;
  margin-right: 105px;
  font-weight: bold;
  width: 150px;
  text-align: start;
  margin-bottom: 62px;
`;

const Name = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 26px;
  margin-right: 50px;
  cursor: pointer;
`;
const LinkWrapper = styled.div`
  display: flex;
  width: 200px;
`;
const LinkLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 30px;
  margin-top: 290px;
  cursor: pointer;
`;
const Line = styled.hr`
  width: 1512px;
  border: thin solid white;
  margin-top: 67px;
`;
