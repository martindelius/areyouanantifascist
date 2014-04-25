
$(document).ready(function(){

$('#start').click(function(){

	$('#start-wrapper').hide();
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

});
