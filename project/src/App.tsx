import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import "./App.css";

function App()
{
  return <div>
    <center><h1><a className="headings" href="/">MY-STORE</a></h1></center>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/l" element={<Login />}></Route>
      <Route path="/p" element={<Products />}></Route>
      <Route path="/s" element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}
export default App;