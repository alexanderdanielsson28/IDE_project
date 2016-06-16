var File1 = {
    Name: "one",
    Content: "<div id='asda'></div>",
    fileEnding: ".html"
}

var File2 = {
    Name: "two",
    Content: "<div id='asda'></div>",
    fileEnding: ".html"
}
var File3 = {
    Name: "three",
    Content: "<div id='asda'></div>",
    fileEnding: ".html"
}

var File4 = {
    Name: "four",
    Content: "<div id='asda'></div>",
    fileEnding: ".html"
}
var fileText = "";
var _editorText = "";
/*
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");



editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});*/


// trigger extension
//ace.require("ace/ext/language_tools");
//var editor = ace.edit("editor");
//editor.session.setMode("ace/mode/javascript");
//editor.setTheme("ace/theme/tomorrow");
//// enable autocompletion and snippets
//editor.setOptions({
//    enableBasicAutocompletion: true,
//    enableSnippets: true,
//    enableLiveAutocompletion: true,

//});





var consoleText = $("#editor").text();

//checkForErrors
var checkForErrors = function () {
  
       if ($(".ace_gutter-layer").children().hasClass("ace_error")) {
            fu();


        } else {
            validCodeFunc();
        }
    


   


}
var far = $("#editor").keyup(function () {
    delay(function () {

        checkForErrors();
    }, 5000);


});


//function delay
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();



// STARTS and Resets the loop if any
window.setInterval(function () {
    doSomething();/// call your function here
}, 1000);


function doSomething() {
    // (do something here)
   var x= $("#testData").val(editor.getValue());

    
}


//Start ValidSaveFunction
var delay3 = 5000;
var delay4 = 8000;
var validCodeFunc = function () {
    
    var currentFile = GetFileFromID($(".selectedFile").parent())
   currentFile.Content = editor.getValue();


    $("#msg").text("ALL CHANGES SAVED!");
    $("#img-check").show();
    $("#errormess").text(" ");
    {
        setTimeout(function () {
            resMessage();
      
        }, delay4);
   }
}
//reset message
var resMessage = function () {
    $("#msg").text("");
    $("#img-check").hide();
    //console.log("reset");

}


var fu = function () {
    $("#errormess").text("Error!");
}
var update = function () {
    $("#errormess").text("Redan sparat");
}

// code for saveButton, if code are same or not
$(".btn").click(function () {
  //  callback();

    var editorText = editor.getValue();
    var _fileText = fileText.replace(/\s+$/, '');
    _editorText = editorText.replace(/\s+$/, '');
    if (_fileText != _editorText) {

        console.log("Ej samma kod som i fil");
       

        var emptyString = checkIfEmpty();
        if (emptyString == false) {
            WarningEmptyFile();
        } else {
            checkForErrors();
        }
       
        // Write to file here
        // File1.Content
        //

    } else {
        update();
        console.log("samma kod som i fil");
    }

});


var checkIfEmpty = function () {
   
    var consoleTextIsEmpty = editor.getValue();
    var consoleTextIsEmpty = consoleTextIsEmpty.replace(/\s+$/, '');
    console.log(consoleTextIsEmpty + "consoleTextIsEmpty");

    if (!(consoleTextIsEmpty)) {
        console.log("empty1");
        return false;
        
    }
    else {
        console.log("Not empty1");
        return true;
    }
}
// command for shortcut (ctrl-s)
var delay2 = 2000;
editor.commands.addCommand({
    name: 'save',
    bindKey: { win: "Ctrl-S"},


    exec: function (editor) {
        var emptyString = checkIfEmpty();
        console.log(emptyString);
        if (emptyString == false){
            console.log("empty exec")
            WarningEmptyFile();
            
        } else if (emptyString) {
            console.log("Not empty");
            NotEmptyFile();
        }
            // checkForErrors();
            
    
    }
});
var WarningEmptyFile = function () {

    $("#errormess").text("Filen är tom ");
    //  test4().setTimeout(2000);
    {
        setTimeout(function () { validCodeFunc(); }, delay3);
    }


}
var NotEmptyFile = function () {

   
    //  test4().setTimeout(2000);
    {
        
        checkForErrors();
    }


}

//$(".run").click(function () {
//    console.log("run exec");
//    code = editor.getValue()
//    console.log(code);
//    $("#textarea2").val(code);
//});

//function myFunction() {
//    var x = editor.getValue();
  

//    document.getElementById("demo").innerHTML = x;
//}
//function run() {
//    var consoleTextIsEmpty = editor.getValue();
//    consoleTextIsEmpty && eval(consoleTextIsEmpty);
//}




function testfunc() {

    var x = editor.getValue();
    console.log(x);

    document.getElementById("UploadButton").click();

    }

//function setMyValue(value) {
//    $('#myVar').val(value);       
//}
//@Html.Hidden("myVar", 0);