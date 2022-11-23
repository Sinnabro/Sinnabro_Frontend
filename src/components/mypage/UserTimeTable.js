import styled from "styled-components";

const UserTimeTable = ({ data, setMonthValue, setYearValue, yearValue }) => {
  return (
    <Wrapper>
      <Left>
        <Year>
          <ChooseYear
            onClick={() => setYearValue(yearValue - 1)}
          >{`<`}</ChooseYear>
          <p
            title="오늘 날짜로"
            onClick={() => {
              setYearValue(NowDay.getFullYear());
              setMonthValue(NowDay.getMonth() + 1);
            }}
          >
            {yearValue}
          </p>
          <ChooseYear
            onClick={() => setYearValue(yearValue + 1)}
          >{`>`}</ChooseYear>
        </Year>
        <Month>
          <RenderMonth setMonthValue={setMonthValue} />
        </Month>
      </Left>
      <Right>
        <ListTitle>
          <span>날짜</span>
          <span>좋아요</span>
        </ListTitle>
        <ListContent>
          <RenderList data={data} />
        </ListContent>
      </Right>
    </Wrapper>
  );
};

const RenderList = ({ data }) => {
  const result = [];
  data.map((value) => {
    result.push(
      <EachListContent key={value.day}>
        <span>{value.day}</span>
        <span>{value.good}</span>
      </EachListContent>
    );
  });
  return result;
};

const RenderMonth = ({ setMonthValue }) => {
  const result = [];
  for (let i = 1; i <= 12; i++) {
    result.push(
      <EachMonth
        key={i}
        onClick={() => {
          setMonthValue(i);
        }}
      >
        {i}월
      </EachMonth>
    );
  }
  return result;
};

export default UserTimeTable;

const Wrapper = styled.div`
  padding-top: 68px;
  width: 826px;
  height: 510px;
  display: flex;
  gap: 43px;
  justify-content: center;
`;
const Left = styled.div`
  width: 257px;
  margin-top: -16px;
`;
const Year = styled.div`
  width: 165px;
  height: 48px;
  border: 1px solid #585858;
  border-radius: 4px;
  position: relative;
  z-index: 1;
  left: 46px;
  top: 16px;
  background-color: white;
  padding: 0px 21px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  & > p {
    font-size: 18px;
    margin: 0px;
    line-height: 48px;
    color: #4263eb;
    font-weight: bold;
    cursor: pointer;
  }
`;
const ChooseYear = styled.button`
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  border: none;
  cursor: pointer;
  color: #4263eb;
`;
const Month = styled.div`
  width: 257px;
  height: 478px;
  border: 1px solid #585858;
  border-radius: 5px;
  padding: 31px 0px;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const EachMonth = styled.span`
  cursor: pointer;
  width: 200px;
  height: 50px;
  background-color: #748ffc;
  border-radius: 5px;
  margin-bottom: 6px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;
const Right = styled.div`
  width: 531px;
  border: 1px solid #5b5b5b;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #5b5b5b;
  height: 46px;
  display: flex;
  & > span {
    width: 60%;
    text-align: center;
    line-height: 46px;
    font-size: 16px;
    color: #4263eb;
    font-weight: bold;
    &:last-child {
      width: 40%;
    }
  }
`;
const ListContent = styled.div`
  width: 100%;
  height: 464px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const EachListContent = styled.div`
  width: 100%;
  display: flex;
  min-height: 64px;
  background-color: white;
  border-bottom: 1px solid #5b5b5b;
  & > span {
    width: 60%;
    text-align: center;
    line-height: 64px;
    font-size: 18px;
    &:last-child {
      width: 40%;
    }
  }
`;
