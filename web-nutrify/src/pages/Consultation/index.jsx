import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Button, Typography } from '@mui/material';
import './style.css'

const ConsultationPage = () => {
  const [events, setEvents] = useState([
    { title: 'Consulta 1', date: '2024-11-28' },
    { title: 'Consulta 2', date: '2024-11-29' },
  ]);

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Insira o título da consulta:');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      setEvents([
        ...events,
        {
          id: String(events.length + 1),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
        },
      ]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Deseja deletar a consulta "${clickInfo.event.title}"?`)) {
      clickInfo.event.remove();
    }
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
    </Box>
  );
};

export default ConsultationPage;
