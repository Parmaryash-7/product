import { useState } from 'react';
import ProductCard from '@/pages/components/ProductCard';
import SearchFilter from '@/pages/components/SearchFilter';
import Pagination from '@/pages/components/Pagination';
import styles from '@/styles/Home.module.css';

export default function HomePage({ products }: any) {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 12;

    const filtered = products.filter((p: any) =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);
    const totalPages = Math.ceil(filtered.length / perPage);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>All Products</h1>
            <SearchFilter query={query} setQuery={setQuery} />
            <div className={styles.grid}>
                {paginated.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
}
