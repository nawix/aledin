import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatValuta } from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceFening = 0;
  let shippingPriceFening = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceFening += product.priceFening * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceFening = deliveryOption.priceFening;
  });

  const totalPriceFening = productPriceFening + shippingPriceFening;

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const paymentSummaryHTML = `
    <div class="payment-summary-title">Potvrda narudžbe</div>

    <div class="payment-summary-row">
    <div>Artikli (${cartQuantity}):</div>
    <div class="payment-summary-money">${formatValuta(
      productPriceFening
    )} KM</div>
    </div>

    <div class="payment-summary-row">
    <div>Poštarina:</div>
    <div class="payment-summary-money">${formatValuta(
      shippingPriceFening
    )} KM</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Ukupno:</div>
    <div class="payment-summary-money">${formatValuta(
      totalPriceFening
    )} KM</div>
    </div>


    <div class="payment-summary-row total-row">
    <div>Ukupno za naplatu:</div>
    <div class="payment-summary-money">${formatValuta(
      totalPriceFening
    )} KM</div>
    </div>

    <button class="place-order-button button-primary">
    Potvrdite narudžbu
    </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}
