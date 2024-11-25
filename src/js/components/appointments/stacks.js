export class AppointmentStack {
  constructor(containerId, createAppointmentListItemHTML, storageKey = 'appointmentStack') {
    this.storageKey = storageKey;
    this.stack = this.loadFromStorage();
    this.container = document.getElementById(containerId);
    this.createAppointmentListItemHTML = createAppointmentListItemHTML;
    this.updateAppointmentListHTML();
  }

  push(appointment) {
    this.stack.push(appointment);
    console.log(`Cita añadida: ${JSON.stringify(appointment)}`);
    this.saveToStorage();
    this.updateAppointmentListHTML();
  }

  pop() {
    if (this.isEmpty()) {
      console.log("No hay citas para eliminar");
      return null;
    }

    const removedAppointment = this.stack.pop();
    console.log(`Cita eliminada: ${JSON.stringify(removedAppointment)}`);
    this.saveToStorage();
    this.updateAppointmentListHTML();
    return removedAppointment;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("No hay citas en la pila");
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.stack))
  }

  loadFromStorage() {
    const savedStack = localStorage.getItem(this.storageKey);
    return savedStack ? JSON.parse(savedStack) : [];
  }

  updateAppointmentListHTML() {
    // Limpiar el contenedor
    this.container.innerHTML = '';

    // Generar y agregar elementos HTML para cada cita
    this.stack.forEach((appointment, index) => {
      const appointmentItem = this.createAppointmentListItemHTML(appointment, index)
      this.container.appendChild(appointmentItem);
    });
  }

}
