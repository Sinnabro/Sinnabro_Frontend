import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DDay from "../components/DDay";
import LeftCalendar from "../components/main/Calendar/LeftCalendar";
import VeiwTodo from "../components/main/VeiwTodo";

const Main = () => {
  const [day, setDay] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const month = day.getMonth() + 1;
    const date = day.getDate();
    if (count) {
      console.log(month, date);
    } else {
      setCount(1);
    }
  }, [day]);

  let TodoData = [
    {
      todo_id: 1,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단어 외우기",
      check: 1,
      createdAt: "2022-10-06",
    },
    {
      todo_id: 1,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단d어 외우기",
      check: 0,
      createdAt: "2022-10-06",
    },
    {
      todo_id: 1,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단efwer어 외우기",
      check: 0,
      createdAt: "2022-10-06",
    },
    {
      todo_id: 1,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단어 외우기",
      check: 1,
      createdAt: "2022-10-06",
    },
    {
      todo_id: 1,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단d어 외우기",
      check: 0,
      createdAt: "2022-10-06",
    },
  ];

  return (
    <>
      <All>
        <Left>
          <Go to="/">
            <DDay height="200px" />
          </Go>
          <Go to="/">
            <VeiwTodo data={TodoData} />
          </Go>
        </Left>
        {/* <Calendar /> */}
        <LeftCalendar day={day} setDay={setDay} />
      </All>
    </>
  );
};

export default Main;

const All = styled.div`
  width: 79.05%;
  height: 790px;
  margin: auto;
  display: flex;
  margin-top: 70px;
  gap: 7%;
`;
const Left = styled.div`
  @media screen and (max-width: 1700px) {
    display: none;
  }
`;

const Go = styled(Link)`
  text-decoration: none;
  &:active {
    color: black;
  }
  &:visited {
    color: black;
  }
`;
