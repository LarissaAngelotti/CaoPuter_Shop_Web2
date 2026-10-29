import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UpdateForm({ produto }) {
  const [values, setValues] = useState({
    nome: "",
    categoria: "",
    preco: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (produto) {
      setValues({
        nome: produto.nome || produto.name || "",
        categoria: produto.categoria || produto.genero || "",
        preco: produto.preco || produto.ano || "",
      });
    }
  }, [produto]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!values.nome || !values.categoria || !values.preco) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      await axios.put(
          `https://671a3195acf9aa94f6a98dcc.mockapi.io/films/${produto.id}`,
          values
      );
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      setError("Ocorreu um erro ao atualizar o produto.");
      console.error(err);
    }
  };

  return (
      <div
          className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-light position-relative"
          style={{ marginTop: "20px" }}
      >
        <div className="w-50 border border-secondary bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
          <h1 className="text-danger fw-bold text-center mb-4">Editar Produto - CaoPuter Shop</h1>

          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
              <div className="alert alert-success">
                Produto atualizado com sucesso!
              </div>
          )}

          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome do Produto:
              </label>
              <input
                  type="text"
                  name="nome"
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Ex: Notebook Gamer / Placa de Vídeo"
                  value={values.nome}
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
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Ex: Hardware, Periféricos, Notebooks"
                  value={values.categoria}
                  onChange={(e) => setValues({ ...values, categoria: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="preco" className="form-label">
                Preço (R$):
              </label>
              <input
                  type="text"
                  name="preco"
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Ex: 3499.99"
                  value={values.preco}
                  onChange={(e) => setValues({ ...values, preco: e.target.value })}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-success me-3">Atualizar</button>
              <Link to="/" className="btn btn-outline-light mx-2">
                Voltar
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
}

export default UpdateForm;
