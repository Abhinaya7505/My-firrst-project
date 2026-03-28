function proceedPayment(total) {
  let cardDiv = `<img src="images/visa.svg" style="height:30px;margin:5px;"><img src="images/mastercard.svg" style="height:30px;margin:5px;"><img src="images/amex.svg" style="height:30px;margin:5px;"><img src="images/discover.svg" style="height:30px;margin:5px;">`;
  cardDiv += `<H4 style="margin:10px auto auto auto">Amount Payable: ₹${total}</H4>`;

  cardDiv += `<div style="width:auto;margin:auto;">
    <div style="float:left;margin:10px auto auto auto;">
      <label>Card Number:</label>
      <input type="text" style="width:50px;text-align:center;" maxlength="4">-
      <input type="text" style="width:50px;text-align:center;" maxlength="4">-
      <input type="text" style="width:50px;text-align:center;" maxlength="4">-
      <input type="text" style="width:50px;text-align:center;" maxlength="4">
    </div>
    <div style="margin:10px 10px auto auto;float:right;">
      CVV/CVV2:<input type="password" style="appearance:none;padding-left:15px;width:70px;background-size:15px auto;background-position:1px 5px;background-repeat:no-repeat;" maxlength="3">
    </div>
  </div>`;
  
  cardDiv += `<div style="margin:10px auto auto 27px;clear:left;">
    <label>Valid thru:</label>
    <input type="text" style="width:40px;text-align:center;margin-top:10px;" maxlength="2">/
    <input type="text" style="width:40px;text-align:center;margin-top:10px;" maxlength="2">
  </div>
  <hr style="margin:0px;padding:0px;">`;
  
  cardDiv += `<button class="btn btn-success" onclick="paymentSuccessfull()" style="float:right;margin-right:15px;">Confirm payment</button>`;
  
  document.getElementById("bankInfo").innerHTML = cardDiv;
  $("#bankInfo").slideDown(1000);
}
