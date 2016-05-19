
//------------GLOBAL VARIABLES--------------------


//------------END OF GLOBAL VARIABLES--------------------



//----------------------------"FILES"-----------------------------

var fileArray = [];
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
    Type: "js"
}
fileArray.push(File1);
fileArray.push(File2);
fileArray.push(File3);





//----------------------------"FILES"-----------------------------

//---------------GENERATING OF DISPLAY FILES---------------------
$(document).ready(function () {
    for (var i = 0; i < fileArray.length; i++) {
        $("#FileManager").append("<li class='file' id=" + fileArray[i].Name+ ">" + fileArray[i].Name + "</li>");
    }


    
})
  
//---------------END OF GENERATING OF DISPLAY FILES---------------------


//----------------CLICK EVENTS---------------------------
$(document).on('click', ".file", function () {
    $(".file").removeClass("selectedFile");
    $(this).addClass("selectedFile")
    GetFileFromID($(this))
    // SAVE HERE
    editor.setValue("", 0);
    
});


//----------------END OF CLICK EVENTS---------------------------

function GetFileFromID(Element) {
    var id = $(Element).attr('id');


}