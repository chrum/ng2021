export enum ProductType {
    FRUIT = 'fruit',
    SWEETS = 'sweets',
    ALCOHOL = 'alcohol'
}

export interface Product {
    type: ProductType | string;
    name: string;
    qty: number;
}

export const products = [
    {
        type: ProductType.FRUIT,
        name: 'Apples',
        qty: 5
    },
    {
        type: ProductType.FRUIT,
        name: 'Bananas',
        qty: 2
    },
    {
        type: ProductType.SWEETS,
        name: 'Candies',
        qty: 1
    },
    {
        type: ProductType.SWEETS,
        name: 'Gingerbead',
        qty: 10
    },
    {
        type: ProductType.ALCOHOL,
        name: 'Tequila',
        qty: 9
    },
    {
        type: ProductType.ALCOHOL,
        name: 'Tequila',
        qty: 9
    },
    {
        type: 'collectible',
        name: 'Weed',
        qty: 9
    },
    {
        type: 'halloween',
        name: 'Candles',
        qty: 9
    },
]
