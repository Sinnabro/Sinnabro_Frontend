import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
const baseUrl = process.env.REACT_APP_BASEURL;
var date = new Date();
const DDay = ({ height }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const token = cookies.accessToken;
  const [data, setData] = useState({
    dayname: "d-day",
    date: "2023-01-01",
  });
  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}/date`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        if (response.data === null) {
          setData({ date: date, dayname: "디데이 없음" });
        } else {
          setData({ date: response.data.date, dayname: response.data.dayname });
        }
      })
      .catch(function (error) {
        if (error.response.status === 400)
          alert("알 수 없는 오류입니다. 고객센터는 없으니 어떡하죠 - 디데이");
        else if (error.response.status === 404)
          setData({ date: "2022-12-25", dayname: "크리스마스" });
        else alert(`오류 (${error.response.status})`);
      });
  }, []);

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
    <Wrapper style={(height = { height })}>
      <RestDay>{dDay}</RestDay>
      <DDayName>{data.dayname}</DDayName>
    </Wrapper>
  );
};

export default DDay;

const Wrapper = styled.div`
  background-color: #5c7cfa;
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
