function calculateSalary() {
  const name = document.getElementById("employeeName").value;
  const basic = Number(document.getElementById("basicSalary").value);
  const allowance = Number(document.getElementById("allowance").value);

  const gross = basic + allowance;
  let category;

  if (gross > 50000) {
    category = "High Salary Category";
  } else {
    category = "Normal Salary Category";
  }

  document.getElementById("output").innerHTML =
    "<h3>Salary Details</h3>" +
    "Employee Name: " + name + "<br>" +
    "Basic Salary: Rs. " + basic + "<br>" +
    "Allowance: Rs. " + allowance + "<br>" +
    "Gross Salary: Rs. " + gross + "<br>" +
    "<b>" + category + "</b>";
}
