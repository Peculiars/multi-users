"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "@/constants/users";
import { UserType } from "@/types/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    let userType: UserType = null;
    if (username === users.admin.username && password === users.admin.password) {
      userType = "admin";
    } else if (username === users.editor.username && password === users.editor.password) {
      userType = "editor";
    } else if (username === users.viewer.username && password === users.viewer.password) {
      userType = "viewer";
    } else {
      setError("Invalid credentials");
      return;
    }

    localStorage.setItem("userType", userType);
    switch (userType) {
      case "admin":
        router.push("/admin-dashboard");
        break;
      case "editor":
        router.push("/editor-dashboard");
        break;
      case "viewer":
        router.push("/viewer-dashboard");
        break;
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="heading-text">Welcome back!</h1>
        <h2 className="subheading-text">Login with your role credentials</h2>

        <div className="form-wrapper">
          <div>
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" className="form-input" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-input" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button onClick={handleLogin} className="login-btn">
            Login
          </button>
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
