var name, type, img, desc, div, receive
function addName() {
    name = document.getElementById('form-name').value
    type = document.getElementById('form-type').value
    desc = document.getElementById('desc').value
    img = document.getElementById('form-img').value
    div = document.getElementById('img')

    if(receive == 1) {
        var f1 = new Image(256, 256)
        f1.src = '../images/edward1.jpeg'
        div.appendChild(f1)
    } else if(receive == 2) {   
            var f2 = new Image(256, 256)
            f2.src = '../images/edward2.jpeg'
            div.appendChild(f2)
        } else if (receive == 3) {
                var f3 = new Image(256,256)
                f3.src = '../images/sheldon1.jpeg'
                div.appendChild(f3)
            }
}

document.getElementById('type-out').innerHTML = 'O ' + type + ''
document.getElementById('name-out').innerHTML = 'Cuide do ' + name  +  '!'
document.getElementById('desc-out').innerHTML = desc
