const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

var nome = document.querySelector("input#nome")
var email = document.querySelector("input#email")

openModalButton.addEventListener("click", () => emptyFields())
if (nome == '' || email == '') {
    var emptyFields = () => {
        alert("Para conhecer nossos serviços, precisamos que seja fornecida suas informações")
    }
    

} else {
    const toggleModal = () => {
        [modal, fade].forEach(el => el.classList.toggle("hide"))
    }

    [openModalButton, closeModalButton, fade].forEach(el => {
        el.addEventListener("click", () => toggleModal()) 
    })
}