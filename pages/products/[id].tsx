import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
};

type Props = {
    product: Product;
};

export default function ProductDetail({ product }: Props) {
    const router = useRouter();

    if (router.isFallback) return <div>Loading...</div>;

    return (
        <div className={styles.product}>
            <img src={product.images[0]} alt={product.title} width={300} />
            <h1 className={styles.product_heading}>{product.title}</h1>
            <p className={styles.product_price}>Price: ₹{product.price}</p>
            <p className={styles.product_desc}>{product.description}</p>
            <button className={styles.product_btn}>
                <Link href={"/"}>Back to all Products</Link>
            </button>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    const paths = data.products.map((product: Product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();

    return {
        props: {
            product,
        }
    };
};
