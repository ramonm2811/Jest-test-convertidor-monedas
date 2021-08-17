// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// -----------------------DOLAR A YENES
const fromDollarToYen = function(valueInDolar){
    let valueInYenes = valueInDolar * 109;
    return valueInYenes;
}

// -----------------------DOLAR A YENES
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0066;
    return valueInPound;
}

//-------------------------PRUEBA
 const sum = (a,b) => {
    return a+b;
}




module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

