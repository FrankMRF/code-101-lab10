// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    let acumulador = 0;
    for(let elemento of arreglo){
        acumulador += elemento;
    }
    return acumulador;
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    let numMayor = 0;
    for(let elemento of arreglo){
        if(elemento > numMayor){
            numMayor = elemento
        }
    }
    return numMayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    let numPares = [];
    for(let elemento of arreglo){
        if(elemento%2 == 0){
            numPares.push(elemento);}
    }
    return numPares;
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    let numVocales = 0;
    for(let elemento of texto){
        if(elemento == "a" || elemento == "e" || elemento == "i" || elemento == "o" || elemento == "u"){
            numVocales += 1;}
    }
    return numVocales;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    let arreInver = [];
    for(let elemento of arreglo){
        arreInver.unshift(elemento);
    }
    return arreInver;
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    let sumNotas = 0;
    for(let elemento of notas){
        sumNotas = sumNotas + elemento;
    }
    let calProme = sumNotas / notas.length;
    return calProme;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    let conLetra = 0;
    for(let elemento of texto){
        if(elemento==letra){
            conLetra += 1;
        }
    }
    // Debe retornar cuántas veces aparece la letra en el texto
    return conLetra;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    let eleUnicos = [];
    let compara = 0;
    for(let elemento of arreglo){
        if(elemento > compara){
            compara = elemento;
            eleUnicos.push(elemento); 
        }
    }
    return eleUnicos;
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    let tamCarac = texto.length;
    for(let i=0; i< tamCarac/2; i++){
        if (texto[i] == texto[tamCarac-1-i]){
            return true;
        }else{
            return false;
        }
    }
    
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no
}