
var penColour = 'black';
var isHeader = 0;
const emptyRow = '<div class="row"></div>';
const emptyColumn = '<div class="pixel" onclick="setPixelColour(this)"></div>';



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
	document.getElementById("bigartsquare").innerHTML = document.getElementById("bigartsquare").innerHTML + emptyRow ;
}
function removeRow()
{ 
	var rowCollection = document.getElementsByClassName("row");
	var count = rowCollection.length;
	 rowCollection[count-1].remove();
}

function addRowsAtLoad()
{
	var i,j;
	for (i=0; i<8; i++)
	{
		document.getElementById("bigartsquare").innerHTML = document.getElementById("bigartsquare").innerHTML +  emptyRow;
		var rowCollection = document.getElementsByClassName("row");
		for(j=0;j<8; j++)
		{
			rowCollection[i].innerHTML = rowCollection[i].innerHTML + emptyColumn;
		}
	}
	
}

function addColumn()
{
	var j;
	var rowCollection = document.getElementsByClassName("row");
	var count = rowCollection.length;
	document.getElementById("bigartsquare").innerHTML = document.getElementById("bigartsquare").innerHTML ;
	for(j=0;j<count; j++)
		{
			rowCollection[j].innerHTML = rowCollection[j].innerHTML + emptyColumn;
		}
}
function removeColumn()
{
	var rowCollection = document.getElementsByClassName("row");
	var rowCounter = rowCollection.length;
	var columnCollection = document.getElementsByClassName("pixel");
	var columnCounter = columnCollection.length;
	 
	
}





