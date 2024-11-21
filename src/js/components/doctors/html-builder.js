export function createDoctorHTML(image, name, specialty, titulo, magister, experience) {
  const card = document.createElement('div');
  card.className = 'card col-8 col-lg-3 m-lg-2 mx-auto';

  const img = document.createElement('img');
  img.className = "card-img-top";
  img.src = `../../${image}`;

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
