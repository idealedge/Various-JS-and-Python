var $ = function(arg){ return document.querySelector(arg); };
var el = $("#canvas");
var ctx = el.getContext("2d");

var max = {
  w: el.width,
  h: el.height
};

var cellSize = 4;

//drawCell = function(x,y){
//  ctx.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
//};

//var clearCell = function(x,y){
//  ctx.clearRect(x*cellSize, y*cellSize, cellSize, cellSize);
//};

//clear = function(){
//    el.width = max.w
//};

var $log = document.getElementById("span");
var buffer = [], i, j, k=0;
for(i=0;i<100;i++){
  buffer.push(ctx.createImageData(max.w, max.h));
  for (j = 0; j < max.h * max.w * 4; buffer[i].data[j++] = Math.round(Math.random() * 255)) {}
}
//var imageData = ctx.createImageData(max.w, max.h);
var stop = false;
step = function () {
  requestAnimationFrame(function () {
//    var imageData = ctx.createImageData(max.w, max.h);
//    for (i = 0; i < max.h * max.w * 4; imageData.data[i++] = Math.round(Math.random() * 255)) {}
    if(k>=100) k=0;
    ctx.putImageData(buffer[k++], 0, 0, 0, 0, max.w, max.h);
    if (!stop) {
      setTimeout(step, 1);
    }
  });
};
//step();

$("#start").addEventListener('click', function(){
  stop = false;
  step();
});
$("#stop").addEventListener('click', function(){
  stop = true;
});
