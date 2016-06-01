//-------------GLOBAL VARIABLES--------------------
//-------------SETTING UP ARRAYS-----------------------------
//-------------INITIATOR--------------------------
//-------------GENERATING OF DISPLAY FILES---------------------
//-------------CLICK EVENTS---------------------------
//-------------FILE-RELATED FUNCTIONS---------------------------
//-------------SESSION-RELATED FUNCTIONS--------------------------






//------------GLOBAL VARIABLES--------------------
var html = "";
var matchArray = [];
var fileArray = [];

//dummy variables
var testSubFolder = [];
var testsub2folder = [];
var testsub3folder = [];
var testsub4folder = [];
var File1 = {
    Name: "markup.html",
    Content: "<div id=''></div>",
    Type: "html"
}
var File2 = {
    Name: "style.css",
    Content: "body{margin:0}",
    Type: "css"
}
var File3 = {
    Name: "script.js",
    Content: "var test = 5;",
    Type: "javascript"
}
var File4 = {
    Name: "template.js",
    Content: "var asd = 5;",
    Type: "javascript"
}
var File5 = {
    Name: "test.js",
    Content: "var asdasdasd = 15;",
    Type: "javascript"
}
var File6 = {
    Name: "functions1.js",
    Content: "var xcvxcv = 22225;",
    Type: "javascript"
}
var File7 = {
    Name: "functions2.js",
    Content: "var asdasdasdasxcxcvxcvdasdasd = 22225;",
    Type: "javascript"
}
var File8 = {
    Name: "functions3.js",
    Content: "var asdasdasdasdaxxcvxcvxcvxcvxcvsdasd = 22225;",
    Type: "javascript"
}
var File9 = {
    Name: "functions4.js",
    Content: "var asdasdasdasdasdcccccccccasd = 22225;",
    Type: "javascript"
}
//end of dummy variables


//------------END OF GLOBAL VARIABLES--------------------



//----------------------------"SETTING UP DUMMY ARRAYS"-----------------------------
testSubFolder.push(File4);
testSubFolder.push(testsub2folder);
testsub2folder.push(File5);
testsub2folder.push(testsub3folder);
testsub3folder.push(File7);
testsub3folder.push(testsub4folder);
testsub4folder.push(File8);
testsub2folder.push(File6);
fileArray.push(File1);
fileArray.push(File2);
fileArray.push(testSubFolder);
fileArray.push(File3);

//----------------------------"END OF SETTING UP DUMMY ARRAYS"-----------------------------


//----------------------------INITIATOR--------------------------

$(document).ready(function () {

    
    callFileGeneration();


})
//----------------------------END OF INITIATOR--------------------------


//---------------GENERATING OF DISPLAY FILES---------------------


function callFileGeneration() {

    var folderCount = 1;
    for (var i = 0; i < fileArray.length; i++) {
        generateFilesAndFolders(fileArray, i, folderCount);
    }
    $("#FileManager").append(html);
}



function generateFilesAndFolders(array, iterator, folderCount) {
    if (Array.isArray(array[iterator])) {
      html += "<li><label  for=" + "folder" + folderCount + ">" + "folder " + folderCount + "</label> <input type='checkbox' id=" + "folder" + folderCount + "></input><ol>";
        folderCount++
        for (var j = 0; j < array[iterator].length; j++) {

            generateFilesAndFolders(array[iterator], j, folderCount);
        }
        html += "</ol></li>"
    }
    else {
       html += ("<li class='file' id=" + array[iterator].Name + "><a href='" + array[iterator].Type+ "'>" + array[iterator].Name + "</a></li>");
        matchArray.push(array[iterator]);
    }
}
//---------------END OF GENERATING OF DISPLAY FILES---------------------



//----------------CLICK EVENTS---------------------------
$(document).on('click', ".file a", function (e) {
    e.preventDefault();

    if (!$(".ace_gutter-layer").children().hasClass("ace_error")) {

    $(".file a").removeClass("selectedFile");
    $(this).addClass("selectedFile")
    var clickedFile = GetFileFromID($(this).parent())

    
    editor.setValue("", 0);
    setSessionLanguage(editor.getSession(), clickedFile[0].Type)
    editor.setValue(clickedFile[0].Content, 1);
    fileText = clickedFile[0].Content
    }
});

//----------------END OF CLICK EVENTS---------------------------



//----------------FILE-RELATED FUNCTIONS---------------------------
function GetFileFromID(Element) {
    var id = $(Element).attr('id');
    return $.map(matchArray, function (n) {
        if (n.Name === id) {
            return n;
        }
    });
}
//----------------END OF FILE-RELATED FUNCTIONS---------------------------




//----------------SESSION-RELATED FUNCTIONS--------------------------------

function setSessionLanguage(editSession, Language) {
    if (Language == null || editSession == null) {
        return null;
    }
    editSession.setMode("ace/mode/" + Language);
}

//----------------SESSION-RELATED FUNCTIONS--------------------------------

