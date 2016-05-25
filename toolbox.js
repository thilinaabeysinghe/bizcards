function openfileDialog() {
   	document.getElementById("fileLoader").click(); 	


	var control = document.getElementById("fileLoader");
   	control.addEventListener("change",function(event){
   		console.log("Hello");
   		files = control.files,
   		len = files.length;

   		console.log(files[0].name);
   	});	
}
