const users = ['Jay', 'Kandarp', 'akshit']

const memberDiv = document.querySelector('.memberDiv')
const addIcon = document.querySelector('.addIcon')

const userIcons = () => {
    users.reverse()
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', (
            `<button class="btn"><span>${curElem}</span></button>`
        ))
    })
}

addIcon.addEventListener('click', () => {
    let userName = prompt('Please enter your name')

    if(userName !== null && !users.includes(userName)){
        users.push(userName)
        memberDiv.insertAdjacentHTML('afterbegin', (
            `<button class="btn"><span>${userName}</span></button>`
        ))
        console.log(users)
    } else{
        alert('Username already exist!')
    }
})

userIcons()
