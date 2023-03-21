class Dilution
{
	static
	main(args)
	{
		// user variables
		// one has to be empty
		var c1 = parseFloat(document.getElementById("C1").value);
		var v1 = parseFloat(document.getElementById("V1").value);
		var c2 = parseFloat(document.getElementById("C2").value);
		var v2 = parseFloat(document.getElementById("V2").value);
        
        var respostaDiv = document.querySelector("#resposta");
		if (!c1)
		{
			var V1 = parseFloat(v1);
			var C2 = parseFloat(c2);
			var V2 = parseFloat(v2);
			var C1 = (C2 * V2) / V1;
            respostaDiv.innerHTML = "Use " + new String(C1).toString();
		}
		else if (!c2)
		{
			var C1 = parseFloat(c1);
			var V1 = parseFloat(v1);
			var V2 = parseFloat(v2);
			var C2 = (C1 * V1) / V2;
			respostaDiv.innerHTML = "Use " + new String(C2).toString();
		}
		else if (!v1)
		{
			var C1 = parseFloat(c1);
			var C2 = parseFloat(c2);
			var V2 = parseFloat(v2);
			var V1 = (C2 * V2) / C1;
			respostaDiv.innerHTML = "Use " + new String(V1).toString();
		}
		else if (!v2)
		{
			var C1 = parseFloat(c1);
			var V1 = parseFloat(v1);
			var C2 = parseFloat(c2);
			var V2 = (C1 * V1) / C2;
			respostaDiv.innerHTML = "Use " + new String(V2).toString();
		}
	}
}

var button = document.querySelector(".programa__botao");
button.onclick = Dilution.main;

