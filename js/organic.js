document.getElementById('use-organic--yes').onclick = function() {
    document.getElementById('use-organic--no--hidden').style = 'display: none';
}

document.getElementById('use-organic--no').onclick = function() {
    document.getElementById('use-organic--no--hidden').style = 'display: block';
}

document.getElementById('use-organic--some').onclick = function() {
    document.getElementById('use-organic--no--hidden').style = 'display: block';
}