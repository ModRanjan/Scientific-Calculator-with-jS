let screen = document.querySelector('#screen');
let button = document.querySelectorAll('.display');

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
        if (btntext == 'mod') {

            btntext = '%';
        }
        screen.value += btntext;
    })
}
// function to find exponential X^y
function exponential() {
    if (screen.value === "" || screen.value == "0") {
        return screen.value = "0"
    }
    else {
        btntext = '**';
        screen.value += btntext;
    }
}
// function to find radian value
function rad() {
    screen.value = ((screen.value) * (Math.PI / 180));
}
// function to find degree value
function deg() {
    screen.value = (screen.value * 180 / Math.PI);
}
// trigonometric functions
function sin() {
    let check = document.getElementsByName("options")
    console.log(check)
    if (check[0].checked == false) {
        screen.value = Math.sin(screen.value)
    }
    else if (check[1].checked == false) {
        let value = ((screen.value) * (Math.PI / 180));
        screen.value = Math.sin(value)
    }
}
function cos() {
    let check = document.getElementsByName("options")
    if (check[0].checked == false) {
        screen.value = Math.cos(screen.value)
    }
    else if (check[1].checked == false) {
        let value = ((screen.value) * (Math.PI / 180));
        screen.value = Math.cos(value)
    }
}
function tan() {
    let check = document.getElementsByName("options")
    if (check[0].checked == false) {
        screen.value = Math.tan(screen.value)
    }
    else if (check[1].checked == false) {
        let value = ((screen.value) * (Math.PI / 180));
        screen.value = Math.tan(value)
    }
}
function csc() {
    let check = document.getElementsByName("options")
    if (check[0].checked == false) {
        screen.value = Math.csc(screen.value)
    }
    else if (check[1].checked == false) {
        let value = ((screen.value) * (Math.PI / 180));
        screen.value = Math.csc(value)
    }
}
function sec() {
    let check = document.getElementsByName("options")
    if (check[0].checked == false) {
        screen.value = Math.sec(screen.value)
    }
    else if (check[1].checked == false) {
        let value = ((screen.value) * (Math.PI / 180));
        screen.value = Math.sec(value)
    }

}
function cot() {
    let check = document.getElementsByName("options")
    if (check[0].checked == false) {
        screen.value = Math.cot(screen.value)
    }
    else if (check[1].checked == false) {
        let value = ((screen.value) * (Math.PI / 180));
        screen.value = Math.cot(value)
    }

}
// function to find ceil_value
function ceil_value() {
    screen.value = Math.ceil(screen.value)
}
// function to find floor_value
function floor_value() {
    screen.value = Math.floor(screen.value)
}
// function to find square/cube
function pow() {
    let check = document.getElementById("square")
    if (check.innerHTML == "x<sup>3</sup>") {
        screen.value = Math.pow(screen.value, 3)
    } else {
        screen.value = Math.pow(screen.value, 2)
    }
}
// function to find square-root/cube-root
function sqrt() {
    let check = document.getElementById("sqrt")
    if (check.innerHTML == "&#x221B;x") {
        screen.value = Math.cbrt(screen.value)
    } else {
        screen.value = Math.cbrt(screen.value)
    }
}
// function to find 10 of any power
function powerten() {
    let check = document.getElementById("power10")
    if (check.innerHTML == "2<sup>x</sup>") {
        screen.value = Math.pow(2, screen.value)
    } else {
        screen.value = Math.pow(10, screen.value)
    }
}
//  function to find log-base-10/log-base-Y X
function logb10() {
    let check = document.getElementById("log10")
    if (screen.value === "") {
        screen.value = "invalid input"
    }
    else if (check.innerHTML == "log<sub>y</sub> X") {
        screen.value = Math.log10(screen.value);    // Math.log(y) / Math.log(x);
    }
    else {
        screen.value = Math.log10(screen.value)
    }
}
//  function to find log
function log() {
    let check = document.getElementById("log10")
    if (screen.value === "") {
        screen.value = "invalid input"
    }
    else if (check.innerHTML == "log<sub>y</sub> X") {
        screen.value = Math.exp(screen.value)
    }
    else {
        screen.value = Math.log(screen.value)
    }
}


function pi() {
    screen.value = Math.PI
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
}
// function to delete last digit
function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}
// function to find inverse
function inverse() {
    if (screen.value == "0") {
        screen.value = "Cannot divide by 0"
    }
    else if (screen.value === "") {
        screen.value = "0"
    }
    else {
        screen.value = 1 / (screen.value)
    }
}
// function to find absolute value
function absolute() {
    screen.value = Math.abs(screen.value)
}

// function to find minus_plus
function minus_plus() {
    screen.value = -(screen.value);
    arr.push(-(screen.value));
}
// function to saveHistory
let store = undefined
function saveHistory() {
    document.getElementsByClassName("disable").disabled = false;
    store = screen.value;
}
function showHistory() {
    if (store == undefined) {
        screen.value = ""
    } else
        screen.value = store
}
function minusM() {
    if (store === undefined) {
        screen.value = "No Data Found"
    } else
        screen.value = eval(screen.value - store);
}
function plusM() {
    if (store === undefined) {
        screen.value = "No Data Found"
    } else
        screen.value = eval(Number(store) + Number(screen.value));
}
// Clear Array Data
function clearHistory() {
    arr = []
    screen.value = "0"
}
// function to equals-to
function result() {
    if (screen.value === ".") {
        screen.value = screen.value
    }
    else {
        screen.value = eval(screen.value);
    }
}
let count = 1
function change() {
    console.log(count)
    if (count >> 1 == 0) {
        document.getElementById("change").innerHTML = "1<sup>st</sup>"
        document.getElementById("square").innerHTML = "x<sup>3</sup>"
        document.getElementById("sqrt").innerHTML = "&#x221B;x"
        document.getElementById("expo").innerHTML = "<sup>y</sup>&radic;x"
        document.getElementById("power10").innerHTML = "2<sup>x</sup>"
        document.getElementById("log10").innerHTML = "log<sub>y</sub> X"
        document.getElementById("ln").innerHTML = "e<sup>x</sup>"
        count = count + 1
    }
    else {
        document.getElementById("change").innerHTML = "2<sup>nd</sup>"
        document.getElementById("square").innerHTML = "x<sup>2</sup>"
        document.getElementById("sqrt").innerHTML = "<sup>2</sup>&radic;x"
        document.getElementById("expo").innerHTML = "x<sup>y</sup>"
        document.getElementById("power10").innerHTML = "10<sup>x</sup>"
        document.getElementById("log10").innerHTML = "log"
        document.getElementById("ln").innerHTML = "ln"
        count=1
    }
}