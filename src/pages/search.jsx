import "../styles/search.css";
import Button from "../Components/button";
import Card from "../Components/card";
import { useEffect, useState } from "react";
import useDebounce from "../../customHook.jsx";

const Loader = () => <p className="search-loader">Chargement en cours...</p>;

export default function Search() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      const title = debouncedQuery.trim();
      const url = title
        ? `http://localhost:3000/api/movies?title=${encodeURIComponent(title)}`
        : "http://localhost:3000/api/movies";

      setLoading(true);
      setError("");

      try {
        const response = await fetch(url, { signal: controller.signal });

        const data = await response.json();

        if (!response.ok || data.success === false) {
          const message = data?.message || "Request failed";

          if (
            response.status === 404 ||
            /introuvable|Aucun film trouvé|not found/i.test(message)
          ) {
            throw new Error("FILM_INTRUVALABLE");
          }

          throw new Error(message);
        }

        setResults(data.data ?? []);
      } catch (error) {
        if (error.name === "AbortError") return;

        setResults([]);

        if (error.message === "FILM_INTRUVALABLE") {
          setError("Film introuvable.");
          return;
        }

        setError("Oups, quelque chose s'est mal passé.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [debouncedQuery]);

  const hasResults = results.length > 0;
  const hasQuery = debouncedQuery.trim().length > 0;

  return (
    <div className="search-page">
      <input
        type="search"
        className="search-input"
        value={query}
        placeholder="Search for a film"
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <Loader />}

      {!loading && error && <p className="search-error">{error}</p>}

      {!loading && !error && !hasResults && hasQuery && (
        <p className="search-not-found">Aucun film trouvé.</p>
      )}

      {!loading && !error && hasResults && (
        <div className="card-container">
          {results.map((movie) => (
            <Card movieData={movie} key={movie.id} changeResults={setResults} />
          ))}
        </div>
      )}
    </div>
  );
}
