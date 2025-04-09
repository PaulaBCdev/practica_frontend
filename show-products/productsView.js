
export function productCard(product) {
    let productView = `
        <p>${product.name}</p>
        <p>${product.description}</p>
        <p>${product.type} - ${product.price}€</p>
    `
    if (product.photo) {
        productView = `<img src='${product.photo}'></img>` + productView
    }

    return productView
}

export function noProductsAdvice() {
    return '<h3>No products available at this time.</h3>'
}