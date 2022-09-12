//Obtener parrafos para mostrar las claves desordenadas y valores correspondientes
const clavesObjeto1Desordenadas = document.getElementById('o1-Clave-Desordenadas')
const clavesObjeto2Desordenadas = document.getElementById('o2-Clave-Desordenadas')
const clavesObjeto3Desordenadas = document.getElementById('o3-Clave-Desordenadas')
const valoresObjeto1Desordenadas = document.getElementById('o1-Valor-Desordenados')
const valoresObjeto2Desordenadas = document.getElementById('o2-Valor-Desordenados')
const valoresObjeto3Desordenadas = document.getElementById('o3-Valor-Desordenados')

//Obtener parrafos para mostrar las claves ordenadas y valores correspondientes
const clavesObjeto1Ordenadas = document.getElementById('o1-Clave-Ordenadas')
const clavesObjeto2Ordenadas = document.getElementById('o2-Clave-Ordenadas')
const clavesObjeto3Ordenadas = document.getElementById('o3-Clave-Ordenadas')
const valoresObjeto1Ordenadas = document.getElementById('o1-Valor-Ordenados')
const valoresObjeto2Ordenadas = document.getElementById('o2-Valor-Ordenados')
const valoresObjeto3Ordenadas = document.getElementById('o3-Valor-Ordenados')

const primerObjeto = {c: 1, b: 2, a: 3}
const segundoObjeto = {c: 'Apple', a: 'Microsoft', b: 'Google'}
const tercerObjeto = {key2: false, key1: true, key3: 'undefined'}

clavesObjeto1Desordenadas.innerHTML = Object.keys(primerObjeto)
clavesObjeto2Desordenadas.innerHTML = Object.keys(segundoObjeto)
clavesObjeto3Desordenadas.innerHTML = Object.keys(tercerObjeto)
valoresObjeto1Desordenadas.innerHTML = Object.values(primerObjeto)
valoresObjeto2Desordenadas.innerHTML = Object.values(segundoObjeto)
valoresObjeto3Desordenadas.innerHTML = Object.values(tercerObjeto) 

function ordenarObjeto(objetoOrdenar){

    let resultado = []
    let ordenar = Object.keys(objetoOrdenar)
    ordenar.sort()
    let valores = []
    for(i = 0; i < ordenar.length; i++ ){
        valores.push(objetoOrdenar[ordenar[i]])
    }
    return [ordenar, valores ]
    
}

function inicio(){
    let claves, valores
    [claves, valores] = ordenarObjeto(primerObjeto)
    clavesObjeto1Ordenadas.innerHTML = claves
    valoresObjeto1Ordenadas.innerHTML = valores

    [claves, valores] =  ordenarObjeto(segundoObjeto)
    clavesObjeto2Ordenadas.innerHTML = claves
    valoresObjeto2Ordenadas.innerHTML = valores

    [claves, valores] = ordenarObjeto(tercerObjeto)
    clavesObjeto3Ordenadas.innerHTML = claves
    valoresObjeto3Ordenadas.innerHTML = valores
}

window.addEventListener('load', inicio)