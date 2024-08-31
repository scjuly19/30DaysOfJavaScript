const inputs = document.querySelectorAll(".inbox input[type=checkbox]")
let lastChecked, inRange;
function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        inputs.forEach(input => {
            if (input === this || input == lastChecked) {
                inRange = !inRange
            }
            if (inRange) {
                input.checked = true
            }
        })
    }
    lastChecked = this;
}
inputs.forEach(input => {
    input.addEventListener("click", handleCheck)
})