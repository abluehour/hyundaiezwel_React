import "./App.css";
import Header from "./component/Header";
import Content from "./component/Content";
import Nav from "./component/Nav";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
