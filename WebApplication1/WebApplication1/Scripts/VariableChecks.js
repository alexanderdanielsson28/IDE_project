var JSVarAnyStartAndEnd = /^.*?var[\s]{1,}[a-zA-Z]{1,}.*?$/;
var JSVarSpecific = /\bvar[\s]{1,}[a-zA-Z]{1,}\b/g
var JSVarSpecific2 = /\bvar[\s]{1,}([a-zA-Z]){1,}.*\1\b/g

editor.session.setOption("useWorker", false)
console.log(editor.session.getOption("useWorker"))

window.setInterval(function () {
    var duplicatesFound = [];
    var uniqueNames = [];
    var text = editor.getValue();
    var matches = text.match(JSVarSpecific);
    //var matches = JSVarSpecific2.exec(text);
    //console.log(matches)
    if (matches) {
        for (var i = 0; i < matches.length; i++) {
            matches[i] = matches[i].replace(/var\s+/g, '');
        }
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
         
       //var session =  ace.createEditSession(editor.getValue(), "ace/mode/javascript")
        //console.log(session)
        //var row = new Range(found.start.row + 1, found.start.column - 1, found.end.row + 1, found.end.column);
        //var search = new Search();
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

           

            console.log(found);
            
            for (var j = 0; j < found.length; j++) {
                annotationsArray.push({
                    row: found[j].start.row,
                    column: 0,
                    text: "The variable '" + duplicatesFound[i] + "' has already been declared on lines:" + rowsNotice,
                    type: "error"
                });
            }
        }
        editor.getSession().setAnnotations(annotationsArray);
    }
    

            //range.start.column = 0
            //range.end.column = Number.MAX_VALUE
            //editor.session.replace(range, "x" + editor.session.getLine(range.start.row) + "x")
            // editor.selection.setRange(range)

            //console.log(range)
            
            /*for (var j = 0; j < range.length; j++) {
                editor.session.setAnnotations([{
                    row: range.start.row,
                    column: range.start.column,
                    text: "The variable '" + duplicatesFound[j] + "' is already declared.",
                    type: "info"
                }])
            }
            console.log(range)*/
    
    /*
    $.each(matches, function (i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
        if ($.inArray(el, uniqueNames) > 0) {
            duplicatesFound.push(el);
        }
    });

    console.log("duplicates: "+duplicatesFound)
    console.log("uniques: " + uniqueNames)*/
    /*var uniqueArray = matches.sort().filter(function (item, pos) {
        if (!matches.indexOf(item) == pos) {
            duplicatesFound.push(item);
        }
        //duplicatesFound.push(matches.indexOf(item) != pos);
        return matches.indexOf(item) == pos;
    })*/

    /*
var i,
len = matches.length,
out = [],
obj = {};

for (i = 0; i < len; i++) {
    matches[i] = matches[i].replace(/ /g, '');
    obj[matches[i]] = 0;
    if (true) {
    }
}
for (i in obj) {
    out.push(i);
}
    console.log(obj)
console.log(out);
*/


}, 1000);




/*editor.find('needle', {
    backwards: false,
    wrap: true,
    caseSensitive: true,
    range: null,
    wholeWord: true,
    regExp: false
})*/