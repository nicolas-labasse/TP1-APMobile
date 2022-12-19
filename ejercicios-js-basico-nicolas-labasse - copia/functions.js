function saludar(nombre){
	//let resultado = "Hola " + nombre +", todo bien?"
	let resultado =`Hola ${nombre}, todo bien?`
	return resultado
}

function esPar(numero){
	let resultado = numero % 2 === 0
	return resultado
}

function algunoEsPar(arrayNumeros){
	let resultado = arrayNumeros.some((numero) => numero % 2 === 0)
	return resultado
}

function todosSonPares(arrayNumeros){
	let resultado = arrayNumeros.every((numero) => numero % 2 === 0)
	return resultado
}

function aprobo(arrayNotas){
	let resultado = arrayNotas.every((nota) => nota >= 4)
	return resultado
}

function quienesAprobaron(arrayDeArraysNotas){
	let resultado = arrayDeArraysNotas.filter((arrayNotas) => arrayNotas.every((nota) => nota >= 4))
	return resultado
}

function hayAlgunNegativo(arrayNumeros){
	let resultado = arrayNumeros.some((numero) => numero < 0)
	return resultado
}


function cuantosCumplen(funcion, arrayDeCosas){
	let resultado = arrayDeCosas.filter(funcion).length
	return resultado
}

function rechazar(funcion, arrayDeCosas){
	let resultado = arrayDeCosas.filter((cosa) => !funcion(cosa))
	return resultado
}

function contiene(elemento, arrayDeCosas){
	let resultado = arrayDeCosas.some(e => e === elemento)
	return resultado
}

function ordenarPorEdad(arrayDePersonas){
	let resultado = arrayDePersonas.sort((a,b) => a.edad - b.edad)
	return resultado
}

function filtrarMayores(arrayDePersonas){
	let resultado = arrayDePersonas.filter((persona) => persona.edad >= 18)
	return resultado
}

function listadoDNIs(arrayDePersonas){
	let resultado = arrayDePersonas.map((persona) => persona.dni)
	return resultado
}

function obtenerUsuario(arrayDeUsuarios){
	let resultado = arrayDeUsuarios.find((u) => u.usuario === "pepe123")
	return resultado;
}

module.exports = {
	saludar, esPar, algunoEsPar, todosSonPares, aprobo, quienesAprobaron, hayAlgunNegativo, cuantosCumplen, rechazar, contiene, ordenarPorEdad, listadoDNIs, filtrarMayores, obtenerUsuario
}