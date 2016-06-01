
function black() {
    document.body.style.backgroundColor = "rgb(75,75,75)";
    
}

function white() {
    document.body.style.backgroundColor = "white";
   
}

function grayblue() {
    document.body.style.backgroundColor = "rgb(150,150,150)";
    
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



function full() {
    document.getElementById('editor').style.width = "100%";
    document.getElementById('editor').style.border = "0px";
    document.getElementById('editor').style.height = "100%";
    document.getElementById('editor').style.position = "absolute";
    document.getElementById('fullwidth1pxheight').style.float = "none";
    document.getElementById('fullwidth1pxheight').style.display = "none";
    document.getElementById('tinyboxtwin').style.display = "block";
    document.getElementById('tinyboxtwin').style.zIndex = "60";
    document.getElementById('tinyboxtwin').style.position = "absolute";
    document.getElementById('twinbox').style.display = "block";
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
    document.getElementById('tinyboxtwin').style.width = "15px";
    document.getElementById('tinyboxtwin').style.height = "15px";
    document.getElementById('tinyboxtwin').style.backgroundColor = "transparent";
    document.getElementById('twinbox').style.marginLeft = "0px";
    document.getElementById('tinyboxtwin').style.backgroundImage = "url(../pics/arrow_icon.png)";
    document.getElementById('tinyboxtwin').style.backgroundSize = "contain";
}
function onf() {
    document.getElementById('fullwidth1pxheight').style.display = "none";
    document.getElementById('tinyboxtwin').style.display = "block";
    document.getElementById('twinbox').style.display = "block";
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
}
function onft() {
    document.getElementById('fullwidth1pxheight').style.display = "block";
    document.getElementById('fullwidth1pxheight').style.zIndex = "60";
    document.getElementById('fullwidth1pxheight').style.position = "relative";
    document.getElementById('tinyboxtwin').style.display = "none";
    document.getElementById('twinbox').style.display = "none";
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
}
function revert() {
    document.getElementById('editor').style.width = "900px";
    document.getElementById('editor').style.height = "600px";
    document.getElementById('editor').style.position = "relative";
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
    document.getElementById('tinyboxtwin').style.width = "20px";
    document.getElementById('tinyboxtwin').style.height = "20px";
    document.getElementById('tinyboxtwin').style.backgroundColor = "white";
    document.getElementById('twinbox').style.marginLeft = "5px";
    document.getElementById('tinyboxtwin').style.backgroundImage = "url(../pics/arrowsup.png)";
    document.getElementById('tinyboxtwin').style.backgroundSize = "contain";
    document.getElementById('editor').style.border = "1px solid gray";
}
window.onkeydown = function (e) {
    if (e.shiftKey && e.keyCode == 66) {
        black();
    }
    if (e.shiftKey && e.keyCode == 71) {
        grayblue();
    }
    if (e.shiftKey && e.keyCode == 87) {
        white();
    }
    if (e.ctrlKey && e.keyCode == 66) {
        full();
    }
    if (e.shiftKey && e.keyCode == 89) {
        revert();
    }
}
function settingsinfo() {
    document.getElementById('showcontent').style.display = "block";
    document.getElementById('boxieR').style.display = "block";
    document.getElementById('boxie').style.display = "none";
}
function settingsinfoR() {
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
}
function span1() {
    document.getElementById('span1').style.display = "block";
}
function myFunctionRes() {
    document.getElementById("myDropdownRes").classList.toggle("show");
}
function myFunctionSch() {
    document.getElementById("myDropdownSch").classList.toggle("show");
}
function Res1() {
    document.getElementById('editor').style.width = "600px";
    document.getElementById('editor').style.height = "450px";
    document.getElementById('editor').style.border = "1px solid gray";
}
function Res2() {
    document.getElementById('editor').style.width = "900px";
    document.getElementById('editor').style.height = "600px";
    document.getElementById('editor').style.border = "1px solid gray";
}
function Res3() {
    document.getElementById('editor').style.width = "1200px";
    document.getElementById('editor').style.height = "800px";
    document.getElementById('editor').style.border = "1px solid gray";
}


