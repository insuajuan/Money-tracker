import { loginCall } from "../../apiCalls";
import { useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate ();
  const { dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
        email: email.current.value,
        password: password.current.value,
      };
      loginCall(user, dispatch);
      navigate('/')
  };

  return (
    <div className="sign">
      <div className="signContainer m-5">
        <div className="signLeft mb-5">
          <h3 className="signLogo pb-2">MoneyTracker</h3>
          <span className="signDesc">
            Take control of your income and expenses
          </span>
        </div>
        <div className="signRight">
          <form className="signBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              required
              ref={email}
              className="form-control mb-4 signInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="form-control mb-4 signInput"
              type="password"
              minLength="6"
            />
            <div className="d-grid gap-2">
                <button className="btn btn-primary mb-2 signButton" type="submit">
                Log In
                </button>
            </div>
            
            <a href="/register">Don't have an account?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login