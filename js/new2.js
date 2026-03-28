function setCookie(cname, cvalue) {
  let myCookie = cname + "=" + cvalue;
  let d = new Date();
  d.setMinutes(d.getMinutes() + 2);
  document.cookie = myCookie + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(cname) {
  let myCookie = cname + "=";
  let allCookies = decodeURIComponent(document.cookie);
  let cookieArray = allCookies.split(";");

  for (let k = 0; k < cookieArray.length; k++) {
    if (cookieArray[k].indexOf(myCookie) != -1) {
      let cvalue = cookieArray[k].substring(cookieArray[k].indexOf("=") + 1);
      if (cvalue === "" || cvalue === null) {
        continue;
      } else {
        return cvalue;
      }
    }
  }
  return "";
}

function addToCart(product_id, product_name, imgSrc, price) {
  let cookieValue = getCookie("username");

  if (!(cookieValue === "") && !(cookieValue === null)) {
    // User already identified
    let productsString = localStorage.getItem("productsArray") || "";
    let qtyString = localStorage.getItem("qty") || "";
    let imgSrcString = localStorage.getItem("imgSrcs") || "";
    let priceString = localStorage.getItem("prices") || "";

    if (productsString === "") {
      productsString = product_id.toString();
      qtyString = "1";
      imgSrcString = imgSrc;
      priceString = price.toString();
    } else {
      productsString += "," + product_id;
      qtyString += ",1";
      imgSrcString += "," + imgSrc;
      priceString += "," + price;
    }

    localStorage.setItem("productsArray", productsString);
    localStorage.setItem("qty", qtyString);
    localStorage.setItem("imgSrcs", imgSrcString);
    localStorage.setItem("prices", priceString);

    renderCart();
  } else {
    // New user - prompt for name
    let uname = prompt("Introduce Yourself");
    if (!(uname === null) && !(uname === "")) {
      setCookie("username", uname);

      let productsArray = product_id.toString();
      localStorage.setItem("productsArray", productsArray);
      localStorage.setItem("qty", "1");
      localStorage.setItem("imgSrcs", imgSrc);
      localStorage.setItem("prices", price.toString());
      localStorage.setItem("finalHTML", "");

      renderCart();
    }
  }
}

function renderCart() {
  let cookieValue = getCookie("username");
  let productsString = localStorage.getItem("productsArray");
  let qtyString = localStorage.getItem("qty");
  let imgSrcString = localStorage.getItem("imgSrcs");
  let priceString = localStorage.getItem("prices");

  if (!productsString || productsString === "") {
    document.getElementById("flexOutput").innerHTML = "";
    return;
  }

  let prodArray = productsString.split(",");
  let qtyArray = qtyString ? qtyString.split(",") : [];
  let imgSrcArr = imgSrcString ? imgSrcString.split(",") : [];
  let priceArr = priceString ? priceString.split(",") : [];

  let cartHTML = `<div id="flexContainer"><H2>Welcome, ${cookieValue}</H2>`;

  for (let i = 0; i < prodArray.length; i++) {
    cartHTML += `<div id="${prodArray[i]}">
      <label>Product_name:</label><span style="margin-left:20px;">${getNameFromId(prodArray[i])}</span><br>
      <label>Quantity:</label><input style="margin-left:10px;text-align:center;" type="number" id="i${prodArray[i]}" value="${qtyArray[i] || 1}" onchange="populateQuantity()"><br>
      <label>Price:</label><span style="margin-left:90px;">₹${priceArr[i]}</span><br>
      <hr><button class="badge badge-pill badge-danger" style="padding:10px;" onclick="removeItem(${prodArray[i]})"><i class="bi bi-trash3-fill"></i></button>
    </div>`;
  }

  cartHTML += `<div id="buttons" style="background-color:none;background-image:none;border:none;">
    <button class="btn btn-danger" onclick="clearCart()" style="float:left;margin:auto auto auto 10px;">Clear Cart</button>
    <button class="btn btn-success" style="float:right;margin:auto 10px auto auto;" onclick="checkOut()">Check-Out</button>
  </div></div>`;

  document.getElementById("flexOutput").innerHTML = cartHTML;
  localStorage.setItem("finalHTML", cartHTML);
}

function getNameFromId(product_id) {
  for (let k in myData) {
    let products = myData[k].products;
    for (let j = 0; j < products.length; j++) {
      if (products[j].product_id == product_id) {
        return products[j].product_name;
      }
    }
  }
  return "Unknown";
}
