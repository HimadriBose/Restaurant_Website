const menuItems =  [
    {id: 1, name: 'Blue Berry Chai', price: '$25', img:'./images/BlueBerry_Chai.jpg'}, 
    {id: 2, name: 'Pure Vannila Ice Cream', price: '$89', img:'./images/Carizmatic_IceCream.jpg'}, 
    {id: 3, name: 'Fruit In France', price: '$259', img:'./images/Fruit_Craakkers.jpg'}, 
    {id: 4, name: 'Fruit Bowl', price: '$108', img:'./images/Fruit_Salad.jpg'}, 
    {id: 5, name: 'Authentic Gonzala', price: '$405', img:'./images/Gonzala.jpg'},
    {id: 6, name: 'Soup De Lemon', price: '$95', img:'./images/Lemon_soup.jpg'}, 
    {id: 7, name: 'Pita Bream With Humus', price: '$25', img:'./images/PitaBread_Humus.jpg'}, 
    {id: 8, name: 'Ravioli', price: '$137', img:'./images/Ravioli.jpg'}, 
    {id: 9, name: 'The Great Salad', price: '$15', img:'./images/Salad.jpg'}     
]


function renderMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.dataset.id = item.id;

        const itemImg = document.createElement('img');
        itemImg.src = item.img;
        itemImg.alt = item.name;

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p')
        itemPrice.textContent = item.price;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add To Cart';
        addToCartButton.classList.add('add-to-cart');

        addToCartButton.addEventListener('click', () => addToCart(item));

        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice)
        itemDiv.appendChild(addToCartButton);

        menuContainer.appendChild(itemDiv);
    });
}

const cart = []

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart(){
    const cartContainer = document.querySelector('#cart-items');
    const emptyCartMessage = document.querySelector('#empty-cart-message');
    const cartTotal = document.querySelector('#cart-total');
    const checkOutButton = document.querySelector('#checkout-button');

    cartContainer.innerHTML =  '';
    let total = 0;

    if(cart.length === 0){
        emptyCartMessage.style.display = 'block';
        checkOutButton.disabled = true;
        cartTotal.textContent = '$0';

        return;
    }

    emptyCartMessage.style.display = NamedNodeMap;
    checkOutButton.disabled = false;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemImg = document.createElement('img');
        itemImg.src = item.img;
        itemImg.alt = item.name;

        const itemName = document.createElement('h4');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.classList.add('remove-button');

        removeButton.addEventListener('click', ()=> removeFromCart(item));

        cartItem.appendChild(itemImg);
        cartItem.appendChild(itemName);
        cartItem.appendChild(itemPrice);
        cartItem.appendChild(removeButton);
        cartContainer.appendChild(cartItem);

        total += item.price;
    });
    cartTotal.innerText = '';
    cartTotal.innerText = `${total}`
}

function removeFromCart(itemToRemove){
    const index = cart.findIndex(item => item.id === itemToRemove.id);
    if(index != -1){
        cart.splice(index, 1);
        updateCart();
    }
}

window.onload = renderMenu