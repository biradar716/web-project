document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Product 1', price: '₹500', imgSrc: 'd1.jpg' },
        { name: 'Product 2', price: '₹1500', imgSrc: 'D3.jpg' },
        { name: 'Product 3', price: '₹2500', imgSrc: 'p1.jpg' },
        { name: 'Product 4', price: '₹3500', imgSrc: 'p2.jpg' },
        
        // Add more products as needed
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'product-box';

        const img = document.createElement('img');
        img.src = product.imgSrc;
        img.alt = product.name;

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = product.price;

        const favoriteIcon = document.createElement('span');
        favoriteIcon.className = 'favorite-icon';
        favoriteIcon.innerHTML = '♥';  // Using HTML entity for heart icon
        favoriteIcon.onclick = function() {
            favoriteIcon.classList.toggle('favorited');
        };

        productBox.appendChild(img);
        productBox.appendChild(name);
        productBox.appendChild(price);
        productBox.appendChild(favoriteIcon);

        productList.appendChild(productBox);
    });

    // Add event listener for the "About" link
    const aboutLink = document.getElementById('about-link');
    const aboutContent = document.getElementById('about-content');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        aboutContent.style.display = aboutContent.style.display === 'none' ? 'block' : 'none';
    });
});
