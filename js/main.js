// Botón ir arriba
const btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Animación de aparición (fade-in)
document.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('visible');
  });
});

// Formulario de contacto
const form = document.getElementById('form-contacto');
const msgEstado = document.getElementById('mensaje-estado');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      msgEstado.style.color = 'red';
      msgEstado.textContent = '⚠ Por favor completa todos los campos.';
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      msgEstado.style.color = 'red';
      msgEstado.textContent = '❌ Correo electrónico inválido.';
      return;
    }

    msgEstado.style.color = 'green';
    msgEstado.textContent = '✅ Mensaje enviado correctamente. ¡Gracias por contactarme!';
    form.reset();
  });
}
