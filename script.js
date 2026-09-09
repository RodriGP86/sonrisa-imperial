(function () {
  // --- Datos de la clínica: reemplaza con los reales ---
  var WHATSAPP_NUMBER = "525500000000"; // lada país + número, sin + ni espacios
  var EMAIL = "citas@sonrisaimperial.com";

  var form = document.getElementById("booking");
  var panel = document.getElementById("confirm");
  var summary = document.getElementById("confirm-summary");
  var waLink = document.getElementById("wa-link");
  var mailLink = document.getElementById("mail-link");
  var copyBtn = document.getElementById("copy-btn");
  var lastText = "";

  function val(id) {
    var el = document.getElementById(id);
    return (el && el.value ? el.value : "").trim();
  }

  function build() {
    var lines = [
      "Hola, quiero agendar una cita en Sonrisa Imperial.",
      "",
      "Nombre: " + val("nombre"),
      "Teléfono: " + val("telefono"),
      "Correo: " + (val("correo") || "—"),
      "Motivo: " + val("motivo"),
      "Fecha preferida: " + (val("fecha") || "—"),
      "Horario preferido: " + val("horario")
    ];
    var msg = val("mensaje");
    if (msg) lines.push("Mensaje: " + msg);
    return lines.join("\n");
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    lastText = build();
    summary.textContent = lastText;
    waLink.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lastText);
    mailLink.href = "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent("Solicitud de cita — " + val("nombre")) +
      "&body=" + encodeURIComponent(lastText);

    panel.hidden = false;
    panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });

  copyBtn.addEventListener("click", function () {
    function done() {
      copyBtn.textContent = "Copiado";
      setTimeout(function () { copyBtn.textContent = "Copiar datos"; }, 2000);
    }
    function fallback() {
      try {
        var r = document.createRange();
        r.selectNodeContents(summary);
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
        document.execCommand("copy");
        s.removeAllRanges();
        done();
      } catch (err) { /* no-op */ }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lastText).then(done, fallback);
    } else {
      fallback();
    }
  });
})();
