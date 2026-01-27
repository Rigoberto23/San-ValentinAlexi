const app = document.getElementById("app");

// ✏️ PERSONALIZA
const nombreElla = "Alexa";
const tuNombre = "Rigoberto";

// 📸🎥 RECUERDOS
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

/* 💌 CARTA */
function mostrarCarta() {
    app.innerHTML = `
        <div class="center">
            <div class="carta">
                <h2>Te tengo una sorpresa…</h2>
                <p>
                    Esto no es una fecha especial,<br>
                    es solo un detalle nacido del corazón.
                </p>
                <div class="firmas">
                    <span>De ${tuNombre}</span>
                    <span>Para ${nombreElla}</span>
                </div>
            </div>
            <button id="btnCarta">Descubrir 💖</button>
        </div>
    `;

    document.getElementById("btnCarta").onclick = mostrarRazones;
}

/* 🌹 RAZONES */
function mostrarRazones() {
    app.innerHTML = `
        <div class="center">
            <div class="razones">
                <div class="razon izq"><span>Porque me haces sentir en casa 🏡</span></div>
                <div class="razon der"><span>Porque tu risa cura todo ✨</span></div>
                <div class="razon izq"><span>Porque contigo todo vale la pena ❤️</span></div>
                <div class="razon der"><span>Porque te elijo todos los días 💫</span></div>
            </div>
            <button id="btnRazones">Continuar 💕</button>
        </div>
    `;

    document.getElementById("btnRazones").onclick = mostrarRecuerdo;
}

/* 📸🎥 RECUERDOS */
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
        media.autoplay = true;
        media.loop = true;
        media.muted = true;
        media.controls = true;
    }

    const frase = document.createElement("div");
    frase.className = "frase";
    frase.innerText = recuerdos[indice].frase;

    const btn = document.createElement("button");
    btn.innerText = indice < recuerdos.length - 1 ? "Siguiente 💕" : "Final ❤️";

    contenedor.append(media, frase, btn);
    app.innerHTML = "";
    app.appendChild(contenedor);

    setTimeout(() => media.classList.add("show"), 100);

    btn.onclick = () => {
        indice++;
        if (indice < recuerdos.length) {
            mostrarRecuerdo();
        } else {
            mostrarFinal();
        }
    };
}

/* 🌙 FINAL */
function mostrarFinal() {
    app.innerHTML = `
        <div class="center">
            <h1>Solo quería decirte algo… ❤️</h1>
            <p>
                Gracias por existir,<br>
                por quedarte,<br>
                y por ser tú.
            </p>
            <p><b>${tuNombre}</b></p>
        </div>
    `;
}

// 🚀 INICIO
mostrarCarta();


