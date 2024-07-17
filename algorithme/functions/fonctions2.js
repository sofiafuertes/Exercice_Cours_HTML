/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
console.log("fSyracuse:");
function syracuse(n){
    if(n%2 == 1){
        return 3*n + 1; 
    }
    else{
        return n/2;
    }
}
console.log(syracuse(3));
/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
console.log("fCountdown:");
function countdown2(n){ 
    while(n>=0){
        console.log(n);
        n = n-1; 
    }
}
countdown2(3);
/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur.
La valeur sera divisée par 2 à chaque fois, 
et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
console.log("fFastCountdown:");
function fastCountdown(n){
    while(n>=0.1){
        console.log(n);
        n = n/2; 
    }
}
fastCountdown(3);
/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
console.log("fEvenNumbers:");
function evenNumbers(a , b){
    while(a != b){
        console.log()
    }


}
/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/
function euclide(a,b){
    if(b=0){
        return a; 
    } else{
        return(b, a % b);
    }
}
/*
À la main, calculer `euclide(6,10)`.  resultat: 10, 6.
*/ 