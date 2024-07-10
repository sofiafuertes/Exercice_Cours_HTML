// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
let tab1 = [4,7,5,5,6];
console.log("Biggest position:")
function biggestPosition(tab1){
    let max = tab1[0];
    let position;
    for(let i=0 ; i<tab1.length ; i++){
        if(max < tab1[i]){
            position=i;
            max = tab1[i];
        }else{
            max = max;
        }
    }
    return position;
}
console.log(biggestPosition(tab1));
// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sumAll(tab1){
    let sum = tab1[0];
    for(let i=1 ; i<tab1.length ; i++){
        sum += tab1[i];
    }
    return sum;
}
console.log(sumAll(tab1))
// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
let tab2 =[2,65,-6,5,32,-8]
let sum2=0;
function sumPositives(tab2){
    for(let i=0; i<tab2.length; i++){
        if(tab2[i]>0){
            sum2 +=tab2[i];
        }
    }
    return sum2;
}
console.log(sumPositives(tab2));
// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
let sum3=0;
function sumNegatives(tab2){
    for(let i=0; i<tab2.length; i++){
        if(tab2[i]<0){
            sum3 +=tab2[i];
        }
    }
    return sum3;
}
console.log(sumNegatives(tab2));