fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(value) { 
        return value.json() 
   })
   .then(function (json) {
     const image = document.querySelector('img')
        image.src = json.message
    })
//async function loadDogImage () {
  //  const req = await fetch('https://dog.ceo/api/breeds/image/random');
    //const json = await req.json();
    //const image = document.querySelector('img')
    //image.src = json.message
//}
