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
//Default editor theme and programming language
var editorr = ace.edit("editor");
editorr.setTheme("ace/theme/tomorrow");
editorr.getSession().setMode("ace/mode/javascript");
editorr.setOptions({
    enableBasicAutocompletion: true, enableSnippets: true, enableLiveAutocompletion: true
});
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
//Handles the settings + and - functions that hide/shows the different sections of settings to choose from
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
//Change language to HTML
document.getElementById("html1").onclick = function html1() {
    editorr.getSession().setMode("ace/mode/html");
    document.getElementById("spantext").innerHTML = "html";
    document.getElementById('spanlanguageholder').innerHTML = "HTML";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//Change language to CSS
document.getElementById("css1").onclick = function css1() {
    editorr.getSession().setMode("ace/mode/css");
    document.getElementById("spantext").innerHTML = "css";
    document.getElementById('spanlanguageholder').innerHTML = "CSS";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//Change language to JavaScript
document.getElementById("js1").onclick = function js1() {
    document.getElementById("spantext").innerHTML = "js";
    editorr.getSession().setMode("ace/mode/javascript");
    document.getElementById('spanlanguageholder').innerHTML = "JavaScript";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//Change language to C#
document.getElementById("cs1").onclick = function cs1() {
    document.getElementById("spantext").innerHTML = "c#";
    editorr.getSession().setMode("ace/mode/csharp");
    document.getElementById('spanlanguageholder').innerHTML = "C#";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//Change language to PHP
document.getElementById("phps").onclick = function phps() {
    document.getElementById("spantext").innerHTML = "php";
    editorr.getSession().setMode("ace/mode/php");
    document.getElementById('spanlanguageholder').innerHTML = "PHP";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//Change language to SQL
document.getElementById("sqls").onclick = function sqls() {
    document.getElementById("spantext").innerHTML = "sql";
    editorr.getSession().setMode("ace/mode/sql");
    document.getElementById('spanlanguageholder').innerHTML = "SQL";
    document.getElementById("myDropdownLan").classList.toggle("hide");
}
//Change theme to monokai
document.getElementById("mn1").onclick = function mn1() {
    editorr.setTheme("ace/theme/monokai");
}
//Change theme to iplastic
document.getElementById("isp1").onclick = function isp1() {
    editorr.setTheme("ace/theme/iplastic");
}
//Change theme to cobalt
document.getElementById("cb1").onclick = function cb1() {
    editorr.setTheme("ace/theme/cobalt");
}
//Change theme to tomorrow
document.getElementById("tm1").onclick = function tm1() {
    editorr.setTheme("ace/theme/tomorrow");
}
var startstoping = 1;
document.getElementById("firstopen").onclick = function OpenFullRev() {
    if (startstoping % 2 === 0) 
    { //Hides the option if startstop is divideable by 2 till it reaches 0
        document.getElementById('full1').style.display = "none";
        document.getElementById('rev1').style.display = "none";
        document.getElementById('testfloat').style.height = "10px";
        document.getElementById('firstopen').style.backgroundImage = "url(../../pics/plus.png)";
        startstoping++;
    }
    else { //shows all the options if startstop does not divide itself by 2 till it reaches 0 value
        document.getElementById('full1').style.display = "block";
        document.getElementById('rev1').style.display = "block";
        document.getElementById('testfloat').style.height = "60px";
        document.getElementById('firstopen').style.backgroundImage = "url(../../pics/minus.png)";
        startstoping++;
    }
}
//Transforms into fullscreen
document.getElementById("full1").onclick = function full1() {
    document.getElementById('hierarchy').style.display = "none";
    document.getElementById('consoleArea').style.display = "none";
    document.getElementById('editorArea').style.minWidth = "100%"
    document.getElementById('editorArea').style.maxWidth = "100%";
    document.getElementById('editorArea').style.width = "100%";
    document.getElementById('editorArea').style.minHeight = "100%"
    document.getElementById('editorArea').style.maxHeight = "100%";
    document.getElementById('editorArea').style.height = "100%";
}
//Transforms from fullscreen back into normal state
document.getElementById("rev1").onclick = function rev1() {
    document.getElementById('hierarchy').style.display = "block";
    document.getElementById('consoleArea').style.display = "block";
    document.getElementById('editorArea').style.minWidth = "83.3333%"
    document.getElementById('editorArea').style.maxWidth = "83.3333%";
    document.getElementById('editorArea').style.width = "83.3333%";
    document.getElementById('editorArea').style.minHeight = "70%"
    document.getElementById('editorArea').style.maxHeight = "70%";
    document.getElementById('editorArea').style.height = "70%";
}