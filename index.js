import { loaderController } from './loader/loaderController.js'
import { showProductsController } from './show-products/productsController.js'
import { notificationsController } from './notifications/notificationsController.js'
import { sessionController } from './session/sessionController.js'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.show-products')
    const loader = document.querySelector('.loader')
    const notifications = document.querySelector('.notifications')
    const session = document.querySelector(".session")
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    container.addEventListener('load-products-started', () => {
        show()
    })

    container.addEventListener('load-products-error', (event) => {
        const message = event.detail
        showNotification(message)
    })

    container.addEventListener('load-products-finished', () => {
        hide()
    })

    showProductsController(container)
    sessionController(session)
})