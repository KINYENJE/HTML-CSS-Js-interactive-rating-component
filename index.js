const mainContainer = document.querySelector(".rating-container")
const thanksContainer = document.querySelector(".thank-you-container")
const submitButton = document.querySelector(".submit-button")
const rating = document.getElementById("rate")
const rates = document.querySelectorAll("button")

submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((ratin) => {
    ratin.addEventListener("click", () =>{
        rating.innerHTML = ratin.innerHTML
    })
})