var JSDeclarations = /\b(var|function)[\s]{1,}[a-zA-Z]{1,}\b/g


$(document).ready(function () {
    editor.session.setOption("useWorker", false)
})

window.setInterval(function () {
    var duplicatesFound = [];
    var uniqueNames = [];
    var text = editor.getValue();
    var matches = text.match(JSDeclarations);
    if (matches) {
        console.log(matches)
        for (var i = 0; i < matches.length; i++) {
            matches[i] = matches[i].replace(/\s+/g, '');
        }
        console.log(matches)
        function goThroughArray(arr) {
            for (var i = 0; i < arr.length; i++) {
                if ((arr.lastIndexOf(arr[i]) != i) &&
                   (duplicatesFound.indexOf(arr[i]) == -1)) {
                    duplicatesFound.push(arr[i]);
                }
            }
            return duplicatesFound;
        }
        
        console.log(goThroughArray(matches))
        var annotationsArray = [];
         
        for (var i = 0; i < duplicatesFound.length; i++) {
            editor.$search.set({ needle: duplicatesFound[i] });
            var rowsNotice = "";
            var found = editor.$search.findAll(editor.getSession());
            for (var k = 0; k < found.length; k++) {
                rowsNotice += found[k].start.row+1;
                if (k < found.length-1) {
                    rowsNotice += ",";
                }
            }
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