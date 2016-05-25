var canvas = document.getElementById("canvas");

var context = canvas.getContext('2d');
var centerX = 100;
var centerY = 100;
var radius = 25;

context.beginPath();
context.rect(0, 75, 100, 50);
context.fillStyle = 'green';
context.fill();


context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();


