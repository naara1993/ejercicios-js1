const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const cadena = document.getElementById('nombreCompleto').value;
    let cadenaSegunda =  cadena.replace(/ /g,"");
    console.log(cadenaSegunda);
    document.getElementById('resultado').value=cadenaSegunda.length;
    document.getElementById('nombreCompleto').value="";
})
const btnRes= document.getElementById('btnResultado');
btnRes.addEventListener('click', () => {
const numero = document.getElementById('numeroPrimo').value;
let boolean = true;
    console.log(numero);
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            boolean = false;
        } 
    else if(numero==1){
        console.log(" el numero 1 no es primo ");
    }
}
if(boolean==false || numero ==1){
document.getElementById('resultadoPrimo').value=" no es un numero primo";
}else if(boolean == true){
document.getElementById('resultadoPrimo').value=" si es un numero primo";
}
})


