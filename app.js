const url = `https://randomuser.me/api/`

const container = document.createElement("div")
container.setAttribute("class","container")
document.body.append(container)

let myData = []
const fetchUser = async () =>{
try {
    const response =  await fetch(url)
    const data = await response.json()
        // for(let item of data){
        //         myData.push(item)
        // }
        // console.log("data ===>",data)
        myData = data
} catch (error) {
    console.log("error ===========>",error)
}
}

const fetchedData = async ()=>{
     await Promise.all([fetchUser()])

    console.log("myData",myData)
    displayUser(myData)
}

fetchedData()

const displayUser = (item) =>{
    let template = document.createElement('div')
     template.innerHTML = `<div>
        ${item.results[0].email}
        <p>Title :  ${item.results[0].name.title}</p>
        <p>FirstName :  ${item.results[0].name.first}</p>
        <p>LastName :  ${item.results[0].name.last}</p>
        <img src=${item.results[0].picture.large} alt="??"/>
    </div>`

    container.append(template)
}

