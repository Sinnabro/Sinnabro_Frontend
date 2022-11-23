import { useEffect, useState } from "react";
import styled from "styled-components";
import UserInfo from "../components/mypage/UserInfo";
import UserTimeTable from "../components/mypage/UserTimeTable";
const MyPage = () => {
  const data = {
    name: "신나브로 화이팅",
    email: "sinnabro@gmail.com",
  };

  const Pojectdata = [
    {
      day: "2022.11.01",
      good: "123",
    },
    {
      day: "2022.11.02",
      good: "123",
    },
    {
      day: "2022.11.03",
      good: "123",
    },
    {
      day: "2022.11.04",
      good: "123",
    },
    {
      day: "2022.11.05",
      good: "123",
    },
    {
      day: "2022.11.06",
      good: "123",
    },
    {
      day: "2022.11.07",
      good: "123",
    },
    {
      day: "2022.11.08",
      good: "123",
    },
    {
      day: "2022.11.09",
      good: "123",
    },
    {
      day: "2022.11.10",
      good: "123",
    },
    {
      day: "2022.11.11",
      good: "123",
    },
  ];

  const NowDay = new Date();
  const [monthValue, setMonthValue] = useState(NowDay.getMonth() + 1);
  const [yearValue, setYearValue] = useState(NowDay.getFullYear());
  useEffect(() => {
    console.log(yearValue, monthValue);
  }, [yearValue, monthValue]);

  return (
    <>
      <Wrapper>
        <MyWrapper>
          <UserInfo data={data} />
          <UserTimeTable
            setMonthValue={setMonthValue}
            setYearValue={setYearValue}
            data={Pojectdata}
            yearValue={yearValue}
          />
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
