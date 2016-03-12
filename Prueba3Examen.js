function copiarArreglo (arreglo){
	var arr = [];
	for(var i=0; i<arreglo.length ;i++)
	{
		arr[i] = arreglo[i]
	} 
	console.log(arr);
	return arr;
}

copiarArreglo([1,2,3,4,5,6])
