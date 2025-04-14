import { getProducts } from './productsModel.js'
import { productCard, noProductsAdvice } from './productsView.js'

export async function showProductsController(container) {
    try {
        const event = new CustomEvent('load-products-started')
        container.dispatchEvent(event)

        const products = await getProducts()
        drawProducts(products, container)
    } catch (error) {
        // alert(error.message)
        const event = new CustomEvent('load-products-error', {
            detail: error
        })
        container.dispatchEvent(event)
    } finally {
        const event = new CustomEvent('load-products-finished')
        container.dispatchEvent(event)
    }
}

function drawProducts(products, container) {
    container.innerHTML = ''

    if (products.length === 0) {
        container.innerHTML = noProductsAdvice()
    }

    products.forEach(product => {
        const printedProducts = document.createElement('div')
        printedProducts.innerHTML = productCard(product)

        container.appendChild(printedProducts)
    })
}