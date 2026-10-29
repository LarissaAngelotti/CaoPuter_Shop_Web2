import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({ nome: "", categoria: "", preco: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.nome || !values.categoria || !values.preco) {
      setError("Todos os campos são obrigatórios.");
      return;
    } else {
      setError(null);
    }

    axios
        .post("https://671a3195acf9aa94f6a98dcc.mockapi.io/films", values)
        .then((res) => {
          setSuccessMessage("Sucesso! Produto cadastrado com sucesso.");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          setError("Ocorreu um erro ao cadastrar o produto.");
          console.error(err);
        });
  };

  return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-light">
        <div className="w-50 border border-info bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
          <h1 className="text-info text-center mb-4 fw-bold">Adicionar Produto - CaoPuter Shop</h1>
          {error && <div className="alert alert-danger">{error}</div>}

          {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome do Produto:
              </label>
              <input
                  type="text"
                  name="nome"
                  className="form-control bg-dark text-light border-info"
                  placeholder="Ex: Mouse Gamer RGB / Monitor 144Hz"
                  onChange={(e) => setValues({ ...values, nome: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">
                Categoria:
              </label>
              <input
                  type="text"
                  name="categoria"
                  className="form-control bg-dark text-light border-info"
                  placeholder="Ex: Periféricos, Hardware, Monitores"
                  onChange={(e) => setValues({ ...values, categoria: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="preco" className="form-label">
                Preço (R$):
              </label>
              <input
                  type="text"
                  name="preco"
                  className="form-control bg-dark text-light border-info"
                  placeholder="Ex: 299.90"
                  onChange={(e) => setValues({ ...values, preco: e.target.value })}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-info text-dark fw-bold me-3">Enviar</button>
              <Link to="/" className="btn btn-outline-light mx-2">
                Voltar
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Create;