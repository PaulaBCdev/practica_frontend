import { loaderController } from './loader/loaderController.js'
import { adDetailController } from "./ad-detail/adDetailController.js"
import { notificationsController } from './notifications/notificationsController.js'
import { sessionController } from './session/sessionController.js'

document.addEventListener("DOMContentLoaded", () => {

    const searchParams = new URLSearchParams(window.location.search)
    const adId = searchParams.get("id")

    const adContainer = document.querySelector('.ad-container')
    const loader = document.querySelector('.loader')
    const notifications = document.querySelector('.notifications')
    const session = document.querySelector(".session")
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    adContainer.addEventListener('load-detail-started', () => {
        show()
    })

    if (adId) {
        adDetailController(adContainer, adId)

        adContainer.addEventListener('load-detail-finished', () => {
            hide()
        })
    } else {
        adContainer.addEventListener('detail-error', (event) => {
            const message = event.detail
            showNotification(message)
        })

        window.location = '/'
    }

    sessionController(session)
})