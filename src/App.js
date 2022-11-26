//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <NavBar />
      <ItemListContainer>
        <span style={{ color: "black", fontSize: 25 }}>
          Sean Bienvenidos al e-Comerce de <strong>"La Monoco"</strong>
        </span>
      </ItemListContainer>
    </div>
  );
}

export default App;
