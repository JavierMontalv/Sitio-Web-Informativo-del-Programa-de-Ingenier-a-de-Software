// main.js

// Navegación: menú responsive
const toggle = document.querySelector('.navegacion__toggle');
const listaNav = document.querySelector('.navegacion__lista');

if (toggle && listaNav) {
  toggle.addEventListener('click', () => {
    const abierto = listaNav.classList.toggle('navegacion__lista--abierta');
    toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  // Cerrar menú al hacer clic en un enlace
  listaNav.addEventListener('click', (e) => {
    if (e.target.matches('.navegacion__enlace')) {
      listaNav.classList.remove('navegacion__lista--abierta');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Botón volver arriba
const botonArriba = document.getElementById('boton-arriba');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    botonArriba.classList.add('boton-arriba--visible');
  } else {
    botonArriba.classList.remove('boton-arriba--visible');
  }
});

if (botonArriba) {
  botonArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Validación básica del formulario de contacto
const formContacto = document.getElementById('form-contacto');
const mensajeEstado = document.getElementById('form-mensaje-estado');

function mostrarError(campo, mensaje) {
  const parrafoError = document.querySelector(`.formulario__error[data-error-for="${campo.id}"]`);
  if (parrafoError) {
    parrafoError.textContent = mensaje || '';
  }
}

function limpiarErrores() {
  document.querySelectorAll('.formulario__error').forEach((el) => (el.textContent = ''));
}

function validarCorreo(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
}

if (formContacto && mensajeEstado) {
  formContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    limpiarErrores();
    mensajeEstado.textContent = '';
    mensajeEstado.style.color = '';

    const nombre = formContacto.nombre;
    const correo = formContacto.correo;
    const mensaje = formContacto.mensaje;

    let esValido = true;

    if (!nombre.value.trim()) {
      mostrarError(nombre, 'Por favor, escribe tu nombre.');
      esValido = false;
    }

    if (!correo.value.trim()) {
      mostrarError(correo, 'El correo es obligatorio.');
      esValido = false;
    } else if (!validarCorreo(correo.value.trim())) {
      mostrarError(correo, 'Escribe un correo válido.');
      esValido = false;
    }

    if (!mensaje.value.trim()) {
      mostrarError(mensaje, 'Cuéntanos brevemente tu duda o comentario.');
      esValido = false;
    }

    if (!esValido) {
      mensajeEstado.textContent = 'Por favor corrige los campos marcados antes de enviar.';
      mensajeEstado.style.color = '#b91c1c';
      return;
    }

    // Simulación de envío
    setTimeout(() => {
      formContacto.reset();
      mensajeEstado.textContent =
        'Tu mensaje se ha registrado correctamente. Este formulario es demostrativo; para contacto real utiliza los canales oficiales.';
      mensajeEstado.style.color = '#166534';
    }, 500);
  });
}
