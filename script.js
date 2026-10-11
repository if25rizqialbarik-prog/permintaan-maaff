
const envelopeButton = document.getElementById("envelopeButton");
const envelope = document.getElementById("envelope");
const instruction = document.getElementById("instruction");
const letterContent = document.getElementById("letterContent");
const closeLetterButton = document.getElementById("closeLetterButton");
const forgiveButton = document.getElementById("forgiveButton");
const response = document.getElementById("response");

let isOpen = false;

function openEnvelope() {
    isOpen = true;

    envelope.classList.add("is-open");
    letterContent.classList.add("visible");

    envelopeButton.setAttribute("aria-expanded", "true");
    envelopeButton.setAttribute("aria-label", "Tutup amplop surat");

    letterContent.removeAttribute("inert");
    letterContent.setAttribute("aria-hidden", "false");

    instruction.textContent = "Surat kecil ini khusus untuk kamu 🤍";

    setTimeout(() => {
        letterContent.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }, 250);
}

function closeEnvelope() {
    isOpen = false;

    envelope.classList.remove("is-open");
    letterContent.classList.remove("visible");

    envelopeButton.setAttribute("aria-expanded", "false");
    envelopeButton.setAttribute("aria-label", "Buka amplop surat");

    letterContent.setAttribute("inert", "");
    letterContent.setAttribute("aria-hidden", "true");

    instruction.textContent =
        "Ketuk amplopnya untuk membuka surat 💌";

    response.classList.remove("show");
    response.textContent = "";

    envelopeButton.focus();
}

envelopeButton.addEventListener("click", () => {
    if (isOpen) {
        closeEnvelope();
    } else {
        openEnvelope();
    }
});

closeLetterButton.addEventListener("click", closeEnvelope);

forgiveButton.addEventListener("click", () => {
    response.textContent =
        "Makasih yaa, Zahraaa, sudah mau baca surat ini. " +
        "Aku nanti bakalan kerjain tugas dulu sampai selesai. 🤍";

    response.classList.add("show");

    response.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});
