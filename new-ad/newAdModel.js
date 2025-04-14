
export async function newAd(productName, productDescription, productPrice, adType, productImage) {
    const token = localStorage.getItem("token")

    try {
        const response = await fetch("http://localhost:8000/api/products", {
            method: "POST",
            body: JSON.stringify({
                name: productName,
                description: productDescription,
                price: productPrice,
                type: adType
            }),
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error("New ad creation failed. Try again later.")
        }
    } catch (e) {
        console.log(e)
    }

}