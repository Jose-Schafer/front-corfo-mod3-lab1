import '../scss/styles.scss'
import { AppointmentStack, createDoctorListItemHTML, capitalizeAllAttributes, createUpcommingAppointmentItemHTML } from './components/appointments';

const message = () => {
  alert("Tu cita fue agendada correctamente")
}

const appointmentStack = new AppointmentStack(message);

async function renderDoctorList() {
  let response = await fetch('../../public/static/json/especialistas.json');
  const especialistas = await response.json();

  response = await fetch('../../public/static/json/generales.json');
  const generales = await response.json();

  // Merge jsons
  const doctors = [...especialistas, ...generales]

  // Doctor list
  const container = document.getElementById("doctor-list");

  doctors.forEach((doctor) => {
    let customDoctor = { ...doctor };
    customDoctor = capitalizeAllAttributes(customDoctor);

    const { name, specialty } = customDoctor;

    const doctorCard = createDoctorListItemHTML(name, specialty, appointmentStack);
    container.appendChild(doctorCard);
  })
}

async function renderUpcommingAppointmentList() {
  const container = document.getElementById("upcomming-appointment-list")

  const appointmentList = appointmentStack.getSortedStack();

  appointmentList.forEach((appointment) => {
    const appointmentItem = createUpcommingAppointmentItemHTML(appointment);
    container.appendChild(appointmentItem);
  });
}

document.addEventListener('DOMContentLoaded', renderDoctorList);
document.addEventListener('DOMContentLoaded', renderUpcommingAppointmentList);
