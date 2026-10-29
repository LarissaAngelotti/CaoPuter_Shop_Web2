import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import Create from "Pages/Create";
import Update from "Pages/Update";
import Read from "Pages/Read";
import Menu from "Components/Menu";
import Footer from "Components/Footer";
import Delete from "Pages/Delete";
import "bootstrap/dist/css/bootstrap.min.css";
import { FilmProvider } from "Components/FilmContext";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <FilmProvider>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </div>
      </FilmProvider>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
