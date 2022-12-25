import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import DayUserList from "../components/DayUserList";
import Temporary from "../components/Temporary";
const baseUrl = process.env.REACT_APP_BASEURL;
const DayUser = () => {
  const navigate = useNavigate();
  const { dayDate } = useParams();
  const [cookies] = useCookies(["accessToken"]);
  const token = cookies.accessToken;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}/list`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        date: dayDate,
      },
    })
      .then((res) => {
        ///data에 값 넣기
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("미래 일은 모르니까요! 보고 싶은 마음을 접으세요");
          navigate("/main");
        } else if (err.response.status === 401) {
          alert("로그인이 필요합니다");
          navigate("/");
        } else if (err.response.status === 404) {
          setData([]);
        }
      });
  }, []);

  return (
    <>
      <Temporary />
      <DayUserList data={data} />
    </>
  );
};

export default DayUser;
