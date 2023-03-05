class Buffer
{
	static
	main(args)
	{
		// user variables
		var ph = parseFloat(document.getElementById("ph").value);
		var pka = parseFloat(document.getElementById("pka").value);
		var vol = parseFloat(document.getElementById("volume").value);
		var proportion = Math.pow(10, ph - pka);
		//solve linear equations s/a = proportion and s+a= vol
		var a = vol / (proportion + 1);
		var s = proportion * a;
		//return "Add " + String.valueOf(a) + " of acid to "+ String.valueOf(s) + " of salt!";
		
		var respostaDiv = document.querySelector("#resposta")
		respostaDiv.innerHTML = "Adicione " + new String(a).toString() + " de ácido para " + new String(s).toString() + " de sal";
	}
}

var button = document.querySelector("button");
button.onclick = Buffer.main;
