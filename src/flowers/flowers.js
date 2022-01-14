import coverImg from './soft-flowers.jpg'
import camomilleI from './imgs/camomille.jpg'
import dandelionI from './imgs/dandelion.jpg'
import roseI from './imgs/rose.jpg'

const title = document.createElement('h2')
title.innerHTML = 'Soft Flowers'
title.classList.add('section-title')

const cover = document.createElement('img')
cover.src = coverImg
cover.classList.add('cover')

const camomille = document.createElement('img')
camomille.src = camomilleI
camomille.classList.add('opt')

const dandelion = document.createElement('img')
dandelion.src = dandelionI
dandelion.classList.add('opt')

const rose = document.createElement('img')
rose.src = roseI
rose.classList.add('opt')

const options = {
    camomille: camomille,
    rose: rose,
    dandelion: dandelion
}

const flowerObj = {
    title: title,
    cover: cover,
    opt: options
}

export default flowerObj