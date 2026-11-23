function issueBook() {
  const student = document.getElementById("studentName").value;
  const title = document.getElementById("bookTitle").value;
  const bookId = document.getElementById("bookId").value;
  const days = Number(document.getElementById("days").value);

  let message;
  if (days > 14) {
    message = "Please return the book on time";
  } else {
    message = "Book issued successfully";
  }

  document.getElementById("output").innerHTML =
    "<h3>Issue Details</h3>" +
    "Student Name: " + student + "<br>" +
    "Book Title: " + title + "<br>" +
    "Book ID: " + bookId + "<br>" +
    "Number of Days: " + days + "<br>" +
    "<b>" + message + "</b>";
}
