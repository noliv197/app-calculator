class Dilution
{
	static
	main(args)
	{
		// user variables
		// one has to be empty
		var c1 = "1";
		var v1 = "1";
		var c2 = "1";
		var v2 = "1";
		if (isNaN(c1))
		{
			var V1 = Double.parseDouble(v1);
			var C2 = Double.parseDouble(c2);
			var V2 = Double.parseDouble(v2);
			var C1 = (C2 * V2) / V1;
			console.log("Use " + new String(C1).toString());
		}
		else if (isNaN(c2))
		{
			var C1 = Double.parseDouble(c1);
			var V1 = Double.parseDouble(v1);
			var V2 = Double.parseDouble(v2);
			var C2 = (C1 * V1) / V2;
			console.log("Use " + new String(C2).toString());
		}
		else if (isNaN(v1))
		{
			var C1 = Double.parseDouble(c1);
			var C2 = Double.parseDouble(c2);
			var V2 = Double.parseDouble(v2);
			var V1 = (C2 * V2) / C1;
			console.log("Use " + new String(V1).toString());
		}
		else if (isNaN(v2))
		{
			var C1 = Double.parseDouble(c1);
			var V1 = Double.parseDouble(v1);
			var C2 = Double.parseDouble(c2);
			var V2 = (C1 * V1) / C2;
			console.log("Use " + new String(V2).toString());
		}
	}
}
Dilution.main([]);