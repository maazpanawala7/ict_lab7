function checkEligibility() {
  const name = document.getElementById("studentName").value;
  const total = Number(document.getElementById("totalMarks").value);
  const obtained = Number(document.getElementById("obtainedMarks").value);

  if (total <= 0) {
    document.getElementById("output").innerHTML = "Total marks must be greater than 0.";
    return;
  }

  const percentage = (obtained / total) * 100;
  let result;

  if (percentage >= 50) {
    result = "Eligible for Admission";
  } else {
    result = "Not Eligible for Admission";
  }

  document.getElementById("output").innerHTML =
    "Student Name: " + name + "<br>" +
    "Percentage: " + percentage.toFixed(2) + "%<br>" +
    "<b>" + result + "</b>";
}
