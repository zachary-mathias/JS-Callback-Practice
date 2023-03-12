function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}
let screen = window.innerHeight/1.70
let heightOfSky = window.innerHeight-screen
let heightOfGrass = screen

background('assets/sky.png', 0, screen, window.innerWidth/100, heightOfSky/100)
background('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)