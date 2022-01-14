function setStyle(paper, ink, header, main) {
    header.style.backgroundColor = paper
    header.style.color = ink
    main.style.backgroundColor = paper
    main.style.color = ink
    const btns = document.querySelectorAll('.btn');
    for (const btn of btns) {
        btn.style.color = ink
        btn.style.border = 'none'
    }
}

export default setStyle