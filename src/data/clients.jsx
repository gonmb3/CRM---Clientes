const url = "http://localhost:3000/clientes"

//get all  clients
export async function getClients(){

    const resp = await fetch(url);
    const data = await resp.json();
    return data
}

//get one Client
export async function getClient(id){

    const resp = await fetch(`http://localhost:3000/clientes/${id}`);
    const data = await resp.json();
    return data
}

//add client
export async function addClient(data){
   try {
    const resp = await fetch(url, {
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"
        }     
    })
    await resp.json()
   } catch (error) {
    console.log(error);
   }
}

//update client
export async function updateClient(id, data){
    try {
        const resp = await fetch(`http://localhost:3000/clientes/${id}`, {
            method:"PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-Type" : "application/json"
            }     
        })
        await resp.json()
       } catch (error) {
        console.log(error);
       }
}


//delete client

export async function deleteClient(id){
    try {
        const resp = await fetch(`http://localhost:3000/clientes/${id}`, {
            method:"DELETE",         
        })
        await resp.json()
       } catch (error) {
        console.log(error);
       }
}