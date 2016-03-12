window.onload = function () {
   alert("Welcome");
} 

$(document).ready (function () {
	$('div').on ('click', function (event){
		$('#evento').css ("background-color","black");
	})
})