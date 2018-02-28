function chlorineYes() {
    document.getElementById('chlorine--yes--hidden').style = 'display: block';
    document.getElementById('chlorine--no--hidden').style = 'display: none';
}

function chlorineNo() {
    document.getElementById('chlorine--no--hidden').style = 'display: block';
    document.getElementById('chlorine--yes--hidden').style = 'display: none';
}

document.getElementById('chlorine--yes').onclick = chlorineYes;
document.getElementById('chlorine--some').onclick = chlorineYes;
document.getElementById('chlorine--none').onclick = chlorineNo;
document.getElementById('chlorine--not-applicable').onclick = chlorineNo;

document.getElementById('chlorine-type--other').onclick = function() {
    if (document.getElementById('chlorine-type--other').checked) {
        document.getElementById('chlorine-type--other--hidden').style = 'display: block';
    } else {
        document.getElementById('chlorine-type--other--hidden').style = 'display: none';
    }
}