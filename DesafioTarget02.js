const numero = 4;
const fibonacci = [0,1]

while(numero > (fibonacci[fibonacci.length - 1])){
    let novoNumero = (fibonacci[fibonacci.length - 1]) + (fibonacci[fibonacci.length - 2])
    console.log(fibonacci[fibonacci.length - 2])
    console.log(fibonacci[fibonacci.length - 1] + "...")
    console.log(`novo number ${novoNumero}`)
    fibonacci.push(novoNumero)
    console.log(fibonacci)
}

if(numero in fibonacci){
    console.log('O número pertence a sequência')
}else{
    console.log('O número não pertence a sequência')
}