
export async function getAdDetail(adId) {
    const response = await fetch(`http://localhost:8000/api/products/${adId}?_expand=user`)

    if (!response.ok) {
        throw new Error('Ad not available')
    }

    const adDetail = await response.json()

    return adDetail
}


export async function getLoggedUser() {
    const token = localStorage.getItem("token")

    const response = await fetch('http://localhost:8000/auth/me', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("User not logged in")
    }

    const user = await response.json()

    return user
}


export async function removeAd(adId) {
    const token = localStorage.getItem("token")

    const response = await fetch(`http://localhost:8000/api/products/${adId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error('Ad not available')
    }
}