$(document).ready(function () {
	$("#id1").on('click', sendAjax);
	$("#id2").on('click', sendTwoAjax);
	$("#id3").on('click', sendThreeAjax);
	$("#ran").on('input', myRange);
	$("#id4").on('click', sendFourAjax);
	$("#id5").on('click', sendJson);
});
function myRange(){
	$("#out_r").html($("#ran").val());
}
function sendAjax(){
	$.post(
		"rand.php",
		{
			"a" : $("#num1").val(),
			"b" : $("#num2").val(),
		},
		ifSuccess
	);
}

function sendTwoAjax(){
	$.post(
		"a2.php",
		{
			"year" : $("#year").val(),
		},
		ifSuccess
	);
}

function sendThreeAjax(){
	$.post(
		"a3.php",
		{
			"sex" : $("input[name='sex']:checked").val(),
			"height" : $("#ran").val(),
		},
		ifSuccess
	);
}
function sendFourAjax(){
	$.post(
		"mail.php",
		{
			"fio" : $("#fio").val(),
			"email" : $("#email").val(),
			"height" : $("#phone").val(),
		},
		ifSuccess
	);
}
function sendJson(){
	$.get(
		"goods.php",
		{
			"art" : "1",
			
		},
		ifSuccess
	);
}

function ifSuccess(data){
	$("#out").html(data);
	data = JSON.parse(data);
	console.log(data);
	console.log(data.name);
	console.log(data.cost);
}
