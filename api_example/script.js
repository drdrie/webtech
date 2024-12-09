// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('Fetch error: ', error))

const button = document.getElementById('fetchDataBtn');
button.addEventListener('click', async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }
    catch (error){
        console.log('Error: ',error)
    }
})

const titleInput = document.getElementById('title')
const bodyInput = document.getElementById('body')
const form = document.getElementById('dataForm')

form.addEventListener('submit', async(event) => {
    event.preventDefault() // Prevent form from reloading the page
    const title = titleInput.value
    const body = bodyInput.value
    //Payload
    const newData = {title, body, userId: 1}
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newData)
            //Output: {"title":"Title","body":"Body","userId":1}
        })
        if(!response.ok){
             throw new Error(`Error: ${response.status}`)   
        }
        const data = await response.json()
        addDataToList(data)
    }
    catch(error){
        console.error('Failed to add new data ', error)
    }
})

function addDataToList(data){
   const dataList = document.getElementById('dataList')
   const listItem = document.createElement('li')
   //access the object -> data.title, data.body, data.userId
   listItem.textContent = `ID:${data.id}, Title: ${data.title},
   Body:${data.body}`
   dataList.appendChild(listItem)
}


 