
export async function getProducts() {
    let products = []

    try {
        const response = await fetch('http://localhost:8000/api/products')
        products = await response.json()
    } catch (error) {
        throw new Error('It was not possible to obtain the products. Please try again later.')
    }

    return products
}