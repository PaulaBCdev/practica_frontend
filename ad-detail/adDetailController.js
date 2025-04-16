import { getAdDetail, getLoggedUser, removeAd } from "./adDetailModel.js"
import { buildAdDetail, buildRemoveAdButton } from "./adDetailView.js"

export async function adDetailController(adContainer, adId) {

    const showRemoveAdButton = () => {
        const removeButton = buildRemoveAdButton()
        adContainer.appendChild(removeButton)

        removeButton.addEventListener("click", async () => {
            console.log(adId)
            if (confirm("Are you sure you want to delete this ad?")) {
                await removeAd(adId)
                window.location = '/'
            }
        })
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