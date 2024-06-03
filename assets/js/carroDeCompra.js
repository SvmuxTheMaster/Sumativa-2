document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartContainer = document.getElementById('cart-container');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-title');
      const price = button.getAttribute('data-price');

      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      const itemIndex = cartItems.findIndex(item => item.title === title);
      if (itemIndex !== -1) {
        cartItems[itemIndex].quantity += 1;
      } else {
        cartItems.push({ title, price, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      updateCartUI();
      alert(`${title} añadido al carrito`);
    });
  });

  function updateCartUI() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
      cartContainer.innerHTML = '<p>No hay productos agregados</p>';
    } else {
      let cartHTML = '';
      cartItems.forEach(item => {
        cartHTML += `
                  <div class="cart-item">
                      <p>${item.title} - $${item.price} - Cantidad: ${item.quantity}</p>
                      <button class="btn btn-danger remove-from-cart" data-title="${item.title}">Eliminar</button>
                  </div>
              `;
      });
      cartContainer.innerHTML = cartHTML;

      const removeButtons = document.querySelectorAll('.remove-from-cart');
      removeButtons.forEach(button => {
        button.addEventListener('click', () => {
          const title = button.getAttribute('data-title');
          cartItems = cartItems.filter(item => item.title !== title);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          updateCartUI();
        });
      });
    }
  }

  updateCartUI();
});

function limpiar() {
  localStorage.removeItem("cartItems");
}

function comprar() {
  alert("¡COMPRA REALIZADA EXITOSAMENTE!");
  limpiar();
  window.location.href = ("inicio.html");
}