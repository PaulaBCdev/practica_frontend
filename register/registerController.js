import { REGEXP } from '../utils/contants.js'
import { createUser } from './registerModel.js'

export function registerController(form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const nameElement = form.querySelector("#name")
        const name = nameElement.value

        const emailElement = form.querySelector("#email")
        const email = emailElement.value

        const passwordElement = form.querySelector("#password")
        const password = passwordElement.value

        const passwordConfirmElement = form.querySelector("#password-confirm")
        const passwordConfirm = passwordConfirmElement.value

        const errors = []

        // validar email
        const emailRegExp = REGEXP.mail
        if (!emailRegExp.test(email)) {
            errors.push('invalid email format')
        }

        // comprobar las contraseñas
        if (password !== passwordConfirm) {
            errors.push('passwords do not match')
        }

        if (errors.length === 0) {
            handleCreateUser(name, email, password, form)
        } else {
            errors.forEach(error => {
                const event = new CustomEvent('register-error', {
                    detail: error
                })
                form.dispatchEvent(event)
            })
        }
    })

    const handleCreateUser = async (name, email, password, form) => {
        try {
            const loadEvent = new CustomEvent('register-started')
            form.dispatchEvent(loadEvent)

            await createUser(name, email, password)

            const event = new CustomEvent('register-ok', {
                detail: {
                    message: 'successfully registered',
                    type: 'success'
                }
            })
            form.dispatchEvent(event)

            setTimeout(() => {
                window.location = '/'
            }, 5000)

        } catch (error) {
            const event = new CustomEvent('register-error', {
                detail: error
            })
            form.dispatchEvent(event)
        } finally {
            const event = new CustomEvent('register-finished')
            form.dispatchEvent(event)
        }
    }
}