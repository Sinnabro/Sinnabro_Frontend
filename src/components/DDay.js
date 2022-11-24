import { useState } from "react";
import styled from "styled-components";

const DDay = ({ data }) => {
  let [dDay, setDDay] = useState("");
  let day = data.date;
  const masDay = new Date(day);
  const todayTime = new Date();
  const diff = todayTime - masDay;

  let diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  let diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);

  if (diffHour >= 1) diffDay++;

  if (diffDay > 0) diffDay--;
  if (diffDay == 0) dDay = "D - Day";
  else if (diffDay > 0) dDay = `D + ${diffDay}`;
  else dDay = `D - ${diffDay * -1}`;

  return (
    <Wrapper>
      <RestDay>{dDay}</RestDay>
      <DDayName>{data.dayname}</DDayName>
    </Wrapper>
  );
};

export default DDay;

const Wrapper = styled.div`
  background-color: #5c7cfa;
  height: 200px;
  width: 449px;
  border-radius: 14px;
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;
const RestDay = styled.div`
  background-color: white;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  text-align: center;
  line-height: 120px;
  font-size: 32px;
  font-weight: bold;
  color: #364fc7;
`;
const DDayName = styled.p`
  font-size: 42px;
  color: white;
  font-weight: bold;
`;
