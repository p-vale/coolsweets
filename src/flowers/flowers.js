import coverImg from './soft-flowers.png'
import camomilleI from './imgs/camomille.png'
import dandelionI from './imgs/dandelion.png'
import roseI from './imgs/rose.png'

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