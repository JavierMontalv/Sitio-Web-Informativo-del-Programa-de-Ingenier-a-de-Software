// main.js
// ======================================================
// Funcionalidad global del sitio web informativo
// Autor: Breyner Javier Montalvo Peñarredonda
// Versión optimizada y profesional
// ======================================================

// ------------------------------------------------------
// Navegación responsive
// ------------------------------------------------------
const toggle = document.querySelector('.navegacion__toggle');
const listaNav = document.querySelector('.navegacion__lista');

if (toggle && listaNav) {
  toggle.addEventListener('click', () => {
    const abierto = listaNav.classList.toggle('navegacion__lista--abierta');
    toggle.setAttribute('aria-expanded', abierto);
  });

  // Cierra el menú cuando se hace clic en un enlace
  listaNav.addEventListener('click', (e) => {
    if (e.target.matches('.navegacion__enlace')) {
      listaNav.classList.remove('navegacion__lista--abierta');
      toggle.setAttribute('aria-expanded', false);
    }
  });
}

// ------------------------------------------------------
// Botón "volver arriba"
// ------------------------------------------------------
const botonArriba = document.getElementById('boton-arriba');

if (botonArriba) {
  window.addEventListener('scroll', () => {
    botonArriba.classList.toggle('boton-arriba--visible', window.scrollY > 200);
  });

  botonArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ------------------------------------------------------
// Validación del formulario de contacto
// ------------------------------------------------------
const formContacto = document.getElementById('form-contacto');
const mensajeEstado = document.getElementById('form-mensaje-estado');

const validarCorreo = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

// Muestra el mensaje debajo de cada input
function mostrarError(campo, mensaje) {
  const zonaError = document.querySelector(`.formulario__error[data-error-for="${campo.id}"]`);
  if (zonaError) zonaError.textContent = mensaje || '';
}

function limpiarErrores() {
  document.querySelectorAll('.formulario__error').forEach((el) => {
    el.textContent = '';
  });
}

if (formContacto && mensajeEstado) {
  formContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    limpiarErrores();
    mensajeEstado.textContent = '';
    mensajeEstado.style.color = '';

    const { nombre, correo, mensaje } = formContacto;
    let valido = true;

    // Nombre
    if (!nombre.value.trim()) {
      mostrarError(nombre, 'Por favor, escribe tu nombre.');
      valido = false;
    }

    // Correo
    if (!correo.value.trim()) {
      mostrarError(correo, 'El correo es obligatorio.');
      valido = false;
    } else if (!validarCorreo(correo.value.trim())) {
      mostrarError(correo, 'Escribe un correo válido.');
      valido = false;
    }

    // Mensaje
    if (!mensaje.value.trim()) {
      mostrarError(mensaje, 'Cuéntanos brevemente tu duda o comentario.');
      valido = false;
    }

    // Si hay errores, muestra aviso general
    if (!valido) {
      mensajeEstado.textContent = 'Por favor corrige los campos marcados antes de enviar.';
      mensajeEstado.style.color = '#b91c1c';
      return;
    }

    // Simulación de envío con pequeño delay
    setTimeout(() => {
      formContacto.reset();
      mensajeEstado.textContent =
        'Tu mensaje se ha registrado correctamente. Este formulario es demostrativo; para contacto real utiliza los canales oficiales.';
      mensajeEstado.style.color = '#166534';
    }, 550);
  });
}
