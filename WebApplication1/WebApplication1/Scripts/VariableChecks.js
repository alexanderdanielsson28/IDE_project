//-------------------GLOBAL VARIABLES------------------------
//-------------------GLOBAL INTERVAL------------------------
//-------------------MAIN FUNCTION------------------------
//-------------------EXTRACT ROWS FUNCTION------------------------




//-------------------GLOBAL VARIABLES------------------------
var JSDeclarations = /(var|function)[\s]{1,}[a-zA-Z]{1,}\b/g
var JSComments = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/
//-------------------END OF GLOBAL VARIABLES------------------------




//-------------------GLOBAL INTERVAL------------------------
window.setInterval(function () {
    findDuplicatesAndPlaceAnnotations();
}, 5000)
//-------------------GLOBAL INTERVAL------------------------




//-------------------MAIN FUNCTION------------------------
function findDuplicatesAndPlaceAnnotations() {
    var annotationsArray = [];
    var textAndRows = [];
    editor.$search.set({ needle: JSDeclarations });
    var declarations = editor.$search.findAll(editor.getSession());
    var matches = [];
    var editsession = editor.getSession();
    for (var i = 0; i < declarations.length; i++) {
        matches.push(declarations[i], editsession.getTextRange(declarations[i]));
    }

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
}
//-------------------END OF MAIN FUNCTION------------------------


//-------------------EXTRACT ROWS FUNCTION------------------------
function getRows(array) {
    var numbers = [];
    for (var i = 0; i < array.length; i++) {
        numbers.push(array[i].start.row + 1)
    }
    return numbers;
}
//-------------------END OF EXTRACT ROWS FUNCTION------------------------