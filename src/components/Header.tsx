import React from "react";
import * as S from "@/src/styles/HeaderStyles";
import cart from "@/public/cart.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "@/src/hooks/cartSlice";
import Cart from "./Cart";
import { RootState } from "../hooks/configureStore";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const quantityHeader = useSelector(
    (state: RootState) => state.cart.quantityHeader
  );

  const handleCartButtonClick = () => {
    dispatch(setActive(true));
  };

  return (
    <>
      <S.HeaderSections>
        <S.HeaderContainer>
          <S.HeaderContent>
            <S.HeaderTitle>MKS</S.HeaderTitle>
            <S.HeaderSubTitle>sistemas</S.HeaderSubTitle>
          </S.HeaderContent>
          <S.HeaderContent>
            <S.HeaderButton onClick={handleCartButtonClick}>
              <Image src={cart} alt="Carrinho" width={19} height={18} />
              <S.HeaderButtonNumber>{quantityHeader}</S.HeaderButtonNumber>
            </S.HeaderButton>
          </S.HeaderContent>
        </S.HeaderContainer>
        <Cart />
      </S.HeaderSections>
    </>
  );
};

export default Header;
