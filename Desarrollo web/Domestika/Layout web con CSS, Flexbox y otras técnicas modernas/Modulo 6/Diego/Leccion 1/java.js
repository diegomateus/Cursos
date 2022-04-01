document.querySelectorAll(".contenedor-batman").forEach(function(elemento) {
    elemento.addEventListener("click", function() {
      this.classList.toggle("descubierto");
    });
  });