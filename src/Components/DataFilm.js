import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FilmContext } from "./FilmContext";

function DataFilm({ produto, filme }) {
  const item = produto || filme;
  const { films, setFilms } = useContext(FilmContext);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!item || !item.id) {
      setError("ID do produto inválido.");
      return;
    }

    setLoading(true);
    setError(null);

    // URL exata do MockAPI usada no projeto
    const cleanId = String(item.id).trim();
    const apiUrl = `https://671a3195acf9aa94f6a98dcc.mockapi.io/films/${cleanId}`;

    try {
      // 1. Envia requisição DELETE para a API
      await axios.delete(apiUrl);

      // 2. Atualiza o estado global no Context para remover da tabela imediatamente
      if (films && setFilms) {
        setFilms(films.filter((f) => String(f.id) !== cleanId));
      }

      setSuccess(true);

      // 3. Aguarda 1 segundo e redireciona para a página inicial
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Erro ao apagar produto:", err);
      setError(
          "Erro ao apagar o produto. Verifique se a ligação à API está ativa."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!item) return null;

  return (
      <div
          className="d-flex flex-column w-100 bg-dark text-light mt-4"
      >
        <div className="d-flex w-100 justify-content-center align-items-center">
          <div className="w-50 border border-info bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
            <h3 className="text-info fw-bold text-center mb-4">
              Confirmar Exclusão - CaoPuter Shop
            </h3>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            {success && (
                <div className="alert alert-success text-center">
                  Produto removido com sucesso! A redirecionar para a página inicial...
                </div>
            )}

            <div className="mb-2">
              <strong>ID:</strong> {item.id}
            </div>
            <div className="mb-2">
              <strong>Nome do Produto:</strong> {item.nome || item.name || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Categoria:</strong> {item.categoria || item.genero || "N/A"}
            </div>
            <div className="mb-4">
              <strong>Preço:</strong>{" "}
              {item.preco
                  ? `R$ ${item.preco}`
                  : item.ano
                      ? `R$ ${item.ano}`
                      : "N/A"}
            </div>

            <div className="d-flex justify-content-center">
              <button
                  onClick={handleDelete}
                  disabled={loading || success}
                  className="btn btn-danger me-3 fw-bold"
              >
                {loading ? "A apagar..." : "Apagar Produto"}
              </button>
              <Link to="/" className="btn btn-outline-light mx-2">
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DataFilm;