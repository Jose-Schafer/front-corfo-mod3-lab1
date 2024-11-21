import { capitalizeAllAttributes } from '../utils/modifiers'

// Currying
const calcularCosto = (precioConsultas) => (consultasRealizadas) => precioConsultas * consultasRealizadas;

const costoTotalConsultas = calcularCosto(15000);

console.log(`${costoTotalConsultas(5)}`);


// Function to create doctor card HTML
function createDoctorHTML(image, name, specialty, titulo, magister) {
  const card = document.createElement('div');
  card.className = 'card mx-auto my-2';

  const textDiv = document.createElement('div');
  textDiv.className = 'card-body d-flex align-items-center justify-content-between';

  const h5 = document.createElement("h5");
  h5.className = 'card-title';
  h5.textContent = name;
  textDiv.appendChild(h5);

  const p = document.createElement('p');
  p.className = 'card-description';
  p.textContent = specialty;
  textDiv.appendChild(p);

  // Add + button for appointments
  const button = document.createElement('button');
  button.className = 'btn btn-primary btn-sm mt-2 select-doctor';
  button.textContent = '+';
  button.style.float = 'right';
  button.addEventListener('click', (event) => {
    event.preventDefault()
    appendAppointment(name, specialty);
  });
  textDiv.appendChild(button);

  // card.appendChild(img);
  card.appendChild(textDiv);

  return card;
}

// Function to add a new doctor to the list
function addDoctorToList(containerId, image, name, specialty, titulo, magister) {
  const container = document.getElementById(containerId);
  const doctorCard = createDoctorHTML(image, name, specialty, titulo, magister);
  container.appendChild(doctorCard);
}

export async function addDoctors() {
  let response = await fetch('../../public/static/json/especialistas.json');
  const especialistas = await response.json();

  response = await fetch('../../public/static/json/generales.json');
  const generales = await response.json();

  // Mergear jsons
  const doctors = [...especialistas, ...generales]

  const container = document.getElementById("doctor-list");

  doctors.forEach((doctor) => {
    let customDoctor = { ...doctor };
    customDoctor = capitalizeAllAttributes(customDoctor);

    const { image, name, specialty, diplomas: { titulo, magister } } = customDoctor;

    const doctorCard = createDoctorHTML(image, name, specialty, titulo, magister);
    container.appendChild(doctorCard);
  })
}

// Function to filter doctors and show appointment information
function appendAppointment(name, specialty) {
  const appointmentSection = document.getElementById('appointment-info');

  // Create a new list item for the appointment
  const appointmentItem = document.createElement('div');
  appointmentItem.className = 'card mt-4';

  // Get appointment details
  const inputNombre = document.getElementById("nombre");
  const paciente = inputNombre.value;

  const inputFechaHora = document.getElementById("fechaHora");
  const fechaHora = inputFechaHora.value;

  appointmentItem.innerHTML = `
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">Cita Confirmada</h5>
        <p><strong>Nombre del Doctor:</strong> ${name}</p>
        <p><strong>Especialidad:</strong> ${specialty}</p>
        <p><strong>Paciente:</strong> ${paciente}</p>
        <p><strong>Fecha y Hora:</strong> ${fechaHora}</p>
      </div>
    </div>
  `;

  // Append appointment details
  appointmentSection.appendChild(appointmentItem);
}


