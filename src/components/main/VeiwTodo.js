import styled from "styled-components";
import { checkbox, checkedBox } from "../../assets";

const VeiwTodo = ({ data }) => {
  return (
    <Wrapper>
      <Title>To Do List</Title>
      <Hr />
      <TodoWrapper>
        {data.map((value,i) => {
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
