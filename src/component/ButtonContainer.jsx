import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;

export const TransBtn = styled.button`
  margin: 10px;
  flex: 1;
  min-width: 360px;
  height: 300px;
  background: var(--DARKBLUE);
  /* border: 2px solid white; // 기본색상 */
  color: white;

  padding: 0.5rem 1rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid darkgray;

  & + & {
    background: var(--LIGHTBLUE);
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
    background-color: #555;
    color: #eee;
  }
  &:active {
    background-color: #0056b3; // 활성화 상태에서의 색상
    border-color: #aaa;
  }
`;
