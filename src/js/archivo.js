(() => {
  const $ = (id) => document.getElementById(id);
  const KEY = "hh_users";
  const seed = [
    { run:"19011022K", nombre:"María", apellidos:"López", correo:"maria@duoc.cl", tipo:"Cliente", telefono:"987654321", fecha:"", region:"Metropolitana", comuna:"Santiago", dir:"Av. Siempre Viva 123" },
    { run:"20456789-5", nombre:"Juan", apellidos:"Pérez", correo:"juan@gmail.com",   tipo:"Vendedor", telefono:"",          fecha:"", region:"Biobío",        comuna:"Concepción", dir:"Calle Falsa 456" }
  ];
  let users = JSON.parse(localStorage.getItem(KEY) || "[]");
  if (!users.length) { users = seed; localStorage.setItem(KEY, JSON.stringify(users)); }

  const S = $("searchStatus");
  let currentId = "";

  const save = () => localStorage.setItem(KEY, JSON.stringify(users));
  const normRun = s => (s||"").toString().replace(/[.\-]/g,"").trim().toUpperCase();
  const find = q => {
    q = (q||"").trim().toLowerCase();
    if (!q) return null;
    return users.find(u => u.correo.toLowerCase() === q || normRun(u.run) === normRun(q)) || null;
  };
  const fill = u => {
    $("e-run").value = u.run||"";
    $("e-nombre").value = u.nombre||"";
    $("e-apellidos").value = u.apellidos||"";
    $("e-correo").value = u.correo||"";
    $("e-telefono").value = u.telefono||"";
    $("e-tipo").value = u.tipo||"Cliente";
    $("e-fecha").value = u.fecha||"";
    $("e-region").value = u.region||"Metropolitana";
    $("e-comuna").value = u.comuna||"Santiago";
    $("e-dir").value = u.dir||"";
    currentId = u.run;
  };
  const status = (m, ok) => {
    S.textContent = m;
    S.classList.toggle("text-success", !!ok);
    S.classList.toggle("text-danger", !ok);
  };
  const search = q => {
    const u = find(q);
    if (u) {
      fill(u);
      status(`Usuario encontrado: ${u.run}`, true);
      document.querySelector("section.mt-3").scrollIntoView({ behavior: "smooth" });
    } else status("No se encontró usuario.", false);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const run = new URLSearchParams(location.search).get("run");
    if (run) { $("q").value = run; search(run); }

    $("btnBuscar").addEventListener("click", e => { e.preventDefault(); search($("q").value); });
    $("q").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); search(e.currentTarget.value); } });

    $("form-editar-usuario").addEventListener("submit", e => {
      e.preventDefault();
      const u = {
        run: $("e-run").value.trim(),
        nombre: $("e-nombre").value.trim(),
        apellidos: $("e-apellidos").value.trim(),
        correo: $("e-correo").value.trim().toLowerCase(),
        telefono: $("e-telefono").value.replace(/\D/g,""),
        tipo: $("e-tipo").value,
        fecha: $("e-fecha").value,
        region: $("e-region").value,
        comuna: $("e-comuna").value,
        dir: $("e-dir").value.trim()
      };
      if (!/^[0-9]{7,9}[0-9Kk]$/.test(normRun(u.run))) return status("RUN inválido.", false);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.correo)) return status("Correo inválido.", false);
      if (!/(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(u.correo)) return status("Dominio no permitido.", false);

      const i = users.findIndex(x => normRun(x.run) === normRun(currentId || u.run));
      if (i > -1) users[i] = u; else users.push(u);
      save();
      alert("Usuario actualizado.");
      location.href = "usuario.html";
    });
  });
})();
