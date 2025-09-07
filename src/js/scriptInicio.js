document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    //Correo
    const correo = document.getElementById("Correo");
    const correoRegex = /^[\w\.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!correo || !correoRegex.test(correo.value.trim()) || correo.value.length > 100) {
      alert("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com y tener máximo 100 caracteres.");
      valido = false;
    }

    //Contraseña
    const contrasenna = document.getElementById("Contrasenna");
    if (!contrasenna || contrasenna.value.trim() === "") {
      alert("La contraseña es obligatoria.");
      valido = false;
    }

    if (valido) {
      alert("Formulario válido ");
      form.submit();
    }
  });
});
