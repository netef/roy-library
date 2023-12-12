import { Routes, Route } from "react-router-dom";

import "./page.css";
import Home from "./pages/home/home";
import UserPage from "./pages/userPage/userPage";
import { home, login, register, user } from "./components/utils/constants";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
function App() {
    return (
        <Routes>
            <Route path={home} element={<Home />} />
            <Route path={user} element={<UserPage />} />
            <Route path={register} element={<Register />} />
            <Route path={login} element={<Login />} />
        </Routes>
    );
}

export default App;
