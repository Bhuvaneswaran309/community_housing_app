import React, { useState } from "react";
import Dashboard from "../pages/Dashboard";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  // ---------------- ACTIVE PAGE STATE ----------------
  const [activePage, setActivePage] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
    { id: "bills", title: "Bills", icon: <ReceiptLongIcon /> },
    { id: "complaints", title: "Complaints", icon: <ReportProblemIcon /> },
  ];

  // ---------------- CONTENT AREA RENDER ----------------
  const renderPageContent = () => {
    switch (activePage) {
      case "dashboard":
        return < Dashboard />
      case "bills":
        return <h2>🧾 Bills Section</h2>;
      case "complaints":
        return <h2>📢 Complaints Section</h2>;
      default:
        return <h2>Welcome!</h2>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#eef3ff" }}>
      {/* ---------------- SIDEBAR ---------------- */}
      <Box
        sx={{
          width: "260px",
          background: "#ffffff",
          boxShadow: "2px 0 15px rgba(0,0,0,0.1)",
          paddingTop: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            sx={{ width: 80, height: 80, margin: "auto" }}
          />
          <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 600 }}>
            Community Housing
          </Typography>
        </div>

        {/* MENU ITEMS */}
        <List sx={{ marginTop: 4, flexGrow: 1 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              onClick={() => setActivePage(item.id)}
              sx={{
                marginBottom: 1,
                borderRadius: 2,
                background: activePage === item.id ? "#e0e7ff" : "transparent",
                "&:hover": { background: "#e8efff" },
              }}
            >
              <ListItemIcon
                sx={{
                  color: activePage === item.id ? "#3f51b5" : "#555",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>

        {/* LOGOUT BUTTON FIXED AT BOTTOM */}
        <Box sx={{ padding: 2 }}>
          <ListItem
            button
            onClick={() => navigate("/")}
            sx={{
              borderRadius: 2,
              "&:hover": { background: "#ffe6e6" },
            }}
          >
            <ListItemIcon sx={{ color: "red" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Box>
      </Box>

      {/* ---------------- MAIN CONTENT AREA ---------------- */}
      <div style={{ flex: 1, padding: "30px 50px" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 700 }}>
              {activePage === "dashboard"
                ? "Dashboard"
                : activePage === "bills"
                ? "Bills"
                : "Complaints"}
            </Typography>
          </Toolbar>
        </AppBar>

        {/* ACTUAL PAGE CONTENT */}
        <div style={{ marginTop: 20 }}>{renderPageContent()}</div>
      </div>
    </div>
  );
};

export default UserDashboard;
