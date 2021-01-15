function numbers() {
  document.querySelector('.controls .one').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "1"
  })
  
  document.querySelector('.controls .two').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "2"
  })
  
  document.querySelector('.controls .three').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "3"
  })
  
  document.querySelector('.controls .four').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "4"
  })
  
  document.querySelector('.controls .five').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "5"
  })
  
  document.querySelector('.controls .six').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "6"
  })
  
  document.querySelector('.controls .seven').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "7"
  })
  
  document.querySelector('.controls .eight').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "8"
  })
  
  document.querySelector('.controls .nine').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "9"
  })
  
  document.querySelector('.controls .zero').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "0"
  })
  
}

function actions() {
  document.querySelector('.controls .eraseAll').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value = ""
  })
}

function operators() {
  document.querySelector('.controls .operator-equal').addEventListener('click', () => {
    let input = document.getElementById('value')
    let result = eval(input.value)
    input.value = result
  })

  document.querySelector('.controls .div').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "/"
  })

  document.querySelector('.controls .multi').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "*"
  })

  document.querySelector('.controls .sub').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "-"
  })

  document.querySelector('.controls .plus').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "+"
  })

  document.querySelector('.controls .dot').addEventListener('click', () => {
    let input = document.getElementById('value')
    input.value += "."
  })
}

function calc() {

}

numbers()
actions()
operators()