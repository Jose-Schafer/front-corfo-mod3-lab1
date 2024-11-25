// Currying
const calcularCosto = (precioConsultas) => (consultasRealizadas) => precioConsultas * consultasRealizadas;

const costoTotalConsultas = calcularCosto(15000);

console.log(`${costoTotalConsultas(5)}`);
