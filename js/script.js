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

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    if(calendarEl){

        const calendar = new FullCalendar.Calendar(calendarEl, {

            initialView: 'dayGridMonth',

            locale: 'es',

            height: "auto",

            selectable: true,

            nowIndicator: true,

            headerToolbar: {

                left: 'prev,next today',

                center: 'title',

                right: 'dayGridMonth,timeGridWeek'

            },

            events: [

                {
                    title: "Sesión Boda",
                    start: "2026-09-10"
                },

                {
                    title: "Graduación",
                    start: "2026-09-15"
                }

            ],

            dateClick: function(info){

                alert("Seleccionaste: " + info.dateStr);

            }

        });

        calendar.render();

    }

});