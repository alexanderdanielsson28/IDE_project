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