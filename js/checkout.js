function checkOut() {
  let myImageArr = localStorage.getItem("imgSrcs");
  let qtyArr = localStorage.getItem("qty");
  let priceArr = localStorage.getItem("prices");

  if (!myImageArr || myImageArr === "") {
    alert("Your cart is empty!");
    return;
  }

  let imgSrcs = myImageArr.split(",");
  let quantities = qtyArr ? qtyArr.split(",") : [];
  let prices = priceArr ? priceArr.split(",") : [];

  let myTable = `<table><tr><th class="table-product-heading">Product</th><th class="table-items-heading">Quantity</th><th class="table-items-heading">Price</th><th class="table-total-heading">Total</th></tr>`;
  let grandTotal = 0;

  for (let i = 0; i < imgSrcs.length; i++) {
    let tot = Number(quantities[i] || 1) * Number(prices[i] || 0);
    grandTotal += tot;
    // Escape apostrophes in img src for proper HTML rendering
    let safeImgSrc = imgSrcs[i].replace(/'/g, "&#39;");
    myTable += `<tr>
      <td class="table-product-content"><img src="${safeImgSrc}" style="width:100px;height:100px;object-fit:cover;border:1px solid white;"></td>
      <td class="table-product-items">${quantities[i] || 1}</td>
      <td class="table-product-items">₹${prices[i]}</td>
      <td class="table-product-total">₹${tot}</td>
    </tr>`;
  }

  myTable += `<tr><td colspan="3" style="text-align:center;">Grand Total</td><td class="table-total-heading">₹${grandTotal}</td></tr></table>`;

  let billDiv = `<div id="billTable">
    <h2>Your Final Bill:</h2>
    ${myTable}
  </div>
  <div id="buttons2">
    <button id="backToCart" class="btn btn-danger" onclick="goBack()">Back</button>
    <button class="btn btn-success" id="pay" onclick="proceedPayment(${grandTotal})">Proceed To Pay</button>
  </div>
  <div id="bankInfo" class="bg-info"></div>`;

  document.getElementById("finalBill").style.display = "block";
  document.getElementById("finalBill").innerHTML = billDiv;
}

function goBack() {
  document.getElementById("finalBill").innerHTML = "";
  document.getElementById("finalBill").style.display = "none";
}
