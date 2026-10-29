import React, { useContext, useState } from "react";
import UpdateForm from "./UpdateForm";
import { Link, useLocation } from "react-router-dom";
import { FilmContext } from "./FilmContext";
import DataFilm from "./DataFilm";

function IdForm() {
  const { films } = useContext(FilmContext);
  const location = useLocation();
  const path = location.pathname;

  const [id, setID] = useState("");
  const [error, setError] = useState(null);

  const [product, setProduct] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const SearchID = (e) => {
    e.preventDefault();
    if (!id) {
      setError("Campo obrigatório!");
      return;
    } else {
      setError(null);
    }

    setFormSubmitted(true);
    let p = films.find((film) => film.id === String(id));
    setProduct(p || null);
  };

  return (
      <div
          className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-light flex-column"
          style={{ marginTop: "70px" }}
      >
        <div className="w-50 border border-info bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
          <h1 className="text-info fw-bold text-center mb-4">Procurar ID - CaoPuter Shop</h1>
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={SearchID}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                ID do Produto:
              </label>
              <input
                  type="text"
                  name="id"
                  className="form-control bg-dark text-light border-info"
                  placeholder="Digite o ID do produto"
                  onChange={(e) => setID(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-info text-dark fw-bold me-3">Encontrar</button>
              <Link to="/" className="btn btn-outline-light mx-2">
                Voltar
              </Link>
            </div>
          </form>
        </div>

        {product ? (
            path === "/update" ? (
                <UpdateForm produto={product} />
            ) : (
                <DataFilm produto={product} />
            )
        ) : (
            formSubmitted && (
                <div className="alert alert-danger mt-4 text-center">
                  <p>Produto não encontrado. Deseja voltar à página inicial?</p>
                  <Link to="/" className="btn btn-secondary mt-3">
                    Voltar
                  </Link>
                </div>
            )
        )}
      </div>
  );
}

export default IdForm;