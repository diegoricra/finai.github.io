document.addEventListener("DOMContentLoaded", () => {
    const ctaButtons = document.querySelectorAll(".cta-button");
    ctaButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = button.classList.contains("primary") ? "#0046A1" : "#008C7A";
        });
        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = button.classList.contains("primary") ? "#0057D8" : "#00C49F";
        });
    });

    const faqItems = document.querySelectorAll(".faq-item h3");
    faqItems.forEach(question => {
        question.addEventListener("click", () => {
            question.nextElementSibling.classList.toggle("show");
        });
    });
});
