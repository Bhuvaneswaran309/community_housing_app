import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setRole, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) return alert("Enter credentials");

    let role = "owner";
    if (email === "admin@apt.com") role = "admin";
    else if (email.endsWith("@rent.com")) role = "renter";

    setUser({ email });
    setRole(role);

    role === "admin" ? navigate("/admin") : navigate("/home");
  };

  return (
    <div style={styles.container}>
      {/* LEFT IMAGE */}
      <div style={styles.leftPanel}>
        <div style={styles.overlayText}>
          <h2 style={{ color: "white", fontSize: 32 }}>
            Manage Properties Effortlessly
          </h2>
          <p style={{ color: "#eaeaea", fontSize: 16 }}>
            Track rent payments, manage maintenance, and communicate easily.
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN FORM */}
      <Card style={styles.rightCard}>
        <div style={{ width: "80%" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: 700, marginBottom: 10 }}
          >
            Welcome Back 👋
          </Typography>

          <Typography color="textSecondary" style={{ marginBottom: 30 }}>
            Sign in to continue to Community Housing
          </Typography>

          <TextField
            label="Your Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            sx={{
              input: { background: "#f8f9fd", borderRadius: 1 },
            }}
          />

          <TextField
            label="Password"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            sx={{
              input: { background: "#f8f9fd", borderRadius: 1 },
            }}
          />

          {/* REMEMBER + FORGOT PASSWORD */}
          <div style={styles.rememberRow}>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />
            <a href="#" style={styles.forgotLink}>
              Forgot password?
            </a>
          </div>

          {/* LOGIN BUTTON */}
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            style={styles.loginButton}
          >
            Login
          </Button>

          {/* REGISTER LINK */}
          <Typography style={{ marginTop: 20 }}>
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{
                color: "#1976d2",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Register
            </span>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#f4f7ff",
  },
  leftPanel: {
    flex: 1,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px 0 0 20px",
    position: "relative",
  },
  overlayText: {
    position: "absolute",
    bottom: 40,
    left: 40,
    maxWidth: "70%",
  },
  rightCard: {
    flex: 1,
    borderRadius: "0 20px 20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    background: "white",
  },
  rememberRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  forgotLink: {
    fontSize: 14,
    color: "#1976d2",
    textDecoration: "none",
  },
  loginButton: {
    padding: "12px 0",
    background: "#1976d2",
    fontSize: 16,
    borderRadius: 10,
    marginTop: 10,
  },
};

export default Login;
