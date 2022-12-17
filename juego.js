var monedas = 0;
var inventario = [0,0,0,0];
var monedasProduce = [1,4,10,30];
var precioProducto = [100,1500,10000,100000];



function clic(){
	monedas++;
}
function comprar(objeto){
	if(monedas >= precioProducto[objeto]){
		inventario[objeto]++;
		monedas -= precioProducto[objeto];

	}
	else{
		console.log("NO TIENES SUFICIENTE DINERO");
	}

}

function producir(){
	for(contador=0; contador<inventario.length; contador++){
		monedas += inventario[contador] * monedasProduce[contador];
	}

}
function render(){
	document.getElementById("contador").innerHTML = monedas;
	document.getElementById("inventario").innerHTML = 
		`Chalanes: ${inventario[0]}<br>
		 Maestros: ${inventario[1]}<br>
		 Revolvedoras: ${inventario[2]}<br>
		 Camionetas: ${inventario[3]}
		`;
}

//--------------------------------
var FPSProducer = 1;

setInterval(function(){
	producir();
	
},1000/FPSProducer);

var FPS = 30;

setInterval(function(){
	
	render();
},1000/FPS);