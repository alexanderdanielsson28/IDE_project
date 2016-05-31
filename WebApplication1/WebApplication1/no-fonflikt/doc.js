// trigger extension
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.session.setMode("ace/mode/javascript");
editor.setTheme("ace/theme/tomorrow");
// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
//black background
function black() {
    document.body.style.backgroundColor = "rgb(75,75,75)";
    document.getElementById('de').style.color = "white";
}
//white background
function white() {
    document.body.style.backgroundColor = "white";
    document.getElementById('de').style.color = "black";
}
//gray background
function grayblue() {
    document.body.style.backgroundColor = "rgb(150,150,150)";
    document.getElementById('de').style.color = "black";
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
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnn')) {
        var dropdownss = document.getElementsByClassName("dropdown-contents");
    var ii;
    for (ii = 0; ii < dropdownss.length; ii++) {
        var openDropdown2 = dropdownss[ii];
        if (openDropdown2.classList.contains('show')) {
            openDropdown2.classList.remove('show');
        }
    }
}
}

var editorr = ace.edit("editor");
editorr.setTheme("ace/theme/monokai");
editorr.getSession().setMode("ace/mode/javascript");

editorr.setOptions({
    enableBasicAutocompletion: true, enableSnippets: true, enableLiveAutocompletion: true
});

function html() {
    editorr.getSession().setMode("ace/mode/html");
    document.getElementById('spanlanguageholder').innerHTML = "HTML";
}
function css() {
    editorr.getSession().setMode("ace/mode/css");
    document.getElementById('spanlanguageholder').innerHTML = "CSS";
}
function javascript() {
    editorr.getSession().setMode("ace/mode/javascript");
    document.getElementById('spanlanguageholder').innerHTML = "JavaScript";
}
function csharp() {
    editorr.getSession().setMode("ace/mode/csharp");
    document.getElementById('spanlanguageholder').innerHTML = "C#";
}
function languages() {
    document.getElementById("myDropdownLan").classList.toggle("show");
}