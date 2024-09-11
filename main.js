// at first put all the used content such as inputs and buttons into the variables 
// and also let's create the temperature variable with '0' as property 

let temp = 0;
const hint = document.getElementById('hintTextbox')
const textBox = document.getElementById('degree_field')
const toCelsiusBtn = document.getElementById('celsius')
const toFahrenheitBtn = document.getElementById('fahrenheit')
const subBtn = document.getElementById('submit_btn')

// put the simple event listener on button 
// we will get the value of input into the variable 'temp' and convert it in another degrees system with formula 
subBtn.onclick = function convert() {
    if (toCelsiusBtn.checked) {
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32
        hint.textContent = temp.toFixed(1) + ' градусов'
    }
    else if (toFahrenheitBtn.checked) {
        temp = (Number(textBox.value))
        temp = (temp - 32) * 5 / 9
        hint.textContent = temp.toFixed(1) + ' градусов'

        // we should prevent bugs when user didn't tap anything on the page, so I added the check in 'else' 

    } else {
        hint.textContent = 'Выберите систему'
    }
}