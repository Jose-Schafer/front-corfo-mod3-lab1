import '../scss/styles.scss'
import { AppointmentStack, createAppointmentListItemHTML } from './components/appointments';

const appointmentStack = new AppointmentStack(renderAppointmentList);

function renderAppointmentList(stack) {
  const container = document.getElementById('appointment-list');
  // Generar y agregar elementos HTML para cada cita
  if (container) {
    // Limpiar el contenedor
    container.innerHTML = '';

    stack.forEach((appointment, index) => {
      const appointmentItem = createAppointmentListItemHTML(appointment, index, appointmentStack.removeAt);
      container.appendChild(appointmentItem);
    });
  };
}

document.addEventListener('DOMContentLoaded', renderAppointmentList(appointmentStack.stack));
