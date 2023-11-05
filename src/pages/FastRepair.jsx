import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SelectContainer,
  ButtonFast,
  MapBox,
  Location,
  ButtonBox,
  LocationContainer,
  SearchArea,
  SearchInput,
  SearchIcon,
  SearchAddr,
  PtnList,
} from "../component/Location";
import mapimg from "../images/metropolitan-area.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FastRepair = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPartnerList = async () => {
      try {
        const response = await fetch("/api/partners");
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error("데이터를 가져오지 못했습니다.");
        }
      } catch (error) {
        console.error(
          "파트너 데이터를 가져오는 중에 오류가 발생했습니다:",
          error
        );
      }
    };

    fetchPartnerList();
  }, []);

  const handleSearch = () => {
    const filteredResults = searchResults.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const renderSearchResults = () => {
    return searchResults
      .slice(0, 5)
      .map((result) => <div key={result.id}>{result.title}</div>);
  };

  return (
    <>
      <Location>
        <SelectContainer>
          <h3>빠른 수선 가능항목</h3>
          <ButtonBox>
            <ButtonFast className="botton1">기장수선</ButtonFast>
            <ButtonFast className="botton2">지퍼수선</ButtonFast>
            <ButtonFast className="botton3">가방클리닝</ButtonFast>
            <ButtonFast className="botton4">신발클리닝</ButtonFast>
          </ButtonBox>
          <MapBox alt="서비스 가능한 지역" src={mapimg} />
        </SelectContainer>
        <SelectContainer>
          <LocationContainer>
            <SearchArea>
              <SearchInput
                type="text"
                placeholder="지역구를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </SearchIcon>
            </SearchArea>
            <SearchAddr>
              <PtnList>
                <li></li>
              </PtnList>
            </SearchAddr>
          </LocationContainer>
          {renderSearchResults()}
        </SelectContainer>
      </Location>
    </>
  );
};

export default FastRepair;
