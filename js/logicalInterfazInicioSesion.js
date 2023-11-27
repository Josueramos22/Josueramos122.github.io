document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);
document.querySelector('#btnTogglePassword').addEventListener('click', togglePasswordVisibility);

function iniciarSesion() {
    var sCorreo = document.querySelector('#txtCorreo').value;
    var sContrasenna = document.querySelector('#txtContrasenna').value;

    // Validar que los campos no estén vacíos
    if (sCorreo.trim() === '' || sContrasenna.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Validar formato de correo electrónico (puedes usar una expresión regular más robusta)
    if (!validarFormatoCorreo(sCorreo)) {
        alert('Ingrese un correo electrónico válido.');
        return;
    }

    // Validar longitud de la contraseña (puedes ajustar según tus requisitos)
    if (sContrasenna.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    // Validar credenciales
    var bAcceso = validarCredenciales(sCorreo, sContrasenna);

    if (bAcceso) {
        ingresar();
    } else {
        alert('Credenciales incorrectas. Verifique su correo y contraseña.');
    }
}

function validarFormatoCorreo(correo) {
    // Expresión regular básica para validar el formato del correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

function togglePasswordVisibility() {
    var passwordInput = document.querySelector('#txtContrasenna');
    var btnTogglePassword = document.querySelector('#btnTogglePassword');

    // Cambiar el tipo del campo de contraseña entre 'password' y 'text'
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

    // Cambiar el emoji del botón
    btnTogglePassword.textContent = passwordInput.type === 'password' ? '👁️' : '👁️';
}

function ingresar() {
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href = 'inicio.html';
            break;
        case '2':
            window.location.href = 'inicio.html';
            break;
        default:
            window.location.href = 'inicio.html';
            break;
    }
}
