document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-editar-usuario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    // Resetear estados previos
    form.querySelectorAll(".is-invalid, .is-valid").forEach(el => {
      el.classList.remove("is-invalid", "is-valid");
    });

    // RUN
    const run = document.getElementById("e-run");
    const runRegex = /^[0-9]{7,8}[0-9Kk]{1}$/;
    if (!runRegex.test(run.value.trim())) {
      run.classList.add("is-invalid");
      valido = false;
    } else {
      run.classList.add("is-valid");
    }

    // Nombre
    const nombre = document.getElementById("e-nombre");
    if (nombre.value.trim() === "" || nombre.value.length > 50) {
      nombre.classList.add("is-invalid");
      valido = false;
    } else {
      nombre.classList.add("is-valid");
    }

    // Apellidos
    const apellidos = document.getElementById("e-apellidos");
    if (apellidos.value.trim() === "" || apellidos.value.length > 100) {
      apellidos.classList.add("is-invalid");
      valido = false;
    } else {
      apellidos.classList.add("is-valid");
    }

    // Correo
    const correo = document.getElementById("e-correo");
    const correoRegex = /^[\w\.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!correoRegex.test(correo.value.trim()) || correo.value.length > 100) {
      correo.classList.add("is-invalid");
      valido = false;
    } else {
      correo.classList.add("is-valid");
    }

    // Teléfono (opcional)
    const telefono = document.getElementById("e-telefono");
    if (telefono.value.trim() !== "" && !/^[0-9]+$/.test(telefono.value.trim())) {
      telefono.classList.add("is-invalid");
      valido = false;
    } else if (telefono.value.trim() !== "") {
      telefono.classList.add("is-valid");
    }

    // Tipo de usuario
    const tipo = document.getElementById("e-tipo");
    if (tipo.value === "") {
      tipo.classList.add("is-invalid");
      valido = false;
    } else {
      tipo.classList.add("is-valid");
    }

    // Región
    const region = document.getElementById("e-region");
    if (region.value === "") {
      region.classList.add("is-invalid");
      valido = false;
    } else {
      region.classList.add("is-valid");
    }

    // Comuna
    const comuna = document.getElementById("e-comuna");
    if (comuna.value === "") {
      comuna.classList.add("is-invalid");
      valido = false;
    } else {
      comuna.classList.add("is-valid");
    }

    // Dirección
    const direccion = document.getElementById("e-dir");
    if (direccion.value.trim() === "" || direccion.value.length > 300) {
      direccion.classList.add("is-invalid");
      valido = false;
    } else {
      direccion.classList.add("is-valid");
    }

    // Enviar si todo está ok
    if (valido) {
      alert("Formulario válido ");
      form.submit();
    }
  });
});
