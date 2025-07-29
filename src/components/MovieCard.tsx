import React from "react";
import { Movie } from "../data/sagas";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "8px", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "space-between" }}>
      <div>
        <strong>{movie.title}</strong> <span style={{ color: "#666" }}>({movie.year})</span>
      </div>
      <div>
        {movie.platform.map((p) => (
          <span key={p} style={{ marginLeft: 6, padding: "2px 6px", backgroundColor: "#cce4ff", color: "#0055cc", borderRadius: 4 }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
