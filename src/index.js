import jump from "jump.js"
import axios from "axios"

document.getElementById("submit-btn")
.addEventListener("click", (event) => {
    event.preventDefault()

    let info = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    axios.post('/email', info)
    .then((res) => {
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("message").value = ""

        alert("Thank you for your email, I will respond as soon as possible.")
    })
    .catch((err) => {
        console.log(err);
    });

})


document.getElementById("about")
.addEventListener("click", (event) => {
    event.preventDefault()

    jump('#slide-1', {
        duration: 1000,
        offset: -80,
        callback: undefined,
        a11y: false
    })
    
});

document.getElementById("portfolio")
.addEventListener("click", (event) => {
    event.preventDefault()
    
    jump('#slide-2', {
        duration: 1250,
        offset: 0,
        callback: undefined,
        a11y: false
    })
    
});

document.getElementById("contact")
.addEventListener("click", (event) => {
    event.preventDefault()
    
    jump('#slide-3', {
        duration: 1500,
        offset: 0,
        callback: undefined,
        a11y: false
    })
    
});