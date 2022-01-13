function sectionMaker (node, el) {
    const coverImg = document.createElement('div')
    coverImg.id = 'cover'
    coverImg.append(el.cover)

    const info = document.createElement('div')
    info.id = 'info'
    const options = document.createElement('div')
    options.id = 'options'
    let opt = el.opt
    for (const [key, value] of Object.entries(opt)) {
        let card = document.createElement('div')
        card.classList.add('card')
        let description = document.createElement('p')
        description.classList.add('description')
        description.innerHTML = `${key}`

        card.append(value, description)
        options.appendChild(card)
      }
    info.append(el.title, options)

    node.innerHTML = ''
    node.append(coverImg, info)
}

export default sectionMaker