
$(document).ready(function(){

$('#female').click(function(){
	$('#splash-wrapper').hide();
	$('#start-wrapper h1').text("Bist du Antifaschistin?");
	$('#winner-wrapper h1').text("Du bist Antifaschistin.");
	$('#start-wrapper').show();
});

$('#male').click(function(){
        $('#splash-wrapper').hide();
        $('#start-wrapper').show();
});

$('#neither').click(function(){
        $('#splash-wrapper').hide();
        $('#start-wrapper h1').text("Bist du Antifaschist*in?");
        $('#winner-wrapper h1').text("Du bist Antifaschist*in.");
        $('#start-wrapper').show();
});

$('#start').click(function(){

	$('#start-wrapper').hide();
	$('#qa-wrapper').show();
	$('#q1-wrapper').show();
	$('#answer-wrapper').show();
});

$('.yes').click(function(){

	if ($('#q1-wrapper').is(':visible')) { 
		$('#q1-wrapper').hide();
		$('#q2-wrapper').show();
	} else if ($('#q2-wrapper').is(':visible')) {
                $('#q2-wrapper').hide();
                $('#q3-wrapper').show();
        } else if ($('#q3-wrapper').is(':visible')) {
                $('#q3-wrapper').hide();
		$('#answer-wrapper').hide();
                $('#winner-wrapper').show();
        }; 
});

$('.no').click(function(){

        if ($('#q1-wrapper').is(':visible')) {
        	window.location = "http://de.wikipedia.org/wiki/Allgemeine_Erklärung_der_Menschenrechte";
	} else if ($('#q2-wrapper').is(':visible')) {
        	window.location = "http://de.wikipedia.org/wiki/Allgemeine_Erklärung_der_Menschenrechte";
	} else if ($('#q3-wrapper').is(':visible')) {
        	window.location = "http://dejure.org/gesetze/GG/20.html";
	};
});

$('#imprint-link').click(function(){

	$('#imprint').show();
	$('#footer').hide();

});

$('#imprint-close').click(function(){

        $('#imprint').hide();
	$('#footer').show();
});

$('#again').click(function(){

        $('#winner-wrapper').hide();
	window.location = "http://bistduantifaschist.de";

});

});
