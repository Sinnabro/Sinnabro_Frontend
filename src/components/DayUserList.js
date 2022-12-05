import styled from "styled-components";
import { UserProfileList, UserListHeart } from "../assets";

const DayUserList = ({ data }) => {
  return (
    <Wrapper>
      <Title>
        <p>DSM 스터디플래너</p>
        <p>2022년 11월 29일</p>
      </Title>
      <Content>
        {data.map((value) => {
          return (
            <UserWrapper key={value.id}>
              <User>
                <UserImg src={UserProfileList} />
                <UserName>{value.name}</UserName>
                <LikeWrapper>
                  <LikeHeart src={UserListHeart} />
                  <LikeNumber>{value.like}</LikeNumber>
                </LikeWrapper>
              </User>
              <Shadow />
            </UserWrapper>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default DayUserList;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  color: #808080;
  margin-top: 80px;
  & > p {
    margin: 0;
  }
  & > p:first-child {
    font-size: 32px;
    font-weight: bold;
    color: black;
    margin-bottom: 6px;
  }
`;

const Content = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 76px;
  height: 500px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 70px;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #748ffc;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

const UserWrapper = styled.div`
  width: 300px;
  height: 446px;
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  cursor: pointer;
  width: 100%;
  height: 365px;
  background: linear-gradient(to bottom right, #4263eb 0%, #748ffc 61.46%);
  border-radius: 20px;
  padding: 40px 80px;
  box-sizing: border-box;
`;
const UserImg = styled.img`
  width: 140px;
`;
const UserName = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0px;
  margin-top: 20px;
`;
const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 23px;
`;
const LikeHeart = styled.img`
  width: 24px;
  height: 22px;
  margin-right: 8px;
`;
const LikeNumber = styled.p`
  font-size: 20px;
  color: white;
  line-height: 20px;
  text-align: center;
  margin: 0;
`;
const Shadow = styled.div`
  width: 260px;
  height: 19px;
  background: rgba(128, 128, 128, 0.2);
  border-radius: 50%;
  margin: 52px auto 0px auto;
`;
