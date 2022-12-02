import styled from "styled-components";
import { UserImg, notGood, Good } from "../../assets/index";
import WiseSayingData from "../../assets/docs/WiseSaying.json";
import { useState } from "react";

const pop = Math.floor(Math.random() * (19 - 0) + 0);
let saying = WiseSayingData.WiseSaying[pop];
saying = saying.split("-");

const WiseSaying = () => {
  const [like, setLike] = useState(false);

  const toggleLike = async (e) => {
    setLike(!like);
  };

  return (
    <Wrapper>
      <TopWrapper>
        <UserWrapper>
          <User src={UserImg} />
          <UserName>신나브로화이팅화이팅</UserName>
          <Like>
            <LineHeard src={like ? Good : notGood} onClick={toggleLike} />
            <p>1231</p>
          </Like>
        </UserWrapper>
      </TopWrapper>
      <Wise>
        <p>{saying[0]}</p>
        <br />
        <p>- {saying[1]} -</p>
      </Wise>
    </Wrapper>
  );
};

export default WiseSaying;

const Wrapper = styled.div`
  width: 100%;
  height: 241px;
  border: 1px solid #808080;
  border-radius: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  width: 400px;
  height: 110px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;
const User = styled.img`
  width: 50px;
  height: 50px;
`;

const UserWrapper = styled.div`
  display: flex;
`;
const UserName = styled.p`
  text-align: start;
  line-height: 50px;
  margin-left: 5px;
  width: 240px;
  font-weight: bold;
  font-size: 24px;
`;

const Wise = styled.p`
  width: 385px;
  height: 74px;
  line-height: 37px;
  margin-top: 10px;
  font-size: 18px;
  & > p:last-child {
    margin-top: -25px;
    line-height: 20px;
    text-align: center;
  }
`;

const Like = styled.div`
  margin-left: 10px;
  height: 50px;
  width: 90px;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: red;
  &>p{
    width: 54px;
  }
`;

const LineHeard = styled.img`
  width: 26px;
  height: 24px;
  margin-right: 10px;
`;
