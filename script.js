const reglas = `.website-background{ color: #FFFFFF;}\n
                .element-text{ color: #FFFFFF;}\n
                .element-border{ border-color: #FFFFFF;}\n
                .element-background{ background-color: #FFFFFF;}\n
                .header{ color: #FFFFFF;}`;

function limpiarPaleta() {
  $("#css-rules").val(reglas);
  $("#color1").css("background-color", "#FFFFFF");
  $("#color2").css("background-color", "#FFFFFF");
  $("#color3").css("background-color", "#FFFFFF");
  $("#color4").css("background-color", "#FFFFFF");
  $("#color5").css("background-color", "#FFFFFF");
}

function randomPalette() {
  var colores = [];
  var random = Math.floor(Math.random() * 359);
  for (var i = 0; i < 5; i++) {
    var color = random + i * (360 / 5);
    if (color > 359) {
      color = color - 359;
    }
    colores[i] = hsvToRgb(color / 360, 0.8, 0.9);
    colores[i].push(color);
  }
  return colores;
}

function generarPaleta() {
  var colores = randomPalette();
  var listHex = [];
  colores.map((c, i) => {
    var r = Math.floor(colores[i][0]);
    var g = Math.floor(colores[i][1]);
    var b = Math.floor(colores[i][2]);
    var hexa = rgbToHexFull(r, g, b);
    //console.log("#color" + (i + 1));
    $("#color" + (i + 1)).css({ "background-color": hexa });
    listHex.push(hexa);
  });
  //console.log(listHex);
  var color1 = document.getElementById("color1");
  color1.style.backgroundColor;
  var color2 = document.getElementById("color2");
  color2.style.backgroundColor;
  var color3 = document.getElementById("color3");
  color3.style.backgroundColor;
  var color4 = document.getElementById("color4");
  color4.style.backgroundColor;
  var color5 = document.getElementById("color5");
  color5.style.backgroundColor;
  $("#css-rules").val(`.website-background{ color: ${listHex[0]} ;}\n
                        .element-text{ color: ${listHex[1]};}\n
                        .element-border{ border-color: ${listHex[2]};}\n
                        .element-background{ background-color: ${listHex[3]};}\n
                        .header{ color: ${listHex[4]};}`);
}
