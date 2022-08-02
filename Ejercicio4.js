/*Ejercicio 4
Dado tres arrays de números, sacar en un nuevo array la intersección de estos. */
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

/**
 * 
 * @param {number} n Numero de arrays que se van a comparar.
 * @param  {array} arr Arrays que se quieren comparar.
 * @returns Devuelve un array con los elementos en comun de los arrays comparados.
 * 
 * Esta funcion solo es valida para comparar arrays que no tienen elementos repetidos en si mismos ya que podria arrojar 
 * resultados erroneos
 * 
 */
const arrayIntersection = (n,...arr) => {
    const fusionArray =[].concat(...arr)
    const newArray = []
    for (let i=0; i<fusionArray.length; i++){
        let counter = 0
        for (let j=0; j<fusionArray.length; j++){
            if(fusionArray[i]==fusionArray[j])
            counter++
            if(counter==n && newArray.indexOf(fusionArray[i])==-1){
                newArray.push(fusionArray[i])
            }
        }
    }
    return newArray
}

console.log((arrayIntersection(3,arrNumber1,arrNumber2,arrNumber3)))


//Otra forma de resolver el problema con una funcion menos general pero que soluciona 
//el problema de que haya elementos repetidos en el mismo array.
const arrayIntersection2 = (arr1,arr2,arr3) =>{
    let newArray2=[]
    for (let item1 of arr1){
        for (let item2 of arr2){
            for (let item3 of arr3){
                if (item1 == item2 && item2 == item3 && newArray2.indexOf(item1)==-1)
                newArray2.push(item1)
            }
        }
    }
    return newArray2
}

console.log('Otro metodo:',arrayIntersection2(arrNumber1,arrNumber2,arrNumber3))
