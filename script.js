document.addEventListener("DOMContentLoaded", () => {
    const inicio = document.querySelector("#inicio");
    if (inicio) {
        inicio.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionInicio = document.querySelector(".inicio");
            sectionInicio.scrollIntoView({ behavior: "smooth" });
        });
    }

    const caracteristicas = document.querySelector("#caracteristicas");
    if (caracteristicas) {
        caracteristicas.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionCaracteristicas = document.querySelector(".caracteristicas");
            sectionCaracteristicas.scrollIntoView({ behavior: "smooth" });
        });
    }

    const precios = document.querySelector("#precios");
    if (precios) {
        precios.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionPrecios = document.querySelector(".precios");
            sectionPrecios.scrollIntoView({ behavior: "smooth" });
        });
    }

    const testimonios = document.querySelector("#testimonios");
    if (testimonios) {
        testimonios.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionTestimonios = document.querySelector(".testimonios");
            sectionTestimonios.scrollIntoView({ behavior: "smooth" });
        });
    }

    const soporte = document.querySelector("#soporte");
    if (soporte) {
        soporte.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionSoporte = document.querySelector(".soporte");
            sectionSoporte.scrollIntoView({ behavior: "smooth" });
        });
    }

    const registrateGratis = document.querySelector("#registrate-gratis");
    if (registrateGratis) {
        registrateGratis.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionRegistro = document.querySelector(".registro");
            sectionRegistro.scrollIntoView({ behavior: "smooth" });
        });
    }
});
