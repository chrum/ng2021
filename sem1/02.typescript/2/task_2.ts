


interface Product {
    name: string,
    price: number
}

let product: Product = {
    name: 'bread',
    price: 1
};


function presentProduct(product: Product): void {
    console.log('We have a ' + product.name + ' which costs ' + product.price)
}

presentProduct(product);
