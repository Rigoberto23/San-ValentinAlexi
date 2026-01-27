const app = document.getElementById("app");

const nombreElla = "MI AMOR";
const tuNombre = "Rigoberto";

const recuerdos = [
  { tipo: "foto", src: "img1.jpeg", frase: "Tu sonrisa es mi lugar favorito ❤️" },
  { tipo: "foto", src: "img2.jpeg", frase: "Así se ve alguien cuando ilumina mi vida ✨" },
  { tipo: "video", src: "vid1.mp4", frase: "Este momento vive en mi corazón 🎥💕" },
  { tipo: "foto", src: "img3.jpeg", frase: "No necesito más, si eres tú 💖" },
  { tipo: "video", src: "vid2.mp4", frase: "Cada risa contigo vale oro 😍" },
  { tipo: "foto", src: "img4.jpeg", frase: "Siempre tú, en todas mis versiones 💫" },
  { tipo: "video", src: "vid3.mp4", frase: "Contigo todo tiene sentido 💕" },
  { tipo: "foto", src: "img5.jpeg", frase: "Te elijo hoy y siempre ❤️" }
];

let indice = 0;

/* FLUJO */
function irARazones() {
  document.getElementById("cartita").classList.add("hidden");
  document.getElementById("razones").classList.remove("hidden");
}

function iniciarRecuerdos() {
  document.getElementById("razones").classList.add("hidden");
  app.classList.remove("hidden");
  mostrarInicio();
}

function mostrarInicio() {
  app.innerHTML = "";

  const inicio = document.createElement("div");
  inicio.className = "center fade-in";
  inicio.innerHTML = `
    <h1>Hola ${nombreElla} ❤️</h1>
    <p>Quiero mostrarte algo…</p>
    <button>Ver recuerdos 💖</button>
  `;

  inicio.querySelector("button").onclick = () => {
    inicio.remove();
    indice = 0;
    mostrarRecuerdo();
  };

  app.appendChild(inicio);
}

function mostrarRecuerdo() {
  const cont = document.createElement("div");
  cont.className = "center fade-in";

  let media;
  const item = recuerdos[indice];

  if (item.tipo === "foto") {
    media = document.createElement("img");
    media.src = item.src;
    media.className = "photo";
  } else {
    media = document.createElement("video");
    media.src = item.src;
    media.className = "video";
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.controls = true;
  }

  const frase = document.createElement("div");
  frase.className = "frase";
  frase.innerText = item.frase;

  const btn = document.createElement("button");
  btn.innerText = indice < recuerdos.length - 1 ? "Siguiente 💕" : "Final ❤️";

  cont.append(media, frase, btn);
  app.appendChild(cont);

  setTimeout(() => media.classList.add("show"), 100);

  btn.onclick = () => {
    cont.remove();
    indice++;
    indice < recuerdos.length ? mostrarRecuerdo() : mostrarFinal();
  };
}

function mostrarFinal() {
  app.innerHTML = `
    <div class="center fade-in">
      <h1>Te amo ❤️</h1>
      <p>Gracias por existir en mi vida.</p>
      <b>${tuNombre}</b>
    </div>
  `;
}




