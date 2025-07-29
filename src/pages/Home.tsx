import React from "react";
import { useNavigate } from "react-router-dom";
import { sagas } from "../data/sagas";

const sagaImages: Record<string, string> = {
  lotr: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY679_.jpg",
  starwars: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
  alien: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
  hungergames: "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg",
  matrix: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_SY679_.jpg",
  harrypotter: "https://m.media-amazon.com/images/I/51UoqRAxwEL._AC_SY679_.jpg",
  jurassic: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
  avengers: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
  piratas: "/photos/piratas.jpg",
  narnia: "/photos/narnia.jpg",
};



export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sagas de Películas</h1>
      <div style={styles.grid}>
        {sagas.map((saga) => (
          <div
            key={saga.id}
            style={styles.card}
            onClick={() => navigate(`/saga/${saga.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/saga/${saga.id}`)}
          >
            <img
              src={sagaImages[saga.id]}
              alt={`${saga.title} portada`}
              style={styles.image}
              loading="lazy"
            />
            <div style={styles.info}>
              <h2 style={styles.sagaTitle}>
                {saga.icon} {saga.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 1200,
    margin: "2rem auto",
    padding: "0 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#222",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    cursor: "pointer",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 320,
    objectFit: "cover",
    display: "block",
  },
  info: {
    padding: "0.75rem 1rem",
  },
  sagaTitle: {
    fontSize: "1.2rem",
    margin: 0,
    color: "#333",
    userSelect: "none",
  },
};
