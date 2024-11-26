# Instalar dependencias
```sh
nvm use 18.20
pnpm install
```

# Levantar servidor
Ejecutar
```sh
pnpm run dev
```

Abrir el navegador en el puerto 5173
[http://localhost:5173/index.html](http://localhost:5173/index.html)

# Como probar código de javascript


## Preguntas
### Explicación de cómo se implementaron los objetos JSON y las operaciones realizadas (clonación, merge, recorrido).
Dentro del directorio `public` se creo el directorio `static/json` donde están almacenados los listados de doctores.

Dentro del archivo `src/js/components/doctors/index.js`, en la línea 13 se mergearon el listado de doctores especialistas y el de médicos generales para trabajarlos como un solo listado.

En la línea 33 se clonó el objeto para posteriormente pasar a `capitalize` todos los nombres de los doctores sin afectar al objeto original.

En la línea 30 el diccionario es iterado con un `forEach` para mostrar todas las tarjetas de doctores.

En la página web, yendo a [http://localhost:5173/src/equipo_medico.html](http://localhost:5173/src/equipo_medico.html) se puede ver el listado de doctores.

### Explicación de las estructuras de datos implementadas (arreglos, pilas, colas) y su utilidad en el proyecto.
En la misma vista anterior [http://localhost:5173/src/equipo_medico.html](http://localhost:5173/src/equipo_medico.html) se puede ver que se utiliza un arreglo de doctores, el cual es puede ser filtrado y ordenado usando los botones que se muestran sobre el listado.

La pila fue implementada para el manejo de appointments en la vistas de  [http://localhost:5173/src/contacto.html](http://localhost:5173/src/contacto.html) y [http://localhost:5173/src/agenda.html](http://localhost:5173/src/agenda.html). En la vista de contacto se puede agregar una nueva cita médica seleccionando un doctor del listado. Puede agregar cuantos coincidere necesario. Las citas médicas se guardarán en el `LocalStorage` para hacer persistente las citas médicas. La implementación del stack se puede ver en `src/js/components/appointments/stacks.js`.

La cola fue implementada en la vista de contacto, a través de un método del Stack que permite mostrar la cola ordenada.

### Descripción de los algoritmos implementados y su complejidad.
#### Complejidad del método sort:
El método sort en JavaScript utiliza algoritmos de ordenamiento como Timsort, que tiene una complejidad promedio de O(n log n) y en el peor de los casos también es O(n log n), donde n es el número de elementos en el arreglo doctors.

#### Evaluación de getSortAscending():
La función getSortAscending() no está definida en el código, pero si asumimos que es una operación simple (como devolver un valor booleano almacenado), su complejidad es O(1).

#### Comparación personalizada:
La comparación (a.experience - b.experience) o (b.experience - a.experience) se realiza para cada par de elementos en el proceso de ordenamiento. Esto no cambia la complejidad general del algoritmo sort.
Complejidad Total:
La complejidad total del algoritmo es O(n log n) debido al método sort.
