document.addEventListener('DOMContentLoaded', function() {
  const gridViewBtn = document.getElementById('gridViewBtn');
  const listViewBtn = document.getElementById('listViewBtn');
  const productContainer = document.getElementById('product-container');

  if (productContainer) {
    // By default, list view ko active class dein
    productContainer.classList.add('list-view');
  }

  if (gridViewBtn) {
    gridViewBtn.addEventListener('click', function() {
      console.log('Grid View button clicked!');
      if (productContainer) {
        productContainer.classList.remove('list-view');
        productContainer.classList.add('grid-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
      }
    });
  }

  if (listViewBtn) {
    listViewBtn.addEventListener('click', function() {
      console.log('List View button clicked!');
      if (productContainer) {
        productContainer.classList.remove('grid-view');
        productContainer.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
      }
    });
  }
});


/* --------------grid view for product listing page  up---------- */



// ----------javascript code for showing counting numbers in cart icon (down)---------//

document.addEventListener('DOMContentLoaded', () => {

    // Common function to update cart count from Local Storage
    const updateCartCount = () => {
        let itemCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
        const cartCountElement = document.getElementById('cart-count');
        
        if (cartCountElement) {
            cartCountElement.textContent = itemCount;
            if (itemCount > 0) {
                cartCountElement.style.display = 'inline-block';
            } else {
                cartCountElement.style.display = 'none';
            }
        }
    };

    // Call the function on page load to display the correct count
    updateCartCount();

    // The rest of the code is specific to product-details.html
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        
        // Tab switching functionality
        const tabs = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(item => item.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                tab.classList.add('active');
                const targetTabId = tab.getAttribute('data-tab');
                document.getElementById(targetTabId).classList.add('active');
            });
        });

        // Quantity selector functionality
        const minusBtn = document.querySelector('.quantity-btn.minus');
        const plusBtn = document.querySelector('.quantity-btn.plus');
        const quantityInput = document.getElementById('quantity');

        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        // Add to Cart functionality with count update
        const cartNotification = document.getElementById('cartNotification');

        addToCartBtn.addEventListener('click', () => {
            let itemCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
            itemCount++;
            localStorage.setItem('cartCount', itemCount);

            // Update cart count on the current page
            updateCartCount();

            if (cartNotification) {
                cartNotification.classList.add('show');
                
                setTimeout(() => {
                    cartNotification.classList.remove('show');
                }, 3000);
            }
        });
    }
});





//----------------------------- in cart page for removing the product--------------------------//

document.addEventListener('DOMContentLoaded', function() {
    // Select all remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');

    // Add a click event listener to each remove button
    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();
            
            // Find the parent element to remove (the whole product card)
            const cartItemCard = button.closest('.cart-item-card');

            // Remove the product card from the DOM
            if (cartItemCard) {
                cartItemCard.remove();
                console.log('Product removed successfully.');
                
                // You can also add logic here to update the cart count and total price
                updateCartCount();
                updateCartTotal();
            }
        });
    });

    // Optional: Functions to update cart count and total
    function updateCartCount() {
        const cartItems = document.querySelectorAll('.cart-item-card').length;
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartItems;
        }
    }

    function updateCartTotal() {
        // Here you would implement logic to recalculate the total price
        // and update the summary section.
        // For example:
        // let total = 0;
        // document.querySelectorAll('.item-price').forEach(priceElement => {
        //     total += parseFloat(priceElement.textContent.replace('$', ''));
        // });
        // document.querySelector('.summary-item.total span:last-child').textContent = '$' + total.toFixed(2);
    }
});