function Increase (id, inc) {
    switch(id) {
        case 1:
            var affinityw = document.getElementById('1')
            var items = affinityw.getElementsByClassName('fas')

            for(var i; i < items.length; i++) {
                if(items[i].className.includes('affinity-active')) {
                    items[inc + i].className('affinity-active')
                }
            } 
        break
 
        case 2:
        break

        case 3:
        break

        case 4:
            var affinityw = document.getElementById('4')
                var items = affinityw.getElementsByTagName('i')

                for(var i; i < items.length; i++) {
                    if(items[i].className.includes('hunger-active')) {
                        items[inc - i].classList.remove('hunger-active')
                    }
                } 
        break
    }
}

function Decrease (id, inc) {
    switch(id) {
        case 1:
            var affinityw = document.getElementById('1')
            var items = affinityw.getElementsByTagName('i')

            for(var i; i < items.length; i++) {
                if(items[i].className.includes('affinity-active')) {
                    items[inc - i].classList.remove('affinity-active')
                }
            } 
        break
 
        case 2:
        break

        case 3:
        break

        case 4:
        break
    }
}


function FoodClick() {
    Increase(1, 1)
    Increase(4, 0)
    Decrease(4, 0)
}