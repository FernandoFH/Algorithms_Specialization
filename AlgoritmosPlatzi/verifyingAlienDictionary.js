// Opcion #1 
var isAlienSorted = function(palabras, orden) {
    // Crear Map 
    mapa_dic = new Map();
    for (let i = 0; i < orden.length; i++){
        mapa_dic[orden[i]] = i 
    }

    // Revisar Orden 
    for (let i = 1; i < palabras.length; i++) { // T = O(n) | S= O(m)
        if(comparar(palabras[i - 1], palabras[i]) === false){
            return false;
        }
    }
    return true;
};

var comparar = function(palabra1, palabra2){
    const longitud = Math.min(palabra1.length, palabra2.length)
    for (let i=0; i < longitud; i++) {
        if (mapa_dic[palabra1[i]] < mapa_dic[palabra2[i]]) return true
        if (mapa_dic[palabra1[i]] > mapa_dic[palabra2[i]]) return false
    }
    return palabra1.length <= palabra2.length
}

/* // Opcion #2
var isAlienSorted = function(words, order){
    let map = {}

    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i 
    }

    for (let i = 0; i < words.length - 1; i++) {
        for(let j = 0; j < words[i].length; j++) {

            if (j >= words[i+1].length) return false
            if (words[i][j] == words[i+1][j]) continue 
            
            let position1 = map[words[i][j]]
            let position2 = map[words[i+1][j]]
            if (position1 < position2) break
            else return false
        
        }
    }
    return true
};
*/

// Input 1
const order1 = "hlabcdfgijkmnopqrstuvwxyz";
const words1 = ["habito", "hacer", "lectura", "sonreir"];
// Input 2
const words2 = ["habito", "hacer", "sonreir", "lectura"];
// Input 3
const words3 = ["conocer", "cono"];
const order3 = "abcdefghijkmnopqrstuvwxyz";
isAlienSorted(words3, order3);

console.log("Output #1: "+isAlienSorted(words1, order1));
console.log("Output #2: "+isAlienSorted(words2, order1));
console.log("Output #3: "+isAlienSorted(words3, order3));