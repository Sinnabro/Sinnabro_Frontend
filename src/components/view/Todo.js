import { useState, useEffect } from "react";
import styled from "styled-components";
import { deleteBox } from "../../assets/index";

const Todo = () => {
  const data = [
    {
      todo_id: 1,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단어 외우기",
      check: 0,
      createdAt: "2022-10-06",
    },
    {
      todo_id: 2,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단어 외우기",
      check: 1,
      createdAt: "2022-10-06",
    },
    {
      todo_id: 3,
      writer: 1,
      sub: "영어",
      content: "중등고난도 영단어 외우기",
      check: 0,
      createdAt: "2022-10-06",
    },
  ];

  const [checked, setChecked] = useState([]);
  const [todoList, setTodoList] = useState({
    sub: "",
    content: "",
  });

  useEffect(() => {
    if (data.length !== checked.length)
      for (let i = 0; i < data.length; i++) checked.push(data[i].check);
  });

  const changeValue = (i) => {
    const newChecked = checked;
    if (newChecked[i]) newChecked[i] = 0;
    else newChecked[i] = 1;
    setChecked(newChecked);
  };

  const { sub, content } = todoList;

  const changeTodo = (e) => {
    console.log(todoList);
    setTodoList({
      ...todoList,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <View>
        <Date>2022.11.28</Date>
        <TodoWrapper>
          {data.map((value, index) => {
            return value.check ? (
              <EachTodo key={value.todo_id}>
                <CheckBox
                  type="checkbox"
                  onClick={() => changeValue(index)}
                  defaultChecked
                />
                <Title>[{value.sub}]</Title>
                <SubTitle>{value.content}</SubTitle>
                <Delete src={deleteBox} />
              </EachTodo>
            ) : (
              <EachTodo key={value.todo_id}>
                <CheckBox type="checkbox" onClick={() => changeValue(index)} />
                <Title>[{value.sub}]</Title>
                <SubTitle>{value.content}</SubTitle>
                <Delete src={deleteBox} />
              </EachTodo>
            );
          })}
        </TodoWrapper>
      </View>
      <Enter>
        <InputWrapper>
          <Input
            placeholder="주제를 입력해주세요"
            name="sub"
            value={sub}
            onChange={changeTodo}
          />
          <Input
            placeholder="To-Do를 입력해주세요"
            name="content"
            value={content}
            onChange={changeTodo}
          />
        </InputWrapper>
        <Plus>+</Plus>
      </Enter>
    </Wrapper>
  );
};

export default Todo;
const borderColor = "#808080";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const View = styled.div`
  height: 629px;
  border: 1px solid ${borderColor};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
`;
const Date = styled.div`
  color: #5b5b5b;
  font-size: 30px;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-bottom: 1px solid ${borderColor};
`;
const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 100%;
  padding: 0px 4px;
  box-sizing: border-box;
  margin: auto;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #748ffc;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

const EachTodo = styled.div`
  display: flex;
  line-height: 31px;
  width: 380px;
  margin-bottom: 25px;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  width: 80px;
`;
const SubTitle = styled.p`
  font-size: 17px;
  width: 270px;
`;
const CheckBox = styled.input`
  width: 34px;
  height: 31px;
  margin-right: 14px;
  margin-top: 2px;
`;
const Delete = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 3px;
  cursor: pointer;
`;

const Enter = styled.div`
  height: 191px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const InputWrapper = styled.div`
  border: 1px solid ${borderColor};
  height: 163px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const Input = styled.input`
  width: 340px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid #5c7cfa;
  padding: 0px 24px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Plus = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #5c7cfa;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 55px;
  line-height: 50px;
  position: absolute;
  bottom: 0px;
`;
