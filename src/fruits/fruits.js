import coverImg from './seasonal-fruits.png'
import autumnI from './imgs/autumn.png'
import springI from './imgs/spring.png'
import summerI from './imgs/summer.png'
import winterI from './imgs/winter.png'

const title = document.createElement('h2')
title.innerHTML = 'Seasonal Fruits'
title.classList.add('section-title')

const cover = document.createElement('img')
cover.src = coverImg
cover.classList.add('cover')

const autumn = document.createElement('img')
autumn.src = autumnI
autumn.classList.add('opt')

const spring = document.createElement('img')
spring.src = springI
spring.classList.add('opt')

const summer = document.createElement('img')
summer.src = summerI
summer.classList.add('opt')

const winter = document.createElement('img')
winter.src = winterI
winter.classList.add('opt')

const options = {
    winter: winter,
    spring: spring,
    summer: summer,
    autumn: autumn
}

const fruitObj = {
    title: title,
    cover: cover,
    opt: options
}

export default fruitObj