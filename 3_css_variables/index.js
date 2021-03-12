let inputs = document.querySelectorAll('input');
function handleChange() {
    let suffix = this.dataset.suffix || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(unInput => {
    unInput.addEventListener("change", handleChange);
});