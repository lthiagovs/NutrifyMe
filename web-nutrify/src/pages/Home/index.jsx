import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import ReactIcon from "@mui/icons-material/Code";
import NodeIcon from "@mui/icons-material/Terminal";
import NestIcon from "@mui/icons-material/DeveloperBoard";

const HomePage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: 3,
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#4caf50" }}>
          Bem-vindo ao NutrifyMe!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "10px",
            color: "#333",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Um projeto para promover um estilo de vida saudável!
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: "40px" }} justifyContent="center">
          <Grid item>
            <ReactIcon sx={{ fontSize: 50, color: "#61dafb" }} />
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              React
            </Typography>
          </Grid>
          <Grid item>
            <NodeIcon sx={{ fontSize: 50, color: "#68a063" }} />
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Node.js
            </Typography>
          </Grid>
          <Grid item>
            <NestIcon sx={{ fontSize: 50, color: "#e0234e" }} />
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              NestJS
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
