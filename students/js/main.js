// Login Data
let username = document.getElementById('full-name');
let age = document.getElementById('age');
let submit = document.getElementById('submit');
let theme = document.getElementById('theme');

// Login Page
let login = document.getElementById('login')
// info section && user info
let info = document.getElementById('info')
let current_name = document.querySelector('#current_name strong')
let current_age = document.querySelector('#current_age strong')
let current_theme = document.querySelector('#current_theme strong')
// info-bar
let info_bar = document.getElementById('info-bar')
// info bar
let welcome_msg = document.getElementById('welcome-msg');
let counter = document.getElementById('counter');
let times = document.getElementById('times')
// title 
let title = document.querySelectorAll('#title')
// text
let text = document.querySelectorAll('#text')

function randomNum(max,min) {
    return Math.floor(Math.random() * (max - min + min) + min)
}

function setInfo() {
    let selectedValue = theme.value;
    current_name.innerHTML = username.value
    current_age.innerHTML = age.value
    current_theme.innerHTML = selectedValue;
    console.log(selectedValue)
    if(randomNum(10,0) % 2 == 0) {
        welcome_msg.innerHTML = `Welcome Back ${username.value} !`
    }else if(randomNum(10,0) % 2 != 0) {
        welcome_msg.innerHTML = `Nice To See You Again ${username.value} !`
    }else {
        welcome_msg.innerHTML = `How Are You Today ${username.value} ?`
    }
    

    if(selectedValue == 'cars') {
        console.log('cars')
        document.body.classList.add('cars')
        info_bar.classList.add('cars')
        for(let i = 0; i < title.length; i++) {
            title[i].classList.add('cars')
        }
    }else if(selectedValue == 'space') {
        console.log('space')
        document.body.classList.add('space')
        info_bar.classList.add('space')
        for(let i = 0; i < title.length; i++) {
            title[i].classList.add('space')
        }
    }else if(selectedValue == 'dinosaurs') {
        console.log('dia')
        document.body.classList.add('dinosaurs')
        info_bar.classList.add('dinosaurs')
        for(let i = 0; i < title.length; i++) {
            title[i].classList.add('dinosaurs')
        }
    }
}

// Start Calc
// calc
let calc = document.getElementById('calc');
// Calc Screen
let display = document.getElementById('display');
// Get Operator Btns
let operators = document.getElementsByName('operator');
// Get Nums Btns
let nums = document.querySelectorAll('#num');

function addToDisplay(e) {
    display.value += e.value;
}

for(let i =0; i< nums.length;i++) {
    nums[i].onclick = () => {
        addToDisplay(nums[i])
    }
}

operators.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.id === "equal") {
            if(display.value != '') {
                display.value = eval(display.value);
                times.value++
                counter.innerHTML = `Problem Solved : ${times.value}`;
            }else {
                display.value = 'Please Insert Numbers'
                setTimeout(() => {
                    display.value = ''
                }, 1000);
            }
        }else if(btn.id === "clear"){
            if(display.value != '') {
                display.value = "";
            }else {
                display.value = 'There Is Nothing To Clear'
                setTimeout(() => {
                    display.value = ''
                }, 1000);
            }
        }else if(btn.id === "plus"){
            addToDisplay(btn)
        }else if(btn.id === "minus"){
            addToDisplay(btn)
        }else if(btn.id === "bigger"){
            addToDisplay(btn)
        }else if(btn.id === "smaller"){
            addToDisplay(btn)
        }
    })
});


setInterval(() => {
    localStorage.setItem('counter', times.value)
}, 300);
window.onload = () => {
    let solved = localStorage.getItem('counter');
    times.value = solved;
    counter.innerHTML = `Problem Solved : ${times.value}`;
}



// Submit

submit.onclick = (e) => {
    e.preventDefault()
    login.classList.add('none')
    info_bar.classList.remove('none')
    info.classList.remove('none')
    calc.classList.remove('none')
    let usernameRegex = /yassien/; // (1234) 567-8910
    let usernameValidation = usernameRegex.test(username.value);
    let ageRegex = /123/; // (1234) 567-8910
    let ageValidation = ageRegex.test(age.value);
    if (usernameValidation === false || ageValidation === false) {
        alert('You Need To Enter Data')
        location.reload()
    }
    setInfo();

}
