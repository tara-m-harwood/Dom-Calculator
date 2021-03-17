console.log("dom calc")

const $spans = document.querySelectorAll('span')

$spans.forEach((span) => {
    span.addEventListener("click", doSomething)
    })

function doSomething() {
    console.log(this.textContent)
}



