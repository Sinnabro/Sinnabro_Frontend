import { Link } from "react-router-dom";
import styled from "styled-components";
import DDay from "../components/DDay";
import Calendar from "../components/main/Calendar";
import VeiwTodo from "../components/main/VeiwTodo";

const Main = () => {
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
  let DDayData = {
    dayname: "기말고사",
    date: "2022-12-21",
  };

  return (
    <>
      <All>
        <Left>
          <Go to="/">
            <DDay data={DDayData} />
          </Go>
          <Go to="/">
            <VeiwTodo data={TodoData} />
          </Go>
        </Left>
        <Calendar />
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
