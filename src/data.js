// import bcrypt from 'bcryptjs';

//load data from a JS object instead of hard coding it
//product data

const data = {
    //add sample user to data.js
    products: [
        {
            _id: '1',
            name: 'BRONZE LEVEL PARTNER FRAMED PRINT',
            category: 'Shirts',
            image: '/images/productimg2.png',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '2',
            name: 'GOLD LEVEL PARTNER FRAMED PRINT',
            category: 'Shirts',
            image: '/images/productimg2.png',
            price: 10,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '3',
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/productimg2.png',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            _id: '4',
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/productimg2.png',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            _id: '5',
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/productimg2.png',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '6',
            name: 'Adidas Slim Pant',
            category: 'Pants',
            image: '/images/productimg2.png',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        }
    ]
}

export default data;