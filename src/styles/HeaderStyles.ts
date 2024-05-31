import styled from "styled-components";
import { cardColor, corPrimaria } from "./GlobalStyles";
export const HeaderSections = styled.section`
  max-width: 100%;
  display: flex;
  background: ${corPrimaria};
`;
export const HeaderContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 101px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: baseline;
`;
export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 19px;
  color: ${cardColor};
  margin: 10px;
`;
export const HeaderSubTitle = styled.h6`
  font-weight: 300;
  font-size: 1.25rem;
  color: ${cardColor};
  line-height: 19px;
`;

export const HeaderButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  border-radius: 8px;
  width: 90px;
  height: 45px;
  background: ${cardColor};
`;

export const HeaderButtonNumber = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
`;
