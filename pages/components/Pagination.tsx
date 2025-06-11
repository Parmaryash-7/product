
import styles from '@/styles/Pagination.module.css';

export default function Pagination({ currentPage, totalPages, onPageChange }: any) {
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
