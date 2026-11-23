const studentName = localStorage.getItem("studentName");
const rollNo = localStorage.getItem("rollNumber");

if (studentName) {
  document.getElementById("welcome").innerHTML =
    "<h2>Welcome, " + studentName + "!</h2>" +
    "Roll Number: " + rollNo;
} else {
  document.getElementById("welcome").innerHTML = "You are not logged in.";
}
