export function formatValuta(priceFening) {
  return (Math.round(priceFening) / 100).toFixed(2);
}

export default formatValuta;
