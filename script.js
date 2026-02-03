const pages = Array.from(document.querySelectorAll(".page"));
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let current = 0;

function show(i){
  pages[current].classList.remove("active");
  current = i;
  pages[current].classList.add("active");

  // botones
  prevBtn.disabled = current === 0;
  nextBtn.textContent = (current === pages.length - 1) ? "VOLVER AL INICIO" : "PAG. SIGUIENTE";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

prevBtn.addEventListener("click", () => {
  if(current > 0) show(current - 1);
});

nextBtn.addEventListener("click", () => {
  if(current === pages.length - 1) show(0);
  else show(current + 1);
});

// Botones internos (ir a página específica / confirmar)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-goto], [data-confirm]");
  if(!btn) return;

  const goto = btn.getAttribute("data-goto");
  const confirm = btn.getAttribute("data-confirm");

  if(goto){
    const pageNum = Number(goto) - 1;
    if(pageNum >= 0 && pageNum < pages.length) show(pageNum);
  }

  if(confirm){
    // Página 4 = Confirmado
    show(3);
  }
});

// iniciar
show(0);
