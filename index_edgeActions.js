/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         yepnope({
             load: ["js/EdgeCommons.js", "js/style.css"],
         
         	complete: function() {
         		EC.centerStage(sym);
         		EC.Parallax.setup(sym);
         	}
         });
         
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${menu}", "mouseover", function(sym, e) {
         sym.$(".menu").on("mouseover",
         function(){
         $(this).css("border","2px solid green");
         });
         sym.$(".menu").on("mouseout",
         function(){
         $(this).css("border","none");
         });
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${about}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".aboutclass").first().offset().top
         }, 2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${registermenu}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".contactsclass").first().offset().top
         }, 2500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fb}", "click", function(sym, e) {
         window.open("https://www.facebook.com/Parakram.ism");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${homemenu}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".homeclass").first().offset().top
         }, 1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gallerypic12}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".galleryclass").first().offset().top
         }, 1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${twitter}", "click", function(sym, e) {
         window.open("https://twitter.com/parakram2012");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sponsors}", "click", function(sym, e) {
         // Open image in spotlight overlay
         // Set up configuration
         var config = {
             width: 1000,
            height: 500,
            type: "image",
            source: "images/pastsponsors.jpg"
         }
         
         // 
         EC.Spotlight.open( config );

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${fbCopy5}", "click", function(sym, e) {
         // Open image in spotlight overlay
         // Set up configuration
         var config = {
             width: 600,
            height: 450,
            type: "animate",
            source: "compositions/a.html"
         }
         
         // 
         EC.Spotlight.open( config );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${eventsmenu}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".eventsclass").first().offset().top
         }, 2000);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${registrationmenu}", "click", function(sym, e) {
         window.open("http://parakramism.org/registration/", '_blank');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${registrationmenu}", "mouseover", function(sym, e) {
         $(this).css('background-color','rgba(76,84,116,1.00)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scoll_down2}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".menusclasses").first().offset().top
         }, 2000);
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${gallerymenu}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".galleryclass").first().offset().top
         }, 2500);
         
         // insert code for mouse click here

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${Football}", "click", function(sym, e) {
         // insert code for mouse click here
         
         EC.loadComposition("events/football.html", sym.$('screen'));
         sym.$('others').hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Cricket}", "click", function(sym, e) {
         EC.loadComposition("events/cricket.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${basketballCopy}", "click", function(sym, e) {
         EC.loadComposition("events/basketball.html", sym.$('screen'));
         sym.$('others').hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${chess}", "click", function(sym, e) {
         EC.loadComposition("events/chess.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${billiards}", "click", function(sym, e) {
         EC.loadComposition("events/billiards.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${boxing}", "click", function(sym, e) {
         EC.loadComposition("events/boxing.html", sym.$('screen'));
         
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${athletics}", "click", function(sym, e) {
         EC.loadComposition("events/atheletics.html", sym.$('screen'));
         sym.$('others').hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${badminton}", "click", function(sym, e) {
         EC.loadComposition("events/badminton.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${volleyball}", "click", function(sym, e) {
         EC.loadComposition("events/volleyball.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gaming}", "click", function(sym, e) {
         EC.loadComposition("events/gaming.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${table}", "click", function(sym, e) {
         EC.loadComposition("events/tabletennis.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lawn}", "click", function(sym, e) {
         EC.loadComposition("events/lawntennis.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${swim}", "click", function(sym, e) {
         EC.loadComposition("events/wushu.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tennis}", "click", function(sym, e) {
         EC.loadComposition("events/squash.html", sym.$('screen'));
         sym.$('others').hide();
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Football}", "mouseover", function(sym, e) {
         sym.$('Football').css('background-color','red');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Football}", "mouseout", function(sym, e) {
         sym.$('Football').css('background-color','rgba(255,255,255,0)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Cricket}", "mouseout", function(sym, e) {
         sym.$('Cricket').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${billiards}", "mouseout", function(sym, e) {
         sym.$('billiards').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${basketballCopy}", "mouseout", function(sym, e) {
         sym.$('basketballCopy').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${volleyball}", "mouseout", function(sym, e) {
         sym.$('volleyball').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${table}", "mouseout", function(sym, e) {
         sym.$('table').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lawn}", "mouseout", function(sym, e) {
         sym.$('lawn').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${swim}", "mouseout", function(sym, e) {
         sym.$('swim').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tennis}", "mouseout", function(sym, e) {
         sym.$('tennis').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${chess}", "mouseout", function(sym, e) {
         sym.$('chess').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${boxing}", "mouseout", function(sym, e) {
         sym.$('boxing').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${athletics}", "mouseout", function(sym, e) {
         sym.$('athletics').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${badminton}", "mouseout", function(sym, e) {
         sym.$('badminton').css('background-color','rgba(255,255,255,0)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Cricket}", "mouseover", function(sym, e) {
         sym.$('Cricket').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${chess}", "mouseover", function(sym, e) {
         sym.$('chess').css('background-color','red');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${billiards}", "mouseover", function(sym, e) {
         sym.$('billiards').css('background-color','red');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${boxing}", "mouseover", function(sym, e) {
         sym.$('boxing').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${athletics}", "mouseover", function(sym, e) {
         sym.$('athletics').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${badminton}", "mouseover", function(sym, e) {
         sym.$('badminton').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${basketballCopy}", "mouseover", function(sym, e) {
         sym.$('basketballCopy').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${volleyball}", "mouseover", function(sym, e) {
         sym.$('volleyball').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gaming}", "mouseover", function(sym, e) {
         sym.$('gaming').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${table}", "mouseover", function(sym, e) {
         sym.$('table').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lawn}", "mouseover", function(sym, e) {
         sym.$('lawn').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${swim}", "mouseover", function(sym, e) {
         sym.$('swim').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tennis}", "mouseover", function(sym, e) {
         sym.$('tennis').css('background-color','red');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gaming}", "mouseout", function(sym, e) {
         sym.$('gaming').css('background-color','rgba(0,0,0,0)');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "mouseover", function(sym, e) {
         sym.$('innerblack').css('width','80%');
         sym.$('innerblack').css('height','80%');
         sym.$('innerblack').css('left','10%');
         sym.$('innerblack').css('top','10%');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "mouseout", function(sym, e) {
         sym.$('innerblack').css('width','40%');
         sym.$('innerblack').css('height','40%');
         sym.$('innerblack').css('left','30%');
         sym.$('innerblack').css('top','30%');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         sym.$('others').toggle();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${karate}", "mouseover", function(sym, e) {
         sym.$('karate').css('background-color','red');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hand}", "mouseover", function(sym, e) {
         sym.$('hand').css('background-color','red');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shoot}", "mouseover", function(sym, e) {
         sym.$('shoot').css('background-color','red');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${karate}", "mouseout", function(sym, e) {
         sym.$('karate').css('background-color','rgba(255,255,255,0)');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hand}", "mouseout", function(sym, e) {
         sym.$('hand').css('background-color','rgba(255,255,255,0)');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shoot}", "mouseout", function(sym, e) {
         sym.$('shoot').css('background-color','rgba(255,255,255,0)');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shoot}", "click", function(sym, e) {
         EC.loadComposition("events/shooting.html", sym.$('screen'));
         sym.$('others').hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hand}", "click", function(sym, e) {
         //EC.loadComposition("events/handball.html", sym.$('screen'));
         window.open("events/handball.docx");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${karate}", "click", function(sym, e) {
         //EC.loadComposition("events/shooting.html", sym.$('screen'));
         window.open("events/karate.docx");
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'scoll_down'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("scoll_down");
   //Edge symbol end:'scoll_down'

   //=========================================================
   
   //Edge symbol: 'eventslide'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 65000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("eventslide");
   //Edge symbol end:'eventslide'

   //=========================================================
   
   //Edge symbol: 'eventcontent'
   (function(symbolName) {   
   
   })("eventcontent");
   //Edge symbol end:'eventcontent'

   //=========================================================
   
   //Edge symbol: 'Loading'
   (function(symbolName) {   
   
   })("Loading");
   //Edge symbol end:'Loading'

   //=========================================================
   
   //Edge symbol: 'shooting'
   (function(symbolName) {   
   
   })("shooting");
   //Edge symbol end:'shooting'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-807759015");