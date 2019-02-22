var Name = document.getElementById('form-name').value 
var Type = document.getElementById('form-type').value
if(Name != null || Type != null) {
    document.getElementById('go').classList.toggle('is')
}

if(typeof(Storage) !== "undefined") sessionStorage.setItem("name", Name)

document.getElementById('name-out').innerHTML = sessionStorage.getItem('name')