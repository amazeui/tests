var info = document.querySelector('#font-info');
var icon = document.querySelector('.am-icon-github');

var element = window.getComputedStyle(icon, null).getPropertyValue('font-family');
var after = window.getComputedStyle(icon, ':before').getPropertyValue('font-family');

info.innerHTML = '<strong>a:</strong> <code>' + element + '</code><br/> <br/>'
+ '<strong>:before:</strong> <code>' + after + '</code>';