function homebutton() {
    var i = document.getElementsByClassName("homebutton");
    var j = document.getElementsByClassName("aboutbutton");
    var k = document.getElementsByClassName("aboutbutton");
    i[0].style.display = "block";
    j[0].style.display = "none";
    k[0].style.display = "none";
}
function aboutbutton() {
    var i = document.getElementsByClassName("homebutton");
    var j = document.getElementsByClassName("aboutbutton");
    var k = document.getElementsByClassName("contactbutton");
    i[0].style.display = "none";
    j[0].style.display = "block";
    k[0].style.display = "none";
}
function contactbutton() {
    var i = document.getElementsByClassName("homebutton");
    var j = document.getElementsByClassName("aboutbutton");
    var k = document.getElementsByClassName("contactbutton");
    i[0].style.display = "none";
    j[0].style.display = "none";
    k[0].style.display = "block";
}