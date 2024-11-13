# Instalar dependencias
```sh
nvm use 18.20
pnpm install
```

# Levantar servidor
Ejecutar
```sh
pnpm start
```

Abrir el navegador en el puerto 8080
`http://localhost:8080/index.html`

# Como probar código de javascript
En la página principal ve a la sección de comentarios y presiona el botón `Agregar comentario`.

Rellena los datos solicitados:
- Nombre: `Sin validador`
- Número de teléfono: `Valida que solo contenga números, sin espacios ni letras o caracteres`
- Email: `Valida que tenga un @ y un .`.
- Comentario: `Sin validador`

# Preguntas
## Explica en el archivo README como funciona el event loop (stack, heap, queue en JavaScript)

### Definiciones
El event loop es el que se encarga de implementar las operaciones asíncronas o el non-blocking. El event loop corre en el único hilo que existe en Node, al bloquear el único hilo de node, estamos bloqueando el event loop.

**Stack**
Stack (Pila de llamadas o Call Stack): La pila de llamadas es donde JavaScript gestiona la ejecución de las funciones. Cada vez que se llama a una función, esta se apila en la call stack. Cuando la función termina, se elimina de la pila. Este es el orden en que JavaScript ejecuta las funciones, siguiendo el principio de último en entrar, primero en salir (LIFO).

**Heap**
El heap es un espacio en memoria donde se almacenan los objetos y otros datos asignados dinámicamente. JavaScript utiliza el heap para gestionar datos que necesitan ser accesibles a lo largo del tiempo, fuera del ciclo inmediato de ejecución de funciones.

**Queue**
La cola de mensajes es donde se almacenan las tareas que están esperando a ser ejecutadas una vez que la call stack esté vacía. Las tareas asincrónicas, como los eventos de clic, las respuestas de solicitudes de red o los temporizadores, se colocan en esta cola.

### Funcionamiento del Event Loop
El event loop es un mecanismo que coordina la interacción entre la call stack y la message queue para asegurar que las tareas asincrónicas se ejecuten sin bloquear el hilo principal.

1. _Ejecución de Tareas Síncronas_: Cuando una aplicación JavaScript comienza, el motor ejecuta todas las tareas síncronas en la call stack. Las funciones se añaden a la pila una por una y se ejecutan hasta que la pila esté vacía.

2. _Gestión de Tareas Asíncronas_: Si hay una tarea asíncrona (como una solicitud HTTP o un temporizador), JavaScript delega esta tarea a la API del navegador (o al entorno Node.js en el caso de JavaScript del lado del servidor). Una vez que se completa la tarea asíncrona, su función de callback se añade a la message queue.

3. _El Rol del Event Loop_: El event loop monitorea la call stack y la message queue. Cuando la call stack está vacía (es decir, cuando no hay funciones en ejecución), el event loop toma la primera tarea de la message queue y la coloca en la call stack para su ejecución. Esto permite que JavaScript ejecute tareas asíncronas de manera eficiente, sin bloquear la ejecución principal.

4. _Ejecución de la Cola de Microtareas_: Además de la message queue, JavaScript utiliza una cola especial llamada microtask queue (cola de microtareas), donde se colocan las promesas que se resuelven. El event loop da prioridad a la ejecución de la microtask queue antes de procesar la message queue, garantizando que las promesas resueltas se ejecuten antes de otras tareas asíncronas.
