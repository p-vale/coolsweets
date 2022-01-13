import flowerObj from './flowers/flowers'
import sectionMaker from './sectionMaker'
import './style.css'

function page() {
    const content = document.createElement('div')
    content.id = 'content'
    //main areas
    const header = document.createElement('header')
    const main = document.createElement('div')
    main.id = 'main'

    content.appendChild(header)
    content.appendChild(main)

    //header
    const company = document.createElement('h1')
    company.innerHTML = 'COOLSWEETS'
    
    const nav = document.createElement('nav')
    const btnSeed = document.createElement('button')
    btnSeed.innerHTML = 'Luxurious Seeds'
    const btnFlower = document.createElement('button')
    btnFlower.innerHTML = 'Soft Flowers'
    btnFlower.addEventListener('click', () => {
        sectionMaker(main, flowerObj)
        //change header background and color
    })
    const btnFruit = document.createElement('button')
    btnFruit.innerHTML = 'Seasonal Friuts'
    
    nav.appendChild(btnSeed)
    nav.appendChild(btnFlower)
    nav.appendChild(btnFruit)
    header.appendChild(company)
    header.appendChild(nav)
    return content
}

document.body.appendChild(page())