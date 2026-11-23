function registerStudent() {
  const name = document.getElementById("studentName").value;
  const roll = document.getElementById("rollNumber").value;
  const dept = document.getElementById("department").value;
  const sem = document.getElementById("semester").value;

  document.getElementById("output").innerHTML =
    "<h3>Registered Student Information</h3>" +
    "Student Name: " + name + "<br>" +
    "Roll Number: " + roll + "<br>" +
    "Department: " + dept + "<br>" +
    "Semester: " + sem;
}
