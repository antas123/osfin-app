import loginImage from "../../assets/loginImage.png";
import Input from "../../customInputComponents/Input";
import styles from "./Login.module.css";
import subtract from "../../assets/Subtract.png";
import Button from "../../customInputComponents/Button";
import { useState } from "react";

const LoginScreen = ({ setIsLoggedIn, setNonLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passWordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false)
  const handleGoToPlatform = () => {
    setNonLoggedIn(true);
  };

  const handleLogin = () => {
    let valid = true;

    // Email validation
    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email.");
      valid = false;
    } else {
      setEmailError(""); // Clear error if valid
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    } else {
      setPasswordError(""); // Clear error if valid
    }

    // Proceed with login if valid
    if (valid) {
      localStorage.setItem("isLoggedIn", "true");
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setIsLoggedIn(true);
      }, 2000);
    }
  };

  console.log(email, "joker4");
  return (
    <div className={styles.container}>
      {
        loading && <div className={styles.loader}></div>
      }
      <div style={{ flex: 2.5 }}>
        <img
          src={loginImage}
          alt="login-image"
          height={"100%"}
          width={"100%"}
        />
      </div>

      <div className={styles.box}>
        <div className={styles.logo}>
          <img src={subtract} alt="" height={31} width={32} />
          <h3 style={{ margin: 5 }}>Trailbliss</h3>
        </div>
        <p className={styles.heading}>Nice to see you again</p>
        <div className={styles.loginBox}>
          <Input
            placeholder={"Enter Email Address"}
            containerStyle={styles.inputSpacing}
            label={"Email"}
            onChange={(val) => setEmail(val)}
            error={emailError}
          />
          <Input
            error={passWordError}
            placeholder={"Enter Password"}
            label={"Password"}
            onChange={(val) => setPassword(val)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 80,
            }}
          >
            <div className={styles.toggleBox}>
              <label className={styles.toggle}>
                <input type="checkbox" />
                <span className={styles.slider}></span>
              </label>
              <p className={styles.labelTag}>Remember me</p>
            </div>
            <p className={styles.forgotText}>Forgot password?</p>
          </div>
          <Button
            onClick={handleLogin}
            label={"Login"}
            backgroundColor={"black"}
            width={325}
          />
        </div>
        <p onClick={handleGoToPlatform} className={styles.bottomText}>
          Continue without login?{" "}
          <span className={styles.platform}>Go to platform</span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
