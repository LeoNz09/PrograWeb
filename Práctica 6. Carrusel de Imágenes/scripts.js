let slideIndex = 0; //Indice actual de la diapositiva
showSlides();//Cambia las imágenes del carrusel automáticamente

function showSlides() { //se llama a la función showSlides para que funcione en el HTML
  const slides = document.querySelectorAll('.carousel-content img');//Selecciona todas las imágenes dentro del contenedor del carrusel
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active'); //Quita la clase "active" a todas las diapositivas del carrusel
  }

  slideIndex++;//Incrementa el índice de la diapositiva
  
  if (slideIndex > slides.length) { 
    slideIndex = 1; //Se reestablece el índice de la diapositiva a 1 si supera la cantidad total de diapositivas
  }
  
  slides[slideIndex - 1].classList.add('active'); //Agrega la calse "active" a la imagen actual

  setTimeout(showSlides, 2000);//Se llama a la función showSlides después de un intervalo de tiempo (2000 milisegundos)
  //Al estar después de cierto intervalo de tiempo se crea una animación de carrusel de imágenes
}
