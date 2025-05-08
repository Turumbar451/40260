

const boton = document.getElementById("Enviar")

boton.addEventListener("click",
    () => {
        console.log("los parametros:")
        let user = document.getElementById("user")
        let password = document.getElementById("password")
        console.log(password.value)
        console.log(user.value)
    }
)