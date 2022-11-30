import WiseSayingData from "../../assets/doc/WiseSaying.json";
import React, { useState } from "react";
import styled from "styled-components";
import { NoHeartImg, UserImg } from "../../assets";
const LikeButton = () => {
  const [likes, setLikes] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      <button
        className={`like-button ${isClicked && "liked"}`}
        onClick={handleClick}
      >
        <span className="likes-counter">Like | {`${likes}`}</span>
      </button>
    </>
  );
};
const pop = Math.floor(Math.random() * (19 - 0) + 0);
const WiseSayings = () => {
  let saying = WiseSayingData.WiseSaying[pop];
  saying = saying.split("-");
  return (
    <FontSize>
      {saying[0]} <br />-{saying[1]}-
    </FontSize>
  );
};
const WiseSaying = () => {
  return (
    <WiseSayingBlock>
      <div>
        <Userss>
          <User src={UserImg} />
          <UserName>신나브로화이팅</UserName>
          <Likess>
            <Likeing src={NoHeartImg} /> <Soo>100</Soo>
          </Likess>
        </Userss>
        <hr />
        <div className="WS">
          <WiseSayings />
        </div>
      </div>
    </WiseSayingBlock>
  );
};

const WiseSayingBlock = styled.div`
  width: 449px;
  height: 241px;
  padding: 1% 1% 1%;
  border: 1px solid #808080;
  position: relative;
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  border-radius: 16px;
  justify-content: space-between;
  hr {
    width: 90%;
    justify-content: space-between;
  }
  .WS {
    padding: 5% 5% 5%;
    justify-content: center;
    align-items: center;
  }
`;
const User = styled.img`
  width: 50px;
  height: 50px;
`;
const Userss = styled.div`
  display: flex;
  padding: 32px 31px 31px;
`;
const UserName = styled.div`
  padding: 8px 10px 10px;
  font-size: 24px;
  font-weight: bold;
`;

const Likess = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 80px;
`;
const Likeing = styled.img`
  width: 24px;
  height: 22px;
  display: flex;
`;
const Soo = styled.div`
  width: 37px;
  height: 24px;
  color: #f03e3e;
  font-weight: bold;
`;
const FontSize = styled.div`
  font-weight: bold;
`;
export default WiseSaying;
