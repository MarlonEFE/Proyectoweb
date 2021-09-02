// JavaScript Document

window.addEventListener('load',function(){
			
		var imagen=[];
			
				imagen[0]="../Imagenes/banner1.jpg";
				imagen[1]="../Imagenes/banner2.jpg";
				imagen[2]="../Imagenes/banner3.jpg";
				imagen[3]="../Imagenes/banner4.jpg";
		
		var contador = 0;
	
		var botonImagen=[];
			
				botonImagen[0]="Factores.html";
				botonImagen[1]="Riovida.html";
				botonImagen[2]="Productos.html";
				botonImagen[3]="Contacto.html";
				
	
		var botonTexto=[];
			
				botonTexto[0]="4LIFE TRANSFER FACTOR";
				botonTexto[1]="RIOVIDA RENUVO";
				botonTexto[2]="TODOS LOS PRODUCTOS";
				botonTexto[3]="CONTACTANOS";
				
	var atras = document.querySelector(".icono-izquierda");
	var adelante = document.querySelector(".icono-derecha");
	
	var boton1 = document.querySelector(".boton1");
	var boton2 = document.querySelector(".boton2");
	var boton3 = document.querySelector(".boton3");
	var boton4 = document.querySelector(".boton4");
	
	var baner=document.querySelector(".baner");
	var botonCentro = document.querySelector(".botonCentro");
	
	
	atras.addEventListener('click',function(){
		if(contador>0)contador--;
		else contador=3;
				baner.src=imagen[contador];
				botonCentro.href=botonImagen[contador];
				botonCentro.innerHTML=botonTexto[contador];
		
		boton1.classList.remove("circuloClick");
		boton2.classList.remove("circuloClick");
		boton3.classList.remove("circuloClick");
		boton4.classList.remove("circuloClick");
	});
	
	adelante.addEventListener('click',function(){
		if(contador<3)contador++;
		else contador=0;
				baner.src=imagen[contador];
				botonCentro.href=botonImagen[contador];
				botonCentro.innerHTML=botonTexto[contador];
		
		boton1.classList.remove("circuloClick");
		boton2.classList.remove("circuloClick");
		boton3.classList.remove("circuloClick");
		boton4.classList.remove("circuloClick");
	});
	
	
	
	boton1.addEventListener('click', function(){
		boton4.classList.remove("circuloClick");
		boton3.classList.remove("circuloClick");
		boton2.classList.remove("circuloClick");
		boton1.classList.add("circuloClick");
		baner.src=imagen[0];
		botonCentro.href=botonImagen[0];
		botonCentro.innerHTML=botonTexto[0];
		contador=0;
	});
	
	boton2.addEventListener('click', function(){
		boton1.classList.remove("circuloClick");
		boton3.classList.remove("circuloClick");
		boton4.classList.remove("circuloClick");
		boton2.classList.add("circuloClick");
		baner.src=imagen[1];
		botonCentro.href=botonImagen[1];
		botonCentro.innerHTML=botonTexto[1];
		contador=1;
	});
	
	boton3.addEventListener('click', function(){
		boton1.classList.remove("circuloClick");
		boton2.classList.remove("circuloClick");
		boton4.classList.remove("circuloClick");
		boton3.classList.add("circuloClick");
		baner.src=imagen[2];
		botonCentro.href=botonImagen[2];
		botonCentro.innerHTML=botonTexto[2];
		contador=2;
	});
	
	boton4.addEventListener('click', function(){
		boton1.classList.remove("circuloClick");
		boton2.classList.remove("circuloClick");
		boton3.classList.remove("circuloClick");
		boton4.classList.add("circuloClick");
		baner.src=imagen[3];
		botonCentro.href=botonImagen[3];
		botonCentro.innerHTML=botonTexto[3];
		contador=3;
	});
	
});




var todos = document.getElementById("Todos");
var principales = document.getElementById("Principales");
var nutricional = document.getElementById("Nutricional");
var cuidado = document.getElementById("Cuidado");
var bienestar = document.getElementById("Bienestar");
var paquetes = document.getElementById("Paquetes");
var otros = document.getElementById("Otros");

var botonTodos = document.getElementById("Btn-Todos");
var botonPrincipales = document.getElementById("Btn-Principales");
var botonNutricionales = document.getElementById("Btn-Nutricional");
var botonCuidado = document.getElementById("Btn-Cuidado");
var botonBienestar = document.getElementById("Btn-Bienestar");
var botonPaquetes = document.getElementById("Btn-Paquetes");
var botonOtros = document.getElementById("Btn-Otros");


