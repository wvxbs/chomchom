function addName() {
    name = document.getElementById('form-name').value
    type = document.getElementById('form-type').value
    
}

sessionStorage.setItem('name', name)
document.getElementById('name-out').innerHTML = 'cuide do ' + name  +  '!'

