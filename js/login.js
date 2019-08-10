let inputEmail = document.querySelector('.inputEmail')
let inputPw = document.querySelector('.inputPw')
let btn = document.querySelector('.logInBtn')
let inputEmailNoti = document.querySelector('.inputEmailNoti')

function valueOfEmailAndPw() {
    // console.dir(inputEmail)
    if(inputEmail.value.length === 0 || inputPw.value.length === 0) {
        // btn.removeAttribute('style', 'background-color: dodgerblue')
        btn.setAttribute('style', 'background-color: gray')
    }
    if(inputEmail.value.length && inputPw.value.length){
        btn.setAttribute('style', 'background-color: dodgerblue')
    }
    if(inputEmail.value.length === 0) {
        inputEmailNoti.setAttribute('style', 'color: red')
        inputEmail.removeAttribute('style', 'margin-bottom: 40px')
    }
    if(inputEmail.value.length) {
        inputEmailNoti.setAttribute('style', 'display: none')
        inputEmail.setAttribute('style', 'margin-bottom: 40px')
    }
}

inputEmail.addEventListener('input', e => {
    // console.dir(e)
    valueOfEmailAndPw()
})

inputPw.addEventListener('input', e => {
    valueOfEmailAndPw()
})