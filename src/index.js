import flowerObj from './flowers/flowers'
import fruitObj from './fruits/fruits'
import seedObj from './seeds/seeds'
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
    btnSeed.addEventListener('click', () => {
        sectionMaker(main, seedObj)
        main.style.backgroundColor = '#000000'
        main.style.color = '#e0d6d1'
        //change header background and (+buttons) color
        //btn margin bottom
    })
    const btnFlower = document.createElement('button')
    btnFlower.innerHTML = 'Soft Flowers'
    btnFlower.addEventListener('click', () => {
        sectionMaker(main, flowerObj)
        main.style.backgroundColor = '#fae7d4'
        main.style.color = '#301207'
        //change header background and (+buttons) color
        //make function in its own file
        //btn margin bottom
    })
    const btnFruit = document.createElement('button')
    btnFruit.innerHTML = 'Seasonal Fruits'
    btnFruit.addEventListener('click', () => {
        sectionMaker(main, fruitObj)
        main.style.backgroundColor = '#30c2e9'
        main.style.color = '#08404e'
        //change header background and (+buttons) color
        //change main background
        //btn margin bottom
    })
    
    nav.appendChild(btnSeed)
    nav.appendChild(btnFlower)
    nav.appendChild(btnFruit)
    header.appendChild(company)
    header.appendChild(nav)
    return content
}

document.body.appendChild(page())