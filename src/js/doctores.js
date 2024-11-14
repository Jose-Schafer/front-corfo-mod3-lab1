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

async function loadDoctorCards() {
  try {
    const response = await fetch('json/doctores.json');
    const doctors = await response.json();

    const container = document.getElementById('doctores-row');

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


      const { image, name, specialty, diplomas: { titulo, magister } } = customDoctor;

      const card = document.createElement('div');
      card.className = 'card col-8 col-lg m-lg-2 mx-auto';

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
      p.textContent = specialty;
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

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading doctor data:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadDoctorCards);

