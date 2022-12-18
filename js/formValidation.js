const contactForm = document.querySelector(".form");
const fname = document.getElementById("fname");
const subject = document.getElementById("subject");
const contactEmail = document.getElementById("contact-email");
const emailContent = document.getElementById("email-content");



contactForm.addEventListener("submit", (err) => {

    let formWarning = "";

    if (fname.value.length < 1) {
        formWarning = "Please submit a name."
        err.preventDefault()
    } else if (subject.value.length < 1) {
        formWarning = "Please add a subject to your email."
        err.preventDefault()
    } else if (contactEmail.value.length < 6 || !contactEmail.value.includes("@")) {
        formWarning = "Please submit a valid E-Mail address."
        err.preventDefault()
    } else if (emailContent.value.length < 25) {
        formWarning = "Please write a longer email."
        err.preventDefault()
    };

    document.querySelector(".card-title").innerHTML = formWarning;
});
