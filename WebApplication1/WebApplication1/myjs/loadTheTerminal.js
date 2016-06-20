
    var myTerminal = new Terminal()

myTerminal.print("********************** AJEA Code Editor **********************")
myTerminal.print("The commands are: | date | creator | errorlog | clear |");

var lock = true;

function myfunction() {

    myTerminal.input("",function (userInput) {
        var currentime = new Date();

        if (userInput == "date") {
            myTerminal.print("Todays Date Is: " + currentime);
            lock = false;
        }
        else if (userInput == "creator") {
            myTerminal.print("The Apirix Terminal Was Brought To You By Andreas Vigertsson,Johan Stening,Erik Petersson & Alex Danielsson ©");
            lock = false;
        }
        else if (userInput == "errorlog") {
            var annot = editor.getSession().getAnnotations();


            if (annot.length > 0) {

                for (var key in annot) {

                    if (annot.hasOwnProperty(key)) {
                        var rownr = annot[key].row + 1;
                        myTerminal.print(annot[key].text + "on line " + " " + rownr);
                        lock = false;
                    }
                }
            }
            else {
                myTerminal.print("There Are No Error At The Moment!");
                lock = false
            }
                }

        else if (userInput == "clear") {
            myTerminal.clear();
            myTerminal.print("*********** AJEA Code Editor ***********")
            myTerminal.print("The commands are: | date | creator | errorlog | clear |");
            lock = false;
        }
            
               
                
            
        else {
            myTerminal.print("There Is No Such Command,Try Another One");
            lock = false;
        }
        if (lock == false) {
            lock = true;
            myfunction();
        }
    })
}
myfunction();
myTerminal.setBackgroundColor("#1A355E")
myTerminal.setTextColor("#ffffff")
myTerminal.setWidth("100%")
myTerminal.setHeight("100%");
myTerminal.setscrollY("auto");
myTerminal.blinkingCursor(true)
myTerminal.setTextSize("13px");
myTerminal.setmaxHeight("100%");
myTerminal.setPaddingLeft("40px");
myTerminal.setPaddingTop("15px");



$("#term").append(myTerminal.html)
$("#term").css({
    'word-break': 'break-word'
});

