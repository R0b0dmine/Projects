function oblicz1(){
var y,text,silnia;

y = document.getElementById("liczba1").value;
silnia=silnia1(y);
text= "silnia liczby "+y+" wynosi: "+silnia;
document.getElementById("wynik1").innerHTML=text;


}
function oblicz2(){
var u,text,silnia;

u = document.getElementById("liczba2").value;
fib=fibbonaci(u);
text= " liczba fibonnaciego "+u+" wynosi: "+fib;
document.getElementById("wynik2").innerHTML= document.getElementById("wynik2").innerHTML + "</br>"+text;

}

function silnia1(n)
{
var k;
var licznik = 0;
	if(n>=0){
		k=1;
		for(licznik=1;licznik<=n;licznik++)
		{
		k=k*licznik;
		}
	return k;
}
return "impossible";
}
	
function silnia2(n)
{
if(n>=0)
{
	if((n==0)||(n==1))
		{
		return 1;
		}
		else{
			return n*silnia1(n-1);
		}
}	
	else {
		return "nej";
	}


}






function fibbonaci(num){
var a=1,b=0,temp;
	
	while(num>=0){
		temp=a;
		a=a+b;
		b=temp;
		num--;	
		document.getElementById("wynik2").innerHTML=document.getElementById("wynik2").innerHTML+"</br>"+b;
	}
	return b;
}




