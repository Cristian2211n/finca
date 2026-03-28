document.addEventListener("DOMContentLoaded", () => {

    // ===== ELEMENTOS =====
    const btn = document.getElementById("btnMusica");
    const musica = document.getElementById("musica");
    const contador = document.getElementById("contador");

    const modal = document.getElementById("modalInicio");
    const aceptar = document.getElementById("aceptarBtn");

    // ===== BLOQUEAR AL INICIO =====
    document.body.classList.add("bloqueado");

    // ===== BOTÓN ACEPTAR (AQUÍ ESTABA EL ERROR) =====
    aceptar.addEventListener("click", () => {

        // 🔥 DESAPARECE INMEDIATO
        modal.style.display = "none";

        // quitar blur
        document.body.classList.remove("bloqueado");

        // música
        musica.play().catch(() => {});
    });

    // ===== BOTÓN MÚSICA =====
    musica.volume = 1;

    btn.addEventListener("click", () => {
        musica.play()
        .then(() => {
            btn.innerText = "🔊 Sonando...";
        })
        .catch(() => {
            alert("Toca nuevamente para activar el sonido 🔊");
        });
    });

    // ===== ACTIVAR CON CLICK GENERAL =====
    document.body.addEventListener("click", () => {
        musica.play().catch(() => {});
    }, { once: true });

    // ===== CONTADOR =====
    const fechaEvento = new Date("May 1, 2026 00:00:00").getTime();

    setInterval(() => {
        let ahora = new Date().getTime();
        let diferencia = fechaEvento - ahora;

        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        contador.innerHTML = `⏳ Faltan ${dias} días y ${horas} horas`;
    }, 1000);

});
