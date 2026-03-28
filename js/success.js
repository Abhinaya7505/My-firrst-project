function paymentSuccessfull() {
  alert("Thank you for shopping with us. Your order will be delivered shortly");
  clearCart();
  document.getElementById("finalBill").innerHTML = "";
  document.getElementById("finalBill").style.display = "none";
}
