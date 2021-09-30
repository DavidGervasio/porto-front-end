import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./shared/components/header/Header";
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
