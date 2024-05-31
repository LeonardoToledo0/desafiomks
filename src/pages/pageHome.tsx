import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProducCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Icon from "@/public/globo.png";

const Home = () => {
  return (
    <>
      <Head>
        <title>Desafio MKS</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <Header />
      <ProductCard />
      <Footer />
    </>
  );
};

export default Home;
