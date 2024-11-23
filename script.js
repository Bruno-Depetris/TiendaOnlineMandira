const images = document.querySelectorAll("aside img");

let index = 0;

function cycleImages() {
    images.forEach(img => img.classList.remove("selected"));

    images[index].classList.add("selected");

    index = (index + 1) % images.length; 
}

setInterval(cycleImages, 1500); 


const productos = [
    { img: './data/MANDIRA/Page/Publicaciones/2.png', title: 'Cartera marrón', alt: 'Cartera marrón' ,precio:'200' },
    { img: './data/MANDIRA/Page/Publicaciones/3.png', title: 'Mochila negra', alt: 'Mochila negra' ,precio:'200'},
    { img: './data/MANDIRA/Page/Publicaciones/4.png', title: 'Riñonera azul', alt: 'Riñonera azul',precio:'200' },
    // Agrega más productos según sea necesario
];

const publicacionesDiv = document.getElementById('publicaciones');

// Generar dinámicamente las publicaciones
productos.forEach(producto => {
    const article = document.createElement('article');
    article.innerHTML = `
        <img src="${producto.img}" alt="${producto.alt}">
        <h4>${producto.title}</h4>
        <p>$  ${producto.precio}</p>
        <button>Comprar</button>
    `;
    publicacionesDiv.appendChild(article);
});