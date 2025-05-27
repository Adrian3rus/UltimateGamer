import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = "d3ca76507f4042a2a090f886eb08011b";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function TarjetaJuego({ juego }) {
  return (
    <div className="card h-100">
      {juego.background_image && (
        <img src={juego.background_image} className="card-img-top" alt={juego.name} />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{juego.name}</h5>
        <p className="card-text">📅 {juego.released}</p>
        <p className="card-text">⭐ {juego.rating} / 5</p>
        <button className="btn btn-primary mt-auto">Comprar</button>

      </div>
    </div>
  );
}

export default function ListaDeJuegos() {
  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const query = useQuery();
  const searchTerm = query.get("search") || "";

  useEffect(() => {
    setCargando(true);
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&search=${searchTerm}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJuegos(data.results);
        setCargando(false);
      })
      .catch((err) => {
        setError("No se pudieron cargar los juegos.");
        setCargando(false);
      });
  }, [searchTerm]);

  if (cargando) return <p>Cargando juegos...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!juegos.length) return <p>No se encontraron juegos.</p>;

  return (
    <div className="row g-4">
      {juegos.map((juego) => (
        <div key={juego.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <TarjetaJuego juego={juego} />
        </div>
      ))}
    </div>
  );
}
