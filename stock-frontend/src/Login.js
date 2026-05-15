import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("LOGIN RESPONSE:", result); // debug

      const user = result.user;

      if (!user || !user.email) {
        alert("Login failed ❌ No email found");
        return;
      }

      // Save user
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ FORCE REDIRECT TO STREAMLIT (FIXED)
      window.open(
  `https://stock-predictor-nyo7pgbptgema3qnwhw86n.streamlit.app/?user=${encodeURIComponent(user.email)}`,
  "_self"
);

    } catch (error) {
      console.error("LOGIN ERROR:", error);
      alert("Google Login Failed ❌");
    }
  };

  return (
    <div className="container">

      {/* LEFT SIDE LOGIN */}
      <div className="login-box">
        <h2>LOGIN</h2>
        <p>Welcome back! Login to continue</p>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login Now</button>

        <p className="divider">or login with</p>

        {/* GOOGLE BUTTON */}
        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="google"
          />
          Login with Google
        </button>

        {/* FACEBOOK BUTTON (UI ONLY) */}
        <button className="fb-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt="facebook"
          />
          Login with Facebook
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="right">
        <img
          src="https://cdn.dribbble.com/users/1787323/screenshots/15419333/media/4f2d7b06dc9d98b81f6e2d06b1e0dab7.png"
          alt="stock"
        />
      </div>

    </div>
  );
}

export default Login;