import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Provider from "./components/Provider/provider";
import RoutesWithNotFound from "./components/router/RoutesWithNotFound";
import Home from "./pages/Home/Home";
import MyCart from "./pages/MyCart/MyCart";
import ProductList from "./pages/Products/Products";
import ProductDetail from "./pages/ProdDetail/ProdDetail";

// import dBase from "./firebase/config";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Layout>
            <RoutesWithNotFound path="*">
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="myCart" element={<MyCart />} />
              <Route path="Makita" element={<ProductList brand="Makita" />} />
              <Route path="Makita/:productId" element={<ProductDetail />} />
              <Route path="Skil" element={<ProductList brand="Skil" />} />
              <Route path="Skil/:productId" element={<ProductDetail />} />
              <Route
                path="B_Decker"
                element={<ProductList brand="B_Decker" />}
              />
              <Route path="B_Decker/:productId" element={<ProductDetail />} />
            </RoutesWithNotFound>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
