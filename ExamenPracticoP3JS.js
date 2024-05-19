//Núñez de Jesús Leonardo

//Se crea la funcion palindromo
function palindromo() {
	//Se declara la variable cadena
	var cadena = document.getElementById("cadena").value;
	var cadenaOriginal = cadena.toLowerCase(); //Se convierte la cadena ingresada a minusculas
	var letrasEspacios = cadenaOriginal.split("");//Separa la cadena en un arreglo de caracteres
	var cadenaSinEspacios = "";//Cadena vacia para almacenarla sin espacios

	//Recorre el arreglo de caracteres
	for(var i in letrasEspacios) {
		if(letrasEspacios[i] != " ") {
			cadenaSinEspacios += letrasEspacios[i];
			}
		}

	var letras = cadenaSinEspacios.split(""); //Crea un arreglo de caracteres de la cadena sin espacios
	var letrasReves = cadenaSinEspacios.split("").reverse(); //Crea una cadena de caracteres en sentido inverso
	var iguales = true; //Verificar si las cadenas son iguales

	//Compara caracteres en ambas cadenas
	for(var i in letras) {
		if(letras[i] != letrasReves[i]) {
			iguales = false;
			break;
		}
	}

	//Muestra el resultado en el párrafo dependiendo si la palabra es palíndroma o no
	if(iguales) {
		document.getElementById("resultado").innerHTML="La palabra " +cadena+ " Es un Palíndromo";
	}
	else {
		document.getElementById("resultado").innerHTML="La palabra " +cadena+ " No es un palíndromo";
	}
}	