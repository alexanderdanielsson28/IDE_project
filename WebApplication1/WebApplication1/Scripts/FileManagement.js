//-------------GLOBAL VARIABLES--------------------
//-------------SETTING UP ARRAYS-----------------------------
//-------------INITIATOR--------------------------
//-------------GENERATING OF DISPLAY FILES---------------------
//-------------CLICK EVENTS---------------------------
//-------------FILE-RELATED FUNCTIONS---------------------------







//------------GLOBAL VARIABLES--------------------
var html = "";
var matchArray = [];
var fileArray = [];
var testSubFolder = [];
var testsub2folder = [];
var testsub3folder = [];
var testsub4folder = [];
var File1 = {
    Name: "markup.html",
    Content: "<div id=''></div>",
    Type: ".html"
}
var File2 = {
    Name: "style.css",
    Content: "body{margin:0}",
    Type: ".css"
}
var File3 = {
    Name: "script.js",
    Content: "var test = 5;",
    Type: ".js"
}
var File4 = {
    Name: "template.js",
    Content: "var asd = 5;",
    Type: ".js"
}
var File5 = {
    Name: "test.js",
    Content: "var asdasdasd = 15;",
    Type: ".js"
}
var File6 = {
    Name: "functions1.js",
    Content: "var xcvxcv = 22225;",
    Type: ".js"
}
var File7 = {
    Name: "functions2.js",
    Content: "var asdasdasdasxcxcvxcvdasdasd = 22225;",
    Type: ".js"
}
var File8 = {
    Name: "functions3.js",
    Content: "var asdasdasdasdaxxcvxcvxcvxcvxcvsdasd = 22225;",
    Type: ".js"
}
var File9 = {
    Name: "functions4.js",
    Content: "var asdasdasdasdasdcccccccccasd = 22225;",
    Type: ".js"
}

//------------END OF GLOBAL VARIABLES--------------------



//----------------------------"SETTING UP ARRAYS"-----------------------------
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
console.log(fileArray);
//----------------------------"END OF SETTING UP ARRAYS"-----------------------------


//----------------------------INITIATOR--------------------------

$(document).ready(function () {

    
    var folderCount = 1;
    for (var i = 0; i < fileArray.length; i++) {
        console.log("lap: " + i)
        generateFilesAndFolders(fileArray, i, folderCount);
    }
    console.log(html);
    $("#FileManager").append(html);

})
//----------------------------END OF INITIATOR--------------------------


//---------------GENERATING OF DISPLAY FILES---------------------

function generateFilesAndFolders(array, iterator, folderCount) {
    console.log(Array.isArray(array[iterator]))
    if (Array.isArray(array[iterator])) {
        //$("#FileManager").append("<ol>")
        //$("#FileManager").append(""<li><label class='clearfix' for=" + "folder" + iterator + "></label> <input id=" + "folder" + iterator + "></input><ol>"")
        html += "<li><label  for=" + "folder" + folderCount + ">" + "folder " + folderCount + "</label> <input type='checkbox' id=" + "folder" + folderCount + "></input><ol>";
        folderCount++
        for (var j = 0; j < array[iterator].length; j++) {
            //console.log("Deeper Lap:" + j);
            //arrayCheck = true;
            generateFilesAndFolders(array[iterator], j, folderCount);
        }
        html += "</ol></li>"
    }
    else {
        console.log(array)
        console.log(iterator)
        // $("#FileManager").append("<li class='file' id=" + array[iterator].Name + "><a>" + array[iterator].Name + "</a></li>");
        html += ("<li class='file' id=" + array[iterator].Name + "><a href='" + array[iterator].Type+ "'>" + array[iterator].Name + "</a></li>");
        matchArray.push(array[iterator]);
        if (iterator == array.length - 1) {
            //$("#FileManager").append("</ol>")
            //$("#FileManager").append("</ol></li>")
            
            console.log("end of current folder")
        }
    }
}
//---------------END OF GENERATING OF DISPLAY FILES---------------------



//----------------CLICK EVENTS---------------------------
$(document).on('click', ".file a", function (e) {
    e.preventDefault();
    $(".file a").removeClass("selectedFile");
    $(this).addClass("selectedFile")
    var matched = GetFileFromID($(this))
    console.log(matched);


    // SAVE HERE
    editor.setValue("", 0);
    editor.setValue(matched[0].Content, 1);
});

//----------------END OF CLICK EVENTS---------------------------



//----------------FILE-RELATED FUNCTIONS---------------------------
function GetFileFromID(Element) {
    var id = $(Element).attr('id');
    console.log(Element)
    return $.map(matchArray, function (n) {
        if (n.Name === id) {
            console.log(id)
            console.log(n.Name)
            return n;
        }
    });
}
//----------------END OF FILE-RELATED FUNCTIONS---------------------------