document.getElementById('do-you-recycle--yes').onclick = function() {
    document.getElementById('recycle--yes--hidden').style = 'display: block';
    document.getElementById('recycle--no--hidden').style = 'display: none';
}

document.getElementById('do-you-recycle--no').onclick = function() {
    document.getElementById('recycle--no--hidden').style = 'display: block';
    document.getElementById('recycle--yes--hidden').style = 'display: none';
}

document.getElementById('recycle-type--other').onclick = function() {
    if (document.getElementById('recycle-type--other').checked) {
        document.getElementById('recycle-type--other--hidden').style = 'display: block';
    } else {
        document.getElementById('recycle-type--other--hidden').style = 'display: none';
    }
}