import React from "react";
import useGetProduct from "../api/getProducts";
import { Product } from "../types/types";
import Card from "./Card";
import { CardSections } from "../styles/CardStyles";

const ProductCard: React.FC = () => {
  const { data, isLoading, isError } = useGetProduct();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError || !data) {
    return <div>Ocorreu um erro ao buscar os produtos.</div>;
  }

  return (
    <CardSections>
      {Array.isArray(data) && data.length === 0 ? (
        <div>Nenhum produto encontrado.</div>
      ) : (
        data.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))
      )}
    </CardSections>
  );
};

export default ProductCard;
