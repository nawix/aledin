import { cart } from "../../data/cart.js";

export function renderCheckoutHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
  <div class="checkout-header">
  <div class="header-content">
    <div class="checkout-header-left-section">
      <a href="index.html">
        <img
          class="amazon-logo"
          src="images/aleldin-high-resolution-logo-transparent.png"
        />
        <img
          class="amazon-mobile-logo"
          src="images/aleldin-favicon-black.png"
        />
      </a>
    </div>

    <div class="checkout-header-middle-section">
      Potvrda narudžbe (<a class="return-to-home-link js-return-to-home-link"
        href="index.html"
      >${cartQuantity} artikala</a
      >)
    </div>

    <div class="checkout-header-right-section">
      <img src="images/icons/checkout-lock-icon.png" />
    </div>
  </div>
</div>
  `;

  document.querySelector(".js-checkout-header").innerHTML = checkoutHeaderHTML;
}
