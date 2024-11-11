const images = document.querySelectorAll("aside img");

let index = 0;

function cycleImages() {
    images.forEach(img => img.classList.remove("selected"));

    images[index].classList.add("selected");

    index = (index + 1) % images.length; 
}

setInterval(cycleImages, 1500); 