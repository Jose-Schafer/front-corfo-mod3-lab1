export function createDoctorListItemHTML(name, specialty, appointmentStack) {
  const doctorItem = document.createElement('div');
  doctorItem.className = 'card mx-auto my-2';

  doctorItem.innerHTML = `
    <div class="card-body d-flex align-items-center justify-content-between">
      <h5 class="card-title">${name}</h5>
      <p class="card-description">${specialty}</p>
      <button class="btn btn-primary btn-sm mt-2 select-doctor">+</button>
    </div>
  `;

  // Add an event listener to the button
  const button = doctorItem.querySelector('button');
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Get appointment details
    const inputNombre = document.getElementById("nombre");
    const paciente = inputNombre.value;

    const inputFechaHora = document.getElementById("fechaHora");
    const fechaHora = inputFechaHora.value;

    appointmentStack.push({ name, specialty, paciente, fechaHora })
  });

  return doctorItem
}

export function createAppointmentListItemHTML(appointment, index) {

  const { name, specialty, paciente, fechaHora } = { ...appointment };

  // Create a new list item for the appointment
  const appointmentItem = document.createElement('div');
  appointmentItem.className = 'card mt-4';


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

  return appointmentItem;

}
