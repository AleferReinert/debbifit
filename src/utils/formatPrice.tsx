export function formatPrice(price: number, discount: number | null) {
  const priceWithDiscount = Math.round((price / 100) * (100 - discount!))

  return `R$ ${discount ? priceWithDiscount : price}`
}
