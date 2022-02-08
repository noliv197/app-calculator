class converter
{
	static
	main(args)
	{
		/*
		        //Unidade de volume
		        final double ul_ml = 0.001;
		        final double ml_ul = 1/ul_ml;
		        final double l_ml = 1000;
		        final double ml_l = 1/l_ml;
		        //unidade de massa
		        final double ug_mg = 0.001;
		        final double mg_ug = 1/ug_mg;
		        final double g_mg = 1000;
		        final double mg_g = 1/g_mg;
		        final double kg_g = 1000;
		        final double g_kg = 1/kg_g;
		        //unidade de materia
		        final double umol_mmol = 0.001;
		        final double mmol_umol = 1/umol_mmol;
		        final double mol_mmol = 1000;
		        final double mmol_mol = 1/g_mg;
		        */
        var resposta = document.querySelector("#V2");
		var map = new Map();
	
		//Unidade de volume
		map.set("ul_ml", 0.001);
		map.set("ml_ul", 1 / map.get("ul_ml"));
		map.set("l_ml", 1000.0);
		map.set("ml_l", 1 / map.get("l_ml"));
		//unidade de massa
		map.set("ug_mg", 0.001);
		map.set("mg_ug", 1 / map.get("ug_mg"));
		map.set("g_mg", 1000.0);
		map.set("mg_g", 1 / map.get("g_mg"));
		map.set("kg_g", 1000.0);
		map.set("g_kg", 1 / map.get("kg_g"));
		//unidade de materia
		map.set("umol_mmol", 0.001);
		map.set("mmol_umol", 1 / map.get("umol_mmol"));
		map.set("mol_mmol", 1000.0);
		map.set("mmol_mol", 1 / map.get("g_mg"));
		//wanted units
		
		var in_value = parseFloat(document.getElementById("V1").value);
		var out_value = parseFloat(document.getElementById("V2").value);


		var in_unit = String(document.getElementById("unit-1").value);
		var out_unit = String(document.getElementById("unit-2").value);
	
		out_value = in_value * map.get(in_unit + "_" + out_unit);
		resposta.innerHTML = in_unit;

	}
}

var button = document.querySelector(".botao__conversor");
button.onclick = converter.main;
