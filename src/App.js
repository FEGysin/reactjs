import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import NavBar from "./components/Layout/components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home";
import ProductList from "./pages/Products";
import ProductDetail from "./pages/ProdDetail";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemListContainer>
        <span style={{ color: "black", fontSize: 25 }}>
          Sean Bienvenidos al e-Comerce de <strong>"La Monoco"</strong>
        </span>
      </ItemListContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Products" element={<ProductList />}>
          <Route path=":Product" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
