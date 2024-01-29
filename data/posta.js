function deliveryOptionsHTML() {
  let html = "";

  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("DD.MM.YYYY.");
    const priceDelivery = formatValuta(deliveryOption.priceFening);
    html += `
      <div class="delivery-options-title">Odaberite opciju dostave:</div>
      <div class="delivery-option">
                <input type="radio" class="delivery-option-input" />
                <div>
                  <div class="delivery-option-date">${dateString}</div>
                  <div class="delivery-option-price">${priceDelivery} KM - Brza pošta</div>
                </div>
          `;
    document.querySelector(".payment-summary").innerHTML = html;
  });
  return deliveryOptionsHTML();
}
