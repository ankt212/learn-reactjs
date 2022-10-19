import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { toast } from "react-toastify";
import { postRegister } from "../../services/apiServices";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Language from "../Header/Language";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitRegister = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("In valid email");
      return;
    }
    if (!password) {
      toast.error("In valid password");
      return;
    }

    let data = await postRegister(email, username, password);
    console.log(">>> check respon ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <div className="register-container">
        <div className="header ">
          <span>You have an account ?</span>
          <button onClick={() => handleLogin()}>Sign in</button>
          <Language />
        </div>
        <div className="title col-4 mx-auto">An Peter</div>
        <div className="welcome col-4 mx-auto">Start your journey ?</div>
        <div className="content-form col-4 mx-auto">
          <div className="form-group">
            <label>Email (*)</label>
            <input
              type={"email"}
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Username (*)</label>
            <input
              type={"username"}
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group pass-group">
            <label>Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {isShowPassword ? (
              <span
                className="icons-eye"
                onClick={() => setIsShowPassword(false)}
              >
                <VscEye />
              </span>
            ) : (
              <span
                className="icons-eye"
                onClick={() => setIsShowPassword(true)}
              >
                <VscEyeClosed />
              </span>
            )}
          </div>
          <div>
            <button
              className="btn-submit"
              onClick={() => handleSubmitRegister()}
            >
              Create my account
            </button>
          </div>
          <div className=" text-center">
            <button
              className="btn-page"
              onClick={() => {
                navigate("/");
              }}
            >
              &lt; &lt; Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
