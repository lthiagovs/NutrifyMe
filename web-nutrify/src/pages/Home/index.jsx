import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";

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
          NutrifyMe
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
        
        <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              marginBottom: "10px",
              lineHeight: "1.6",
            }}
          >
            O <strong>NutrifyMe</strong> é uma plataforma desenvolvida para ajudar
            as pessoas a melhorar sua alimentação, oferecendo recomendações
            personalizadas baseadas em seus objetivos e preferências alimentares.
            Com uma interface fácil de usar e recursos inteligentes, ajudamos você
            a alcançar uma vida mais saudável.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#777",
              fontStyle: "italic",
              marginBottom: "10px",
            }}
          >
            Projeto criado utilizando as tecnologias:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#333",
              lineHeight: "1.6",
            }}
          >
            React, NestJS, Node.js
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          }}
          onClick={() => window.location.href = "/login"}
        >
          Começar
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
