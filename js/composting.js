document.getElementById('do-you-compost--yes').onclick = function() {
    document.getElementById('compost--no--hidden').style = 'display: none';
}

document.getElementById('do-you-compost--no').onclick = function() {
    document.getElementById('compost--no--hidden').style = 'display: block';
}