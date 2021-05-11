function comprar() {

    let gansito = false;
    let chocobar = false;

    if (gansito === true ){
        alert ("toma tu gansito");
    }
     // || = ó / && = y
    if (chocobar === true && gansito !== true ){
        alert ("toma tu barra de chocorramo");
    }
    if (chocobar === false && gansito !== false){
        alert ("no hay ninguno"); 
    }
    
}