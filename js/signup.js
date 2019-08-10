let signInputId = document.querySelector('.signInputID')
let signInputName = document.querySelector('.signInputName')
let signInputPw = document.querySelector('.signInputPw')
let signInputProfile = document.querySelector('.signInputProfile')
let getDom = document.getElementsByClassName('getDom')
let signUpBtn = document.querySelector('.signUpBtn')
let signInputIdNoti = document.querySelector('.signInputIDNoti')
let signInputNameNoti = document.querySelector('.signInputNameNoti')
let signInputPwNoti = document.querySelector('.signInputPwNoti')
let signInputProfileNoti = document.querySelector('.signInputProfileNoti')
// console.dir(Array.isArray(typeof getDom) + ' 배열이 아님, 유사배열 같음')
// console.dir(getDom)
const getDoms = Array.prototype.slice.call(getDom)

getDoms.forEach( ele => {
    ele.addEventListener('input', () => {
        // console.log(e.target.value)
        // console.dir(getDoms[i])
        if(getDoms[0].value.length && getDoms[1].value.length 
            && getDoms[2].value.length && getDoms[3].value.length) {
            // console.log('all value')
            signUpBtn.setAttribute('style', 'background-color: dodgerblue')    
        }
        else {
            signUpBtn.setAttribute('style', 'background-color: gray')
        }
    })
})

const checkValue = () => {
    if(getDoms[0].value.length) { 
        console.log('??')
        signInputIdNoti.setAttribute('style', 'display: none');
        signInputId.setAttribute('style', 'margin-bottom:40px');
    }
    if(getDoms[0].value.length === 0) {
        console.log('??')
        signInputIdNoti.removeAttribute('style', 'display: none');
        signInputId.removeAttribute('style', 'margin-bottom:40px')
    }
    if(getDoms[1].value.length) { 
        console.log('??')
        signInputNameNoti.setAttribute('style', 'display: none');
        signInputName.setAttribute('style', 'margin-bottom:40px');
    }
    if(getDoms[1].value.length === 0) {
        signInputNameNoti.removeAttribute('style', 'display: none');
        signInputName.removeAttribute('style', 'margin-bottom:40px')
    }
    if(getDoms[2].value.length) { 
        signInputPwNoti.setAttribute('style', 'display: none');
        signInputPw.setAttribute('style', 'margin-bottom:40px');
    }
    if(getDoms[2].value.length === 0) {
        signInputPwNoti.removeAttribute('style', 'display: none');
        signInputPw.removeAttribute('style', 'margin-bottom:40px')
    }
    if(getDoms[3].value.length) { 
        signInputProfileNoti.setAttribute('style', 'display: none');
        signInputProfile.setAttribute('style', 'margin-bottom:40px');
    }
    if(getDoms[3].value.length === 0) {
        signInputProfileNoti.removeAttribute('style', 'display: none');
        signInputProfile.removeAttribute('style', 'margin-bottom:40px')
    }
}
getDoms.forEach( ele => {
    ele.addEventListener('input', () => {
        checkValue()
    })
})

// signUpBtn.addEventListener('click', () => {
//     console.log('click')
//     if(getDoms[0].value.length && getDoms[1].value.length 
//         && getDoms[2].value.length && getDoms[3].value.length) {
//             if(getDoms[2].value.length < 6) alert('Password를 6자리 이상 입력해주세요.')
//             return;
//         }
//     // else if(getDoms[2].value.length < 6) alert('Password를 6자리 이상 입력해주세요.')
//     else {
    
//             if(getDoms[0].value.length === 0 && getDoms[1].value.length === 0 
//                 && getDoms[2].value.length === 0 && getDoms[3].value.length === 0) {
//                 alert('ID, Name, Password, Profile을 입력하세요.')
//                 // return;
//             }
//             else if(getDoms[0].value.length === 0) {
//                     if(getDoms[1].value.length === 0) {
//                         if(getDoms[2].value.length === 0) {
//                             alert('ID, Name, Password를 입력하세요.')
                        
//                         }
//                         else if(getDoms[3].value.length === 0) {
//                             alert('ID, Name, Profile을 입력하세요.')
                        
//                         }
//                         else alert('ID, Name을 입력하세요.')
//                     }
//                     else if(getDoms[2].value.length === 0) {
//                         if(getDoms[3].value.length === 0) {
//                             alert('ID, Password, Profile을 입력하세요.')

//                         }
//                         else alert('ID, Password를 입력하세요.')
//                     }
//                     else if(getDoms[3].value.length === 0) {
//                         alert('ID, Profile을 입력하세요.')
                    
//                     }
//                     else alert('ID를 입력하세요.')
//             }
//             else if(getDoms[1].value.length === 0) {
//                 if(getDoms[2].value.length === 0) {
//                     if(getDoms[3].value.length === 0) {
//                         alert('Name, Password, Profile을 입력하세요.')

//                     }
//                     else alert('Name, Password를 입력하세요.')
                    
//                 }
//                 else if(getDoms[3].value.length === 0) {
//                     alert('Name, Profile을 입력하세요.')
                    
//                 }
//                 else alert('Name을 입력하세요.')
//             }
//             else if(getDoms[2].value.length === 0) {
               
//                 if(getDoms[3].value.length === 0) {
//                     alert('Password, Profile을 입력하세요.')

//                 }
//                 else if(getDoms[3].value.length === 0) {
//                     alert('Name, Profile을 입력하세요.')
                    
//                 }
//                 else alert('Password를 입력하세요.')
//             } 
//             else if(getDoms[3].value.length === 0) {
//                 alert('Profile을 입력하세요.')
//             }   
//     }
// })