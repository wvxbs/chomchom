function addName() {
    name = document.getElementById('form-name').value
    type = document.getElementById('form-type').value
    
}

document.getElementById('name-out').innerHTML = 'Cuide do ' + name  +  '!'
document.getElementById('type-out').innerHTML = 'O ' + type + ''

