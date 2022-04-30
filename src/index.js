import flowerObj from './flowers/flowers'
import fruitObj from './fruits/fruits'
import seedObj from './seeds/seeds'
import sectionMaker from './sectionMaker'
import setStyle from './setStyle'
import './style.css'

function page () {
    const content = document.createElement('div')
    content.id = 'content'
    const header = document.createElement('header')
    const main = document.createElement('div')
    main.id = 'main'

    content.appendChild(header)
    content.appendChild(main)

    //style variables
    let paper = ''
    let ink = ''

    const company = document.createElement('h1')
    company.innerHTML = '~ COOLSWEETS ~'
    
    const nav = document.createElement('nav')
    const btnSeed = document.createElement('button')
    btnSeed.innerHTML = 'Luxurious Seeds'
    btnSeed.classList = 'btn'
    btnSeed.addEventListener('click', () => {
        paper = '#000000'
        ink = '#e0d6d1'
        setStyle(paper, ink, header, main)
        sectionMaker(main, seedObj)
        btnSeed.style.borderBottom = `1px solid ${ink}`
    })
    const btnFlower = document.createElement('button')
    btnFlower.innerHTML = 'Soft Flowers'
    btnFlower.classList = 'btn'
    btnFlower.addEventListener('click', () => {
        paper = '#fae7d4'
        ink = '#301207'
        setStyle(paper, ink, header, main)
        sectionMaker(main, flowerObj)
        btnFlower.style.borderBottom = `1px solid ${ink}`
    })
    const btnFruit = document.createElement('button')
    btnFruit.innerHTML = 'Seasonal Fruits'
    btnFruit.classList = 'btn'
    btnFruit.addEventListener('click', () => {
        paper = '#30c2e9'
        ink = '#08404e'
        setStyle(paper, ink, header, main)
        sectionMaker(main, fruitObj)
        btnFruit.style.borderBottom = `1px solid ${ink}`
    })
    
    nav.appendChild(btnSeed)
    nav.appendChild(btnFlower)
    nav.appendChild(btnFruit)
    header.appendChild(company)
    header.appendChild(nav)
    btnFlower.click() //set starting style

    return content
}

document.body.appendChild(page())
