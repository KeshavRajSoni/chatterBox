import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles/Signup.module.css";
import logo from "../assets/chatter-logo1.png";
import { IconContext } from "react-icons";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";
import Title from "./shared/Title";

const Register = ({ changeState }) => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Add your registration logic here
    console.log("Form Data:", data);
  };

  return (
    <div className={styles.container}>
      <Title title="chatterbox || Register" description="this is chat page" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <h2 className={styles.heading}>Register</h2>
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
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.input}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="mobile" className={styles.label}>
            Mobile No.
          </label>
          <input
            type="text"
            id="mobile"
            className={styles.input}
            {...register("mobile", {
              required: "Mobile number is required",
              validate: (value) => {
                const regex = /^[0-9]{10}$/;
                return regex.test(value) || "not a valid number";
              },
            })}
          />
          {errors.mobile && (
            <span className={styles.error}>{errors.mobile.message}</span>
          )}
        </div>
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
                // minLength: {
                //   value: 8,
                //   message: "Password must be at least 8-15 characters long",
                // },
                // maxLength: {
                //   value: 15,
                //   message: "Password must be at least 8-15 characters long",
                // },
                // validate: {
                //   uppercase: (value) =>
                //     /[A-Z]/.test(value) ||
                //     "Must include at least one uppercase letter",
                //   lowercase: (value) =>
                //     /[a-z]/.test(value) ||
                //     "Must include at least one lowercase letter",
                //   number: (value) =>
                //     /[0-9]/.test(value) || "Must include at least one number",
                //   specialCharacter: (value) =>
                //     /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                //     "Must include at least one special character",
                // },
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

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password
          </label>
          <div className={styles.passwordContainer}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              }}
              render={({ field }) => (
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.input}
                  {...field}
                />
              )}
            />
          </div>
          {errors.confirmPassword && (
            <span className={styles.error}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Register
        </button>
        <p className={styles.signin}>
          Already have an account?{" "}
          <button
            type="button"
            className={styles.signinLink}
            onClick={changeState}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

Register.propTypes = {
  changeState: PropTypes.func.isRequired,
};

export default Register;
