import React from "react";
import { Saga } from "../data/sagas";
import MovieCard from "./MovieCard";

interface Props {
  saga: Saga;
}

const SagaCard: React.FC<Props> = ({ saga }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "12px", marginBottom: "20px", backgroundColor: "#fff" }}>
      <h2 style={{ marginBottom: "12px" }}>
        {saga.icon} {saga.title}
      </h2>
      {saga.movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default SagaCard;
