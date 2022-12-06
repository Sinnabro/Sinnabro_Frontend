import { useEffect, useState } from "react";
import styled from "styled-components";
import UserInfo from "../components/mypage/UserInfo";
import UserTimeTable from "../components/mypage/UserTimeTable";
const MyPage = () => {
  const data = {
    name: "신나브로 화이팅",
    email: "sinnabro@gmail.com",
  };

  return (
    <>
      <Wrapper>
        <MyWrapper>
          <UserInfo data={data} />
          <UserTimeTable />
        </MyWrapper>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  height: 1625px;
  background: linear-gradient(to bottom, #748ffc 500px, white 500px);
  display: flex;
  justify-content: center;
`;
const MyWrapper = styled.div`
  background-color: white;
  width: 1006px;
  height: 1226px;
  margin-top: 166px;
  border-radius: 10px;
  border: 1px solid #585858;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
