let maxNumber = prompt("máximo number")
let secretnumber = Math.floor(Math.random()*maxNumber)+1;
let usernumber = 0;
let cont = 1;
//let typecont= 'vez';
let maxIntentos = 4;
console.log(secretnumber);
while(usernumber != secretnumber){
    usernumber = parseInt(prompt(`Indica un número entre 1 y ${maxNumber}`));
    console.log(usernumber);
    if(usernumber == secretnumber){
        alert(`Acertaste, el número es: ${usernumber}. Lo lograstes en ${cont}  ${cont == 1 ? 'vez' : 'veces'}`); 
    } else{
        if(usernumber > secretnumber){
            alert("El número es menor");
        } else{
            alert("El número es mayor");
        }
        cont = cont + 1;
        //typecont = ' veces';
        if(cont >  maxIntentos){
            alert(`Llegaste al máximo número de intentos ${maxIntentos}. El número era: ${secretnumber}`);
            break;
        }
    /*  alert("El número era " + secretnumber + ",  elegistes " + usernumber); */
    }
}



/* 
Descuento airline
let porcentajeDescuento = 0;
cantidadMillas=2000;
if (cantidadMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
    console.log(porcentajeDescuento);
} else {
    if(cantidadMillas >5000){
        porcentajeDescuento=porcentajeDescuento+10;
        console.log(porcentajeDescuento);
    }
}  
 */

 
//first challengue
/* alert("Bienvendido");
let  nombre = "luna";
let edad = 25
let numeroventas = 50
let saldo = 1000
let mensajeDeError="!Error!";
//alert("!Error!Completa todos los campos");
//alert(mensajeDeError);
let username=prompt("Cuál es tu nombre?");
let name = username;
console.log(name);
let edaduser = prompt("Cuál es tu edad");
let edad2=edaduser;

if(edad2>=18){
    alert("you can drive");
}else{
    alert("you are too young to drive");
} */

//second challengue
/* let userreponse= prompt("¿Qué día es hoy?")
if(userreponse = "satuday" || "sunday"){
    alert("¡Buen fin de semana!")
}else{
    alert("Es : " + userreponse )
}
 */
/* let usernum = prompt("ingrese un número");

if(usernum > 0 ) {
    alert("Escribistes un número positivo " + "y es: "+ usernum);
}else{
    alert("Escribistes un número negativo " + "y es: "+ usernum);
}
 */

/* let score = 50;
if(score==100){
    alert("You win");
}else{
    alert("Intenta nuevamente");
}

let userbalance= 10000;
let usname = prompt("ingrese su nombre");
alert(`Su saldo es ${userbalance}  estimado  ${usname}`);
 */

//challengue 3

/* let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    suma += numero;
    contador--;
}

let promedio = suma / qtdNumeros;

console.log(promedio); */

/* let contador = 10;
while(contador > 0){
    contador--;
    alert(contador);
} */

/* let numero1 = prompt("Ingrese el número de cuenta regresiva");
let cont1 = numero1;
while(cont1 >= 0){
    console.log(cont1);
    cont1--;
}

 let numero = prompt("Ingrese el número de cuenta progresiva");
let cont2 = 0;
while(cont2 <= numero ){
    console.log(cont2);
    cont2++;
} 
  */

//challengue 4
//####################################################
/* console.log("Bienvenido estimado ");

let name = 'Abdiel';
console.log(`!Hola¡ ${name}`);

alert("!Hola¡"+ name)

let bestanswer= prompt("Cuál es el mejor lenguajes de programación");
console.log(bestanswer);

valor1 = 2;
valor2 = 5;
resultado = valor1 + valor2;
console.log(`El suma de los valores es ` + resultado);

let useredad = parseInt(prompt("Ingrese su edad"));
if(useredad > 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}


let numberrandom= prompt("Ingrese un número en el rango de -10 a 10");
if(numberrandom > 0){
    alert("Escogistes un número positivo");
}else{
    if(numberrandom == 0){
        alert("Escogistes " +numberrandom);
    }else{
        alert("Escogistes un número negativo");
    }
}

let number= 10;
aument=1;
while(aument <= number){
    console.log(aument);

    aument++;
}

let nota = 15;
if(nota >13){
 console.log("Aprobado");
}else{
 console.log("Desaprobado");
}

let nramdo = Math.floor(Math.random()*5);
console.log(nramdo);
let nramd2 = Math.floor(Math.random()*10);
console.log(nramd2)+1;
let nfullrando = Math.floor(Math.random()*1000)+1;
console.log(nfullrando); */
//####################################################