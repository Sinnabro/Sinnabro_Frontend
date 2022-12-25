import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { checkbox, checkedBox } from "../../assets";
const baseUrl = process.env.REACT_APP_BASEURL;
const VeiwTodo = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const token = cookies.accessToken;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}/todo`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 400)
          alert("알 수 없는 오류입니다. 고객센터는 없으니 어떡하죠 - todo");
        else if (err.response.status === 401) alert("로그인이 필요합니다.");
        else {
          setData([]);
        }
      });
  }, []);
  return (
    <Wrapper>
      <Title>To Do List</Title>
      <Hr />
      <TodoWrapper>
        {data.map((value, i) => {
          return (
            <EachTodo key={i}>
              {value.check ? (
                <Check src={checkedBox} />
              ) : (
                <Check src={checkbox} />
              )}
              <TodoText>{value.content}</TodoText>
            </EachTodo>
          );
        })}
      </TodoWrapper>
      <Plus>+</Plus>
    </Wrapper>
  );
};

export default VeiwTodo;

const Wrapper = styled.div`
  width: 449px;
  height: 520px;
  margin-top: 70px;
  border: 1px solid #808080;
  border-radius: 14px;
`;

const Title = styled.div`
  font-size: 30px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #808080;
  font-weight: bold;
`;

const Hr = styled.hr`
  color: #808080;
`;

const TodoWrapper = styled.div`
  width: 361px;
  height: 374px;
  margin: auto;
  margin-top: 16px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Plus = styled.p`
  width: 70px;
  height: 70px;
  background-color: #5c7cfa;
  border-radius: 50%;
  position: relative;
  left: 190px;
  top: -40px;
  text-align: center;
  line-height: 60px;
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const EachTodo = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Check = styled.img`
  width: 34px;
  height: 34px;
`;

const TodoText = styled.p`
  text-align: center;
  line-height: 34px;
  margin-top: 0px;
  margin-left: 20px;
`;
