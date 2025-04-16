import { REGEXP } from '../utils/contants.js'
import { loginUser } from './loginModel.js'

export function loginController(form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const emailElement = document.querySelector("#email")
        const email = emailElement.value

        const passwordElement = document.querySelector("#password")
        const password = passwordElement.value

        // validar email
        const emailRegExp = new RegExp(REGEXP.mail)
        if (!emailRegExp.test(email)) {
            const event = new CustomEvent('login-error', {
                detail: 'incorrect email format'
            })
            form.dispatchEvent(event)
        } else {
            handleLoginUser(email, password, form)
        }

    })

    const handleLoginUser = async (email, password, form) => {
        try {
            const event = new CustomEvent('login-started')
            form.dispatchEvent(event)

            const token = await loginUser(email, password)

            localStorage.setItem("token", token)

            setTimeout(() => {
                window.location = "/"
            }, 1000)

        } catch (error) {
            const event = new CustomEvent('login-error', {
                detail: "incorrect email or password"
            })
            form.dispatchEvent(event)
        } finally {
            const event = new CustomEvent('login-finished')
            form.dispatchEvent(event)
        }
    }
}