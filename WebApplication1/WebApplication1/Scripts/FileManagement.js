
//------------GLOBAL VARIABLES--------------------


//------------END OF GLOBAL VARIABLES--------------------



//----------------------------"FILES"-----------------------------

var fileArray = [];
var File1 = {
    Name: "markup",
    Content: "<div id=''></div>",
    fileEnding: ".html"
}
var File2 = {
    Name: "style",
    Content: "body{margin:0}",
    fileEnding: ".css"
}
var File3 = {
    Name: "script",
    Content: "var test = 5;",
    fileEnding: ".js"
}
fileArray.push(File1);
fileArray.push(File2);
fileArray.push(File3);





//----------------------------"FILES"-----------------------------

//---------------GENERATING OF DISPLAY FILES---------------------
$(document).ready(function () {
    for (var i = 0; i < fileArray.length; i++) {
        $("#FileManager").append("<li class='file' id=" + fileArray[i].Name + fileArray[i].fileEnding + ">" + fileArray[i].Name + fileArray[i].fileEnding + "</li>");
    }
   


})
  
//---------------END OF GENERATING OF DISPLAY FILES---------------------


//----------------CLICK EVENTS---------------------------
$(document).on('click', ".file", function () {
    $(".file").removeClass("selectedFile");
    $(this).addClass("selectedFile")
    $("#editor").text();
});


//----------------END OF CLICK EVENTS---------------------------

function GetFileFromID(Element) {



}