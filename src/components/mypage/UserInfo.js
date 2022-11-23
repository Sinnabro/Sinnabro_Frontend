import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserImg } from "../../assets";

const UserInfo = ({ data }) => {
  return (
    <UserWrapper>
      <Title>회원정보</Title>

      <SubWrapper>
        <UpWrapper>
          <UserDiv>
            <User src={UserImg} />
            <LogOutBtn>로그아웃</LogOutBtn>
          </UserDiv>
          <UserInfoWrapper>
            <div>
              <UserTitle>닉네임</UserTitle>
              <UserBox>{data.name}</UserBox>
            </div>
            <div>
              <UserTitle>이메일</UserTitle>
              <UserBox>{data.email}</UserBox>
            </div>
          </UserInfoWrapper>
        </UpWrapper>
        <ChangePw to="/">
          <ChangeBtn>비밀번호변경</ChangeBtn>
        </ChangePw>
      </SubWrapper>
    </UserWrapper>
  );
};

export default UserInfo;
const UserWrapper = styled.div`
  width: 826px;
  margin-top: 84px;
  padding-bottom: 43px;
  border-bottom: 1px solid #808080;
`;
const UpWrapper = styled.div`
  display: flex;
`;
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px;
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0px;
`;
const UserDiv = styled.div`
  display: flex;
  margin: 50px 0px 0px 0px;
  flex-direction: column;
  align-items: center;
`;
const User = styled.img`
  width: 160px;
  height: 160px;
`;
const LogOutBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #4263eb;
  color: #4263eb;
  font-size: 16px;
  margin-top: 20px;
  background-color: white;
  cursor: pointer;
`;
const UserInfoWrapper = styled.div`
  margin-top: 50px;
  margin-left: 119px;
  width: 544px;
  & > div:first-child {
    margin-bottom: 40px;
  }
`;
const UserTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0px 0px 10px 0px;
`;
const UserBox = styled.p`
  margin: 0px;
  font-size: 18px;
  width: 525px;
  height: 56px;
  border: 1px solid #979797;
  border-radius: 10px;
  padding-left: 18px;
  line-height: 56px;
`;
const ChangePw = styled(Link)`
  width: 160px;
  margin-left: 663px;
`;
const ChangeBtn = styled.button`
  width: 160px;
  height: 44px;
  background-color: #4263eb;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
`;