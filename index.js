var global = 0;
function homebutton() {
    var i = document.getElementsByClassName("homebutton");
    var j = document.getElementsByClassName("aboutbutton");
    var k = document.getElementsByClassName("contactbutton");
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "none";
    l[1].style.display = "none";
    i[0].style.display = "block";
    j[0].style.display = "none";
    k[0].style.display = "none";
    document.getElementById("backicon").style.display = "none";
    
}
function aboutbutton() {
    var i = document.getElementsByClassName("homebutton");
    var j = document.getElementsByClassName("aboutbutton");
    var k = document.getElementsByClassName("contactbutton");
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "none";
    l[1].style.display = "none";
    i[0].style.display = "none";
    j[0].style.display = "block";
    k[0].style.display = "none";
    document.getElementById("education").style.display = "block";
    document.getElementById("skills").style.display = "block";
    document.getElementById("Projects").style.display = "block";
    document.getElementById("Hobbies").style.display = "block";
    document.getElementById("backicon").style.display = "none";
}
function contactbutton() {
    var i = document.getElementsByClassName("homebutton");
    var j = document.getElementsByClassName("aboutbutton");
    var k = document.getElementsByClassName("contactbutton");
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "none";
    l[1].style.display = "none";
    i[0].style.display = "none";
    j[0].style.display = "none";
    k[0].style.display = "block";
    document.getElementById("backicon").style.display = "none";
    
}
function backicon() {
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "none";
    l[1].style.display = "none";
    document.getElementById("education").style.display = "block";
    document.getElementById("skills").style.display = "block";
    document.getElementById("Projects").style.display = "block";
    document.getElementById("Hobbies").style.display = "block";
    document.getElementById("backicon").style.display = "none";
    
}
function educationbutton() {
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "block";
    l[1].style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("Projects").style.display = "none";
    document.getElementById("Hobbies").style.display = "none";
    document.getElementById("backicon").style.display = "block";
    var track = document.getElementsByClassName("memorial");
    var slides = Array.from(track);
    slides.forEach((slide, index) => {
        if(index==0){
        slide.style.display = "block";
        slide.style.left = 3 +  "vw";
        slide.style.top = 3 + "vw";
        slide.style.height = 60 + "vh";
        slide.style.zIndex = 1;
        slide.style.opacity = 1;
        slide.style.backgroundColor = "black";
        }else{
        slide.style.display = "block";
        slide.style.left = 10 + index*3 + "vw";
        slide.style.top = 3 + "vw";
        slide.style.height = 60 + "vh";
        slide.style.zIndex = -index;
        slide.style.opacity = 0.5 - index*0.2;
        slide.style.backgroundColor = "grey"
        }
        
    });
}
function skillsbutton() {
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "none";
    l[1].style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("Projects").style.display = "none";
    document.getElementById("Hobbies").style.display = "none";
    document.getElementById("backicon").style.display = "block";
    
}
function Projectsbutton() {
    global = 0;
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "none";
    l[1].style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("Projects").style.display = "none";
    document.getElementById("Hobbies").style.display = "none";
    document.getElementById("backicon").style.display = "block";
    var track = document.getElementsByClassName("projects");
    var slides = Array.from(track);
    slides.forEach((slide, index) => {
        if(index==0){
        slide.style.display = "block";
        slide.style.left = 3 +  "vw";
        slide.style.top = 3 + "vw";
        slide.style.height = 60 + "vh";
        slide.style.zIndex = 1;
        slide.style.opacity = 1;
        slide.style.backgroundColor = "black";
        }else{
        slide.style.display = "block";
        slide.style.left = 10 + index*3 + "vw";
        slide.style.top = 3 + "vw";
        slide.style.height = 60 + "vh";
        slide.style.zIndex = -index;
        slide.style.opacity = 0.5 - index*0.2;
        slide.style.backgroundColor = "grey"
        }
        
    });
    
}
function Hobbiesbutton() {
    var l = document.getElementsByClassName("workspace2");
    l[0].style.display = "none";
    l[1].style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("Projects").style.display = "none";
    document.getElementById("Hobbies").style.display = "none";
    document.getElementById("backicon").style.display = "block";
    
}
function prightarrow() {
    var currentslide = document.getElementsByClassName("projects");
    var j =3;
    var gleft = currentslide[0].style.left;
    var gopacity = currentslide[0].style.opacity;
    var gbackground = currentslide[0].style.backgroundColor;
    var zindex = currentslide[0].style.zIndex;
    currentslide[0].style.left = currentslide[3].style.left;
    currentslide[0].style.opacity = currentslide[3].style.opacity;
    currentslide[0].style.backgroundColor = currentslide[3].style.backgroundColor;
    currentslide[0].style.zIndex = currentslide[3].style.zIndex;
    for(var i=3; i>=1; i-- ){
    currentslide[j].style.left = currentslide[j-1].style.left;
    currentslide[j].style.opacity = currentslide[j-1].style.opacity;
    currentslide[j].style.backgroundColor = currentslide[j-1].style.backgroundColor;
    currentslide[j].style.zIndex = currentslide[j-1].style.zIndex;
    j--;        
    }
    currentslide[1].style.backgroundColor = gbackground;
    currentslide[1].style.left = gleft;
    currentslide[1].style.opacity = gopacity;
    currentslide[1].style.zIndex = zindex;
}
function erightarrow() {
    var currentslide = document.getElementsByClassName("memorial");
    console.log(currentslide[0]);
    console.log(currentslide[1]);
    console.log(currentslide[2]);
    var gleft = currentslide[0].style.left;
    var gopacity = currentslide[0].style.opacity;
    var gbackground = currentslide[0].style.backgroundColor;
    var zindex = currentslide[0].style.zIndex;
    currentslide[0].style.left = currentslide[2].style.left;
    currentslide[0].style.opacity = currentslide[2].style.opacity;
    currentslide[0].style.backgroundColor = currentslide[2].style.backgroundColor;
    currentslide[0].style.zIndex = currentslide[2].style.zIndex;
    currentslide[2].style.left = currentslide[1].style.left;
    currentslide[2].style.opacity = currentslide[1].style.opacity;
    currentslide[2].style.backgroundColor = currentslide[1].style.backgroundColor;
    currentslide[2].style.zIndex = currentslide[1].style.zIndex;
    currentslide[1].style.backgroundColor = gbackground;
    currentslide[1].style.left = gleft;
    currentslide[1].style.opacity = gopacity;
    currentslide[1].style.zIndex = zindex;
}
    // var nextslide = currentslide[global].nextElementSibling;
    // console.log(nextslide);
    // var i1 = 1;
    // var i2 = 13;
    // var i3 = 0.5;
    // var id = null;
    // clearInterval(id);
    // id = setInterval(frame,10);
    // function frame () {
    //     if (i2<=3){
    //         clearInterval(id);
    //         currentslide[global].style.display = "none";
    //         global++;
    //     }else{
    //         currentslide[global].style.opacity = i1;
    //         i1 = i1 - 0.2;
    //         nextslide.style.left = i2 + "vw";
    //         i2 = i2 - 0.2;
    //         nextslide.style.opacity = i3;
    //         i3+=0.2;
    //         nextslide.style.backgroundColor = "black"; 
    //     }
    // }
// function rightarrow() {
//     var car1 = document.getElementById("educationcarasouel1");
//     var i2 = 1
//     var car2 = document.getElementById("educationcarasouel2");
//     var j1 = 8;
//     var j2 = 0.4;
//     var id = null;
//     clearInterval(id);
//     id = setInterval(frame,10);
//     function frame () {
//         if (j1<=2){
//             clearInterval(id);
//             car1.style.display = "none";
//         }else{
//             car2.style.left = j1 + 'vw';
//             j1 = j1-0.2;
//             car1.style.opacity = i2;
//             i2=i2-0.02;
//             car2.style.opacity = j2;
//             j2+=0.2;
//         }
//     }
// }
