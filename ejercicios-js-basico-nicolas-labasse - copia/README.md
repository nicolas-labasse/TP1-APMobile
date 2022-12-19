[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8436669&assignment_repo_type=AssignmentRepo)
# Guía ejercicios básicos de JS

Las funciones ya se encuentran creadas en el archivo `functions.js`. Solamente deben modificar su código para que hagan lo pedido.

# Comandos utiles

Instalar depedencias
`npm install`

Correr los test
`npm run test`

### Empezando con funciones

1. Modificar la función `saludar(nombre)` para que devuelva `"Hola {nombre}, todo bien?"`

``` Bash
saludar("pepe")
> "Hola pepe, todo bien?"
```

2. Modificar la función `esPar(numero)` para que devuelva como resultado booleano si un número es par o no

``` Bash
esPar(2)
> true
```

### Manejo de arrays

En esta sección tenés que resolver todo usando únicamente los métodos de array  `forEach`, `map`, `filter`, `every`, `find`, `sort` según sea necesario.

3. Modificar la función `algunoEsPar(arrayNumeros)` para que devuelva un booleano en función de si ALGÚN número en el array es par o no.

``` Bash
algunoEsPar([1,2,3])
> true
```

4. Modificar la función `todosSonPares(arrayNumeros)` para que devuelva un booleano en función de si TODOS los números en el array son pares o no.

``` Bash
todosSonPares([1,2,3])
> false
```

5. Modificar la función `aprobo(arrayNotas)` que dada una lista de notas devuelve si aprobo o no. Un alumno aprobó si todas sus notas son mayores o iguales a 4

``` Bash
aprobo([8,6,2,4])
> false
```

6. Define la función `quienesAprobaron(arrayDeArraysNotas)`, que dada una lista de notas (las notas al mismo tiempo son una lista de números... vamos un array de arrays) devuelve solamente información de los alumnos que aprobaron. Podés ayudarte usando como parte de la solución la función que hiciste en el ejercicio anterior ;) ;).

``` Bash
quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]])
> [[7,9,4,5],[9,6,7,10]]
```

7. Define la función `hayAlgunNegativo(arrayNumeros)`, que dada una lista de números nos dice si hay algún negativo o no.

``` Bash
hayAlgunNegativo([2,-3,9])
> true
```

8. Modificar la función `cuantosCumplen(funcion, arrayDeCosas)` que dada una función condición (programada por otra persona) y una lista, diga cuantos elementos del array cumplen esa condición.

``` Bash
// even es una función que retorna true si un número es par (deben crearla)

cuantosCumplen(even,[7,9,25,42])
> 1

// Retorna 1 porque solo 42 es par
```

9. Modificar la función `rechazar(funcion, arrayDeCosas)`, que dada una función condición (programada por otra persona) y un array, devuelva un array con los elementos que no la cumplen

``` Bash
rechazar(even,[7,9,87,42])
> [7, 9, 87]
```

10. Modifica la función `contiene(elemento, arrayDeCosas)` que dado un elemento y una lista, nos diga si la lista contiene al elemento

``` Bash
contiene(8,[7,8,9])
> true
```

11. Modifica la función `ordenarPorEdad(arrayDePersonas)` que dada una lista de personas, devuelva la lista ordenada por edad

``` Bash
ordenarPorEdad([{nombre:"Carlos", edad:30}, {nombre:"Juan", edad:5}, {nombre:"Carolina", edad:13}])
> [{nombre:"Juan", edad:5}, {nombre:"Carolina", edad:13}, {nombre:"Carlos", edad:30}]
```

12. Modifica la función `filtrarMayores(arrayDePersonas)` que dada una lista de personas, devuelva aquellas que son mayores de edad (Mayor o igual a 18 años)

``` Bash
ordenarPorEdad([{nombre:"Gustavo", edad:45}, {nombre:"Nicolas", edad:10}, {nombre:"Martin", edad:18}])
> [{nombre:"Gustavo", edad:45}, {nombre:"Martin", edad:18}]
```

13. Modifica la funcion `listadoDNIs(arrayDePersonas)` que dada una lista de personas, devuelva un listado solo con los DNI

``` Bash
listadoDNIs([{nombre:"Gustavo", dni:"20398768"}, {nombre:"Nicolas", dni:"35647812"}, {nombre:"Martin", dni:"40734912"}])
> ["20398768","35647812","40734912"]
```

14. Modifica la función `obtenerUsuario(arrayDeUsuarios)` que dada una lista de usuarios, devuelva aquel cuyo usuario sera `pepe123`

``` Bash
obtenerUsuario([{usuario:"Gustavo", id:1, email:"gustavo_kpo@hotmail.com"}, {usuario:"nic0", id:2, email:"nico.ritondo@gmail.com"}, {usuario:"pepe123", id:3, email:"elpepe123@gmail.com"}])
> {usuario:"pepe123", id:3, email:"elpepe123@gmail.com"}
```

