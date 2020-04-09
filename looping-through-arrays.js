
let pets = ['cat','dog','rat'];

i=0;

for (i in pets) {
    pets[i] = pets[i] + 's';
    i ++;
}

console.log(pets);