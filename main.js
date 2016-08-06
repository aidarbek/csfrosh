 // Variables
var w = window,
	contentHeight = w.innerHeight,
	contentWidth = w.innerWidth,
	sectionContentHeight = contentHeight - 30;


// Resize Content Divs:
// Resize the divs so that they have a minHeight relative to the screen size
function resizeContentDivs(){
	//window.alert(contentWidth+"- 30 = "+sectionContentHeight);
	var sectionContentClass = document.getElementsByClassName('sectionContent');
	
	for (var i = 0; i < sectionContentClass.length; i++){
		sectionContentClass[i].style.minHeight = sectionContentHeight+"px";
	}
	
	// Add padding to all of the sectionContent's except for the last one beacuse there is
	// no need for a spacer at the bottom
	var minusOneClass = sectionContentClass.length - 1;
	for (var j = 0; j < minusOneClass ; j++){
		sectionContentClass[j].style.paddingBottom = "100px";
	}
	
}

window.onload = resizeContentDivs;
window.onresize = resizeContentDivs;



// Scroll to Anchor:
// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links/
// Scroll the page to the anchor rather than just jumping around

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
	        
			return false;
			}
	    }
	});
});