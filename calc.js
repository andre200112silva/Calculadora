function calcular () {
    if (vetor2.length > 0 ) {
        count2 += 1
        if (count2 > 1) {
            if (type == '/') {
                vetor.pop()
                vetor.join()
                console.log(resultado)
                console.log(Number(vetor2.join('')))
                if (resultado == 0 && Number(vetor2.join('') == 0)) {
                    document.getElementById('result').innerHTML = 0
                    document.getElementById('rfe').innerHTML = "Calculo :" +  0 + '/' + 0
                    resultado = 0
                } else {
                    document.getElementById('result').innerHTML = resultado
                    document.getElementById('rfe').innerHTML = "Calculo :" +  (resultado * Number(vetor2.join('')))  + "/" + Number(vetor2.join(''))
                }
            }
            if (type == '+') {
                vetor.pop()
                vetor.join()
                resultado += Number(vetor.join('')) + Number(vetor2.join(''))
                document.getElementById('result').innerHTML = resultado
                document.getElementById('rfe').innerHTML = "Calculo :" + (resultado - Number(vetor2.join('')))  + "+" + Number(vetor2.join(''))
            } 
            if (type == 'x') {
                vetor.pop()
                vetor.join()
                resultado = resultado * Number(vetor2.join(''))
                document.getElementById('result').innerHTML = resultado
                document.getElementById('rfe').innerHTML = "Calculo :" + (resultado / Number(vetor2.join(''))) + "x" + Number(vetor2.join(''))
            }
            if (type == '-') {
                vetor.pop()
                vetor.join()
                resultado = resultado - Number(vetor2.join(''))
                document.getElementById('result').innerHTML = resultado
                document.getElementById('rfe').innerHTML = "Calculo :" + (resultado + Number(vetor2.join(''))) + "-" + Number(vetor2.join(''))
            }
            
        }
        if (count2 <= 1) {
            if (type == '/') {
                vetor.pop()
                vetor.join()
                resultado += Number(vetor.join('')) / Number(vetor2.join(''))
                if (Number(vetor.join('')) == 0 && Number(vetor2.join('')) == 0) {
                    document.getElementById('result').innerHTML = 0
                    document.getElementById('rfe').innerHTML = "Calculo :" + 0 + '/' + 0
                    resultado = 0
                } else {
                    document.getElementById('result').innerHTML = resultado
                    document.getElementById('rfe').innerHTML = "Calculo :" + Number(vetor.join('')) + "/" + Number(vetor2.join(''))
                }
                
            }
            if (type == '+') {
                vetor.pop()
                vetor.join()
                resultado += Number(vetor.join('')) + Number(vetor2.join(''))
                document.getElementById('result').innerHTML = resultado
                document.getElementById('rfe').innerHTML = "Calculo :" + Number(vetor.join('')) + "+" + Number(vetor2.join(''))
            } 
            if (type == 'x') {
                vetor.pop()
                vetor.join()
                resultado = Number(vetor.join('')) * Number(vetor2.join(''))
                document.getElementById('result').innerHTML = resultado
                document.getElementById('rfe').innerHTML = "Calculo :" +  Number(vetor.join(''))  + "x" + Number(vetor2.join(''))
            } 
            if (type == '-') {
                vetor.pop()
                vetor.join()
                resultado = Number(vetor.join('')) - Number(vetor2.join(''))
                document.getElementById('result').innerHTML = resultado
                document.getElementById('rfe').innerHTML = "Calculo :" + Number(vetor.join(''))  + "-" + Number(vetor2.join(''))
            }
        }
        
        type = ''
        count= 0
        vetor2 = []
        vetor= []
    } 
}
 
function reset () {
    document.getElementById('result').innerHTML = "0";
    document.getElementsByTagName('p')[1].innerHTML = "Calculo:"
    firstClick = 0;
    type = ''
    vetor = []
    vetor2 = []
    count = 0
    count2 = 0
    resultado = 0
    test = false
    count2 = 0
}

function apagar() {
    if (vetor.length == 0 && vetor2.length == 0 && resultado != 0) {
        resultado = String(resultado)
        resultado = resultado.substring(0, resultado.length-1)
        document.getElementById('result').innerHTML = resultado;
        if (resultado.length == 0) {
            document.getElementById('result').innerHTML = "0";
        }
    } else {
        if (vetor2.length == 0) {
            vetor.pop()
            count = 0
            document.getElementById("result").innerHTML = vetor.join('')
        } else {
           vetor2.pop()
            document.getElementById("result").innerHTML = vetor.join('') + vetor2.join('')}
        
        if (vetor.length == 0) {
            document.getElementById('result').innerHTML = "0";
            firstClick = 0
        }
    }
    resultado = Number(resultado)
}

