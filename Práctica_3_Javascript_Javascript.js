function genera_rfc(){
	//Se definen las variables
	var cadena1=document.getElementById("nombre").value;
	var cadena2=document.getElementById("ap").value;
	var cadena3=document.getElementById("am").value;
	var cadena4=document.getElementById("anio").value;
	var cadena5=document.getElementById("mes").value;
	var cadena6=document.getElementById("dia").value;

	//Usando la función substring se imprimen ciertos caracteres de la cadena y se definen como nuevas cadenas
	var nuevacadena1=cadena2.substring(0, 2);
	var nuevacadena2=cadena3.substring(0, 1);
	var nuevacadena3=cadena1.substring(0, 1);
	var nuevacadena4=cadena4.substring(2, 4);
	var nuevacadena5=cadena5.substring(0, 3, 4);
	var nuevacadena6=cadena6.substring(0, 3, 4);

	//Se crea la variable de cadenatotal que va a concatenar todas las nuevas cadenas
	var cadenatotal=nuevacadena1 + nuevacadena2 + nuevacadena3 + nuevacadena4 + nuevacadena5 + nuevacadena6;

	rfc=cadenatotal.toUpperCase(); //convertir la cadena cadenatotal a mayusculas

    document.getElementById("resultado").value = rfc;//Se imprime el resultado
}