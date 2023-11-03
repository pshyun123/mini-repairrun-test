import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";
import styled from "styled-components";

const OrderStyled = styled.div`
  background-color: #f6f4eb;
  transition: background-color 0.2s ease;
  height: 100vh;
  @media screen and (max-width: 768px) {
    background-color: #ffffff;
  }
`;
const NewOrder = () => {
  const navigate = useNavigate();

  const onClickBtn = (e) => {
    switch (e) {
      case 1:
        navigate("/FastRepair");
        break;
      case 2:
        navigate("/BasicRepair");
        break;
      default:
    }
  };

  return (
    <>
      <div>
        <OrderStyled>
          <ButtonContainer>
            <TransBtn onClickBtn={() => onClickBtn(1)}>빠른 매칭</TransBtn>
            <TransBtn onClickBtn={() => onClickBtn(2)}>일반 매칭</TransBtn>
          </ButtonContainer>
        </OrderStyled>
      </div>
    </>
  );
};

export default NewOrder;
