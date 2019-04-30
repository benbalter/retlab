var Turbolinks = require("turbolinks");
Turbolinks.start();

var anchorJS = require('anchor-js');
var anchors = new anchorJS();

document.addEventListener("DOMContentLoaded", function(event) {
  anchors.add('h3, h4, h5, h6');
});
