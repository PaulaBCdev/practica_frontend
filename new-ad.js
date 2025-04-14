import { newAdController } from "./new-ad/newAdController.js"
import { notificationsController } from './notifications/notificationsController.js'

document.addEventListener("DOMContentLoaded", () => {

    if (!localStorage.getItem("token")) {
        window.location = '/login.html'
    }

    const newAdForm = document.querySelector('form')
    const notifications = document.querySelector('.notifications')
    const { showNotification } = notificationsController(notifications)

    newAdForm.addEventListener('newAd-error', (event) => {
        const message = event.detail
        showNotification(message)
    })

    newAdForm.addEventListener('newAd-ok', (event) => {
        const message = event.detail
        showNotification(message)
    })

    newAdController(newAdForm)
})