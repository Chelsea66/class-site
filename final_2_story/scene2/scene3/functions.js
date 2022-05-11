 function toggle() {
                // run the css 
                var box = document.getElementById("box");
                box.classList.toggle("active");
                // have default class in html 
                //var box= document.getElementById("box2");
                //box.classList.remove("active");
                
}

// jQuery function line
/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
// $(class marquee). marquee function
$('.marquee').marquee({ 
	//duration in milliseconds of the marquee
	duration: 15000, 
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
    startVisible: true
});

//https://jqueryui.com/draggable/ --> view scource --> add
$( function() {
    $( ".draggable" ).draggable();
  } );