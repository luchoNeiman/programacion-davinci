let num1;
let num2;
let num3;

num1 = parseInt(prompt("Ingrese un numero:"));
num2 = parseInt(prompt("Ingrese otro numero:"));
num3 = parseInt(prompt("Ingrese otro numero:"));

masChico(num1,num2, num3);



function masChico(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return null;
    } else if (num1 > num2 && num1 > num3 && num2 < num3) {
        return num2;
    } else if (num2 > num1 && num2 > num3 && num3 < num1){
        return num3;
    } else{
        return num2;
    }
}