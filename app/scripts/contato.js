const $copyContainer = document.querySelectorAll(".copyContainer")


const toggleBtnStatus = $btn => {
    $btn.classList.add("success")
    $btn.textContent = "Copiado"

    setTimeout(() => {
        $btn.classList.remove("success")
        $btn.textContent = "Copiar"
    }, 2000)
}


const copyFunction = (txt, $btn) => {
    try {
        navigator.clipboard.writeText(txt)
        toggleBtnStatus($btn)
    } catch (err) {
        console.log("Erro")
    }
}


$copyContainer.forEach(container => {
    const $txtElement = container.querySelector(".info")
    const $btn = container.querySelector("button")

    const txt = $txtElement.textContent.toString()
    $btn.addEventListener("click", () => {
        copyFunction(txt, $btn)
    })
})