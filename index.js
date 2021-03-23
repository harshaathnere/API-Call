//console.log(window);
//xmlhttp request
const request = new XMLHttpRequest();
request.open("GET",'https://jsonplaceholder.typicode.com/users');
request.send();
request.onload= () => {
    if(request.status===200){
        console.log(JSON.parse(request.response))
    }
    else {
        console.log(request)
        console.log(`error ${request.status}`)
    }
}
// fetch api 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
}).then(json=> {
    console.log(json)
})

// second aaproach
async function getUsers() {
 let response = await fetch('https://jsonplaceholder.typicode.com/users');
 let data = await response.json();
 return data;
}
getUsers().then(response =>{
    console.log(response)
})

//axios third party javascript library
axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log(response.data)
})

//jquery 
$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        type: "GET",
        success: function(result){
            console.log(result)
        },
        error: function(err){
            console.log(err);
        }
    })
})