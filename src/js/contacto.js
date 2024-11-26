import '../scss/styles.scss'
import { AppointmentStack, createDoctorListItemHTML, capitalizeAllAttributes } from './components/appointments';

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

document.addEventListener('DOMContentLoaded', renderDoctorList);
