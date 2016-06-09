

      var tabTitle = $( "#tab_title" ),
        tabContent = $( "#tab_content" ),
        tabTemplate = "<li class='ui-state-default'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close ui-icon-arrowthick-2-n-s' role='presentation'>Remove Tab</span></li>",
        tabPlusTemplate = "<li id='add_tab'><a href='#{href}'>#{label}</a> </li>",
        tabCounter = 2;
 
      var tabs = $( "#tabs" ).tabs();
 
      // modal dialog init: custom buttons and a "close" callback resetting the form inside
      var dialog = $( "#dialog" ).dialog({
          autoOpen: false,
          modal: true,
          buttons: {
              Add: function() {
                  addTab();
                  $( this ).dialog( "close" );
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



      //$(document).ready(function addPlusTab() {

         
          
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
      

     


      // addTab button: just opens the dialog
      $( "#add_tab" )
        .button()
        .click(function() {
            dialog.dialog( "open" );
        });
 
      // close icon: removing the tab on click
      tabs.delegate( "span.ui-icon-close", "click", function() {
          var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
          $( "#" + panelId ).remove();
          tabs.tabs( "refresh" );
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
      li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),
      tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

    tabs.find(".ui-tabs-nav").append(li);
    tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
    tabs.tabs("refresh");
    tabCounter++;





}



function addTabz(s) {
    
    
   
    
    var label = tabTitle.val() || s.Name,
      id = "tabs-" + tabCounter,
      li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),
      tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

    tabs.find(".ui-tabs-nav").append(li);
    tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
    tabs.tabs("refresh");
    tabCounter++;





}