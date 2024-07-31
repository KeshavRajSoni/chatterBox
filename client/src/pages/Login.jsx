import { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const changeState = () => {
    setIsLogin(!isLogin);
  };
  return isLogin ? (
    <Signin changeState={changeState} />
  ) : (
    <Signup changeState={changeState} />
  );
}

export default Login;
