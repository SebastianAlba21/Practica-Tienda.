function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("PriceP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// CUPONES.
const coupons = [
  {
    name: "Descuento15",
    discount: 15,
  },
  {
    name: "Descuento30",
    discount: 30,
  },
  {
    name: "Descuento50",
    discount: 50,
  },
];

const isCouponValueValid = function (coupon) {
  return coupon.name === couponValue;
};
const userCoupon = coupons.find(isCouponValueValid);
if (!userCoupon) {
  alert("El cupón" + couponValue + "NO es valido!");
} else {
  const descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("PriceP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

