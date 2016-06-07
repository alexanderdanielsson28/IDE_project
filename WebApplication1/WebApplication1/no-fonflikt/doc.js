//trigger extension
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.session.setMode("ace/mode/javascript");
//enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
//black background. Both dropdown-list and settings
document.getElementById("black").onclick = function black() {
    document.body.style.backgroundColor = "rgb(75,75,75)";
    document.getElementById('de').style.color = "white";
} //Settings below
document.getElementById("b1").onclick = function b1() {
    document.body.style.backgroundColor = "rgb(75,75,75)";
    document.getElementById('de').style.color = "white";
}
//white background. Both dropdown-list and settings
document.getElementById("white").onclick = function white() {
    document.body.style.backgroundColor = "white";
    document.getElementById('de').style.color = "black";
}//Settings below
document.getElementById("w1").onclick = function w1() {
    document.body.style.backgroundColor = "white";
    document.getElementById('de').style.color = "black";
}
//gray background. Both dropdown-list and settings
document.getElementById("grayblue").onclick = function grayblue() {
    document.body.style.backgroundColor = "rgb(150,150,150)";
    document.getElementById('de').style.color = "black";
}//Settings below
document.getElementById("gb1").onclick = function gb1() {
    document.body.style.backgroundColor = "rgb(150,150,150)";
    document.getElementById('de').style.color = "black";
}

/*When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
document.getElementById("dropit").onclick = function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Close the dropdown menu if the user clicks outside of it
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
//Default editor theme and programming language
var editorr = ace.edit("editor");
editorr.setTheme("ace/theme/tomorrow");
editorr.getSession().setMode("ace/mode/javascript");

editorr.setOptions({
    enableBasicAutocompletion: true, enableSnippets: true, enableLiveAutocompletion: true
});
//function that changes language to html. Both dropdown-list and settings
document.getElementById("w110").onclick = function html() {
    editorr.getSession().setMode("ace/mode/html");
    document.getElementById('spanlanguageholder').innerHTML = "HTML";
    document.getElementById("myDropdownLan").classList.toggle("hide");
} //Settings below
document.getElementById("html1").onclick = function html1() {
    editorr.getSession().setMode("ace/mode/html");
    document.getElementById('spanlanguageholder').innerHTML = "HTML";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to css. Both dropdown-list and settings
document.getElementById("w111").onclick = function css() {
    editorr.getSession().setMode("ace/mode/css");
    document.getElementById('spanlanguageholder').innerHTML = "CSS";
    document.getElementById("myDropdownLan").classList.toggle("hide");
} //Settins below
document.getElementById("css1").onclick = function css1() {
    editorr.getSession().setMode("ace/mode/css");
    document.getElementById('spanlanguageholder').innerHTML = "CSS";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to javascript. Both dropdown-list and settings
document.getElementById("w112").onclick =function javascript() {
    editorr.getSession().setMode("ace/mode/javascript");
    document.getElementById('spanlanguageholder').innerHTML = "JavaScript";
    document.getElementById("myDropdownLan").classList.toggle("hide");
} //Settings below
document.getElementById("js1").onclick = function js1() {
    editorr.getSession().setMode("ace/mode/javascript");
    document.getElementById('spanlanguageholder').innerHTML = "JavaScript";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to C#. Both dropdown-list and settings
document.getElementById("w113").onclick = function csharp() {
    editorr.getSession().setMode("ace/mode/csharp");
    document.getElementById('spanlanguageholder').innerHTML = "C#";
    document.getElementById("myDropdownLan").classList.toggle("hide");
} //Settings below
document.getElementById("cs1").onclick = function cs1() {
    editorr.getSession().setMode("ace/mode/csharp");
    document.getElementById('spanlanguageholder').innerHTML = "C#";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to php. Both dropdown-list and settings
document.getElementById("w114").onclick = function php() {
    editorr.getSession().setMode("ace/mode/php");
    document.getElementById('spanlanguageholder').innerHTML = "PHP";
    document.getElementById("myDropdownLan").classList.toggle("hide");
} //Settings below
document.getElementById("phps").onclick = function phps() {
    editorr.getSession().setMode("ace/mode/php");
    document.getElementById('spanlanguageholder').innerHTML = "PHP";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that changes language to sql. Both dropdown-list and settings
document.getElementById("w115").onclick = function sql() {
    editorr.getSession().setMode("ace/mode/sql");
    document.getElementById('spanlanguageholder').innerHTML = "SQL";
    document.getElementById("myDropdownLan").classList.toggle("hide");
} //Settings below
document.getElementById("sqls").onclick = function sqls() {
    editorr.getSession().setMode("ace/mode/sql");
    document.getElementById('spanlanguageholder').innerHTML = "SQL";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//function that displays the languages list if area is clicked is clicked
document.getElementById("lang").onclick = function languages() {
    document.getElementById("myDropdownLan").classList.toggle("show");
}
//functions that display theme options
document.getElementById("theme").onclick = function theme() {
    document.getElementById("myDropdownTheme").classList.toggle("show");
}
//monokai theme. Both dropdown-list and in settings
document.getElementById("monokai").onclick = function monokai() {
    editorr.setTheme("ace/theme/monokai");
} //Settings below
document.getElementById("mn1").onclick = function mn1() {
    editorr.setTheme("ace/theme/monokai");
}
//iplastic theme. Both dropdown-list and in settings
document.getElementById("iplastic").onclick = function iplastic() {
    editorr.setTheme("ace/theme/iplastic");
} //Settings below
document.getElementById("isp1").onclick = function isp1() {
    editorr.setTheme("ace/theme/iplastic");
}
//cobalt theme. Both dropdown-list and in settings
document.getElementById("cobalt").onclick = function cobalt() {
    editorr.setTheme("ace/theme/cobalt");
} //settings below
document.getElementById("cb1").onclick = function cb1() {
    editorr.setTheme("ace/theme/cobalt");
}
//tomorrow theme. Both dropdown-list and in settings
document.getElementById("tomorrow").onclick = function tomorrow() {
    editorr.setTheme("ace/theme/tomorrow");
} //settings below
document.getElementById("tm1").onclick = function tm1() {
    editorr.setTheme("ace/theme/tomorrow");
}