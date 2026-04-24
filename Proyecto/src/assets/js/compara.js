window.addEventListener("load", function(){
    let boton1 = document.getElementById("boton1");
   boton1.addEventListener("click", onClick);

});


function onClick(){
    let resp = document.getElementById("resultado");
    let num = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let num3 = parseInt(document.getElementById("numero3").value);

    if(isNaN(num) || isNaN(num2) || isNaN(num3)){
        resp.innerText = "Pongale el numero no sea mamon, por eso no lo quieren en su casa";
        resp.className= "colorRojo";
    }
    else{
        resp.innerText = "El mayor es: " + Math.max(num,num2,num3);
        resp.className= "colorVerde";
        if(num == num2 && num == num3){
            resp.innerText = "Los tres numeros son iguales, no se haga pendejo";
            resp.className= "colorRojo";
        }
        else if(num == num2 || num == num3 || num2 == num3){
            resp.innerText = "Dos numeros son iguales, no se haga pendejo"+ " "  + "Pero el mayor es" + " " + Math.max(num,num2,num3);
            resp.className= "colorRojo";
        }
    }
}