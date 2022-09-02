function call(){
	let a=document.getElementById('name').value;
	let b=document.getElementById('pass').value;
	console.log(a);
	console.log(b);
	if(a==="dk1353046@gmail.com"||a==="9815216716"){
		if(b==="abcd"){
			document.write("Welcome Dhiraj Kushwaha");
		}
	}
	else{
		document.getElementById('get').click();
	}
}

