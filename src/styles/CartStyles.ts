import styled from "styled-components";
import { cardColor, corPrimaria, priceColor } from "./GlobalStyles";
import { motion } from "framer-motion";
import Image from "next/image";

export const CartSections = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 486px;
  background: ${corPrimaria};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  @media screen and (max-width: 420px) {
    width: 330px;
  }
`;

export const CardAsside = styled.aside`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    width: 0;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CartContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 36px;
  width: 100%;
`;
export const CartTitle = styled.h2`
  color: ${cardColor};
  font-size: 27px;
  line-height: 32.91px;
  font-weight: 700;
`;

export const CardButtonCloseContent = styled.div`
  width: 100%;
  width: 38px;
  height: 38px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const CartIcon = styled.a`
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  color: ${cardColor};
`;
export const ProductCardContent = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  position: absolute;
`;

export const ProductCard = styled.div`
  width: 385px;
  height: 95px;
  margin-bottom: 25px;
  bottom: 0;
  border-radius: 8px;
  background: ${cardColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 420px) {
    width: 250px;
    height: 220px;
    flex-direction: column;
  }
`;
export const ProductCardQuantity = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  border-radius: 4px;
  border: 0.001px solid rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 420px) {
    width: 97px;
    height: 36px;
    border-radius: 5px;
    line-height: 17px;
  }
`;
export const ProductCardDivider = styled.hr`
  height: 12px;
  margin: 2px;
`;

export const ProductCardIncrementNumber = styled.span`
  margin: 5px;
  width: 100%;
`;
export const ProductCardIncrement = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 3px;
  width: 100%;
`;
export const ProductCardTitle = styled.p`
  width: 113px;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  @media screen and (max-width: 420px) {
    font-size: 16px;
    margin-top: -45px;
  }
`;

export const DivPrice = styled.div`
  @media screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 34.81px;
    border-radius: 5px;
    background: ${priceColor};
    color: ${cardColor};
  }
`;
export const ProductCardPrice = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  @media screen and (max-width: 420px) {
    background: ${priceColor};
    color: ${cardColor};
  }
`;
export const ProductCardCloseContent = styled.div`
  height: 18px;
  width: 18px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -90px;
  margin-right: -15px;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
export const ProductCardClose = styled.a`
  color: ${cardColor};
  font-size: 14px;
  font-weight: 400;
`;

export const CartTotalContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: flex-end;
  z-index: 1000;
  margin-top: 50px;
  background: ${corPrimaria};
`;
export const CartTotal = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: ${cardColor};
`;
export const CartTotalValor = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: ${cardColor};
`;

export const CardButtonContent = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  align-self: flex-end;
  margin-top: 20px;
`;
export const CartButton = styled.a`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: ${cardColor};
`;

export const ContentPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 420px) {
    margin-top: -30px;
  }
`;

export const CartImagem = styled(Image)`
  @media screen and (max-width: 420px) {
    width: 40%;
    height: 40%;
    margin-top: -80px;
  }
`;

export const CardCloseMobile = styled.div`
  display: none;
  @media screen and (max-width: 420px) {
    display: block;
    width: 21px;
    height: 41px;
    align-self: flex-end;
    margin-right: 15px;
    margin-top: -20px;
  }
`;
export const CardCloseMobileContent = styled.a`
  font-size: 42px;
  font-weight: 400;
`;
