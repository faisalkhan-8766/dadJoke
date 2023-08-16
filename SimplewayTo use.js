
const btnElement = document.querySelector(".btn")
let p = document.querySelector(".para")
let getJokes = async()=>{
    let response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
     let data = await response.json()
     console.log(data.joke)
     p.innerHTML = data.joke

}

// getJokes();

btnElement.addEventListener("click",()=>{
    getJokes()
  })

// const apiKey = "9J4Ki4C4bjtq+WxT+yEl3Q==0Yy1pS9pUQlHGAUF";

// function getJoke(){
//     alert('Kay Be gaandu joke sunega ky')
// }









// // more simple form to use api to get more jokes 

// const btnElement = document.querySelector(".btn")
// let para = document.querySelector(".para")
// let getJokes = async()=>{
//     let response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=10")
//      let data = await response.json()
//      data.jokes.map((args)=>{
//         console.log(args.joke)
//         let p = document.createElement("p")
//         p.innerHTML = args.joke
//         para.append(p)

//      })

// }

// getJokes();

// btnElement.addEventListener("click",()=>{
//     getJokes()
// })

// const apiKey = "9J4Ki4C4bjtq+WxT+yEl3Q==0Yy1pS9pUQlHGAUF";

// function getJoke(){
//     alert('Kay Be gaandu joke sunega ky')
// }




