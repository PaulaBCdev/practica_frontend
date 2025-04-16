import { loaderController } from './loader/loaderController.js'
import { loginController } from "./login/loginController.js";
import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form')
    const loader = document.querySelector('.loader')
    const notifications = document.querySelector('.notifications')
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    loginForm.addEventListener('login-error', (event) => {
        const message = event.detail
        showNotification(message)
    })

    loginForm.addEventListener('login-started', () => {
        show()
    })

    loginForm.addEventListener('login-finished', () => {
        hide()
    })

    loginController(loginForm)
})