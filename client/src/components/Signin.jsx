import { useForm } from "react-hook-form";
import styles from "./styles/Signin.module.css";
import logo from "../assets/chatter-logo1.png";
import { IconContext } from "react-icons";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";
import Title from "./shared/Title";

const Login = ({ changeState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Add your login logic here
    console.log("Form Data:", data);
  };

  return (
    <div className={styles.container}>
      <Title title="chatterbox || Login" description="this is chat page" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <h2 className={styles.heading}>Login</h2>
        <div className={styles.socialLogin}>
          <button
            type="button"
            className={`${styles.socialButton} ${styles.google}`}
          >
            <FcGoogle className={styles.socialIcon} />
          </button>
          <button
            type="button"
            className={`${styles.socialButton} ${styles.facebook}`}
          >
            <FaFacebook className={styles.socialIcon} />
          </button>
          <button
            type="button"
            className={`${styles.socialButton} ${styles.github}`}
          >
            <FaGithub className={styles.socialIcon} />
          </button>
        </div>
        <div className={styles.separator}>or</div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={styles.input}
              {...register("password", {
                required: "Password is required",
              })}
            />
            <button
              type="button"
              className={styles.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              <IconContext.Provider value={{ size: 30 }}>
                {showPassword ? <IoIosEyeOff /> : <IoMdEye />}
              </IconContext.Provider>
            </button>
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>
        <div className={styles.options}>
          <label className={styles.checkbox}>
            <input type="checkbox" {...register("remember")} />
            Remember me
          </label>
          <a href="/forgot-password" className={styles.forgotPassword}>
            Forgot password?
          </a>
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        <p className={styles.signup}>
          Don&apos;t have an account yet?{" "}
          <button
            type="button"
            className={styles.signupLink}
            onClick={changeState}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
  changeState: PropTypes.func.isRequired,
};

export default Login;
