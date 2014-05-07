
$(document).ready(function(){

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

});

$('#imprint-close').click(function(){

        $('#imprint').hide();

});

$('#again').click(function(){

        $('#winner-wrapper').hide();
	window.location = "http://bistduantifaschist.de";

});

});
