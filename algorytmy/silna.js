function silnia(n)
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
	
function silnia(n)
{
if(n>=0)
{
	if((n==0)||(n==1))
		{
		return 1;
		}
		else{
			return n*silnia(n-1);
		}
}	
	else {
		return "nej";
	}


}
