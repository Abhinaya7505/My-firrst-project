function removeItem(product_id) {
  let productsString = localStorage.getItem("productsArray");
  let qtyString = localStorage.getItem("qty") || "";
  let imgSrcString = localStorage.getItem("imgSrcs") || "";
  let priceString = localStorage.getItem("prices") || "";

  let productsArray = productsString ? productsString.split(",") : [];
  let qtyArray = qtyString ? qtyString.split(",") : [];
  let imgSrcArr = imgSrcString ? imgSrcString.split(",") : [];
  let priceArr = priceString ? priceString.split(",") : [];

  let removePosition = productsArray.indexOf(product_id.toString());

  if (removePosition > -1) {
    productsArray.splice(removePosition, 1);
    qtyArray.splice(removePosition, 1);
    imgSrcArr.splice(removePosition, 1);
    priceArr.splice(removePosition, 1);

    localStorage.setItem("productsArray", productsArray.join(","));
    localStorage.setItem("qty", qtyArray.join(","));
    localStorage.setItem("imgSrcs", imgSrcArr.join(","));
    localStorage.setItem("prices", priceArr.join(","));

    if (productsArray.length === 0) {
      // Clear all cart data
      let d = new Date();
      d.setMonth(d.getMonth() - 1);
      document.cookie = "username=;expires=" + d.toUTCString() + ";path=/";
      localStorage.setItem("productsArray", "");
      localStorage.setItem("qty", "");
      localStorage.setItem("imgSrcs", "");
      localStorage.setItem("prices", "");
      localStorage.setItem("finalHTML", "");
      document.getElementById("flexOutput").innerHTML = "";
    } else {
      renderCart();
    }
  }
}
