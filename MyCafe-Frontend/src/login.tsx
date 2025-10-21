import React, { useState } from "react";
import type { LoginData } from "./services/AuthService";
import { login } from "./services/AuthService";
import DashboardWithSidebar from "./dashboard";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data: LoginData = { email, password };
      await login(data);
      setIsLoggedIn(true); // login success
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    }
  };

  if (isLoggedIn) {
    return <DashboardWithSidebar />; // Show dashboard on success
  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e6f2e6",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: { textAlign: "center", color: "#2e7d32", marginBottom: "20px" },
  label: { marginBottom: "5px", color: "#2e7d32", fontWeight: 500 },
  input: { marginBottom: "15px", padding: "10px", borderRadius: "5px", border: "1px solid #2e7d32" },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#2e7d32",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: { color: "red", marginBottom: "10px", textAlign: "center" },
};
