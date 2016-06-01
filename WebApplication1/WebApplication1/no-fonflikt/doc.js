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
// Default editor theme and programming language
var editorr = ace.edit("editor");
editorr.setTheme("ace/theme/monokai");
editorr.getSession().setMode("ace/mode/javascript");

editorr.setOptions({
    enableBasicAutocompletion: true, enableSnippets: true, enableLiveAutocompletion: true
});
//function that changes language to html
function html() {
    editorr.getSession().setMode("ace/mode/html");
    document.getElementById('spanlanguageholder').innerHTML = "HTML";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to css
function css() {
    editorr.getSession().setMode("ace/mode/css");
    document.getElementById('spanlanguageholder').innerHTML = "CSS";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to javascript
function javascript() {
    editorr.getSession().setMode("ace/mode/javascript");
    document.getElementById('spanlanguageholder').innerHTML = "JavaScript";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to C#
function csharp() {
    editorr.getSession().setMode("ace/mode/csharp");
    document.getElementById('spanlanguageholder').innerHTML = "C#";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to php
function php() {
    editorr.getSession().setMode("ace/mode/php");
    document.getElementById('spanlanguageholder').innerHTML = "PHP";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to sql
function sql() {
    editorr.getSession().setMode("ace/mode/sql");
    document.getElementById('spanlanguageholder').innerHTML = "SQL";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that displays the languages list if area is clicked is clicked
function languages() {
    document.getElementById("myDropdownLan").classList.toggle("show");
}