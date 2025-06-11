
import Link from 'next/link';
import styles from '@/styles/ProductCard.module.css';


type Product = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    images: string[];
};

type prop = {
    product: Product
}



export default function ProductCard({ product }: prop) {
    if (!product) return null; 

    return (
        <div className={styles.card}>
            <Link href={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
                <p>₹{product.price}</p>
            </Link>
        </div>
    );
}

