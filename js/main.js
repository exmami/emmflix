const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelector('.pelicula');

const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

//--------- --------derecha-------- ---------
flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});