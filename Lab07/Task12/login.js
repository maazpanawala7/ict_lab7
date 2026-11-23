function login() {
  const name = document.getElementById("studentName").value;
  const roll = document.getElementById("rollNumber").value;

  if (name.trim() === "" || roll.trim() === "") {
    alert("Please enter both name and roll number.");
    return;
  }

  // Store in Local Storage
  localStorage.setItem("studentName", name);
  localStorage.setItem("rollNumber", roll);

  // Go to the dashboard
  window.location.href = "dashboard.html";
}
