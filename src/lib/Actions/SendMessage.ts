"use server"

type ContactResponse = {
    success: boolean
    message: string
}

export const HandleSendMessage = async (payload: any): Promise<ContactResponse> => {
    const res = await fetch(process.env.BASE_URL + "/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    })

    return res.json()
}