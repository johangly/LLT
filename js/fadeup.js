window.addEventListener("scroll", function() {
    const fadeItem = document.querySelectorAll(".fade");

    for (let i = 0; i < fadeItem.length; i++) {
        const altura = window.innerHeight / 1.2;
        const distancia = fadeItem[i].getBoundingClientRect().top;
        if (distancia <= altura) {
            fadeItem[i].classList.add("fade__active");
        }
    }


})

// para que el efecto fade funcione se tiene que agregar la clase fade y fade__up a la seccion o objeto que se le agregara dicho efecto