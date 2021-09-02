var mousePosition;
var offset = [0, 0];
var div;
var isDown = false;

div = document.getElementById("box");

div.addEventListener(
  "mousedown",
  function (e) {
    isDown = true;
    offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    div.style.cursor = "grabbing";
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown = false;
    div.style.cursor = "grab";
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX
        //y : event.clientY  //habilita mover no eixo y
      };
      div.style.left = mousePosition.x + offset[0] + "px";
      //div.style.top  = (mousePosition.y + offset[1]) + 'px';  //habilita mover no eixo y
    }
  },
  true
);
