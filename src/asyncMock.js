const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'',
        stock: 25,
        description: ' descripcion'
    },
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'',
        stock: 25,
        description: ' descripcion'
    },
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'',
        stock: 25,
        description: ' descripcion'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod.id === productId))
        }, 500)
    })
}