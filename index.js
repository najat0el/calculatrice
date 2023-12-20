
//================================== Var definitions. ======================================
/* Two numbers calc will work with. */
var nb1 = 0, nb2 = 0;
/* Operation type. */
var op = 'null';
var cpt = 0;
//============================== Add numbers on 'screen'.===================================
function ajouteChiffre(form,val)
{
	form.texte.value += val;
}
//============== Test if a comma has already been appended or not. =========================
function ajoutePoint(form)
{
	if (form.texte.value.length == 0)
	{
		form.texte.value = "0.";
	}
	else 
	{
		var j = 0;
		for (var i=0;i<form.texte.value.length;i++)
		{
			if (form.texte.value.charAt(i) == ".")
			{
				j = 1;
				break;
			}
		}
		(j == 0) ? (form.texte.value += ".") : (alert("D\351j\340 entr\351."));
	} 
}
//============================== Set operation type. ========================================
function setOp(opType)
{
	if (op == 'null')
	{
		op = opType;
	}
	else
	{
		alert("Vous \352tes d\351j\340 en train de faire une " + op + ".");
		form.texte.value = "";
	}
}
//===================================== Reset. ===============================================
function raz(form)
{
	form.texte.value = "";
	form.affichage.value = "";
	nb1 = 0, nb2 = 0;
	op = 'null';
	cpt = 0;
}
//=============================== Store variables. ===========================================
function store(form)
{
	if ((form.texte.value != "") && (op == 'null') && (cpt == 0)) // op is set after first var storage
	{
		nb1 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	else if ((form.texte.value != "") && (op != 'null') && (cpt == 1))
	{
		nb2 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	/* else: do nothing. */
}
/*
 * Workaround for unwanted behavior: when entering the first variable and clicking equal the var will get stored.
 */
function storeEq(form)
{
	if (cpt == 1)
	{
		store(form);
	}
}
//================================== Calculate. ===============================================
function calc(form)
{
	/* Break if the user clicked on the equal button without entering 2 variables. */
	if (cpt < 2) // We don't use (nbX == 0) check because 0 can be a user-entered value.
	{
		alert("Il faut deux nombres pour pouvoir faire un calcul.");
	}
	else
	{
		if (op == "somme")
		{
			form.affichage.value = parseInt(nb1) + parseInt(nb2);
		}
		else if (op == "soustraction")
		{
			form.affichage.value = parseInt(nb1) - parseInt(nb2);
		}
		else if (op == "multiplication")
		{
			form.affichage.value = nb1 * nb2;
		}
		else if (op == "division")
		{
			if (nb2 == 0)
			{
				alert("On ne peut pas diviser par z\351ro.");
			}
			else
			{
				form.affichage.value = nb1 / nb2;
			}
		}
	}
}