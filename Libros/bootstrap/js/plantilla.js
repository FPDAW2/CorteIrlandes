/** Funcion que sirve para esconder o expandir el texto */
function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none";    
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
    }
    }
    
    let comprar = document.getElementsByClassName("comprar");

/** ESTO NO SE QUE ES :(  */

    for ( b of comprar)
    b.onclick = f
    
    function f(){
        this.innerHTML =  "articulo añadido a la cesta";
        
    }

/** Imágenes pequeñas */

var MainImg = document.getElementById("flibros");
        var smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick = function () {
            MainImg.src = smallimg[0].src;
        }

        smallimg[1].onclick = function () {
            MainImg.src = smallimg[1].src;
        }

        smallimg[2].onclick = function () {
            MainImg.src = smallimg[2].src;
        }

        smallimg[3].onclick = function () {
            MainImg.src = smallimg[3].src;
        }