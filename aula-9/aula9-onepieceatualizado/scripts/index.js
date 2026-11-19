// Aula 9: marcar e guardar escolhas com localStorage
const PREFIXO = "onepiece:";

function chave(item) {
  return PREFIXO + item.closest("section").id + ":" + item.textContent.trim();
}

function marcar(item) {
  item.classList.toggle("marcado");
  item.setAttribute("aria-pressed", item.classList.contains("marcado"));

  if (item.classList.contains("marcado")) {
    localStorage.setItem(chave(item), item.textContent.trim());
  } else {
    localStorage.removeItem(chave(item));
  }
}

document.querySelectorAll(".item").forEach((item) => {
  item.tabIndex = 0;
  item.setAttribute("role", "button");

  if (localStorage.getItem(chave(item))) {
    item.classList.add("marcado");
  }
  item.setAttribute("aria-pressed", item.classList.contains("marcado"));

  item.addEventListener("click", () => marcar(item));
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      marcar(item);
    }
  });
});
