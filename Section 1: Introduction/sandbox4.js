


/*
const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

const bill = (products,tax ) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log (bill([5,10,20],0.2));
*/


// Functions

const greet = () => 'hello';

let result = greet();
console.log(result);

// Methods

const name = 'shaun';
console.log(name.toUpperCase());

// Callbacks & Foreach

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
 console.log(`${index} - hello ${person}`);   
};


people.forEach(logPerson)