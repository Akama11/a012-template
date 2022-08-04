//if e if/else (se/senão)
/* const bool1= false
const bool2= true
const bool3= true */
/* if(bool1) {
    alert('entrei no if, pois sou true')
} else {
    alert('entrei no else, pois sou false')
} */

//o else não é obrigatório estar ao lado das chaves {
// pode ser da seguinte forma 
//}if(bool1) {
   // alert('entrei no if, pois sou true')
//} 
//else
 //{
    //alert('entrei no else, pois sou false')
//}

/* if (bool1 === bool2) {
    alert("1 e 2 são iguais")
} else if (bool2 === bool3) {
    alert("2 e 3 sao iguais")

} else if (bool1 === bool3) {
    alert("1 e 3 são iguais")
} else {
    alert("não há valores iguais!")
} */
// se nenhuma das verificações forem atendidas, o else é executado
// no else if só serão impressas caso a verificação seja verdadeira 

/* const idade= 16

if(idade >= 60 || (idade >= 16 && idade < 18)) {
    alert("voto facultativo")
} else if(idade >= 18){
    alert("deve emitir o título")
} else {
    alert("não pode emitir o título")
} */

const media= 4

if(media >= 5){
    alert(" se media é maior ou igual a 5 ,você foi aprovada!")
} else if (media >= 3) {
    alert(" senão/se media for maior ou igual a 3, você está de recuperação!")
} else if(media <= 3) {
    alert( "senão for nenhuma das opçõe acima, você foi reprovada!")
} else{
    alert("dado inválido!")
} 
