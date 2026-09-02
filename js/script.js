// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", () => {

    // Obtiene el nombre del archivo actual
    let paginaActual = window.location.pathname.split("/").pop();

    // Si estamos en la raíz (https://...)
    if (paginaActual === "") {
        paginaActual = "index.html";
    }

    // Recorre todos los enlaces del menú
    document.querySelectorAll(".nav-link").forEach(link => {

        if (link.dataset.page === paginaActual) {

            // Resalta la opción actual
            link.classList.add("active");

            // Indica accesibilidad
            link.setAttribute("aria-current", "page");

            // Evita que el usuario vuelva a hacer clic
            link.removeAttribute("href");

        }

    });

});