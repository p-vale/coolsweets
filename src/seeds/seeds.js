import coverImg from './luxurious-seeds.jpg'
import cocoaI from './imgs/cocoa.jpg'
import coffeeI from './imgs/coffee.jpg'
import pistachioI from './imgs/pistachio.jpg'

const title = document.createElement('h2')
title.innerHTML = 'Luxurious Seeds'
title.classList.add('section-title')

const cover = document.createElement('img')
cover.src = coverImg
cover.classList.add('cover')

const cocoa = document.createElement('img')
cocoa.src = cocoaI
cocoa.classList.add('opt')

const coffee = document.createElement('img')
coffee.src = coffeeI
coffee.classList.add('opt')

const pistachio = document.createElement('img')
pistachio.src = pistachioI
pistachio.classList.add('opt')

const options = {
    cocoa: cocoa,
    coffee: coffee,
    pistachio: pistachio
}

const seedObj = {
    title: title,
    cover: cover,
    opt: options
}

export default seedObj