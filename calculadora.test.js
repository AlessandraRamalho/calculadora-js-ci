const {somar} = require('./calculadora')

describe('Teste da função somar', ()=> {
    test('Somar dois números inteiros positivos', () => {
        expect(somar(2, 3)).toBe(5)
        expect(somar(1, 0)).toBe(1)
        
    });

    test('deveria somar dois numeros inteiros negativos',  () => {
        expect(somar(-1, -1)).toBe(-2);
    })
});


//expect(somar(2.5, 2.25)).toBe(4.75);

//expect(somar(10, 0)).toBe(10);
