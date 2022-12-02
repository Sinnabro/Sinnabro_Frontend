import styled from "styled-components";
import WiseSaying from "../components/view/WiseSaying";
import Todo from "../components/view/Todo";
import Comment from "../components/view/Comment";
import DDay from "../components/DDay";
import { DDayPencil } from "../assets";

const ViewMain = () => {
  return (
    <Wrapper>
      <Left>
        <Day>
          <DDay height="150px" />
          <ChangeDDAy>
            <img src={DDayPencil} />
          </ChangeDDAy>
        </Day>
        <TimeTable>sad</TimeTable>
      </Left>
      <Middle>
        <Todo />
      </Middle>
      <Right>
        <WiseSaying />
        <Comment />
      </Right>
    </Wrapper>
  );
};

export default ViewMain;
const Wrapper = styled.div`
margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;
const Left = styled.div`
  width: 449px;
  height: 850px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  `;
const Middle = styled.div`
  height: 850px;
  width: 450px;
  display: flex;
  `;
const Right = styled.div`
  height: 850px;
  width: 449px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1560px) {
    display: none;
  }
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const ChangeDDAy = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #5b5b5b;
  border: none;
  position: relative;
  top: -25px;
  left: 424px;
  & > img {
    margin: auto;
    width: 27px;
    margin-top: 1px;
  }
`;

const TimeTable = styled.div`
  margin-top: -17px;
  background-color: red;
  height: 667px;
`;
