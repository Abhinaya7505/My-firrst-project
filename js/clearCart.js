function clearCart() {
  let d = new Date();
  d.setMonth(d.getMonth() - 1);
  document.cookie = "username=;expires=" + d.toUTCString() + ";path=/";
  localStorage.setItem("productsArray", "");
  localStorage.setItem("qty", "");
  localStorage.setItem("imgSrcs", "");
  localStorage.setItem("prices", "");
  localStorage.setItem("finalHTML", "");
  document.getElementById("flexOutput").innerHTML = "";
}
