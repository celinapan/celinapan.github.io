function toggleTheme() {
    document.getElementById('body').classList.add("dark-mode")
}
buttonToggle = document.getElementById("toggleButton")
buttonToggle.onclick = toggleTheme;