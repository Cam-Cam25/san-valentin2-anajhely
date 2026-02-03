const pages = [
  "./img/page1.png",
  "./img/page2.png",
  "./img/page3.png",
  "./img/confirmado.png" // pantalla final
];

let current = 0;

const pageImage = document.getElementById("pageImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function render(){
  pageImage.src = pages[current];

  // Si estás en la primera página, desactiva anterior
  prevBtn.disabled = current === 0;

  // Cambia texto del botón cuando llega a la confirmación
  if(current === pages.length - 1){
    nextBtn.textContent = "VOLVER AL INICIO";
  }else{
    nextBtn.textContent = "PAG. SIGUIENTE";
  }
}

prevBtn.addEventListener("click", () => {
  if(current > 0){
    current--;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

nextBtn.addEventListener("click", () => {
  if(current === pages.length - 1){
    current = 0; // vuelve al inicio
  }else{
    current++;
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
