
import Link from 'next/link';
import styles from '@/styles/ProductCard.module.css';

export default function ProductCard({ product }: any) {
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
