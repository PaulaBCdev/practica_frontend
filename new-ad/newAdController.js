import { newAd } from './newAdModel.js'

export function newAdController(form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const productNameElement = form.querySelector('#product-name')
        const productName = productNameElement.value

        const productDescriptionElement = form.querySelector('#product-description')
        const productDescription = productDescriptionElement.value

        const productPriceElement = form.querySelector('#product-price')
        const productPrice = productPriceElement.value

        const adTypeElement = form.querySelector('input[name="ad-type"]:checked')
        const adType = adTypeElement.value

        const productImageElement = form.querySelector('#product-img');
        const productImage = productImageElement.files[0];

        try {
            await newAd(productName, productDescription, productPrice, adType, productImage)

            const event = new CustomEvent('newAd-ok', {
                detail: 'Your ad was created successfully.'
            })
            form.dispatchEvent(event)

            setTimeout(() => {
                window.location = '/'
            }, 5000)

        } catch (error) {
            const event = new CustomEvent('newAd-error', {
                detail: error
            })
            form.dispatchEvent(event)
        }


    })

}