function openfileDialog() {
   	document.getElementById("fileLoader").click(); 	


	var control = document.getElementById("fileLoader");
   	control.addEventListener("change",function(event){
   		console.log("Hello");
   		files = control.files,
   		len = files.length;

   		document.getElementById("tmpimage").value = files[0].name;
   		console.log(files[0].name);

   	});	
}

function openPersonalDetails(){	
	document.getElementById("dialogbox").style.display = 'block';
	document.getElementById("dialogbox").focus();
}

function closePersonalDetails(){	
	document.getElementById("dialogbox").style.display = 'none';
}

function openBusinessCards(){

}





function submitDetails(){

}


