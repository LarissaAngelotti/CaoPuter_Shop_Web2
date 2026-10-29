import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="d-flex flex-column align-items-center bg-dark text-light w-100 p-3 top-0 border-bottom border-primary position-relative">
            <h1 className="text-info fw-bold">CaoPuter Shop</h1>

            <div className="d-flex justify-content-center mt-2">
                <Link to="/" className="btn btn-outline-info mx-2">
                    Início
                </Link>
                <Link to="/create" className="btn btn-outline-success mx-2">
                    Criar
                </Link>
                <Link to="/update" className="btn btn-outline-warning mx-2">
                    Editar
                </Link>
                <Link to="/delete" className="btn btn-outline-danger mx-2">
                    Remover
                </Link>
            </div>
        </div>
    );
};

export default Menu;