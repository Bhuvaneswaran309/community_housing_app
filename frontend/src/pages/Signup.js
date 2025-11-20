import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup:", { name, email });

    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* LEFT IMAGE PANEL */}
      <div style={styles.leftPanel}>
        <div style={styles.overlayText}>
          <h2 style={{ color: "white", fontSize: 32 }}>Create Your Account</h2>
          <p style={{ color: "#eaeaea", fontSize: 16 }}>
            Join Community Housing and manage your property efficiently.
          </p>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <Card style={styles.rightCard}>
        <div style={{ width: "80%" }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginBottom: 10 }}>
            Get Started 🚀
          </Typography>

          <Typography color="textSecondary" style={{ marginBottom: 30 }}>
            Create a new account to continue
          </Typography>

          {/* FULL NAME */}
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ input: { background: "#f8f9fd", borderRadius: 1 } }}
          />

          {/* EMAIL */}
          <TextField
            label="Your Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ input: { background: "#f8f9fd", borderRadius: 1 } }}
          />

          {/* PASSWORD */}
          <TextField
            label="Password"
            fullWidth
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ input: { background: "#f8f9fd", borderRadius: 1 } }}
          />

          {/* CONFIRM PASSWORD */}
          <TextField
            label="Confirm Password"
            fullWidth
            type="password"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ input: { background: "#f8f9fd", borderRadius: 1 } }}
          />

          {/* CHECKBOX */}
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the Terms & Conditions"
            style={{ marginTop: 10 }}
          />

          {/* SIGNUP BUTTON */}
          <Button
            variant="contained"
            fullWidth
            onClick={handleSignup}
            style={styles.signupButton}
          >
            Create Account
          </Button>

          {/* LOGIN LINK */}
          <Typography style={{ marginTop: 25 }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              style={{ color: "#1976d2", cursor: "pointer", fontWeight: 600 }}
            >
              Login
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0 20px 20px 0",
    boxShadow: "none",
    background: "white",
  },
  signupButton: {
    padding: "12px 0",
    background: "#1976d2",
    fontSize: 16,
    borderRadius: 10,
    marginTop: 10,
  },
};

export default Signup;
