import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
  padding-top: 250px;
  align-items: center;
  justify-content: center;
`;

export const TransBtn = styled.button`
  margin: 10px;
  /* flex: 1; */
  min-width: 360px;
  height: 360px;
  background-color: var(--DARKBLUE);
  color: white;

  padding: 0.5rem 1rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid darkgray;

  & + & {
    background-color: var(--LIGHTBLUE);
    color: black;
  }

  ${(props) =>
    props.color &&
    css`
      flex: 1;
      max-width: 200px;
      min-width: 140px;
      background: ${props.color};
    `};

  &:hover {
    background-color: #3b7398;
    color: white;
  }

  & + &:hover {
    background-color: #77b2cf;
    color: black;
  }

  &:active {
    background-color: var(--DARKBLUE); // 활성화 상태에서의 색상
    border-color: #eee;
  }
  & + &:active {
    background: var(--LIGHTBLUE);
    color: black;
  }
`;
