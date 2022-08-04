/*Ejercicio 9
Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }*/

const myObject = { NamE: 'Charles', ADDress: 'Home Street' }

function toLowercaseKeys(obj){
    let keysToLowercase =Object.keys(obj).map(x=>x.toLowerCase())
    let values = Object.values(obj)
    myObjLowercase={}
    keysToLowercase.forEach((item, idx)=>{
        myObjLowercase[item]=values[idx]
    })
    return myObjLowercase
}
console.log(toLowercaseKeys(myObject));

 