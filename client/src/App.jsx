import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ProtectedPage from "./components/ProtectedPage";
import Spinner from "./components/Spinner";

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
        {loading && <Spinner />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedPage><Home /></ProtectedPage>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
