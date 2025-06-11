
import styles from '@/styles/Pagination.module.css';

// type Product = {
//     currentPage: number,
//     totalPages: number,
//     onPageChange
// };

type Pagination = {
    currentPage: number;
    onPageChange: (value: number) => void;
    totalPages: number
};



export default function Pagination({ currentPage, totalPages, onPageChange }: Pagination) {
    return (
        <div className={styles.pagination}>
            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    className={`${styles.pageBtn} ${i + 1 === currentPage ? styles.active : ''}`}
                    onClick={() => onPageChange(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}
