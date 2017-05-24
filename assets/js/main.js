var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

//tablero[coor1][coor2] = "A";
//aca quiero rescatar los valores de las coordenadas

var coor1 = document.getElementsByClassName("coor1").value;
var coor2 = document.getElementsByClassName("coor2").value;

//Obtengo el div en donde se dibujará el tablero

var divTablero = document.getElementById("tablero");

//dibuja el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}

//quiero poner un span cuando ingresa el numero de celular

function celular(){
  var celu = document.getElementById("numero").value;
  if(!(celu == null || celu == 0).test(celu)) {


  }

  var cajaDiv = document.getElementsByClassName("numerocelu")[0];
  var x = document.createElement("span");
  var t = document.createTextNode("Ingresa tu celular");
  x.appendChild(t);
  cajaDiv.appendChild(x);
  

}
celular();

