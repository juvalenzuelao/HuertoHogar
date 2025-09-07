document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    //Nombre 
    const nombre = document.getElementById("Nombres");
    if (!nombre || nombre.value.trim() === "" || nombre.value.length > 50) {
      alert("El nombre es obligatorio y debe tener máximo 50 caracteres.");
      valido = false;
    }

    //Rut
    const rut = document.getElementById("Rut");
    const rutRegex = /^[0-9]{7,8}[0-9Kk]{1}$/;
    if (!rut || !rutRegex.test(rut.value.trim())) {
      alert("El RUT no es válido. Ejemplo: 19011022K");
      valido = false;
    }

    //Apellidos
    const apellidos = document.getElementById("Apellidos");
    if (!apellidos || apellidos.value.trim() === "" || apellidos.value.length > 100) {
      alert("Los apellidos son obligatorios y deben tener máximo 100 caracteres.");
      valido = false;
    }

    //Correo
    const correo = document.getElementById("Correo");
    const correoRegex = /^[\w\.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!correo || !correoRegex.test(correo.value.trim()) || correo.value.length > 100) {
      alert("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com y tener máximo 100 caracteres.");
      valido = false;
    }

    //Contraseña
    const contrasenna = document.getElementById("Contrasenna");
    const repetirContrasenna = document.getElementById("RepetirContrasenna");
    if (!contrasenna || !repetirContrasenna || contrasenna.value.trim() === "" || repetirContrasenna.value.trim() === "") {
      alert("La contraseña es obligatoria.");
      valido = false;
    } else if (contrasenna.value !== repetirContrasenna.value) {
      alert("Las contraseñas no coinciden.");
      valido = false;
    }

    //Dirección
    const direccion = document.getElementById("Direccion");
    if (!direccion || direccion.value.trim() === "" || direccion.value.length > 300) {
      alert("La dirección es obligatoria y debe tener máximo 300 caracteres.");
      valido = false;
    }

    //Región y Comuna 
    const region = document.getElementById("inputRegion");
    const comuna = document.getElementById("inputComuna");
    if (region && region.selectedIndex === 0) {
      alert("Debe seleccionar una región.");
      valido = false;
    }
    if (comuna && comuna.selectedIndex === 0) {
      alert("Debe seleccionar una comuna.");
      valido = false;
    }

    if (valido) {
      alert("Formulario válido ");
      form.submit();
    }
  });
});
