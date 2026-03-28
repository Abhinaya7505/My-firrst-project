// Data embedded directly to avoid CORS issues when opening file locally
const myData = [
{
"filter_id":1,
"products":[{
             "product_id":1,
             "product_name":"Air conditioner",
             "imgSrc":"images/Air conditioner.jpeg",
             "price":25000
             },
             {
             "product_id":2,
             "product_name":"Iron Box",
             "imgSrc":"images/iron box.jpeg",
             "price":1500
             },
             {
             "product_id":3,
             "product_name":"Coffee Maker",
             "imgSrc":"images/coffee maker.jpeg",
             "price":3500
             },
             {
             "product_id":4,
             "product_name":"Fridge",
             "imgSrc":"images/fridge.jpeg",
             "price":35000
             },
             {
             "product_id":5,
             "product_name":"Vaccum Cleaner",
             "imgSrc":"images/vaccum cleaner.jpeg",
             "price":5000
             },
             {
             "product_id":6,
             "product_name":"Washing Machine",
             "imgSrc":"images/washing machine.jpeg",
             "price":70000
             }]
 },
 {
 "filter_id":2,
 "products":[{
            "product_id":7,
            "product_name":"Bodycon",
            "imgSrc":"images/body con.jpeg",
            "price":1900
            },
            {
            "product_id":8,
            "product_name":"Dress",
            "imgSrc":"images/dress.jpeg",
            "price":2000
            },
            {
            "product_id":9,
            "product_name":"Skirt",
            "imgSrc":"images/skirt.jpeg",
            "price":900
            },
            {
            "product_id":10,
            "product_name":"Sleeveless Top",
            "imgSrc":"images/sleeveless top.jpeg",
            "price":800
            },
            {
            "product_id":11,
            "product_name":"Tube Top",
            "imgSrc":"images/tube top.jpeg",
            "price":500
            },
            {
            "product_id":12,
            "product_name":"Women's Sweater",
            "imgSrc":"images/women's sweater.jpeg",
            "price":2000
            }]

 },
 {
 "filter_id":3,
 "products":[{
             "product_id":13,
             "product_name":"Blazer",
             "imgSrc":"images/blazer.jpeg",
             "price":5000
             },
             {
             "product_id":14,
             "product_name":"Denim Jacket",
             "imgSrc":"images/denim jacket.jpeg",
             "price":2500
             },
             {
             "product_id":15,
             "product_name":"Hoodie",
             "imgSrc":"images/hoodie.jpeg",
             "price":1000
             },
             {
             "product_id":16,
             "product_name":"Men's Sweater",
             "imgSrc":"images/men's sweater.jpeg",
             "price":3000
             },
             {
             "product_id":17,
             "product_name":"Pants",
             "imgSrc":"images/pants.jpeg",
             "price":1500
             },
             {
             "product_id":18,
             "product_name":"Trousers",
             "imgSrc":"images/trousers.jpeg",
             "price":850
             }]
 },
 {
 "filter_id":4,
 "products":[{
              "product_id":19,
              "product_name":"Biscuits",
              "imgSrc":"images/biscuits.jpeg",
              "price":50
              },
              {
              "product_id":20,
              "product_name":"Brownie",
              "imgSrc":"images/brownie.jpeg",
              "price":50
              },
              {
              "product_id":21,
              "product_name":"Chips",
              "imgSrc":"images/chips.jpeg",
              "price":50
              },
              {
              "product_id":22,
              "product_name":"Chocolate",
              "imgSrc":"images/chocolate.jpeg",
              "price":200
              },
              {
              "product_id":23,
              "product_name":"Marshmellow",
              "imgSrc":"images/marshmellow.jpeg",
              "price":100
              },
              {
              "product_id":24,
              "product_name":"Ramen",
              "imgSrc":"images/ramen.jpeg",
              "price":60
              }]
 },
 {
 "filter_id":5,
 "products":[{
              "product_id":25,
              "product_name":"Cook Book",
              "imgSrc":"images/cook.jpeg",
              "price":100
              },
              {
              "product_id":26,
              "product_name":"Devotional Book",
              "imgSrc":"images/devotion.jpeg",
              "price":199
              },
              {
              "product_id":27,
              "product_name":"fiction.jpeg",
              "imgSrc":"images/fiction.jpeg",
              "price":499
              },
              {
              "product_id":28,
              "product_name":"Kid's Book",
              "imgSrc":"images/kid.jpeg",
              "price":499
              },
              {
              "product_id":29,
              "product_name":"Atlas Book",
              "imgSrc":"images/map.jpeg",
              "price":399
              },
              {
              "product_id":30,
              "product_name":"Non fictional Book",
              "imgSrc":"images/non fiction.jpeg",
              "price":399
              }]

}
];

function showProducts(filter_id) {
  for (let k in myData) {
    if (myData[k].filter_id === filter_id) {
      let arr = myData[k].products;
      let productHTML = "";

      for (let j = 0; j < arr.length; j++) {
        productHTML += displayProduct(arr[j]);
      }

      let myRow = document.querySelectorAll(".myRow");

      myRow[0].innerHTML = productHTML;

      myRow[0].style.display = "flex";
      myRow[0].style.flexDirection = "row";
      myRow[0].style.justifyContent = "center";
      myRow[0].style.alignContent = "flex-start";
      myRow[0].style.flexWrap = "wrap";
      myRow[0].style.gap = "20px";
      myRow[0].style.padding = "20px";
      myRow[0].style.height = "auto";
    }
  }
}

function displayProduct(product) {
  // Escape apostrophes to prevent breaking the onclick handler
  let safeName = product.product_name.replace(/'/g, "\\'");
  let safeImgSrc = product.imgSrc.replace(/'/g, "\\'");
  return `<div id="p${product.product_id}" class="product-card">
<h2>${product.product_name}</h2>
<div class="product-image-wrapper">
<img src="${product.imgSrc}" alt="${product.product_name}">
</div>
<div class="product-info">
<div class="product-price">₹${product.price}</div>
<button class="add-to-cart-btn" onclick="addToCart(${product.product_id},'${safeName}','${safeImgSrc}',${product.price})">
<i class="bi bi-cart-plus"></i> Add to Cart
</button>
</div>
</div>`;
}
