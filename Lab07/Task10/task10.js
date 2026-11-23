function placeOrder() {
  const customer = document.getElementById("customerName").value;
  const food = document.getElementById("foodItem").value;
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);

  const total = price * quantity;
  let discountMessage;

  if (total > 2000) {
    discountMessage = "You are eligible for a discount";
  } else {
    discountMessage = "No discount available";
  }

  document.getElementById("output").innerHTML =
    "<h3>Order Summary</h3>" +
    "Customer Name: " + customer + "<br>" +
    "Food Item: " + food + "<br>" +
    "Price: Rs. " + price + "<br>" +
    "Quantity: " + quantity + "<br>" +
    "Total Price: Rs. " + total + "<br>" +
    "<b>" + discountMessage + "</b>";
}
