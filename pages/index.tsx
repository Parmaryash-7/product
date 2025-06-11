
import { GetStaticProps } from "next";
import HomePage from "@/pages/components/HomePage";

export default function Home({ products }: any) {
  return <HomePage products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return { props: { products: data.products } };
};