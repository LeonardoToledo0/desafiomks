import React, { useEffect, useState } from "react";
import * as S from "@/src/styles/CartStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../hooks/configureStore";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import {
  removeProduct,
  setActive,
  updateQuantity,
} from "@/src/hooks/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { active, cart } = useSelector((state: RootState) => state.cart);

  const controls = useAnimation();

  const [quantities, setQuantities] = useState<number[]>(cart.map(() => 1));

  useEffect(() => {
    controls.start(active ? "active" : "inactive");
  }, [active, controls]);

  useEffect(() => {
    setQuantities(cart.map((product) => product.quantity || 1));
  }, [cart]);

  const handleClose = () => {
    dispatch(setActive(false));
  };

  const handleRemoveProduct = (index: number) => {
    const product = cart[index];
    dispatch(removeProduct(product));
    setQuantities((prevQuantities) =>
      prevQuantities.filter((_, idx) => idx !== index)
    );
  };

  const handleUpdateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ index, quantity: newQuantity }));
      setQuantities((prevQuantities) =>
        prevQuantities.map((quantity, idx) =>
          idx === index ? newQuantity : quantity
        )
      );
    }
  };

  const total = cart
    .reduce((totalCart, product) => {
      const totalPrice =
        typeof product.price === "number"
          ? product.price
          : parseFloat(product.price || "0");
      return totalCart + totalPrice * (product.quantity || 1);
    }, 0)
    .toFixed(0);

  const variants = {
    active: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    inactive: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <S.CartSections animate={controls} initial="inactive" variants={variants}>
      <S.CardAsside>
        <S.CartContent>
          <S.CartTitle>
            Carrinho
            <br /> de compras
          </S.CartTitle>
          <S.CardButtonCloseContent>
            <S.CartIcon onClick={handleClose}>X</S.CartIcon>
          </S.CardButtonCloseContent>
        </S.CartContent>
        <S.ProductCardContent>
          {cart.map((product, index) => {
            const formattedPrice = Number(product.price).toFixed(0);
            const quantity = quantities[index];
            return (
              <S.ProductCard key={index}>
                <S.CardCloseMobile>
                  <S.CardCloseMobileContent
                    onClick={() => handleRemoveProduct(index)}
                  >
                    X
                  </S.CardCloseMobileContent>
                </S.CardCloseMobile>
                <S.CartImagem
                  src={product.photo}
                  alt={product.name}
                  width={56}
                  height={50}
                />
                <S.ProductCardTitle>{product.name}</S.ProductCardTitle>
                <S.ContentPrice>
                  <S.ProductCardQuantity
                    animate={{ scale: [1, 1] }}
                    transition={{ duration: 0.2 }}
                  >
                    <S.ProductCardIncrement
                      onClick={() => handleUpdateQuantity(index, quantity - 1)}
                    >
                      -
                    </S.ProductCardIncrement>
                    <S.ProductCardDivider />
                    <S.ProductCardIncrementNumber>
                      {quantity}
                    </S.ProductCardIncrementNumber>
                    <S.ProductCardDivider />
                    <S.ProductCardIncrement
                      onClick={() => handleUpdateQuantity(index, quantity + 1)}
                    >
                      +
                    </S.ProductCardIncrement>
                  </S.ProductCardQuantity>
                  <S.DivPrice>
                    <S.ProductCardPrice>R${formattedPrice}</S.ProductCardPrice>
                  </S.DivPrice>
                </S.ContentPrice>

                <S.ProductCardCloseContent>
                  <S.ProductCardClose
                    onClick={() => handleRemoveProduct(index)}
                  >
                    X
                  </S.ProductCardClose>
                </S.ProductCardCloseContent>
              </S.ProductCard>
            );
          })}
        </S.ProductCardContent>
      </S.CardAsside>
      <S.CartTotalContent>
        <S.CartTotal>Total: </S.CartTotal>
        <S.CartTotalValor>R${total.toString()}</S.CartTotalValor>
      </S.CartTotalContent>
      <S.CardButtonContent>
        <S.CartButton>Finalizar Compra</S.CartButton>
      </S.CardButtonContent>
    </S.CartSections>
  );
};

export default Cart;
