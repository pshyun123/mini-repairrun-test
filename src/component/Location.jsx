import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  display: grid;
  width: 700px;
  height: 700px;
  border: 1px solid darkgray;
  justify-items: center;
  align-content: space-evenly;
`;

export const ButtonFast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  /* flex: 1; */
  width: 100px;
  height: 100px;
  background-color: var(--DARKBLUE);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid darkgray;
`;
export const MapBox = styled.img`
  width: 500px;
  height: 500px;
  border: 1px solid darkgray;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  /* margin: 10px auto; */
`;

export const LocationContainer = styled.div`
  display: flex;
  width: 520px;
  height: 600px;
  border-radius: 4px;
  background-color: var(--IVORY);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SearchInput = styled.input`
  width: 500px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchIcon = styled.div`
  background-color: var(--DARKBLUE);
  color: white;
  border: 1px solid var(--DARKBLUE);
  border-radius: 4px;
  padding: 15px;
  margin-left: -40px;
  cursor: pointer;
`;

export const SearchAddr = styled.div`
  display: flex;
  width: 500px;
  height: 520px;
  border-radius: 4px;
  background-color: var(--GREY);
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
export const PtnList = styled.div`
  width: 480px;
  height: 80px;
  border-radius: 4px;
  background-color: var(--LIGHTBLUE);
  list-style: none;
`;
