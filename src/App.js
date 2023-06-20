import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import favicon from "./assets/img/Logo_JDev.ico";

function App() {
  const faviconElement = document.querySelector('link[rel="icon"]');
  faviconElement.href = favicon;
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
