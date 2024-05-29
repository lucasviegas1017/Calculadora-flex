var etanol,gasolina;
//Aqui, duas variáveis globais (etanol e gasolina) são declaradas. Essas variáveis serão usadas para armazenar os valores dos preços do etanol e da gasolina, respectivamente.

function calcular(){
	etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
	gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    /* frmFlex.txtEtanol.value e frmFlex.txtGasolina.value são presumivelmente campos de entrada (provavelmente em um formulário) onde o usuário insere os preços do etanol e da gasolina. 
    */
    /*replace(",",".") é usado para substituir a vírgula por um ponto, convertendo o formato de número europeu (que usa vírgula como separador decimal) para o formato anglo-saxão (que usa ponto).
parseFloat converte essas strings em números de ponto flutuante.*/ 
	if (etanol < 0.7 * gasolina){
		document.getElementById("status").src="img/etanol.png";
	}else{
		document.getElementById("status").src="img/gasolina.png";
	}
}
/*Compara se o preço do etanol é menor que 70% do preço da gasolina (etanol < 0.7 * gasolina).
Se a condição for verdadeira, altera a imagem no elemento com o ID status para img/etanol.png.
Se a condição for falsa, altera a imagem no elemento com o ID status para img/gasolina.png.
 */

function resetar(){
	document.getElementById("status").src="img/neutro.png";
}
/*A função resetar simplesmente redefine a imagem de status para uma imagem neutra (img/neutro.png). Isso é feito alterando o atributo src do elemento com o ID status.
 */
