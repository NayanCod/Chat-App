import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider.jsx";
import Left from "./home/left/Left";
import Logout from "./home/left1/Logout";
import Right from "./home/right/Right";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup/>} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login/>} />
      </Routes>
    </>
  );
}

export default App;
