

//--------------------
var para = document.getElementById('para');
console.log(para);

//--------------------
var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Gulp Workflow Managements');

fill;
