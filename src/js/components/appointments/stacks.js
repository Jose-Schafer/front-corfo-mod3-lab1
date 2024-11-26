export class AppointmentStack {
  constructor(callback, storageKey = 'appointmentStack') {
    this.storageKey = storageKey;
    this.stack = this.loadFromStorage();
    this.callback = callback;

    // To avoid that using this method as a callback changes the definition of "this" for this method
    this.removeAt = this.removeAt.bind(this);
  }

  push(appointment) {
    this.stack.push(appointment);
    console.log(`Cita añadida: ${JSON.stringify(appointment)}`);
    this.saveToStorage();
    this.callback(this.stack);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("No hay citas para eliminar");
      return null;
    }

    const removedAppointment = this.stack.pop();
    console.log(`Cita eliminada: ${JSON.stringify(removedAppointment)}`);
    this.saveToStorage();
    this.callback(this.stack);
    return removedAppointment;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("No hay citas en la pila");
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  removeAt(index) {
    if (index < 0 || index >= this.stack.length) {
      console.log("Índice fuera de rango");
      return null;
    }

    const removedAppointment = this.stack.splice(index, 1)[0];
    console.log(`Cita eliminada: ${JSON.stringify(removedAppointment)}`);
    this.saveToStorage();
    this.callback(this.stack);
    return removedAppointment;
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.stack))
  }

  loadFromStorage() {
    const savedStack = localStorage.getItem(this.storageKey);
    return savedStack ? JSON.parse(savedStack) : [];
  }


}
