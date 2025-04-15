import { loaderController } from './loader/loaderController.js'
import { newAdController } from "./new-ad/newAdController.js"
import { notificationsController } from './notifications/notificationsController.js'

document.addEventListener("DOMContentLoaded", () => {

    if (!localStorage.getItem("token")) {
        window.location = '/login.html'
    }

    const newAdForm = document.querySelector('form')
    const loader = document.querySelector('.loader')
    const notifications = document.querySelector('.notifications')
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    newAdForm.addEventListener('load-new-ad-started', () => {
        show()
    })

    newAdForm.addEventListener('newAd-error', (event) => {
        const message = event.detail
        showNotification(message)
    })

    newAdForm.addEventListener('newAd-ok', (event) => {
        const message = event.detail.message
        const type = event.detail.type
        showNotification(message, type)
    })

    newAdForm.addEventListener('load-new-ad-finished', () => {
        hide()
    })

    newAdController(newAdForm)
})