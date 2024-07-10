// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let tab1=[23,56,200,45,5,23,60];
console.log(tab1);

function lastNumber(tab1){
    console.log(tab1[tab1.length -1]);
}
lastNumber(tab1);
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function lastNumber2(tab1){
    return tab1[tab1.length -1];
}
console.log(lastNumber2(tab1))
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
console.log("exercice minimum:")
function minimumNumber(tab1){
    let min = tab1[0];
    for(let i=0 ; i<tab1.length ; i++){
        if(min > tab1[i]){
            min = tab1[i];
        }else{
            min = min;
        }
    }
    console.log(min);
}
minimumNumber(tab1);
tab1.push(3);
minimumNumber(tab1);
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
console.log("exercice maximum:")
function maximumNumber(tab1){
    let max = tab1[0];
    for(let i=0 ; i<tab1.length ; i++){
        if(max < tab1[i]){
            max = tab1[i];
        }else{
            max = max;
        }
    }
    console.log(max);
}
maximumNumber(tab1);
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
console.log("exercice le 2eme max:")
function secondMaximumNumber(tab1){
    let firstNumberMax= tab1[0];
    let secondNumbermax =tab1[0];
    for(let i=0 ; i<tab1.length ; i++){
        if(firstNumberMax < tab1[i]){
            secondNumbermax = firstNumberMax; 
            firstNumberMax=tab1[i];
        }else if(secondNumbermax < tab1[i]){
            secondNumbermax=tab1[i];
        }
    }
    return secondNumbermax;
}
   
console.log(secondMaximumNumber(tab1));


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
let counter = 0;
function countNumber(tab1, a){
    for( i=0 ; i<tab1.length; i++){
        if(tab1[i] == a){
           counter++;
        }
    }
    console.log(counter);
}
countNumber(tab1, 23)
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
console.log("excercice true false")
let result= "false";
function existNumber(tab1, b){
    for( i=0 ; i<tab1.length; i++){
        if(tab1[i] == b){
           result = "true";
        }
    }
    return result;
}
console.log(existNumber(tab1, 59996));
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tab2= [];
for(let i=0; i<7777;i++){
    tab2 [i] = i+1; 
}
console.log(tab2.length);
console.log(tab2);
console.log(tab2[0]);
let tab3= [];

for(let i=1; i<=7777;i++){
    tab3 [i-1] = i; 
}
console.log(tab3.length);
console.log(tab3);
console.log(tab3[0]);
// Créer un tableau qui contient [10,20,30,...,77770].
console.log("exe 10 par 10")
let tab4= [];
for(let i=0; i<77780/10; i++){
    tab4 [i] = i*10; 
    }
console.log(tab4.length);
console.log(tab4);
console.log(tab4[0]);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
console.log("exe 5 par 5")
let tab5= [];
for(let i=0; i<38890/5; i++){
    tab5 [i] = i*5; 
    }
console.log(tab5.length);
console.log(tab5);
console.log(tab5[0]);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
let tab6=[1,45,88,54,23,-100,12];
function numberSuperior50(tab6){
    while(tab6[tab6.length-1] < 50){
            tab6.pop();
    }
    return tab6;
}
console.log(numberSuperior50(tab6));