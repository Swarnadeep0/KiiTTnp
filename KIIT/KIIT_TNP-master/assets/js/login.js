$(document).ready(function(){
$("#login").click(function(){
var email = $("#usr").val();
var password = $("#pwd").val();
if( email =='' || password ==''){
alert("Please fill all fields...!!!!!!");
}else {

	var payload = email+':'+password;

	$.ajax({
    url: 'http://localhost:8788/api/2.0/login',
    method: 'POST',
    beforeSend: function ( xhr ) {
    	xhr.setRequestHeader('Authorization','Basic ' + btoa(payload));
    },

    success: function( data, txtStatus, xhr ){
		console.log(data.sessionId);
		var check = data.sessionId;
		if(check != "Invalid Credentials"){
			console.log("Invalid");
		}
		else{
			alert("Invalid Credentials... TRY AGAIN");
		}
    }

});
}
});
});
