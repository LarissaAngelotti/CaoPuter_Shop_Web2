import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
        .get("https://671a3195acf9aa94f6a98dcc.mockapi.io/films/" + id)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
  }, [id]);

  return (
      <div
          className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-light"
          style={{ marginTop: "70px" }}
      >
        <div className="w-50 border border-info bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
          <h3 className="text-info fw-bold text-center mb-4">
            Detalhes do Produto - CaoPuter Shop
          </h3>

          <div className="mb-3">
            <strong>ID: </strong> {data.id}
          </div>

          <div className="mb-3">
            <strong>Nome do Produto: </strong> {data.nome || data.name || "N/A"}
          </div>

          <div className="mb-3">
            <strong>Categoria: </strong> {data.categoria || data.genero || "N/A"}
          </div>

          <div className="mb-4">
            <strong>Preço: </strong>{" "}
            {data.preco
                ? `R$ ${data.preco}`
                : data.ano
                    ? `R$ ${data.ano}`
                    : "N/A"}
          </div>

          <div className="d-flex justify-content-center">
            <Link to={`/update/${id}`} className="btn btn-warning me-3">
              Editar
            </Link>
            <Link to="/" className="btn btn-outline-light mx-2">
              Voltar
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Read;