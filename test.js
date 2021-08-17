const { TestWatcher } = require('jest');
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// -----------------------EURO A DOLARES
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

// -----------------------DOLAR A YENES
test("One dollar equal to 109 yenes", function(){   
    const { fromDollarToYen } = require('./app.js') 
    expect(fromDollarToYen(3.5)).toBe(381.5); 
});

// -----------------------YENES A LIBRAS
test("One yene equal to 0,0066 Pounds", function(){   
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(6.6); 
});