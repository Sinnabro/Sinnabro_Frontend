import styled from "styled-components";
import { deleteBox } from "../../assets/index";

const Comment = () => {
  const data = [
    {
      name: "세종대왕",
      content: "아니 국어 시험을 오답할게 있다고?!! 좀 심각하구먼",
      createdAt: "2022 - 10 - 04",
    },
    {
      name: "정약용",
      content: "맞지 수학은 버리는게 답이오. 수학은 나같은 천재들만 하는 과목이오. ",
      createdAt: "2022 - 10 - 05",
    },
    {
      name: "심청이",
      content: "휴식은 필요하지. 너무 뼈 빠지게 일했더니 나처럼 인당수에도 빠지고 이러는거 아니야. ",
      createdAt: "2022 - 10 - 06",
    },
  ];
  return (
    <Wrapper>
      <CommentWrapper>
        {data.map((v, i) => {
          return (
            <EachComment>
              <Top>
                {v.name}
                <Delete src={deleteBox} />
              </Top>
              <CommentContent>{v.content}</CommentContent>
            </EachComment>
          );
        })}
      </CommentWrapper>
      <WriteWrapper>
        <Input placeholder="응원의 댓글을 남겨주세요" />
        <Button>+</Button>
      </WriteWrapper>
    </Wrapper>
  );
};

export default Comment;
const borderColor = "#808080";

const Wrapper = styled.div`
  width: 100%;
  height: 551px;
  border: 1px solid ${borderColor};
  margin-top: 30px;
  border-radius: 14px;
  box-sizing: border-box;
`;
const CommentWrapper = styled.div`
  height: 433px;
  margin-top: 14px;
  padding-bottom: 23px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: none;
  padding: 23px;
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
const EachComment = styled.div`
  margin-bottom: 20px;
`;
const Top = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Delete = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const CommentContent = styled.div`
  margin-top: 6px;
  border: 1px solid #5c7cfa;
  padding: 11px 13px;
  border-radius: 1px 14px 14px 14px;
`;

const WriteWrapper = styled.div`
  height: 55px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 23px;
`;
const Input = styled.input`
  height: 44px;
  width: 83%;
  border-radius: 22px;
  border: 1px solid #5c7cfa;
  font-size: 14px;
  padding: 0px 14px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #5c7cfa;
  color: white;
  font-size: 55px;
  line-height: 50px;
`;
