document.addEventListener('DOMContentLoaded', function() {
    const botonSuscribirse = document.querySelector('.input-group .btn-primary');
    
    botonSuscribirse.addEventListener('click', function() {
        const email = document.querySelector('input[type="email"]').value.trim();
        
        if (!email) {
            alert('El email es obligatorio');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+$/.test(email)) {
            alert('El email debe tener formato: algo@algo.cl');
            return;
        }
        
        alert('¡Suscripción exitosa!');
        document.querySelector('input[type="email"]').value = '';
    });

    const formulario = document.getElementById('contactoForm');
    
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const nombre = document.getElementById('nombreContacto').value.trim();
        const apellido = document.getElementById('apellidoContacto').value.trim();
        const correo = document.getElementById('correoContacto').value.trim();
        const mensaje = document.getElementById('mensajeContacto').value.trim();
        
        if (!nombre) {
            alert('El nombre es obligatorio');
            return;
        }
        
        if (nombre.length > 100) {
            alert('El nombre no puede superar los 100 caracteres');
            return;
        }
        
        if (!apellido) {
            alert('El apellido es obligatorio');
            return;
        }
        
        if (!correo) {
            alert('El correo es obligatorio');
            return;
        }
        
        if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(correo)) {
            alert('El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com');
            return;
        }
        
        if (!mensaje) {
            alert('El mensaje es obligatorio');
            return;
        }
        
        if (mensaje.length > 500) {
            alert('El mensaje no puede superar los 500 caracteres');
            return;
        }
        
        alert('¡Formulario enviado correctamente!');
        formulario.reset();
    });

});