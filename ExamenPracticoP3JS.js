function palindromo() {
	var cadena = document.getElementById("cadena").value;
	var cadenaOriginal = cadena.toLowerCase();
	var letrasEspacios = cadenaOriginal.split("");
	var cadenaSinEspacios = "";

	for(var i in letrasEspacios) {
		if(letrasEspacios[i] != " ") {
			cadenaSinEspacios += letrasEspacios[i];
			}
		}

		var letras = cadenaSinEspacios.split("");
		var letrasReves = cadenaSinEspacios.split("").reverse();
		var iguales = true;

		for(var i in letras) {
			if(letras[i] != letrasReves[i]) {
				iguales = false;
				break;
			}
		}

		if(iguales) {
			document.getElementById("resultado").innerHTML="La palabra " +cadena+ " Es un Palíndromo";
		}
		else {
			document.getElementById("resultado").innerHTML="La palabra " +cadena+ " No es un palíndromo";
		}
	}	