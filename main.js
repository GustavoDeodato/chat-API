"use scrict"

async function Chat(){

    const container = document.getElementById('container-conversas')

    const response = await fetch ("http://localhost:8080/v1/whatssap/usuario/conversas/11987876567")
    const data = await response.json
    const conversa = data.data

    conversa.forEach(
        
    )
}