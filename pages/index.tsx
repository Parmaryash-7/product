
import { GetStaticProps } from "next";
import HomePage from "@/components/HomePage";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
};

type Products = {
  products: Product[]
}


export default function Home({ products }: Products) {
  return <HomePage products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return { props: { products: data.products } };
};