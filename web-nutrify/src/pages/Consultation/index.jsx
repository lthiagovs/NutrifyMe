import "./style.css"
import React, {useState} from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

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
    <div className="appointment-scheduler">
      <h1>Agendar Consultas</h1>
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
    </div>
  );
};

export default ConsultationPage;
