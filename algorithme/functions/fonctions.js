// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1() {
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2(){
    return 18;
}
// Utiliser la fonction f2 pour afficher 18 dans la console.
console.log(f2());
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// La function f1 est spécialisee pour afficher dans la console, elle est donc plus adaptée si ce  que on veut faire, c'est afficher dans la console. en Revanche, si je veux faire n'importe quel autre action avec le resultat, je ne peux pas. Avec f2 je puex faire que je vuex du resultat.

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    console.log(2*n);
}
//f3(2);
// Utiliser la fonction f3 pour écrire dans la console le double de 97.
f3(97);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n){
    return 2*n; 
}
//console.log(f4(10));
// Utiliser la fonction f4 pour écrire dans la console le double de 98.
console.log(f4(98));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
console.log(a);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(a, b){
    console.log(a + b); 
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 43 et 76.
f5(43 , 76);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(a, b){
    return a + b; 
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 41 et 78.
console.log(f6(47, 78));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a += f6(42 , 77);
console.log(a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(a, b){
    if(b>a){
        return b;
    } else{
        return a; 
    }
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(a,b,c){
    if(a>=b && a>=c){
        return a;
    }
    if(b>=a && b>=c){
        return b; 
    }
    else{
        return c;
    }
}

function f8bis(n1,n2,n3){
    if(n1>n2){
        if(n1>n3){
            return n1
        } else{
            return n3
        }
    } else {
        if (n2>n3){
                return n2
            }else {
                return n3
        }
    }
}

function f8ter(col1, col2, col3){
    let maxCol1Col2 = f7(col1,col2);
    return f7(maxCol1Col2, col3)
}
function f8quarter(col1, col2, col3){
    return f7(f7(col1, col2), col3)
}
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(mot, n){
    for(let i=0 ; i<n; i++ ) {
        console.log(mot);
    }
}
f9("Hello", 10); 
f9("Hi", 20);