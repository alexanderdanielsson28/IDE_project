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
// FullScreen resolution
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
//Clicking on arrow to hide navigation bar
   function onf() {
       document.getElementById('fullwidth1pxheight').style.display = "none";
       document.getElementById('tinyboxtwin').style.display = "block";
       document.getElementById('twinbox').style.display = "block";
       document.getElementById('showcontent').style.display = "none";
       document.getElementById('boxieR').style.display = "none";
       document.getElementById('boxie').style.display = "block";
   }
// Click to display navigation bar
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
//Revert from fullscreen to window mode
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
//Show settings
   function settingsinfo() {
       document.getElementById('showcontent').style.display = "block";
       document.getElementById('boxieR').style.display = "block";
       document.getElementById('boxie').style.display = "none";
   }
   //hide settings
   function settingsinfoR() {
       document.getElementById('showcontent').style.display = "none";
       document.getElementById('boxieR').style.display = "none";
       document.getElementById('boxie').style.display = "block";
   }
   //show resolution list
   function myFunctionRes() {
       document.getElementById("myDropdownRes").classList.toggle("show");
   }
//show pre schemes list
   function myFunctionSch() {
       document.getElementById("myDropdownSch").classList.toggle("show");
   }
//change resolution 600 x 450
   function Res1() {
       document.getElementById('editor').style.width = "600px";
       document.getElementById('editor').style.height = "450px";
       document.getElementById('editor').style.border = "1px solid gray";
   }
//change resolution 900 x 600
   function Res2() {
       document.getElementById('editor').style.width = "900px";
       document.getElementById('editor').style.height = "600px";
       document.getElementById('editor').style.border = "1px solid gray";
   }
//change resolution 1200 x 800
   function Res3() {
       document.getElementById('editor').style.width = "1200px";
       document.getElementById('editor').style.height = "800px";
       document.getElementById('editor').style.border = "1px solid gray";
   }
// show languages