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
             load: "js/EdgeCommons.js",
         	complete: function() {
         		EC.centerStage(sym);
         		EC.Parallax.setup(sym);
         	}
         });
         
         

      });
      //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

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
         }, 1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${registermenu}", "click", function(sym, e) {
         $('html, body').animate({
             scrollTop: $(".contactsclass").first().offset().top
         }, 2000);
         

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
         sym.playReverse();

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-807759015");