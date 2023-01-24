const sendMail = async (data) => await fetch(
    "https://formsubmit.co/tv21102000@gmail.com",
    {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }
)

export default sendMail