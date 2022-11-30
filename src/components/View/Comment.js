import React, { useState } from "react";
import styled from "styled-components";
// import { _addButtonImg } from "../../assets";
import { SmallDeleteImg } from "../../assets";

const Comments = () => {
  return (
    <CommentBox>
      <User_Texts>
        <Users>
          <CommentTop>
            <UserName>수빈수</UserName>
            <SmallDeletes src={SmallDeleteImg} />
          </CommentTop>
          <CommentTextBox>
          신나브로 화이팅! 조금만 더 열심히 해봅시다~
          신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
          </CommentTextBox>
        </Users>
        <Users>
          <CommentTop>
            <UserName>수빈수</UserName>
            <SmallDeletes src={SmallDeleteImg} />
          </CommentTop>
          <CommentTextBox>
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
          </CommentTextBox>
        </Users>
        <Users>
          <CommentTop>
            <UserName>수빈수</UserName>
            <SmallDeletes src={SmallDeleteImg} />
          </CommentTop>
          <CommentTextBox>
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
          </CommentTextBox>
        </Users>
        <Users>
          <CommentTop>
            <UserName>수빈수</UserName>
            <SmallDeletes src={SmallDeleteImg} />
          </CommentTop>
          <CommentTextBox>
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
          </CommentTextBox>
        </Users>
        <Users>
          <CommentTop>
            <UserName>수빈수</UserName>
            <SmallDeletes src={SmallDeleteImg} />
          </CommentTop>
          <CommentTextBox>
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
          </CommentTextBox>
        </Users>
        <Users>
          <CommentTop>
            <UserName>수빈수</UserName>
            <SmallDeletes src={SmallDeleteImg} />
          </CommentTop>
          <CommentTextBox>
            신나브로 화이팅! 조금만 더 열심히 해봅시다~
          </CommentTextBox>
        </Users>

      </User_Texts>
      <Inputs>
        <input
          className="InputTexts"
          placeholder="   응원의 댓글을 남겨주세요"
        />
        <button className="InputButton" />
      </Inputs>
    </CommentBox>
  );
};

const User_Texts = styled.div`
height:472px;
width:430px;
overflow-x:hidden;
padding-left:30px;
`

const CommentBox = styled.div`

width: 449px;
height: 600px;
padding: 1% 1% 1%;
margin-top: 33px;
border: 1px solid #808080;
position: relative;
display: flex;
  flex-direction: column;
  border-radius: 16px;
  align-items: center;
  `;
const CommentTextBox = styled.div`
  width: 355px;
  border: 1px solid #808080;
  border-color: #5c7cfa;

  padding: 21px 22px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Users = styled.div`

  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const UserName = styled.div`
  display: flex;
  font-weight: bold;
  padding: 0px 0px 6px;
`;
const Inputs = styled.div`
  height: 30px;
  width: 402px;
  align-items: center;
  margin-top: 50px;
  display: flex;
  padding-left: 30px;

  .InputTexts {
    border-radius: 30px;
    height: 40px;
    width: 334px;
    border: 1px solid #5c7cfa;
  }
  .InputButton {
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin-left: 12px;
    background-color: #5c7cfa;
    border: none;
    background-image: url();
  }
`;
const SmallDeletes = styled.img`
  width: 24px;
  height: 24px;
  padding: 4px;
`;
const CommentTop = styled.div`
  display: flex;
`;
export default Comments;
