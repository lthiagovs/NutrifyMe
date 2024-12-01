import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./style.css";
import api from "../../services/api"

const ConsultationPage = () => {
  const [events, setEvents] = useState([]); // Estado para armazenar os eventos do calendário
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    email: "",
    bodyType: "",
    date: "",
    time: "",
  });

  // Função para buscar as consultas da API
  async function getConsultations() {
    try {
      const response = await api.get("/consultations"); // Faz a requisição para buscar as consultas
      const consultations = response.data;

      // Convertendo as consultas da API para o formato adequado para o calendário
      const formattedConsultations = consultations.map((consultation) => {
        const start = new Date(consultation.start);
        const end = new Date(consultation.end);

        return {
          title: `${consultation.name} (${consultation.bodyType})`,
          name: consultation.name,
          email: consultation.email,
          bodyType: consultation.bodyType,
          start: start.toISOString(),
          end: end.toISOString(),
        };
      });

      setEvents(formattedConsultations); // Atualizando o estado com as consultas formatadas
    } catch (error) {
      console.error("Erro ao carregar as consultas:", error);
    }
  }

  // Função para salvar a consulta
  async function saveConsultation(eventData) {
    try {
      await api.post("/consultations", {
        number: "1",
        name: eventData.name,
        email: eventData.email,
        bodyType: eventData.bodyType,
        start: eventData.start,
        end: eventData.end,
      });
      console.log("Consulta salva:", eventData);
    } catch (error) {
      console.error("Erro ao salvar consulta:", error);
    }
  }

  // Função chamada ao selecionar uma data no calendário
  const handleDateSelect = (selectInfo) => {
    setModalOpen(true);
    setNewEvent({
      name: "",
      email: "",
      bodyType: "",
      date: selectInfo.startStr.split("T")[0], // Apenas a data
      time: "",
    });
  };

  // Fechar a modal
  const handleModalClose = () => {
    setModalOpen(false);
    setNewEvent({ name: "", email: "", bodyType: "", date: "", time: "" });
  };

  // Salvar a nova consulta e atualizar o calendário
  const handleModalSave = async () => {
    // Combinar data e hora em um único valor ISO para `start`
    const start = new Date(`${newEvent.date}T${newEvent.time}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // Adiciona 1 hora

    const eventData = {
      title: `${newEvent.name} (${newEvent.bodyType})`,
      name: newEvent.name,
      email: newEvent.email,
      bodyType: newEvent.bodyType,
      start: start.toISOString(),
      end: end.toISOString(),
    };

    // Atualiza eventos no calendário
    setEvents([...events, eventData]);

    // Salva no banco de dados
    await saveConsultation(eventData);

    handleModalClose();
  };

  useEffect(() => {
    getConsultations(); // Carrega as consultas ao iniciar a página
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: "50px auto",
        padding: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Agendar Consultas
      </Typography>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        selectable
        editable
        events={events}
        select={handleDateSelect}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        locale="pt-br"
      />

      <Dialog open={modalOpen} onClose={handleModalClose}>
        <DialogTitle>Agendar Consulta</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome do Paciente"
            type="text"
            fullWidth
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={newEvent.email}
            onChange={(e) => setNewEvent({ ...newEvent, email: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Tipo Corporal</InputLabel>
            <Select
              value={newEvent.bodyType}
              onChange={(e) => setNewEvent({ ...newEvent, bodyType: e.target.value })}
            >
              <MenuItem value="Ectomorfo">Ectomorfo</MenuItem>
              <MenuItem value="Mesomorfo">Mesomorfo</MenuItem>
              <MenuItem value="Endomorfo">Endomorfo</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Data"
            type="date"
            fullWidth
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Hora de Início"
            type="time"
            fullWidth
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleModalSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ConsultationPage;
