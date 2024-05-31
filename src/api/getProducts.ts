import axios from "axios";
import { useQuery } from "react-query";
import { Product } from "../types/types";

const getProduct = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL as string);
    return response.data.products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

const useGetProduct = () => {
  return useQuery<Product[], Error>("products", getProduct);
};

export default useGetProduct;
