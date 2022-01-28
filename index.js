let screen = document.querySelector('#screen');
let button = document.querySelectorAll('.display');
let arr = [];

let i = 0;
document.addEventListener('keypress', (event) => {
    var name = event.key;
    if ((name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) || name === '*' || name === '+' || name === '-' || name === '%') {
        screen.value += name;
    }
}, false);

for (item of button) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'X') {
            btntext = '*';
        }
        if (btntext == '%') {
            btntext = '/';
        }
        if (btntext == 'mod') {

            btntext = '%';
        }

        screen.value += btntext;
    })
}
// function to find exponential X^y
function exponential() {
    if(screen.value==="" || screen.value=="0"){
        screen.value="0"
    }
    else{
        btntext = '**';
        screen.value += btntext;
    }
}

function sin() {
    screen.value = Math.sin(screen.value)
    arr.push(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value)
    arr.push(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value)
    arr.push(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2)
    arr.push(screen.value);
}
// function to find square-root
function sqrt() {
    screen.value = Math.sqrt(screen.value)
    arr.push(screen.value);
}
//  function to find log
function log() {
    if (screen.value === "") {
        screen.value = "invalid input"
    }
    else {
        screen.value = Math.log(screen.value)
        arr.push(screen.value);
    }
}
//  function to find log-base-10
function logb10() {
    if (screen.value === "") {
        screen.value = "invalid input"
    }
    else {
        screen.value = Math.log10(screen.value)
        arr.push(screen.value);
    }
}

function pi() {
    screen.value = eval(22/7)
}

function e() {
    screen.value = 2.718281828459045
}
//  function to find factorial
function factorial() {
    var tot = 1
    var num = screen.value
    while (num >= 1) {
        tot = tot * num
        num -= 1
    }
    screen.value = tot
    arr.push(screen.value);

}
// function to delete last digit
function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}
// function to find inverse
function inverse() {
    if(screen.value=="0"){
        screen.value="Cannot divide by 0"
    }
    else if(screen.value===""){
        screen.value="0"
    }
    else{
        screen.value = 1 / (screen.value)
        arr.push(screen.value);
    }
}
// function to find absolute value
function absolute() {
    screen.value=Math.abs(screen.value)
}
// function to find 10 of any power
function powerten() {
    screen.value = Math.pow(10, screen.value)
    arr.push(screen.value);
}
// function to find minus_plus
function minus_plus() {
    screen.value = -(screen.value);
    arr.push(-(screen.value));
}
function minusm() {
    if (arr.length - i <= 0) {
        i = i + 1;
        screen.value = 'NO DATA'
    }
    else {
        i = i + 1;
        screen.value = arr[arr.length - i];
    }

}

function plusm() {
    if (i <= 1) {
        if (i != 0) {
            i = i - 1
        }
        screen.value = "NO DATA"
    }
    else {
        i = i - 1;
        screen.value = arr[arr.length - i];

    }
}

function mcbutton() {
    arr = []

}
// function to equals-to
function result() {
    if (screen.value === ".") {
        screen.value = "0"
    }
    else {
        screen.value = eval(screen.value);
        arr.push(screen.value);
    }
}