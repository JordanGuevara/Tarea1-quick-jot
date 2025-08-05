const input = document.getElementById("nota");
const btnAdd = document.getElementById("btnAdd");
const container = document.getElementById("notesContainer");
const btnInstall = document.querySelector("#app--install");
let deferredPrompt;

let notas = JSON.parse(localStorage.getItem("notas")) || [];


function renderNotas() {
  container.innerHTML = "";
  notas.forEach((texto, index) => {
    const card = document.createElement("div");
    card.className = "mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col";
    card.innerHTML = `
      <div class="mdl-card__supporting-text">
        ${texto}
      </div>
    `;
    container.appendChild(card);
  });
}

btnAdd.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto) {
    notas.push(texto);
    localStorage.setItem("notas", JSON.stringify(notas));
    input.value = "";
    renderNotas();
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registrado'))
    .catch((err) => console.error('Error al registrar SW', err));
}

window.addEventListener("beforeinstallprompt", (e) => {
  console.log("Evento anulado");
  e.preventDefault();
  deferredPrompt = e;
  btnInstall.style.display = "block";
});

btnInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const response = await deferredPrompt.userChoice;
    if(response.outcome ==="accepted"){
      console.log("Usuario acepto la descarga");

    }
  }

});

renderNotas();
