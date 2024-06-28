function openMenuItem(title, price, image) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-price').textContent = price;
    document.getElementById('popup-img').src = image;
    document.getElementById('menu-popup').style.display = 'block';
}

function closeMenuItem() {
    document.getElementById('menu-popup').style.display = 'none';
}
