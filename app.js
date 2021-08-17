// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// -----------------------DOLAR A YENES
const fromDollarToYen = function(valueInDolar){
    let valueInEuro = valueInDolar / 1.2;
    let valueInYenes = valueInEuro * 127.9;
    return valueInYenes;
}

// -----------------------DOLAR A YENES
const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;
}

//-------------------------PRUEBA
 const sum = (a,b) => {
    return a+b;
}




module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

