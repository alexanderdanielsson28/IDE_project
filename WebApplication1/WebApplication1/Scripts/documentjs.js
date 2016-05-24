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
   function full() {
       document.getElementById('editor').style.width = "100%";
       document.getElementById('editor').style.height = "100%";
       document.getElementById('editor').style.position = "absolute";
       document.getElementById('fullwidth1pxheight').style.float = "none";
       document.getElementById('fullwidth1pxheight').style.display = "none";
       document.getElementById('tinyboxtwin').style.display = "block";
       document.getElementById('tinyboxtwin').style.zIndex = "60";
       document.getElementById('tinyboxtwin').style.position = "absolute";
       document.getElementById('twinbox').style.display = "block";
   }
   function onf() {
       document.getElementById('fullwidth1pxheight').style.display = "none";
       document.getElementById('tinyboxtwin').style.display = "block";
       document.getElementById('twinbox').style.display = "block";
   }
   function onft() {
       document.getElementById('fullwidth1pxheight').style.display = "block";
       document.getElementById('fullwidth1pxheight').style.zIndex = "60";
       document.getElementById('fullwidth1pxheight').style.position = "relative";
       document.getElementById('tinyboxtwin').style.display = "none";
       document.getElementById('twinbox').style.display = "none";
   }
   function revert() {
       document.getElementById('editor').style.width = "900px";
       document.getElementById('editor').style.height = "600px";
       document.getElementById('editor').style.position = "relative";
   }