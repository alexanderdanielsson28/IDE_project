var JSVarAnyStartAndEnd = /^.*?var[\s]{1,}[a-zA-Z]{1,}.*?$/;
var JSVarSpecific = /\bvar[\s]{1,}[a-zA-Z]{1,}\b/g
var JSVarSpecific2 = /\bvar[\s]{1,}([a-zA-Z]){1,}.*\1\b/g


window.setInterval(function () {
    var duplicatesFound = [];
    var uniqueNames = [];
    var text = editor.getValue();
    var matches = text.match(JSVarSpecific);
    //var matches = JSVarSpecific2.exec(text);
    console.log(matches)
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
        

        
        for (var i = 0; i < duplicatesFound.length; i++) {
            var range = editor.find(duplicatesFound[i], {
                wrap: true,
                caseSensitive: true,
                wholeWord: true,
                regExp: false,
                preventScroll: true // do not change selection
            })
            //range.start.column = 0
            //range.end.column = Number.MAX_VALUE
            //editor.session.replace(range, "x" + editor.session.getLine(range.start.row) + "x")
            // editor.selection.setRange(range)
            
      
            console.log(editor.session)
      
            editor.session.setAnnotations([{
                row: range.start.row,
                column: range.start.column,
                text: "The variable '"+duplicatesFound[i]+"' is already declared.",
                type: "info"
            }, {
                row: 4,
                column: range.start.column,
                text: "The variable '" + duplicatesFound[i] + "' is already declared.",
                type: "info"
            }]
            );
            
        }
    }
    
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