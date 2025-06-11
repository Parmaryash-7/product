import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchFilter from '@/components/SearchFilter';
import Pagination from '@/components/Pagination';
import styles from '@/styles/Home.module.css';

type Product = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    images: string[];
};

type Products = {
    products: Product[]
}

export default function HomePage({ products = [] }: Products) {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 12;

    const filtered = products.filter((p: Product) =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);
    const totalPages = Math.ceil(filtered.length / perPage);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>All Products</h1>
            <SearchFilter query={query} setQuery={setQuery} />
            <div className={styles.grid}>
                {paginated.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
}
