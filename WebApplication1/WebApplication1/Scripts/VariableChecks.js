var JSDeclarations = /(var|function)[\s]{1,}[a-zA-Z]{1,}\b/g
var JSComments = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/

$(document).ready(function () {
    /*
    editor.session.setOption("useWorker", false)
    editor.getSession().setUseWrapMode(true);
    editor.setOption('minLines', 10); // this is required for the auto synced scroll
    editor.setOption('maxLines', 25); // this is required for the auto synced scroll
    editor.setAutoScrollEditorIntoView(false);
    editor.$blockScrolling = Infinity;
    */
})
function goThroughArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if ((arr.lastIndexOf(arr[i]) != i) &&
           (duplicatesFound.indexOf(arr[i]) == -1)) {
            duplicatesFound.push(arr[i]);
        }

    }
    return duplicatesFound;
}

/*
window.setInterval(function () {
    var duplicatesFound = [];
    var uniqueNames = [];
    var text = editor.getValue();
    var matches = text.match(JSDeclarations);
    
    
    if (matches) {
        console.log(matches)
        for (var i = 0; i < matches.length; i++) {
            matches[i] = matches[i].replace(/\s+/g, ' ');
        }
        console.log(matches)
        
        
        console.log(goThroughArray(matches))
        var annotationsArray = [];
         
        for (var i = 0; i < duplicatesFound.length; i++) {
            editor.$search.set({ needle: duplicatesFound[i] });
            //console.log(duplicatesFound)
            var rowsNotice = "";
            var found = editor.$search.findAll(editor.getSession());
            console.log(found)
            for (var k = 0; k < found.length; k++) {
                rowsNotice += found[k].start.row+1;
                if (k < found.length-1) {
                    rowsNotice += ",";
                }
            }
            //console.log(rowsNotice)
            for (var j = 0; j < found.length; j++) {
                annotationsArray.push({
                    row: found[j].start.row,
                    column: 0,
                    text: "'"+duplicatesFound[i] + "' has already been declared on lines:" + rowsNotice,
                    type: "info"
                });
            }
        }
        editor.getSession().setAnnotations(annotationsArray);
    }
}, 1000);

*/
function goThroughArray(arr) {
    var duplicatesFound = [];
    for (var i = 0; i < arr.length - 2; i += 2) {
        if ((arr.lastIndexOf(arr[i]) != i) &&
           (duplicatesFound.indexOf(arr[i]) == -1)) {
            duplicatesFound.push(arr[i]);
            duplicatesFound.push(arr[i + 1]);
        }
        else {
            duplicatesFound.push(arr[i + 1]);
        }
    }
    return duplicatesFound;
}


window.setInterval(function () {
    test();
}, 5000)

function test() {


   
    

    var annotationsArray = [];
    var textAndRows = [];
    //var matches = editor.getValue().match(JSDeclarations)
    editor.$search.set({ needle: JSDeclarations });
    var declarations = editor.$search.findAll(editor.getSession());
    var matches = [];
    var editsession = editor.getSession();
    for (var i = 0; i < declarations.length; i++) {
        //matches.push(declarations[i].toString());
        matches.push(declarations[i], editsession.getTextRange(declarations[i]));
    }

    //console.log(declarations)
    //console.log(matches)

    if (matches) {
        for (var i = 0; i < matches.length; i++) {
            //matches[i] = matches[i].replace(JSComments, '')
            if (i % 2 == 0 || i == 0) {
                matches[i + 1] = matches[i + 1].replace(/\s+/g, ' ')
                var index = $.inArray(matches[i + 1], textAndRows)
                if (index == -1) {
                    textAndRows.push([matches[i]], matches[i + 1]);
                }
                else {
                    textAndRows[index-1].push(matches[i])
                }
            }
        }
        var annotations = editor.getSession().getAnnotations();
        //console.log(textAndRows)
        var textAndRowslength = textAndRows.length;
        for (var i = 0; i < textAndRowslength; i++) {
            if (i % 2 == 0 || i == 0) {
                if (textAndRows[i].length > 1) {
                    for (var j = 0; j < textAndRows[i].length; j++) {
                        annotations.push({
                            row: textAndRows[i][j].start.row,
                            column: 0,
                            text: "'" + textAndRows[i + 1] + "' has already been declared on lines: " + getRows(textAndRows[i]),
                            type: "info"
                        });
                    }
                }
            }
        }
        editor.getSession().setAnnotations(annotations);


    }
    /*
   
    for (var j = 0; j < textAndRows.length; j++) {
        if (j % 2 == 0 || j == 0) {
            if (textAndRows[j + 1].length > 1) {

                var rows = getRows(textAndRows[j + 1]);
                for (var k = 0; k < textAndRows[j + 1].length-1; k++) {
                    annotationsArray.push({
                        row: textAndRows[j + 1][k].start.row,
                        column: 0,
                        text: "'" + textAndRows[j] + "' has already been declared on lines: " + rows[j + 1],
                        type: "info"
                    });
                }
            }
           

        }
    }

    editor.getSession().setAnnotations(annotationsArray);
}*/
}

function getRows(array) {
    //console.log(array)
    var numbers = [];
    for (var i = 0; i < array.length; i++) {
        numbers.push(array[i].start.row + 1)
    }
    return numbers;
}