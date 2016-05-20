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
