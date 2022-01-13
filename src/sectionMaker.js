function sectionMaker (node, el) {
    const coverImg = document.createElement('div')
    coverImg.append(el.cover)

    const info = document.createElement('div')
    const options = document.createElement('div')
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

    node.append(coverImg, info)
}

export default sectionMaker