botonTodos.addEventListener("click",function(){
		principales.classList.remove("mostrarProductos");
		nutricional.classList.remove("mostrarProductos");
		cuidado.classList.remove("mostrarProductos");
		bienestar.classList.remove("mostrarProductos");
		paquetes.classList.remove("mostrarProductos");
		todos.classList.add("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.remove("btn-click");
		botonNutricionales.classList.remove("btn-click");
		botonCuidado.classList.remove("btn-click");
		botonBienestar.classList.remove("btn-click");
		botonPaquetes.classList.remove("btn-click");
		botonTodos.classList.add("btn-click");
		botonOtros.classList.remove("btn-click");
		});

botonPrincipales.addEventListener("click",function(){
		todos.classList.remove("mostrarProductos");
		cuidado.classList.remove("mostrarProductos");
		bienestar.classList.remove("mostrarProductos");
		paquetes.classList.remove("mostrarProductos");
		nutricional.classList.remove("mostrarProductos");
		principales.classList.add("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.add("btn-click");
		botonNutricionales.classList.remove("btn-click");
		botonCuidado.classList.remove("btn-click");
		botonBienestar.classList.remove("btn-click");
		botonPaquetes.classList.remove("btn-click");
		botonTodos.classList.remove("btn-click");
		botonOtros.classList.remove("btn-click");
		});

botonNutricionales.addEventListener("click",function(){
		todos.classList.remove("mostrarProductos");
		principales.classList.remove("mostrarProductos");
		cuidado.classList.remove("mostrarProductos");
		bienestar.classList.remove("mostrarProductos");
		paquetes.classList.remove("mostrarProductos");
		nutricional.classList.add("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.remove("btn-click");
		botonNutricionales.classList.add("btn-click");
		botonCuidado.classList.remove("btn-click");
		botonBienestar.classList.remove("btn-click");
		botonPaquetes.classList.remove("btn-click");
		botonTodos.classList.remove("btn-click");
		botonOtros.classList.remove("btn-click");
		});

botonCuidado.addEventListener("click",function(){
		todos.classList.remove("mostrarProductos");
		principales.classList.remove("mostrarProductos");
		nutricional.classList.remove("mostrarProductos");
		bienestar.classList.remove("mostrarProductos");
		paquetes.classList.remove("mostrarProductos");
		cuidado.classList.add("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.remove("btn-click");
		botonNutricionales.classList.remove("btn-click");
		botonCuidado.classList.add("btn-click");
		botonBienestar.classList.remove("btn-click");
		botonPaquetes.classList.remove("btn-click");
		botonTodos.classList.remove("btn-click");
		botonOtros.classList.remove("btn-click");
		});

botonBienestar.addEventListener("click",function(){
		todos.classList.remove("mostrarProductos");
		principales.classList.remove("mostrarProductos");
		cuidado.classList.remove("mostrarProductos");
		nutricional.classList.remove("mostrarProductos");
		paquetes.classList.remove("mostrarProductos");
		bienestar.classList.add("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.remove("btn-click");
		botonNutricionales.classList.remove("btn-click");
		botonCuidado.classList.remove("btn-click");
		botonBienestar.classList.add("btn-click");
		botonPaquetes.classList.remove("btn-click");
		botonTodos.classList.remove("btn-click");
		botonOtros.classList.remove("btn-click");
		});

botonPaquetes.addEventListener("click",function(){
		todos.classList.remove("mostrarProductos");
		principales.classList.remove("mostrarProductos");
		cuidado.classList.remove("mostrarProductos");
		bienestar.classList.remove("mostrarProductos");
		nutricional.classList.remove("mostrarProductos");
		paquetes.classList.add("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.remove("btn-click");
		botonNutricionales.classList.remove("btn-click");
		botonCuidado.classList.remove("btn-click");
		botonBienestar.classList.remove("btn-click");
		botonPaquetes.classList.add("btn-click");
		botonTodos.classList.remove("btn-click");
		botonOtros.classList.remove("btn-click");
		});

botonTodos.addEventListener("click",function(){
		principales.classList.remove("mostrarProductos");
		nutricional.classList.remove("mostrarProductos");
		cuidado.classList.remove("mostrarProductos");
		bienestar.classList.remove("mostrarProductos");
		paquetes.classList.remove("mostrarProductos");
		todos.classList.add("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.remove("btn-click");
		botonNutricionales.classList.remove("btn-click");
		botonCuidado.classList.remove("btn-click");
		botonBienestar.classList.remove("btn-click");
		botonPaquetes.classList.remove("btn-click");
		botonTodos.classList.add("btn-click");
		botonOtros.classList.remove("btn-click");
		});

botonOtros.addEventListener("click",function(){
		principales.classList.remove("mostrarProductos");
		nutricional.classList.remove("mostrarProductos");
		cuidado.classList.remove("mostrarProductos");
		bienestar.classList.remove("mostrarProductos");
		paquetes.classList.remove("mostrarProductos");
		todos.classList.remove("mostrarProductos");
		otros.classList.remove("mostrarProductos");
	
		botonPrincipales.classList.remove("btn-click");
		botonNutricionales.classList.remove("btn-click");
		botonCuidado.classList.remove("btn-click");
		botonBienestar.classList.remove("btn-click");
		botonPaquetes.classList.remove("btn-click");
		botonTodos.classList.remove("btn-click");
		botonOtros.classList.add("btn-click");
		});



function validar() {

var campo1=document.querySelector(".field1").value;
  if (campo1.length == 0) {
    alert('Ingrese Nombre');return false;
  }
	
	var campo2 = document.querySelector(".field2").value;
 if(campo2.length == 0){
     alert('Ingrese un correo electronico');return false;
 }
	
	var campo3 = document.querySelector(".field3").value;
 if(campo3.length == 0){
     alert('Ingrese un asunto');return false;
 }
	
	var mensaje = document.querySelector(".mensaje").value;
 if(mensaje.length < 10){
     alert('El mensaje debe contener al menos 10 caracteres');return false;
 }
	
	return true;
}


