function multi(){
	var num; num=prompt('Ingresa un número (1-10)');
	num=parseInt(num);
	document.write("");
	var x=1;
	if (num>=1 && num<=10) {
		for(x=1; x<=10; x++){
		tabla=num*x;
		document.write("");
		document.write("");
		document.write(num, " x ", x, " = ", tabla, "<br>");
		}
		document.write("");
	} else{
		document.write("Ingresa un número dentro del rango");
	}
	
}