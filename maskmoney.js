/*! jQuery Mascara área
 * Copyright (c) 2017 Rodrigo Silva Rebouças */
///////////////////////////////////////////////
// onKeyup ="Formata(this);" /
///////////////////////////////////////////////
var recebe=[];
function Formata(campo,rec) {
	var tecla = event.keyCode;
	 if (tecla >= 48 && tecla <= 57 || tecla == 8 || tecla >= 96 && tecla <= 105){
		var vr = campo.value;
		if(vr != ''){
			//limpar o valor do campo para pegar apenas numeros
		    vr = vr.replace( " ", "" );
		    vr = vr.replace( "/", "" );
		    vr = vr.replace( ",", "" );
		    vr = vr.split('.').join('');
			//pega a quantidade de Numeros
		    tam = vr.length - 1;
			//Cria um vetor com cada numero
			var exp = vr.split("");
			//Variaveis de Controle
			var cont=0;
			var x;
			recebe[rec] ="";
			
			//comando de repetição do vetor para configurar os pontos e as virgulas.
			for(x=tam;x>=0;x--){
				cont = cont+1;
				if(cont == 3){
					recebe[rec] =","+recebe[rec];
				}else if(cont == 6){
					cont=3;
					recebe[rec] ="."+recebe[rec];
				}
				recebe[rec] = exp[x] + recebe[rec];
			}
			//atualiza o valor do campo
			campo.value = recebe[rec];
		}	
	}else{
		if(campo.value.length <= 1){
			recebe[rec] = "";
		}
		//caso digite um valor diferente de 0 a 9 ou backspace recebe o ultimo valor armazenado
		campo.value = recebe[rec];
	}
}	