
function comprobar(){


	let ist = document.getElementById("1").value;
	let sec = document.getElementById("2").value;
	let third = document.getElementById("3").value;
	let fourth = document.getElementById("4").value;
	let fifth = document.getElementById("5").value;
	const codigo = (ist + sec + third + fourth + fifth);

	console.log(codigo.toUpperCase());

	if (codigo.toUpperCase() == '2J84C') {
		 
		
		window.location = "https://www.youtube.com/watch?v=cJCzArGUhyU" ;
		document.getElementById("titulo").innerHTML = "¡Código correcto! / Correct code!";
		
	} else{
		
		limpiar(true);
		document.getElementById("titulo").innerHTML = "¡Código incorrecto! / Wrong code!";

	}

}


function limpiar(error){
	var list = document.getElementsByClassName("input");
	for (var i = list.length - 1; i >= 0; i--) {
		if (error == true) {
			list[i].style.outline = "3px solid #B31312";
		}
		list[i].value = "";
	}
	document.getElementById("1").focus();
}

function clickEvent(first,last){
	console.log(document.getElementById(5));
  var key = event.keyCode || event.charCode;
  var id = document.activeElement.id;

   if( key == 8 && id > 1 && id <= 5 ) {
   
    	document.getElementById(id-1).focus();
    	
    	document.getElementById(id-1).value="";
    
        
   } else if (key == 13) {
   		comprobar();
   		document.getElementById(1).focus();
   } else if (first.value.length && last > 0) {

  	    document.getElementById(last).focus();
   }

   if ( document.getElementById("1").value!="" &&
   	document.getElementById("2").value!="" &&
   	document.getElementById("3").value!="" &&
   	document.getElementById("4").value!="" &&
   	document.getElementById("5").value!="" ) {
   	  document.getElementById("confirm").focus();
   }
}



