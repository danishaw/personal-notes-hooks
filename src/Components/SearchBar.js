import { useNavigate } from "react-router-dom";

export default function SearchBar({ query, setQuery }) {
  const nav = useNavigate();
  const onSubmit = (e) => {
    nav.push(`?s=${query}`);
    e.preventDefault();
  };

  return (
    
      <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <input
          value={query}
          type="search"
          name="s"
          placeholder="Cari Catatan"
          onInput={(e) => setQuery(e.target.value)}
        />
      </form>
  );
}
