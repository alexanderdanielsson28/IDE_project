
      var dropdownValue = $("#createTabsDropdown :selected").val();
      var tabTitle = $("#tab_title"),

        tabContent = $( "#tab_content" ),
        tabTemplate = "<li class='tabSelect ui-state-default'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close ui-icon-arrowthick-2-n-s' role='presentation'>Remove Tab</span></li>",
        tabPlusTemplate = "<li id='CreateFileButton'><a href='#{href}'>#{label}</a> </li>",
        tabCounter = 1;
 
      var tabs = $( "#tabs" ).tabs();
      var openTabs = [];

      // modal dialog init: custom buttons and a "close" callback resetting the form inside
      var dialog = $( "#dialog" ).dialog({
          autoOpen: false,
          modal: true,
          buttons: {
              Add: function() {
                  //addTab();
                  
                  dropdownValue = $("#createTabDropdown :selected").attr("value");
                  tabTitle = $("#tab_title").val();

                  

                  $(this).dialog("close");

                  
                 
                  

                  var newObject = CreateNewObject(tabTitle,dropdownValue);
                  
                  var positionObject = GetFileFromID(rightClickedElement)
                  insertVisualFile(rightClickedElement, newObject);


                  InsertNewObject(fileArray, newObject, positionObject);



                  
              },
              Cancel: function() {
                  $( this ).dialog( "close" );
              }
          },
          close: function() {
              form[ 0 ].reset();
          }
      });
 
      // addTab form: calls addTab function on submit and closes the dialog
      var form = dialog.find( "form" ).submit(function( event ) {
          addTab();
          dialog.dialog( "close" );
          event.preventDefault();
          
      });



      $(document).ready(function() {
          var tabsHeight = $("#sortable").height();
          $("#measureMentTab").remove()
          $("#sortable").height(tabsHeight);
      })
      //    var plustabe = tabTitle.val() || "+",
      //     de = "plus-" + tabCounter,
      //     se = $(tabPlusTemplate.replace(/#\{href\}/g, "#" + de).replace(/#\{label\}/g, plustabe)),
      //     tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

      //    tabs.find(".ui-tabs-nav").append(se);
      //    tabs.append("<div id='" + de + "'><p>" + tabContentHtml + "</p></div>");
      //    tabs.tabs("refresh");
      //    tabCounter++;
      //});


 
 
      // actual addTab function: adds new tab using the input from the form above
      

     


// CreateFileButton button: just opens the dialog
      $( "#CreateFileButton" )
        //.button()
        .click(function() {
            dialog.dialog("open");
            
        });
 
      // close icon: removing the tab on click
      tabs.delegate("span.ui-icon-close", "click", function () {
          //console.log($(this).closest("li").hasClass("ui-tabs-active, ui-state-active"))
          if ($(this).closest("li").hasClass("ui-tabs-active, ui-state-active")) {
              editor.setValue("", 0);
              console.log(editor.getReadOnly())
          }
          //console.log(fileArray)
          var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
          //$( "#" + panelId ).remove();
          
          //console.log(openTabs)
          removeArrayObject($(this).closest("li"))
          //console.log(openTabs)
          //console.log($(this).closest("li"))
          
          tabs.tabs("refresh");
      }); 
 
      tabs.bind( "keyup", function( event ) {
          if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
              var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
              $( "#" + panelId ).remove();
              tabs.tabs( "refresh" );
          }
      });


  
  

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});


function addTab() {

   
   
    var label = tabTitle.val() || "Tab " + tabCounter,
      id = "tabs-" + tabCounter,
      li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label))
      //tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

    tabs.find(".ui-tabs-nav").append(li);
   
    tabs.tabs("refresh");
    tabCounter++;


}

function isInArray(fileObject, array) {
    for (var i = 0; i < array.length; i++) {
        if (fileObject.Name == array[i].Name) {
            return true;
        }
    }
    return false;
}

function removeArrayObject(element) {
    var openTabName = $(element).children()[0].text;
    for (var i = 0; i < openTabs.length; i++) {
        if (openTabs[i].Name == openTabName) {
            openTabs.splice(i, 1);

        }
        
    }
    
}

function addTabz(fileObject) {
    var result = isInArray(fileObject, openTabs)
    //var result = $.grep(openTabs, function (e) { return e.Name == fileObject.Name; });
    console.log(result);
    if (!result) {

    
    openTabs.push(fileObject);

    var label = fileObject.Name,
      id = label,
      li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label))
      //tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

    tabs.find(".ui-tabs-nav").append(li);
    
    tabs.tabs("refresh");
    tabCounter++;
    }

    else {
        
    }




}


$(document).on('click', ".tabSelect", function (e) {
    var object;
    $("#sortable").children().removeClass("ui-tabs-active, ui-state-active")
    $(this).addClass("ui-tabs-active, ui-state-active");
    
    console.log($(this).children(":first").text())
    var openTabName = $(this).children(":first").text();
    for (var i = 0; i < openTabs.length; i++) {
        if (openTabs[i].Name == openTabName) {
            console.log(openTabs[i].Name)
            object = openTabs[i];
            
        }
    }
    if (typeof object != "undefined") {

    editor.setValue(object.Content);
        setSessionLanguage(editor.getSession(), object.Type);
        
    }
    
});

//Function that creates a new object to the file hierachy
function CreateNewObject(name,type){

    $("#createTabsDropdown :selected").val();

    var newObject = {
        Name: name,
        Content: "",
        Type: type
    }
    return newObject;
    


}






