
export function buildAdDetail(ad) {

    const date = new Date(ad.updatedAt)
    const adType = ad.type.toUpperCase() === "BUY" ? "buy" : "sell"

    let adView = `
        <div class="ad-detail name-price-type">
            <div class="name-price">
                <p class="ad-p name">${ad.name.charAt(0).toUpperCase() + ad.name.slice(1)}</p>  
                <p class="ad-p price">${ad.price} EUR</p>
            </div>

            <div class="type">
                <p class="ad-p ad-type ${adType}">${ad.type.toUpperCase()}</p>
            </div>
        </div>

        <div class="ad-detail desc">
            <p class="ad-p">${ad.description.charAt(0).toUpperCase() + ad.description.slice(1)}</p>
        </div>

        <div class="ad-detail update-owner">
            <p class="ad-p update">Last updated: ${date.toLocaleDateString()}</p>
            <div class="ad-owner">
            </div>
        </div>
    `
    if (ad.photo) {
        adView = `
        <div class="ad-img">
            <img src='${ad.photo}'></img>
        </div>` + adView
    }

    return adView
}


export function buildRemoveAdButton() {
    const removeButton = document.createElement('button')
    removeButton.classList.add('trash-btn')

    const img = document.createElement('img')
    img.src = '../assets/trash.svg'
    img.alt = 'Delete ad'
    img.classList.add('trash-icon')

    removeButton.appendChild(img)

    return removeButton
}