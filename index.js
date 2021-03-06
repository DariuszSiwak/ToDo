const submitButton = document.getElementById('buttom')
const input = document.getElementById('title')

submitButton.addEventListener('click', () => {
    const value = input.value

    if(value === '') {
        return
    }

    const element = document.createElement('div')
    element.classList.add('list')

    const title = document.createElement('p')
    title.classList.add('title')
    element.appendChild(title)
    title.innerHTML = value

    const image = document.createElement ('i')
    image.classList.add('bin', 'fab', 'fa-bitbucket')
    element.appendChild(image)
    
    document.body.appendChild(element)
    
    title.addEventListener('click', () => {
        
        if(title.style['textDecoration'] === 'line-through'){
            title.style['textDecoration'] = ''
        } else {
            title.style['textDecoration'] = 'line-through'
        }
        
    })

    image.addEventListener('click', () => {
        element.remove()
    })

    document.body.appendChild(element)
    input.value = ''
})
