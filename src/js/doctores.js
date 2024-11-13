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

      const { image, name, specialty, diplomas: { titulo, magister } } = doctor;

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

