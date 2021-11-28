import axios from "axios";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate ();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("auth/register", user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      };
  };

  return (
    <div className="register">
      <div className="registerContainer m-5">
        <div className="registerLeft mb-5">
          <h3 className="registerLogo pb-2">MoneyTracker</h3>
          <span className="registerDesc">
            Take control of your income and expenses
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              required
              ref={email}
              className="form-control mb-4 registerInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="form-control mb-4 registerInput"
              type="password"
              minLength="6"
            />
            <div className="d-grid gap-2">
                <button className="btn btn-primary mb-2 registerButton" type="submit">
                Register
                </button>
            </div>
            
            <a href="/login">Already have an account?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register