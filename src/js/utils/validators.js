import { isNumeric } from './type_checks';

export function validatePhoneNumber(phoneNumber) {
  console.log(`Validando número de teléfono: ${phoneNumber}`);

  if (!isNumeric(phoneNumber)) {
    alert("El número de teléfono debe ser numérico. Sin letras, símbolos ni espacios");
    throw new Error("El número de teléfono no es numérico!");
  }

  if (phoneNumber.length != 9) {
    alert("El número de teléfono debe contener 9 dígitos");
    throw new Error("El número de teléfono no contiene 9 dígitos!");
  }
}

export function validateEmail(email) {
  console.log(`Validando email: ${email}`);

  if (!email.includes("@")) {
    alert("Un correo debe llevar @");
    throw new Error("Un correo debe llevar @");
  }

  if (!email.includes(".")) {
    alert("Un correo debe llevar .");
    throw new Error("Un correo debe llevar .");
  }
}
