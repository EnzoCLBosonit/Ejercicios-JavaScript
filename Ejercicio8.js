/*Ejercicio 8
Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado 
(esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB
 
const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB
 
const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB
 */
const fromBytesToFormattedSizeUnits = (number,decimals=3) => {
    if ((Math.floor(number).toString().length)<4){
        return number.toPrecision(decimals)+' B'

    } else if (Math.floor(number).toString().length<7){
        return (number/1000).toPrecision(decimals)+' KB'

    } else if (Math.floor(number).toString().length<10){
        return (number/1000000).toPrecision(decimals)+'MB'

    } else if (Math.floor(number).toString().length<13){
        return (number/1000000000).toPrecision(decimals)+' GB'
    } 
}

console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5));

