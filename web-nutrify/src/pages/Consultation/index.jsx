import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import './style.css';

const ConsultationPage = () => {
  const [events, setEvents] = useState([
    { title: 'Consulta 1', date: '2024-11-28' },
    { title: 'Consulta 2', date: '2024-11-29' },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo);
    setModalOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Deseja deletar a consulta "${clickInfo.event.title}"?`)) {
      clickInfo.event.remove();
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNewEvent({ title: '', start: '', end: '' });
  };

  const handleModalSave = () => {
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect();

    if (newEvent.title) {
      setEvents([
        ...events,
        {
          id: String(events.length + 1),
          title: newEvent.title,
          start: selectedDate.startStr,
          end: selectedDate.endStr,
        },
      ]);
    }

    handleModalClose();
  };

  return (
    <Box 
      sx={{
        maxWidth: 900, 
        margin: '50px auto', 
        padding: 3, 
        borderRadius: 2, 
        backgroundColor: '#fff', 
        boxShadow: 3
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
        eventClick={handleEventClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        locale="pt-br"
      />

      <Dialog open={modalOpen} onClose={handleModalClose}>
        <DialogTitle>Agendar Consulta</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Título da Consulta"
            type="text"
            fullWidth
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
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
