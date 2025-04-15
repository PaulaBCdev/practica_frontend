
export async function newAd(productName, productDescription, productPrice, adType, productImage) {
    const token = localStorage.getItem("token")

    let image = null

    if (productImage) {
        const formData = new FormData()
        formData.append('file', productImage)

        const response = await fetch("http://localhost:8000/upload", {
            method: "POST",
            body: formData,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const imageJson = await response.json()
        image = imageJson.path
    }


    const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        body: JSON.stringify({
            name: productName,
            description: productDescription,
            price: productPrice,
            type: adType,
            photo: image
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("New ad creation failed. Try again later.")
    }

}