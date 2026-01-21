const app = document.getElementById("app");

// ✏️ PERSONALIZA
const nombreElla = "MI AMOR";
const tuNombre = "TU NOMBRE";

// 📸🎥 RECUERDOS (5 FOTOS + 3 VIDEOS)
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

// 🖤 PANTALLA INICIAL
const inicio = document.createElement("div");
inicio.className = "center";
inicio.innerHTML = `
    <h1>Hola ${nombreElla} ❤️</h1>
    <p>Hice esto solo para ti…</p>
    <button>Ver recuerdos 💖</button>
`;
app.appendChild(inicio);

inicio.querySelector("button").onclick = () => {
    inicio.remove();
    mostrarRecuerdo();
};

// 🔁 MOSTRAR FOTOS Y VIDEOS
function mostrarRecuerdo() {
    const contenedor = document.createElement("div");
    contenedor.className = "center";

    let media;

    if (recuerdos[indice].tipo === "foto") {
        media = document.createElement("img");
        media.src = recuerdos[indice].src;
        media.className = "photo";
    } else {
        media = document.createElement("video");
        media.src = recuerdos[indice].src;
        media.className = "video";
        media.controls = true;
        media.autoplay = true;
        media.loop = true;
        media.muted = true; // necesario para autoplay
    }

    const frase = document.createElement("div");
    frase.className = "frase";
    frase.innerText = recuerdos[indice].frase;

    const btn = document.createElement("button");
    btn.innerText = indice < recuerdos.length - 1 ? "Siguiente 💕" : "Final ❤️";

    contenedor.append(media, frase, btn);
    app.appendChild(contenedor);

    setTimeout(() => media.classList.add("show"), 100);

    btn.onclick = () => {
        contenedor.remove();
        indice++;
        if (indice < recuerdos.length) {
            mostrarRecuerdo();
        } else {
            mostrarFinal();
        }
    };
}

// 💌 FINAL
function mostrarFinal() {
    const final = document.createElement("div");
    final.className = "center";

    final.innerHTML = `
        <h1>Feliz 14 de Febrero ❤️</h1>
        <p>
            Gracias por cada momento,<br>
            cada risa y cada recuerdo.<br><br>
            Todo esto es solo para ti.<br><br>
            <b>${tuNombre}</b>
        </p>
    `;

    app.appendChild(final);
}

