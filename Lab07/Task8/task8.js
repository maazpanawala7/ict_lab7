function calculateBill() {
  const name = document.getElementById("productName").value;
  const price = Number(document.getElementById("productPrice").value);
  const quantity = Number(document.getElementById("quantity").value);

  const total = price * quantity;

  document.getElementById("output").innerHTML =
    "<h3>Bill Details</h3>" +
    "Product Name: " + name + "<br>" +
    "Price: Rs. " + price + "<br>" +
    "Quantity: " + quantity + "<br>" +
    "<b>Total Bill: Rs. " + total + "</b>";
}
