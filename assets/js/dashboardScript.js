window.addEventListener('load', async ()=> {
    const token = localStorage.getItem('token')
    const registerToken = localStorage.getItem('registerToken')
    const options = {
        "method": "POST",
        "headers": {
            'Content-Type': 'application/json',
            "auth-token": token || registerToken 
        }
    }
    const result = await fetch('http://localhost:3000/api/user/verify',options)
    const message = await result.json();
    if(message.message !== "good token") {window.location.href = "./index.html"}
})


//     if(token===null && registerToken ===null) {
//         window.location.href = "./index.html"
//     }
// })