import React from "react";
import { Container, Typography, Box, Grid, Button, Divider } from "@mui/material";
import ReactIcon from "@mui/icons-material/Code";
import NodeIcon from "@mui/icons-material/Terminal";
import NestIcon from "@mui/icons-material/DeveloperBoard";
import { CheckCircle, Info, AccountBox, Description } from "@mui/icons-material";

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
      {/* Welcome Section */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: 3,
          width: "100%",
          maxWidth: "700px",
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

      {/* New Information Section */}
      <Box sx={{ marginTop: "50px", width: "100%", maxWidth: "700px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", color: "#333" }}>
          Recursos Adicionais
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: "30px" }} justifyContent="center">
          <Grid item xs={4}>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "250px", // Definindo altura fixa
                minHeight: "250px", // Garante que o mínimo será de 250px
                justifyContent: "space-between", // Para alinhar os itens corretamente
              }}
            >
              <CheckCircle sx={{ fontSize: 50, color: "#4caf50" }} />
              <Typography variant="h6" sx={{ marginTop: "10px", color: "#333" }}>
                Acompanhamento Personalizado
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px", color: "#666" }}>
                Crie planos de alimentação e acompanhe seu progresso com precisão.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "250px", // Definindo altura fixa
                minHeight: "250px", // Garante que o mínimo será de 250px
                justifyContent: "space-between", // Para alinhar os itens corretamente
              }}
            >
              <Info sx={{ fontSize: 50, color: "#ffa000" }} />
              <Typography variant="h6" sx={{ marginTop: "10px", color: "#333" }}>
                Informações Importantes
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px", color: "#666" }}>
                Receba dicas e truques para melhorar sua saúde e bem-estar.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "250px", // Definindo altura fixa
                minHeight: "250px", // Garante que o mínimo será de 250px
                justifyContent: "space-between", // Para alinhar os itens corretamente
              }}
            >
              <AccountBox sx={{ fontSize: 50, color: "#1976d2" }} />
              <Typography variant="h6" sx={{ marginTop: "10px", color: "#333" }}>
                Perfil Completo
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px", color: "#666" }}>
                Gerencie suas preferências e configurações pessoais de maneira fácil.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Divider */}
      <Divider sx={{ margin: "50px 0", width: "100%", maxWidth: "700px" }} />

      {/* More Features Section */}
      <Box sx={{ width: "100%", maxWidth: "700px", marginBottom: "50px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", color: "#333" }}>
          Funcionalidades Extras
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: "30px" }} justifyContent="center">
          <Grid item xs={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4caf50",
                color: "white",
                paddingX: 3,
                paddingY: 2,
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
              startIcon={<Description />}
            >
              Planos de Alimentação
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2196f3",
                color: "white",
                paddingX: 3,
                paddingY: 2,
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1976d2",
                },
              }}
              startIcon={<NodeIcon />}
            >
              Conectividade de Dados
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e0234e",
                color: "white",
                paddingX: 3,
                paddingY: 2,
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
              }}
              startIcon={<CheckCircle />}
            >
              Resultados em Tempo Real
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
