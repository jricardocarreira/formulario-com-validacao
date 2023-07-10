const formInputs = document.querySelectorAll(".info")
const formulario = document.getElementById("form")

formInputs.forEach(function (item) {

    // Confirmar conteúdo com borda verde

    formulario.addEventListener("submit", function (event) {

        const idItem = item.getAttribute("id")
        var valorItem = document.forms["form"][idItem].value

        if (valorItem == "") {
            item.classList.add("sem-resposta")
            event.preventDefault()

        } else {
            item.classList.add("respondido")
            item.classList.remove("sem-resposta")
        }
    })

    // Validação do campo obrigatório

    formulario.addEventListener("change", function () {
        const idItem = item.getAttribute("id")
        var valorItem = document.forms["form"][idItem].value

        if (!valorItem == "") {
            item.classList.add("respondido")
            item.classList.remove("sem-resposta")
        } else {
            item.classList.remove("respondido")
        }
    })
})