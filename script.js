document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    document.getElementById("contact-form").reset();
});
