const colorBtn = document.getElementById('color')
const placeBtn = document.getElementById('place')
const ritualBtn = document.getElementById('ritual')

function myFaveColor() {
    alert('My favorite color is silver')
}

function myFavePlace() {
    alert('My favorite place is home, no holds barred. I am a home body.')
}

function myFaveRitual() {
    alert('My favorite ritual is making breakfast for my family.')
}

colorBtn.addEventListener('click', myFaveColor)
ritualBtn.addEventListener('click', myFaveRitual)
placeBtn.addEventListener('click', myFavePlace)