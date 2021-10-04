window.addEventListener('load', async ()=> {
    const token = localStorage.getItem('token')
    const registerToken = localStorage.getItem('registerToken')
    const options = {
        "method": "POST",
        "headers": {
            "auth-token": token || registerToken 
        }
    }
    const result = await fetch('http://localhost:3000/api/user/verify',options)
    const message = await result.json().message;
    console.log(message)
})


//     if(token===null && registerToken ===null) {
//         window.location.href = "./index.html"
//     }
// })