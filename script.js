
function velocidad() {
  let d = parseFloat(document.getElementById('v_d').value);
  let t = parseFloat(document.getElementById('v_t').value);
  document.getElementById('v_r').innerText = t ? `Velocidad = ${(d/t).toFixed(2)} m/s` : 'Error: t no puede ser 0';
}
function aceleracion() {
  let dv = parseFloat(document.getElementById('a_dv').value);
  let dt = parseFloat(document.getElementById('a_dt').value);
  document.getElementById('a_r').innerText = dt ? `Aceleración = ${(dv/dt).toFixed(2)} m/s²` : 'Error: Δt no puede ser 0';
}
function fuerza() {
  let m = parseFloat(document.getElementById('f_m').value);
  let a = parseFloat(document.getElementById('f_a').value);
  document.getElementById('f_r').innerText = `Fuerza = ${(m*a).toFixed(2)} N`;
}
function trabajo() {
  let F = parseFloat(document.getElementById('w_f').value);
  let d = parseFloat(document.getElementById('w_d').value);
  let ang = parseFloat(document.getElementById('w_ang').value) * Math.PI / 180;
  document.getElementById('w_r').innerText = `Trabajo = ${(F*d*Math.cos(ang)).toFixed(2)} J`;
}
function energiaCinetica() {
  let m = parseFloat(document.getElementById('k_m').value);
  let v = parseFloat(document.getElementById('k_v').value);
  document.getElementById('k_r').innerText = `K = ${(0.5*m*v*v).toFixed(2)} J`;
}
function energiaPotencial() {
  let m = parseFloat(document.getElementById('u_m').value);
  let g = parseFloat(document.getElementById('u_g').value);
  let h = parseFloat(document.getElementById('u_h').value);
  document.getElementById('u_r').innerText = `U = ${(m*g*h).toFixed(2)} J`;
}
function densidad() {
  let m = parseFloat(document.getElementById('d_m').value);
  let V = parseFloat(document.getElementById('d_v').value);
  document.getElementById('d_r').innerText = V ? `ρ = ${(m/V).toFixed(2)} kg/m³` : 'Error: V no puede ser 0';
}
function presion() {
  let F = parseFloat(document.getElementById('p_f').value);
  let A = parseFloat(document.getElementById('p_a').value);
  document.getElementById('p_r').innerText = A ? `P = ${(F/A).toFixed(2)} Pa` : 'Error: A no puede ser 0';
}
function carga() {
  let I = parseFloat(document.getElementById('q_i').value);
  let t = parseFloat(document.getElementById('q_t').value);
  document.getElementById('q_r').innerText = `q = ${(I*t).toFixed(2)} C`;
}
function ohm() {
  let I = parseFloat(document.getElementById('ohm_i').value);
  let R = parseFloat(document.getElementById('ohm_r').value);
  document.getElementById('ohm_v').innerText = `V = ${(I*R).toFixed(2)} V`;
}
