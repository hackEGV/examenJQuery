var llamadas = 0;

function Telefono (datos) {
	this.numero = datos.numero;
	this.marca = datos.marca;
	this.color = datos.color;
}

Telefono.marcar = function() {
	++llamadas;
}

var telefono1 = new Telefono ({numero: "8261008788", marca: "LG", color: "negro"})
var telefono2 = new Telefono ({numero: "8261069503", marca: "Motorola", color: "rosa"})
var telefono3 = new Telefono ({numero: "8180205392", marca: "Nokia", color: "azul"})
var telefono4 = new Telefono ({numero: "8262615502", marca: "Motorola", color: "blanco"})
var telefono5 = new Telefono ({numero: "8262635991", marca: "Htc", color: "negro"})

var telefonos = [telefono1,telefono2,telefono3,telefono4,telefono5];

var brand = telefonos.filter(function(t){return t.marca == "Motorola"});

console.log(llamadas);
console.log (brand);
