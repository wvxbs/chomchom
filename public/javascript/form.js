var Name = document.getElementById('form-name').value 
var Type = document.getElementById('form-type').value

console.log(Name)

if(typeof(Storage) !== "undefined") {
    sessionStorage.setItem("name", Name)
    var name = document.getElementById('name-out').innerHTML =   
}
