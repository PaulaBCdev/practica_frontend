import { buildNotification } from "./notificationsView.js"

export function notificationsController(notifications) {

    const removeNotification = (newNotification) => {
        newNotification.remove()
    }

    const showNotification = (message, type = 'error') => {
        const newNotification = document.createElement('div')
        newNotification.classList.add('notification')
        newNotification.classList.add(type)

        newNotification.innerHTML = buildNotification(message)

        notifications.appendChild(newNotification)

        const closeButton = newNotification.querySelector('button')

        // delete notification with click event
        closeButton.addEventListener('click', () => {
            removeNotification(newNotification)
        })

        // delete notification when time is up
        setTimeout(() => {
            removeNotification(newNotification)
        }, 5000)
    }

    return { showNotification }
}