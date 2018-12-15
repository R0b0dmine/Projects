
var penColour = 'black';
var isHeader = 0
function setPixelColour(pixel)
{
 pixel.style.backgroundColor = penColour;
}
function setPenColour(pen)
{
	penColour = pen;
	setCurrentColour(penColour);
}

function setCurrentColour(colour)
{
	var currentColour = document.getElementById("currentColour");
	currentColour.style.backgroundColor = colour;
	
	
}
function setText()
{
	if (isHeader == 0)
	{
	document.getElementById("palette").innerHTML = '<h1 id="pe">Paleta</h1>' + document.getElementById("palette").innerHTML; 
	isHeader = 1;
     }
	else {
		elem = document.getElementById("pe");
		elem.parentNode.removeChild(elem);
	isHeader = 0;
	}
}



function addRow()
{
	var rowCollection = document.getElementsByClassName("row");
	document.getElementById("bigartsquare").innerHTML = document.getElementById("bigartsquare").innerHTML + '<div class="row">' + rowCollection[0].innerHTML + '</div>' ;
}
function removeRow()
{ 
	var rowCollection = document.getElementsByClassName("row");
	 rowCollection[0].remove();
	
	
}
