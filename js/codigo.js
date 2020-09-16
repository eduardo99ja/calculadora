/*=============================================
Onjeto con las propiedades de la calculadora
=============================================*/

var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	cantidadSignos: 0,
	cantidadDecimal: false,
	resultado: false


}

/*=============================================
Onjeto con los metodos de la calculadora
=============================================*/

var m = {
	inicio: function() {
		for (var i = 0; i < p.teclas.length; i++) {
			p.teclas[i].addEventListener("click", m.oprimirTecla)
		}
	},
	teclado: function(){
		document.addEventListener("keydown", m.oprimir);

	},
	oprimir: function(tecla){
		console.log(tecla.keyCode)

		if(tecla.keyCode == 48 || tecla.keyCode ==96){
			p.accion ="numero";
			p.digito = 0;
		}
		if(tecla.keyCode == 49 || tecla.keyCode ==97){
			p.accion ="numero";
			p.digito = 1;
		}
		if(tecla.keyCode == 50 || tecla.keyCode ==98){
			p.accion ="numero";
			p.digito = 2;
		}
		if(tecla.keyCode == 51 || tecla.keyCode ==99){
			p.accion ="numero";
			p.digito = 3;
		}
		if(tecla.keyCode == 52 || tecla.keyCode ==100){
			p.accion ="numero";
			p.digito = 4;
		}
		if(tecla.keyCode == 53 || tecla.keyCode ==101){
			p.accion ="numero";
			p.digito = 5;
		}
		if(tecla.keyCode == 54 || tecla.keyCode ==102){
			p.accion ="numero";
			p.digito = 6;
		}
		if(tecla.keyCode == 55 || tecla.keyCode ==103){
			p.accion ="numero";
			p.digito = 7;
		}
		if(tecla.keyCode == 56 || tecla.keyCode ==104){
			p.accion ="numero";
			p.digito = 8;
		}
		if(tecla.keyCode == 57 || tecla.keyCode ==105){
			p.accion ="numero";
			p.digito = 9;
		}
		if(tecla.keyCode == 187 || tecla.keyCode ==107){
			p.accion ="signo";
			p.digito = "+";
		}
		if(tecla.keyCode == 189 || tecla.keyCode ==109){
			p.accion ="signo";
			p.digito = "-";
		}
		if(tecla.keyCode == 88 || tecla.keyCode ==106){
			p.accion ="signo";
			p.digito = "*";
		}
		if(tecla.keyCode == 111){
			p.accion ="signo";
			p.digito = "/";
		}
		if(tecla.keyCode == 190 || tecla.keyCode ==110){
			p.accion ="decimal";
			p.digito = ".";
		}
		if(tecla.keyCode == 13){
			p.accion ="igual";
			
		}
		if(tecla.keyCode == 8){
			m.borrarCalculadora();
			
		}
		m.calculadora(p.accion,p.digito);
	},
	oprimirTecla: function(event) {
		p.accion = event.target.getAttribute("class");
		p.digito = event.target.innerHTML;

		m.calculadora(p.accion, p.digito);
	},
	calculadora: function(accion, digito) {
		switch (accion) {
			case "numero":
				p.cantidadSignos = 0;
				if (p.operaciones.innerHTML == 0) {
					p.operaciones.innerHTML = digito;
				} else {
					if (p.resultado) {
						p.operaciones.innerHTML = digito;
						p.resultado = false;
					} else {
						p.operaciones.innerHTML += digito;
					}

				}

				break;
			case "signo":
				p.cantidadSignos++
					if (p.cantidadSignos == 1) {

						if (p.operaciones.innerHTML == 0) {
							p.operaciones.innerHTML = 0;
						} else {
							p.operaciones.innerHTML += digito;
							p.cantidadDecimal = false;
							p.resultado = false;
						}

					}

				break;
			case "decimal":
				if (!p.cantidadDecimal) {
					p.operaciones.innerHTML += digito;
					p.cantidadDecimal = true;
					p.resultado = false;
				}

				break;
			case "igual":

				p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
				p.resultado = true;
				break;

		}

	},
	borrarCalculadora: function() {
		p.operaciones.innerHTML = 0;
	}
}



m.inicio();
m.teclado();


