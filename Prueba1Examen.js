function sumaArreglo (arreglo){
	var suma = 0;
	for(var i=0; i<arreglo.length ;i++)
	{
		if(typeof(arreglo[i]) == 'number') {
			suma += arreglo[i];
		}
	} 
	console.log(suma);
	}
var arr = [1,2,3,4,5,6];
sumaArreglo(arr);