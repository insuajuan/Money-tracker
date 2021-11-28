import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import Login from "./views/login/Login";
import OperationForm from "./views/form/OperationForm";
import Register from "./views/register/Register";
import Home from "./views/home/Home";
import { useContext  } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  function PrivateRoute ({children}) {
    const { user } = useContext(AuthContext);
    return user ? children : <Navigate to="/login" />;}

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={ <PrivateRoute> <OperationForm /> </PrivateRoute>} />
        <Route path='/edit' element={ <PrivateRoute> <OperationForm /> </PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
