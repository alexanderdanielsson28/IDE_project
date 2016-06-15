
    var myTerminal = new Terminal()

myTerminal.print("********************** APIRIX Terminal V2 **********************")
myTerminal.print("The commands are: | date | creator | errorlog | theme | clear |");

var lock = true;

function myfunction() {

    myTerminal.input("",function (userInput) {
        var currentime = new Date();

        if (userInput == "date") {
            myTerminal.print("Todays Date Is: " + currentime);
            lock = false;
        }
        else if (userInput == "creator") {
            myTerminal.print("The Apirix Terminal Was Brought To You By Wiggoviich ©");
            lock = false;
        }
        else if (userInput == "errorlog") {
            var annot = editor.getSession().getAnnotations();
            console.log(annot);

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
        else if (userInput == "theme") {


            myTerminal.print("black");
            myTerminal.print("white");
            myTerminal.print("bluegray");                

            myTerminal.input("", function (userInput2) {    

                if (userInput2 == "black") {
                    black();
                    myTerminal.print("You Choosed Theme Black")
                    lock = false;
                }

                else if (userInput2 == "white") {
                    white();
                    myTerminal.print("You Choosed Theme White")
                    lock = false;
                }
                else if (userInput2 == "bluegray") {
                    grayblue();
                    myTerminal.print("You Choosed Theme Bluegray")
                    lock = false;
                }
                else{
                    myTerminal.print("There Are No Theme Called That!")
                    lock = false;
                }

                    
                if (lock == false) {
                    lock = true;
                    myfunction();
                }


            });
               
                
        }
        else if (userInput == "clear") {
            myTerminal.clear();
            myTerminal.print("*********** APIRIX Terminal V2 ***********")
            myTerminal.print("The commands are: | date | creator | errorlog | theme | clear |");
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

$("#term").append(myTerminal.html)
$("#term").css({
    'word-break': 'break-word'
});

