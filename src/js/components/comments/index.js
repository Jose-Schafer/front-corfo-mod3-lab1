import { validatePhoneNumber, validateEmail } from "../../utils/validators";

const reviews = [
  {
    title: "Rodrigo",
    text: "Muy buena atención, mi pie fue amputado correctamente pese a que vine por un dolor de cabeza.",
    phoneNumber: "999999999",
    email: "rodrigo@hacker.com"
  },
  {
    title: "Juan",
    text: "Más o menos no más",
    phoneNumber: "888888888",
    email: "juan@hacker.com"
  }
];

// Función para agregar dinámicamente comentarios
export function renderComments() {
  const container = document.getElementById("comments");
  container.innerHTML = ""; // Borrar comentarios ya renderizados para evitar duplicados


  reviews.forEach(review => {
    // Crear la columna del comentario
    const colDiv = document.createElement("div");
    colDiv.className = "col mb-2";

    // Crear la tarjeta
    const cardDiv = document.createElement("div");
    cardDiv.className = "card p-4";

    // Título
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = `${review.title} (${review.email}, ${review.phoneNumber})`;

    // Descripción
    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = review.text;

    // Agregar título y texto al div de tarjeta
    cardDiv.appendChild(title);
    cardDiv.appendChild(text);

    // Agregar la tarjeta al div de columna
    colDiv.appendChild(cardDiv);

    // Agregar el div de columna al div de comentarios
    container.appendChild(colDiv);
  });
}

// Función para agregar nuevo comentario
export function addNewComment() {
  try {
    const userName = prompt("Ingresa tu nombre:");
    console.log(`El nombre ingresado fue: ${userName}`)

    const userPhoneNumber = prompt("Ingresa tu número de teléfono:");
    console.log(`El nombre ingresado fue: ${userPhoneNumber}`)
    validatePhoneNumber(userPhoneNumber);

    const userEmail = prompt("Ingresa tu email:");
    console.log(`El nombre ingresado fue: ${userEmail}`)
    validateEmail(userEmail);

    const userComment = prompt("Ingresa tu comentario:");
    console.log(`El comentario ingresado fue: ${userComment}`)

    if (userName && userComment) {
      // Agregar un nuevo comentario al listado
      reviews.push({ title: userName, text: userComment, phoneNumber: userPhoneNumber, email: userEmail });
      // Re-renderizar los comentarios
      renderComments();
    } else {
      alert("Porfavor agrega tu nombre y comentario antes de enviar.");
    }

  } catch (e) {
    console.log(e)
  }
}

