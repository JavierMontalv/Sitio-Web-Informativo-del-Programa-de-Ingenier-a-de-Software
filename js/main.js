// Botón ir arriba
const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Simulación de envío de formulario de contacto
const form = document.getElementById("form-contacto");
const msgEstado = document.getElementById("mensaje-estado");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      msgEstado.style.color = "red";
      msgEstado.textContent = "Por favor completa todos los campos.";
      return;
    }

    // Aqui en un proyecto real se haria la peticion POST/GET.
    // Para este trabajo, basta con simular la respuesta.
    msgEstado.style.color = "green";
    msgEstado.textContent = "Mensaje enviado correctamente. ¡Gracias por contactarme!";

    form.reset();
  });
}
