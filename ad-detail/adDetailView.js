
export function buildAdDetail(ad) {

    let adView = `
        <p>${ad.name}</p>
        <p>${ad.description}</p>
        <p>${ad.type} - ${ad.price}€</p>
        <p>Creado por: ${ad.user.name}</p>
    `
    if (ad.photo) {
        adView = `<img src='${ad.photo}'></img>` + adView
    }

    return adView
}


export function buildRemoveAdButton() {
    const removeButton = document.createElement('button')
    removeButton.textContent = "Delete ad"

    return removeButton
}