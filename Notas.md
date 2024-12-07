Replica este ejercicio: https://sistemastrazos.github.io/to-do-list-vanilla/

La mecánica es muy similar a la del carrito. Cada tarea tendrá un id para poder identificarla, el texto de la tarea y un estado para saber si está completa o no.

const tasks = [
{
id: Date.now(),
name: 'Comprar el pan',
completed: false
}
];

Dentro de ese array iréis añadiendo las tareas nuevas y cuando se eliminen se eliminarán del objeto.
