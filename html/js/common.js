var modal = document.getElementById('newOutfit');
var btn = document.getElementById("btnNewOutfit");
var span = document.getElementsByClassName("closeOutfit")[0];
var back = document.getElementById("goBack");
var backToo = document.getElementById("goBackToo");

btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
back.onclick = function() {
	modal.style.display = "none";
}
backToo.onclick = function() {
	modal.style.display = "none";
}


var choose = document.getElementById('myChoice');
var btnChoose = document.getElementById("btnCrtOut");
var ext = document.getElementsByClassName("closeCrt")[0];
var goBackto = document.getElementById("goBack");
var cancel = document.getElementById("myCancel");

btnChoose.onclick = function() {
	myChoice.style.display = "block";
}
ext.onclick = function() {
	myChoice.style.display = "none";
}
goBackto.onclick = function() {
	myChoice.style.display = "none";
}
cancel.onclick = function() {
	myChoice.style.display = "none";
}