import { createContext, useState } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  return (
      <FilmContext.Provider value={{ films, setFilms }}>
        {children}
      </FilmContext.Provider>
  );
};