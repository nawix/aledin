export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 2,
    priceFening: 1000,
  },
  {
    id: "2",
    deliveryDays: 4,
    priceFening: 620,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption;
}
