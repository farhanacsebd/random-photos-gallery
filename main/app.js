const imageContainer = document.getElementById('image-container');
const btn = document.getElementById('btn');

btn.addEventListener("click",() => {
    console.log('hello');
    imageNum = 10;
    addNewImage()
})

const addNewImage = () =>{
    for (let index = 0; index < imageNum; index++) {
        const newImages = document.createElement('img');
    newImages.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    imageContainer.appendChild(newImages)
        
    }
}