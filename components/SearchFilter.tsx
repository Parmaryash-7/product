
import styles from '@/styles/SearchFilter.module.css';

type SearchFilterProps = {
  query: string;
  setQuery: (value: string) => void;
};

export default function SearchFilter({ query, setQuery }: SearchFilterProps) {
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
