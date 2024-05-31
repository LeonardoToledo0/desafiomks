import React from "react";
import * as S from "../styles/CardStyles";
import { Product } from "../types/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, setShowCart } from "../hooks/cartSlice";
import { RootState } from "../hooks/configureStore";

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const handleAddProductToCart = () => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      dispatch(addProduct(product));
      dispatch(setShowCart(true));
    } else {
      console.log("Produto já está no carrinho");
    }
  };
  const { name, description, price, photo } = product;
  const formattedPrice = Number(price).toFixed(0);

  return (
    <S.CardContainer>
      <Image
        src={photo}
        alt={name}
        width={111}
        height={118}
        style={{ padding: 5, marginTop: 10 }}
        priority
      />
      <S.CardContetTitle>
        <S.CardTitle>{name}</S.CardTitle>
        <S.ContentCardPrice>
          <S.CardPrice>R${formattedPrice}</S.CardPrice>
        </S.ContentCardPrice>
      </S.CardContetTitle>
      <S.CardDescription>{description}</S.CardDescription>
      <S.CardButtonsWrapper>
        <S.CardButtonsContent>
          <S.CardIcon />
          <S.CardButtons onClick={handleAddProductToCart}>
            Comprar
          </S.CardButtons>
        </S.CardButtonsContent>
      </S.CardButtonsWrapper>
    </S.CardContainer>
  );
};

export default Card;
