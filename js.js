var trabajadores = ["Trabajador1", "Trabajador2"];
let container = document.querySelector('.container');

function myFunction() {
  var fecha = new Date();
  
  // Establecer la zona horaria a Argentina
  fecha = new Date(fecha.toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"}));
  
  var sabado = 6; //? 0 es Domingo, 6 es Sábado
  var diasHastaSabado = (sabado - fecha.getDay() + 7) % 7;
  fecha.setDate(fecha.getDate() + diasHastaSabado);
  
  var indice = Math.floor(fecha.getTime() / (1000 * 60 * 60 * 24 * 7)) % trabajadores.length;
  container.classList.toggle('active');
  document.getElementById("nombre").innerHTML = trabajadores[indice];
  
  var elemento = document.getElementById('nombre');
  if (elemento.innerHTML == 'Trabajador1') {
        elemento.style.color = 'pink';
    } else {    
        elemento.style.color = 'red';
    }
}

