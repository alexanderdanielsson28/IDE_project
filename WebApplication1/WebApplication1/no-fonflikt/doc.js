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
//FullScreen resolution. Both dropdown-list and settings
document.getElementById("f11").onclick = function full() {
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
}//Settings below
document.getElementById("full1").onclick = function full1() {
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
//Clicking on arrow to hide navigation bar
document.getElementById("tinybox").onclick = function onf() {
    document.getElementById('fullwidth1pxheight').style.display = "none";
    document.getElementById('tinyboxtwin').style.display = "block";
    document.getElementById('twinbox').style.display = "block";
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
}
//Click to display navigation bar
document.getElementById("tinyboxtwin").onclick = function onft() {
    document.getElementById('fullwidth1pxheight').style.display = "block";
    document.getElementById('fullwidth1pxheight').style.zIndex = "60";
    document.getElementById('fullwidth1pxheight').style.position = "relative";
    document.getElementById('tinyboxtwin').style.display = "none";
    document.getElementById('twinbox').style.display = "none";
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
}
//Revert from fullscreen to window mode. Both dropdown-list and settings
document.getElementById("f11r").onclick = function revert() {
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
}//Settings below
document.getElementById("rev1").onclick = function rev1() {
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
//Show settings
document.getElementById("boxie").onclick = function settingsinfo() {
    document.getElementById('showcontent').style.display = "block";
    document.getElementById('boxieR').style.display = "block";
    document.getElementById('boxie').style.display = "none";
}
//hide settings
document.getElementById("boxieR").onclick = function settingsinfoR() {
    document.getElementById('showcontent').style.display = "none";
    document.getElementById('boxieR').style.display = "none";
    document.getElementById('boxie').style.display = "block";
}
//show resolution list
document.getElementById("res").onclick = function myFunctionRes() {
    document.getElementById("myDropdownRes").classList.toggle("show");
}
//change resolution 600 x 450. Both dropdown-list and settings
document.getElementById("first").onclick = function Res1() {
    document.getElementById('editor').style.width = "600px";
    document.getElementById('editor').style.height = "450px";
    document.getElementById('editor').style.border = "1px solid gray";
}//Settings below
document.getElementById("res1").onclick = function res1() {
    document.getElementById('editor').style.width = "600px";
    document.getElementById('editor').style.height = "450px";
    document.getElementById('editor').style.border = "1px solid gray";
}
//change resolution 900 x 600. Both dropdown-list and settings
document.getElementById("second").onclick = function Res2() {
    document.getElementById('editor').style.width = "900px";
    document.getElementById('editor').style.height = "600px";
    document.getElementById('editor').style.border = "1px solid gray";
} //Settings below
document.getElementById("res2").onclick = function res2() {
    document.getElementById('editor').style.width = "900px";
    document.getElementById('editor').style.height = "600px";
    document.getElementById('editor').style.border = "1px solid gray";
}
//change resolution 1200 x 800. Both dropdown-list and settings
document.getElementById("third").onclick = function Res3() {
    document.getElementById('editor').style.width = "1200px";
    document.getElementById('editor').style.height = "800px";
    document.getElementById('editor').style.border = "1px solid gray";
} //Settings below
document.getElementById("res3").onclick = function res3() {
    document.getElementById('editor').style.width = "1200px";
    document.getElementById('editor').style.height = "800px";
    document.getElementById('editor').style.border = "1px solid gray";
}
//Handles the settings + and - functions that hide/shows the different sections of settings to choose from
//Settings that handle resolution of the editor
var startstop = 1;
document.getElementById("firstopen").onclick = function OpenFullRev() {
    if (startstop % 2 === 0) //Hides the option if startstop is divideable by 2 till it reaches 0
    {
        document.getElementById('full1').style.display = "none";
        document.getElementById('rev1').style.display = "none";
        document.getElementById('res1').style.display = "none";
        document.getElementById('res2').style.display = "none";
        document.getElementById('res3').style.display = "none";
        document.getElementById('testfloat').style.height = "10px";
        document.getElementById('firstopen').style.backgroundImage = "url(../../pics/../pics/plus.png)";
        startstop++;
    }   
    else { //shows all the options if startstop does not divide itself by 2 till it reaches 0 value
        document.getElementById('full1').style.display = "block";
        document.getElementById('rev1').style.display = "block";
        document.getElementById('res1').style.display = "block";
        document.getElementById('res2').style.display = "block";
        document.getElementById('res3').style.display = "block";
        document.getElementById('testfloat').style.height = "150px";
        document.getElementById('firstopen').style.backgroundImage = "url(../../pics/../pics/minus.png)";
        startstop++;
    }
}
//settings for theme section, changes theme on the editor
var startstopThemes = 1;
document.getElementById("secondopen").onclick = function OpenThemes() {
    if (startstopThemes % 2 === 0) { //Hides the option if startstopThemes is divideable by 2 till it reaches 0
        document.getElementById('mn1').style.display = "none";
        document.getElementById('isp1').style.display = "none";
        document.getElementById('cb1').style.display = "none";
        document.getElementById('tm1').style.display = "none";
        document.getElementById('testfloatThemes').style.height = "10px";
        document.getElementById('secondopen').style.backgroundImage = "url(../../pics/../pics/plus.png)";
        startstopThemes++;
    }
    else { //shows all the options if startstopThemes does not divide itself by 2 till it reaches 0 value
        document.getElementById('mn1').style.display = "block";
        document.getElementById('isp1').style.display = "block";
        document.getElementById('cb1').style.display = "block";
        document.getElementById('tm1').style.display = "block";
        document.getElementById('testfloatThemes').style.height = "120px";
        document.getElementById('secondopen').style.backgroundImage = "url(../../pics/../pics/minus.png)";
        startstopThemes++;
    }
}
//Settings that handle different languages in the editor
var startstopLanguages = 1;
document.getElementById("thirdopen").onclick = function OpenThemes() {
    if (startstopLanguages % 2 === 0) { //Hides the option if startstopLanguages is divideable by 2 till it reaches 0
        document.getElementById('html1').style.display = "none";
        document.getElementById('css1').style.display = "none";
        document.getElementById('js1').style.display = "none";
        document.getElementById('cs1').style.display = "none";
        document.getElementById('phps').style.display = "none";
        document.getElementById('sqls').style.display = "none";
        document.getElementById('imtestfloating').style.height = "10px";
        document.getElementById('thirdopen').style.backgroundImage = "url(../../pics/../pics/plus.png)";
        startstopLanguages++;
    }
    else { //shows all the options if startstopLanguages does not divide itself by 2 till it reaches 0 value
        document.getElementById('html1').style.display = "block";
        document.getElementById('css1').style.display = "block";
        document.getElementById('js1').style.display = "block";
        document.getElementById('cs1').style.display = "block";
        document.getElementById('phps').style.display = "block";
        document.getElementById('sqls').style.display = "block";
        document.getElementById('imtestfloating').style.height = "180px";
        document.getElementById('thirdopen').style.backgroundImage = "url(../../pics/../pics/minus.png)";
        startstopLanguages++;
    }
}
//Settings that handle the background color section, changed the background color of body tag
var startstopBK = 1;
document.getElementById("fourthopen").onclick = function openBK() {
    if (startstopBK % 2 === 0) { //Hides the option if startstopBK is divideable by 2 till it reaches 0
        document.getElementById('b1').style.display = "none";
        document.getElementById('w1').style.display = "none";
        document.getElementById('gb1').style.display = "none";
        document.getElementById('testfloatBK').style.height = "10px";
        document.getElementById('fourthopen').style.backgroundImage = "url(../../pics/../pics/plus.png)";
        startstopBK++;
    }
    else { //shows all the options if startstopBK does not divide itself by 2 till it reaches 0 value
        document.getElementById('b1').style.display = "block";
        document.getElementById('w1').style.display = "block";
        document.getElementById('gb1').style.display = "block";
        document.getElementById('testfloatBK').style.height = "90px";
        document.getElementById('fourthopen').style.backgroundImage = "url(../../pics/../pics/minus.png)";
        startstopBK++;
    }
}