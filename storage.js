const toggle = document.getElementById("alternar");

const salvo = localStorage.getItem("modoTroll");

if (salvo === "true") {
    document.body.classList.add("modo-troll");
    if (toggle) toggle.checked = true;
}

if (toggle) {
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("modo-troll");
        localStorage.setItem("modoTroll", toggle.checked);
    });
}