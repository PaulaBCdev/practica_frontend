import { getAdDetail, getLoggedUser, removeAd } from "./adDetailModel.js"
import { buildAdDetail, buildRemoveAdButton } from "./adDetailView.js"

export async function adDetailController(adContainer, adId) {

    const showRemoveAdButton = () => {
        const ownerContainer = document.querySelector('.ad-owner')


        const removeButton = buildRemoveAdButton()
        ownerContainer.appendChild(removeButton)

        removeButton.addEventListener("click", async () => {
            console.log(adId)
            if (confirm("Are you sure you want to delete this ad?")) {
                await removeAd(adId)
                window.location = '/'
            }
        })
    }

    const showOwner = (adDetail) => {
        console.log(adDetail)
        const ownerContainer = document.querySelector('.ad-owner')

        const adOwner = `
            <p class="ad-p">Ad owner: </p>
            <p class="ad-p owner">${adDetail.user.name}</p>`
        ownerContainer.innerHTML = adOwner
    }

    try {
        const event = new CustomEvent('load-detail-started')
        adContainer.dispatchEvent(event)

        const adDetail = await getAdDetail(adId)
        adContainer.innerHTML = buildAdDetail(adDetail)

        // check if ad owner and user logged in are the same
        const adOwner = adDetail.userId
        const loggedUser = await getLoggedUser()
        if (adOwner == loggedUser.id) {
            showRemoveAdButton()
        } else {
            showOwner(adDetail)
        }
    } catch (error) {
        const event = new CustomEvent('detail-error', {
            detail: error
        })
        adContainer.dispatchEvent(event)
    } finally {
        const event = new CustomEvent('load-detail-finished')
        adContainer.dispatchEvent(event)
    }
}