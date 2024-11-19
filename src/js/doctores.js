function capitalizeWords(string) {
  return string.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function capitalizeAllAttributes(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) =>
      [key, typeof value === 'string' ? capitalizeWords(value) : value]
    )
  );
}

function createDoctorHTML(image, name, specialty, titulo, magister, experience) {
  const card = document.createElement('div');
  card.className = 'card col-8 col-lg-3 m-lg-2 mx-auto';

  const img = document.createElement('img');
  img.className = "card-img-top";
  img.src = image;

  const textDiv = document.createElement('div');
  textDiv.className = 'card-body';

  const h5 = document.createElement("h5");
  h5.className = 'card-title';
  h5.textContent = name;
  textDiv.appendChild(h5);

  const p = document.createElement('p');
  p.className = 'card-description';
  p.textContent = `${specialty} (${experience})`;
  textDiv.appendChild(p);

  const p2 = document.createElement('p');
  p2.className = 'card-description';
  p2.textContent = `Título: ${titulo}`;
  textDiv.appendChild(p2);

  const p3 = document.createElement('p');
  p3.className = 'card-description';
  p3.textContent = `Magister: ${magister}`;
  textDiv.appendChild(p3);

  card.appendChild(img);
  card.appendChild(textDiv);

  return card
}

let sortAscending = true;

async function loadDoctorCards() {
  try {
    let response = await fetch('json/especialistas.json');
    const especialistas = await response.json();

    response = await fetch('json/generales.json');
    const generales = await response.json();

    // Mergear jsons
    const doctors = [...especialistas, ...generales]

    // Sort doctors
    if (sortAscending) {
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
      console.log(`JSON Original: ${JSON.stringify(doctor)}`);
      console.log(`JSON Modificado: ${JSON.stringify(customDoctor)}`);

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

async function changeSortDirection() {
  console.log(`Change sort direction: ${sortAscending} -> ${!sortAscending}`)

  // Change sort direction
  sortAscending = !sortAscending;

  // Change button text
  const button = document.getElementById("sortButton");
  button.textContent = sortAscending ? "^" : "v";

  // Sort doctors
  loadDoctorCards();
}

document.addEventListener('DOMContentLoaded', loadDoctorCards);
document.getElementById("doctorFilter").addEventListener("change", loadDoctorCards);
document.getElementById("sortButton").addEventListener("click", changeSortDirection)
