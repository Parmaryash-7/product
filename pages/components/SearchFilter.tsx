
import styles from '@/styles/SearchFilter.module.css';

export default function SearchFilter({ query, setQuery }: any) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
