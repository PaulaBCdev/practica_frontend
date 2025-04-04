import { loaderController } from './loader/loaderController.js'
import { showProductsController } from './show-products/productsController.js'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.show-products')
    const loader = document.querySelector('.loader')
    const { show, hide } = loaderController(loader)

    container.addEventListener('load-products-started', () => {
        show()
    })

    container.addEventListener('load-products-finished', () => {
        hide()
    })

    showProductsController(container)
})