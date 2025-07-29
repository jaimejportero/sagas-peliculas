import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sagas } from "../data/sagas";

export default function SagaDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const saga = sagas.find((s) => s.id === id);

  if (!saga) {
    return (
      <div style={styles.container}>
        <h2>Saga no encontrada</h2>
        <button onClick={() => navigate("/")}>Volver a la home</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate("/")}>
        ← Volver
      </button>
      <h1>
        {saga.icon} {saga.title}
      </h1>

      <p style={styles.description}>{saga.description}</p> {/* Aquí la descripción */}

      <ul style={styles.movieList}>
        {saga.movies.map((movie) => (
          <li key={movie.title} style={styles.movieItem}>
            <strong>{movie.title}</strong> ({movie.year})<br />
            Plataformas:{" "}
            {movie.platform.length > 0 ? movie.platform.join(", ") : "No disponible"}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 900,
    margin: "2rem auto",
    padding: "0 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
  },
  backButton: {
    cursor: "pointer",
    marginBottom: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: 6,
    color: "#fff",
    fontSize: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#555",
    lineHeight: 1.5,
  },
  movieList: {
    listStyle: "none",
    paddingLeft: 0,
  },
  movieItem: {
    padding: "1rem",
    borderBottom: "1px solid #ddd",
  },
};
