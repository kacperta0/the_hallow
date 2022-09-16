var expression = "You are the greatest";
expression = expression.toUpperCase();

var lenght_expression = expression.length;
var howMuchMisses = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var expression1 = "";

for (i=0; i<lenght_expression; i++)
{
	if (expression.charAt(i)==" ") expression1 = expression1 + " ";
	else expression1 = expression1 + "-";
}

function write_expression()
{
	document.getElementById("board").innerHTML = expression1;
}

window.onload = start;

var letter = new Array(35);

letter[0] = "A";
letter[1] = "Ą";
letter[2] = "B";
letter[3] = "C";
letter[4] = "D";
letter[5] = "E";
letter[6] = "F";
letter[7] = "G";
letter[8] = "H";
letter[9] = "I";
letter[10] = "J";
letter[11] = "K";
letter[12] = "L";
letter[13] = "M";
letter[14] = "N";
letter[15] = "O";
letter[16] = "P";
letter[17] = "R";
letter[18] = "S";
letter[19] = "T";
letter[20] = "U";
letter[21] = "V";
letter[22] = "W";
letter[23] = "X";
letter[24] = "Y";
letter[25] = "Z"; // Ż etc.



function start()
{
	
	var div_content ="";
	
	for (i=0; i<=25; i++)
	{
		var element = "lit" + i;
		div_content = div_content + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letter[i]+'</div>';
		if ((i+1) % 7 ==0) div_content = div_content + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alphabet").innerHTML = div_content;
	
	
	write_expression();
}

String.prototype.setSign = function(position, sign)
{
	if (position > this.length - 1) return this.toString();
	else return this.substr(0, position) + sign + this.substr(position+1);
}


function check(nr)
{
	
	var hit = false;
	
	for(i=0; i<lenght_expression; i++)
	{
		if (expression.charAt(i) == letter[nr]) 
		{
			expression1 = expression1.setSign(i,letter[nr]);
			hit = true;
		}
	}
	
	if(hit == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		write_expression();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		howMuchMisses++;
		var obraz = "img/s"+ howMuchMisses + ".jpg";
		document.getElementById("hallow").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (expression == expression1)
	document.getElementById("alphabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+expression+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//przegrana
	if (howMuchMisses>=9)
	document.getElementById("alphabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+expression+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
