import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Provider from "./components/Provider/provider";
import RoutesWithNotFound from "./components/router/RoutesWithNotFound";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import ProductList from "./pages/Products";
import ProductDetail from "./pages/ProdDetail";

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
              <Route path="products" element={<ProductList />} />
              <Route path="/products/:product" element={<ProductDetail />} />
            </RoutesWithNotFound>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
