
export function productCard(product) {
    const adType = product.type.toUpperCase() === "BUY" ? "buy" : "sell"

    const description = product.description.length > 40 ? product.description.slice(0, 40) + "..." : product.description

    let productView = `
        <p class="ad-type ${adType}">${product.type.toUpperCase()}</p>

        <div class="ad-info">
            <p class="ad-price">${product.price} EUR</p>
            <p class="ad-name">${product.name.charAt(0).toUpperCase() + product.name.slice(1).toLowerCase()}</p>
            <p class="ad-desc">${description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()}</p>
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