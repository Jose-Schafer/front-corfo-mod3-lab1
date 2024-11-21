import { capitalizeAllAttributes } from '../../utils/modifiers';
import { createDoctorHTML } from './html-builder';

export async function loadDoctorCards(getSortAscending) {
  try {
    let response = await fetch('../../public/static/json/especialistas.json');
    const especialistas = await response.json();

    response = await fetch('../../public/static/json/generales.json');
    const generales = await response.json();

    // Mergear jsons
    const doctors = [...especialistas, ...generales]

    // Sort doctors
    if (getSortAscending()) {
      doctors.sort((a, b) => a.experience - b.experience);
    } else {
      doctors.sort((a, b) => b.experience - a.experience);
    }

    const container = document.getElementById('doctores-row');
    container.innerHTML = ""; // Borrar doctores ya renderizados para evitar duplicados

    if (!container) {
      console.error('Container element "doctores-row" not found.');
      return;
    }

    doctors.forEach(doctor => {

      // Clonar json
      let customDoctor = { ...doctor };

      // Modificar json
      customDoctor = capitalizeAllAttributes(customDoctor);
      // console.log(`JSON Original: ${JSON.stringify(doctor)}`);
      // console.log(`JSON Modificado: ${JSON.stringify(customDoctor)}`);

      const { image, name, specialty, diplomas: { titulo, magister }, experience } = customDoctor;

      // Obtener el valor del input
      const inputElement = document.getElementById("doctorFilter");
      const inputValue = inputElement.value;

      // Condicional para ver si renderizar al doctor o no
      if (inputValue == '') {
        const card = createDoctorHTML(image, name, specialty, titulo, magister, experience);
        container.appendChild(card);

      } else if (name.includes(inputValue)) {
        const card = createDoctorHTML(image, name, specialty, titulo, magister, experience);
        container.appendChild(card);
      }
    });
  } catch (error) {
    console.error('Error loading doctor data:', error);
  }
}


