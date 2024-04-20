function evalua() {
	var cadena = document.getElementById("cadena").value;
	var resultado = verificarTipoCadena(cadena);
	document.getElementById("parrafo").textContent = resultado;
}

function verificarTipoCadena(cadena) {
    // Verificar si la cadena está en minúsculas
    if (cadena === cadena.toLowerCase()) {
        return "La cadena ' " +cadena+ " ' contiene solamente minúsculas";
    }
    // Verificar si la cadena está en mayúsculas
    else if (cadena === cadena.toUpperCase()) {
        return "La cadena ' " +cadena+ " ' contiene solamente mayúsculas";
    }
    // Si la cadena contiene una combinación de minúsculas y mayúsculas
    else {
        return "La cadena ' " +cadena+ " ' contiene minúsculas y mayúsculas";
    }
}