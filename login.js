$(document).ready(function () {
	$("#password").keypress(function(e) {
		if(e.which === 13) {
			lightdm.start_authentication($("#username").val());
		}
	});
});


// lightdm functions
function authentication_complete() {
	if(lightdm.is_authenticated) {
		lightdm.login(lightdm.authentication_user, lightdm.default_session);
	}
	else {
		message("Fail", "ure");
	}

	reset();
}

function show_prompt(text) {
	lightdm.provide_secret($("#password").val());
}

function info(text) {
	message("For your information", text);
}

// End lightdm functions


function message(leftText, rightText) {
	$("#message_left").html(leftText);
	$("#message_right").html(rightText);
	setTimeout(resetMessage, 2000);
}

function resetMessage() {
	$("#message_left").html("");
	$("#message_right").html("");
}

function reset() {
	$("#password").val("");
}
