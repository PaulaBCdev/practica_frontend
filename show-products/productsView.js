
export function productCard(product) {
    let productView = `
        <div class="ad-type">
            ${product.type}
        </div>

        <div class="ad-info">
            <p class="ad-price">${product.price}€</p>
            <p class="ad-name">${product.name}</p>
            <p class="ad-desc">${product.description}</p>
        </div>
    `
    if (product.photo) {
        productView = `
        <div class="img-container">
            <img src='${product.photo}'></img>
        </div>` + productView
    }

    return `
    <div class="card">
    ${productView}
    </div>
    `
}

export function noProductsAdvice() {
    return '<h3>No products available at this time.</h3>'
}