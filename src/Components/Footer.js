import React from "react";

const Footer = () => {
  return (
      <footer className="bg-dark text-light text-center py-3 border-top border-secondary mt-auto">
        <p className="mb-0">
          CaoPuter Shop &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </footer>
  );
};

export default Footer;
