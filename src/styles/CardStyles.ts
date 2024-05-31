import styled from "styled-components";
import { cardColor, corPrimaria, priceColor } from "./GlobalStyles";
import { RiShoppingBag3Line } from "react-icons/ri";

export const CardSections = styled.section`
  max-width: 938px;
  width: 100%;
  margin: 90px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 25px;
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CardContainer = styled.article`
  width: 217.56px;
  height: 285px;
  background: ${cardColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1352);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 420px) {
    width: 251px;
    height: 328px;
  }
`;

export const CardContetTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  align-items: flex-start;
  margin-left: 14px;
`;

export const ContentCardPrice = styled.div`
  width: 4rem;
  height: 26px;
  background: ${priceColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;
export const CardPrice = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: ${cardColor};
`;
export const CardDescription = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  align-self: flex-start;
  margin-left: 14px;
  height: 25px;
`;
export const CardButtonsWrapper = styled.div`
  width: 100%;
  background: ${corPrimaria};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31.91px;
  border-radius: 0 0 8px 8px;
`;
export const CardButtonsContent = styled.button`
  width: 100%;
  height: 33px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardIcon = styled(RiShoppingBag3Line)`
  color: ${cardColor};
  font-size: 20px;
  margin-right: -70px;
`;
export const CardButtons = styled.a`
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${cardColor};
  margin-right: -70px;
`;
