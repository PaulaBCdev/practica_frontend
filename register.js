import { loaderController } from './loader/loaderController.js'
import { registerController } from "./register/registerController.js";
import { notificationsController } from './notifications/notificationsController.js'

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector('form')
    const loader = document.querySelector('.loader')
    const notifications = document.querySelector('.notifications')
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    registerForm.addEventListener('register-error', (event) => {
        const message = event.detail
        showNotification(message)
    })

    registerForm.addEventListener('register-ok', (event) => {
        const message = event.detail.message
        const type = event.detail.type
        showNotification(message, type)
    })

    registerForm.addEventListener('register-started', () => {
        show()
    })

    registerForm.addEventListener('register-finished', () => {
        hide()
    })

    registerController(registerForm)
})