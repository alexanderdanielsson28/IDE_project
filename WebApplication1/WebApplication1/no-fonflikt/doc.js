﻿// trigger extension
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
var EditSession = require("edit_session.js").EditSession;
var js = new EditSession("some js code");
var css = new EditSession(["some", "css", "code here"]);
// and then to load document into editor, just call
editor.setSession(js);