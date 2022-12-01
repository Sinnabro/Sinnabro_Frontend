import { useState } from "react";
import { HeartImg, NoHeartImg } from "../../assets";
import styled from "styled-components";

const LikeButton = () => {
  const [likeState, setLikeState] = useState(false);
  const [likes, setLikes] = useState("0");
  const [isClicked, setIsClicked] = useState(false);

  const HeartClick = () => {
    setLikeState((like) => !like);
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <>
      <LikeButtons onClick={HeartClick}>
        <Likes
          like={likeState}
          src={likeState ? HeartImg : NoHeartImg}
          alt="like post"
        />
        {`${likes}`}
      </LikeButtons>
    </>
  );
};

const LikeButtons = styled.button`
  background-color: white;
  color: #f03e3e;
  font-weight: bold;
  font-size: 18px;
  border-color:#ffffff;
  img {
    width: 24px;
    height: 22px;
  }
`;
const Likes = styled.img`
  @keyframes heartClick {
    0% {
      transform: scale(1.2);
    }
  }
  animation: ${({ like }) => like && "heartClick 0.5s"};
`;
export default LikeButton;
