

/**
 * ADDITIONALLY
 * how can we make item type checking more TypeScript style - hence typos safe
 * (what is a typo? typing 'backgroung' instead of 'background')
 */
interface Product {
    name:string;
    taste?:string;
    type?: ProductType;
}
enum ProductType{
    fruit = 'fruit',
    vegetable='vegetable'
}
var items:Array<Product> = [];
items.push({
    name: 'Apple',
    taste: 'sweet',
    type: ProductType.fruit
});
items.push({
    name: 'Lemon',
    taste: 'sour',
    type: ProductType.fruit
});
items.push({
    name: 'Potato',
    type: ProductType.vegetable
});
items.push({
    name: 'Car'
});

items.push({
    name: 'Potato2',
    type: ProductType.vegetable
});

function printFruitsAndVeggies(fruitsAndVeggies: Array<Product>) {
    for (var _i = 0, fruitsAndVeggies_1 = fruitsAndVeggies; _i < fruitsAndVeggies_1.length; _i++) {
        var item = fruitsAndVeggies_1[_i];
        if (item.type === ProductType.fruit) {
            console.log("We have a fruit: " + item.taste + " " + item.name);
        }
        else if (item.type === ProductType.vegetable) {
            console.log('We have a vegetable: ' + item.name);
        }
        else {
            console.log('--- Error ---');
            console.log('We have an item of unknown type: ' + item.name);
            console.log('--- End of error ---');
        }
    }
}
printFruitsAndVeggies(items);
