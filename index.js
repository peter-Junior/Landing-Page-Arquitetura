const openModalButton = document.getElementById("open-modal");

openModalButton.disabled = true;

document.getElementById("email").addEventListener("input", () => {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (nome !== '' && nome !== null && email !== '' && email !== null) {
        openModalButton.disabled = false;

        const closeModalButton = document.querySelector("#close-modal");
        const modal = document.querySelector("#modal");
        const fade = document.querySelector("#fade");

        const toggleModal = () => {
            [modal, fade].forEach(el => el.classList.toggle("hide"))
        }
    
        [openModalButton, closeModalButton, fade].forEach(el => {
            el.addEventListener("click", () => toggleModal())
        });
    } else {
        openModalButton.disabled = true;
    }
});

openModalButton.addEventListener("onload", () => {    
    nome.value = '';
    email.value = '';
    openModalButton.disabled = true;
});