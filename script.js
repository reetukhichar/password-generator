const genPassBtn = document.querySelector('#gen-pass-btn');
const showDiv = document.querySelector('.show-pass-div');
const password = document.querySelector('#password');
password.innerText = "";
const passLength = document.querySelector('#password-length');
const rangeInput = document.querySelector('#range-input');
const passType = document.querySelector('.password-type');

let isUppercase = false;
let isNumber = false;
let isSymbol = false;
let passw = "";
let lengthValue = 8;
passLength.innerText = 8;

rangeInput.addEventListener('input', (e) => {
    passLength.innerText = +e.target.value;
    lengthValue = passLength.innerText;
});

genPassBtn.addEventListener('click',() => {
    let str = "";
    const lowercase = 'abcdefghijklmnopqrstuvwyxyz';
    const uppercase = isUppercase ?  'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : "";
    const numbers = isNumber ? '0123456789' : "";
    const symbols = isSymbol ? '~`!@#$%^&*()*+-./_\|?:;<=>': "";

    for(let i = 0; i < lengthValue; i++){
        let passString = lowercase + uppercase + numbers + symbols;
        const random = Math.floor(Math.random() * passString.length);
        const character = passString.charAt(random);
        str += character;
    }
    passw = str;
    str = "";
    password.innerText = passw;    
});
showDiv.addEventListener('click', (e) => {
    if(e.target.innerText.length > 0) {
        navigator.clipboard.writeText(password.innerText).then(() => {
            alert('Copied the Password');
        })
        .catch((error) => {
            console.log("Could not Copy");
        });
    }
});

passType.addEventListener('click', () => {
    const upper = document.querySelector('#upper');
    const numeric = document.querySelector('#numeric');
    const symbol = document.querySelector('#symbol');

    isUppercase = upper.checked;
    isNumber = numeric.checked;
    isSymbol = symbol.checked;
});
