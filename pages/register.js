import Header from "../notcomponents/Header";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";

class Register extends React.Component {
  state = {
    loginIsActive: true
  };

  activateLogin = () => {
    this.setState({ loginIsActive: true });
  };

  activateSignup = () => {
    this.setState({ loginIsActive: false });
  };

  render() {
    return (
      <div>
        {/* <Header colored /> */}
        <Navbar />
        {/* <Header /> */}
        <div className="registration-container">
          <div
            className={
              this.state.loginIsActive
                ? "container"
                : "container right-panel-active"
            }
            id="container"
          >
            <div class="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <br />
                <br />
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </form>
            </div>

            <div class="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <br />
                <br />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Link to="#">Forgot your password?</Link>
                <button>Sign In</button>
              </form>
            </div>

            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    onClick={() => this.activateLogin()}
                    class="ghost"
                    id="signIn"
                  >
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    onClick={() => this.activateSignup()}
                    class="ghost"
                    id="signUp"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          * {
            box-sizing: border-box;
          }

          /* body {
          background: #f6f5f7;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-family: "Montserrat", sans-serif;
          height: 100vh;
          margin: -20px 0 50px;
        } */

          .registration-container h1 {
            font-weight: bold;
            margin: 0;
          }

          .registration-container h2 {
            text-align: center;
          }

          .registration-container p {
            font-size: 14px;
            /*font-weight: 100;*/
            line-height: 20px;
            letter-spacing: 0.5px;
            margin: 20px 0 30px;
          }

          .registration-container span {
            font-size: 12px;
          }

          .registration-container a {
            font-size: 14px;
            text-decoration: none;
            margin: 15px 0;
            color: #333;
          }

          .registration-container button {
            border-radius: 20px;
            border: 1px solid var(--accent-color);
            background-color: var(--accent-color);
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            margin: 0 auto;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: transform 80ms ease-in;
          }

          .registration-container button:active {
            transform: scale(0.95);
          }

          .registration-container button:focus {
            outline: none;
          }

          .registration-container button.ghost {
            background-color: transparent;
            border-color: white;
            /*border-color: var(--charcoal-color);
          color: var(--charcoal-color);*/
          }

          .registration-container form {
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 50px;
            height: 100%;
            text-align: center;
          }

          .registration-container input {
            background-color: #eee;
            border: none;
            padding: 12px 15px;
            margin: 8px 0;
            width: 100%;
          }

          .registration-container {
            display: grid;
            height: 80vh;
          }

          .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
            position: relative;
            overflow: hidden;
            width: 768px;
            max-width: 100%;
            min-height: 480px;

            justify-self: center;
            align-self: center;
          }

          .form-container {
            position: absolute;
            top: 0;
            height: 100%;
            transition: all 0.6s ease-in-out;
          }

          .sign-in-container {
            left: 0;
            width: 50%;
            z-index: 2;
          }

          .container.right-panel-active .sign-in-container {
            transform: translateX(100%);
          }

          .sign-up-container {
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
          }

          .container.right-panel-active .sign-up-container {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: show 0.6s;
          }

          @keyframes show {
            0%,
            49.99% {
              opacity: 0;
              z-index: 1;
            }

            50%,
            100% {
              opacity: 1;
              z-index: 5;
            }
          }

          .overlay-container {
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform 0.6s ease-in-out;
            z-index: 100;
          }

          .container.right-panel-active .overlay-container {
            transform: translateX(-100%);
          }

          .overlay {
            background: var(--accent-color);
            /* background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c); */
            /* background: linear-gradient(to right, #ff4b2b, #ff416c); */
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 0 0;
            color: var(--charcoal-color);
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            transform: translateX(0);
            transition: transform 0.6s ease-in-out;
          }

          .container.right-panel-active .overlay {
            transform: translateX(50%);
          }

          .overlay-panel {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            text-align: center;
            top: 0;
            height: 100%;
            width: 50%;
            transform: translateX(0);
            transition: transform 0.6s ease-in-out;

            color: white;
          }

          .overlay-left {
            transform: translateX(-20%);
          }

          .container.right-panel-active .overlay-left {
            transform: translateX(0);
          }

          .overlay-right {
            right: 0;
            transform: translateX(0);
          }

          .container.right-panel-active .overlay-right {
            transform: translateX(20%);
          }

          @media only screen and (max-width: 599px) {
          }
        `}</style>
      </div>
    );
  }
}

export default Register;
