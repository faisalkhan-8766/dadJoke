const btnElement = document.querySelector('.btn');

let p = document.querySelector('.para')



const apiKey = "9J4Ki4C4bjtq+WxT+yEl3Q==0Yy1pS9pUQlHGAUF"

const options = {

    method: 'GET',
    headers: {
         'X-Api-Key':apiKey,
        },
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"




async function getJoke(){

try {
  

        p.innerHTML = 'Updating...'
    
        btnElement.disabled = true;
        btnElement.innerHTML = "Loading";
    
        const Response = await fetch(apiURL , options)
        const data = await Response.json(); 
        
            btnElement.disabled = false;
            btnElement.innerHTML = "TTELL ME A JOKE";
    
    
        p.innerHTML = data[0].joke;
        
    } 

    catch (error) 
    {
        btnElement.disabled = false;
        btnElement.innerHTML = "TTELL ME A JOKE";   
       p.innerHTML = "Bhai Kuch Dikkat aa gya hai baad me Try krna" 
    }
} 

btnElement.addEventListener("click" , getJoke);



// getJoke()