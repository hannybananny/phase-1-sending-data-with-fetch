// Add your code here
function submitData(userName, userEmail){
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    body: JSON.stringify({
        "name": userName, 
        "email": userEmail
    })
    }
    return fetch('http://localhost:3000/users', configObj)
    .then(res => res.json())
    .then(data => handleID(data.id))
    .catch(error => {
        let message = `${error}`
        let p = document.createElement('p')
        p.innerHTML = message
        document.body.appendChild(p)
        })
}

function handleID(newID){
   let p = document.createElement('p')
    p.textContent = `${newID}`
    document.body.appendChild(p)
}

submitData()
