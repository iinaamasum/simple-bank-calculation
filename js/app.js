document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const userEmail = document.getElementById("floatingInput").value;
  const userPassword = document.getElementById("floatingPassword").value;
  if (userEmail == "" || userPassword == "") {
    alert("You have entered null vlaue");
  } else if (userEmail == "email" && userPassword == "demo") {
    window.location.href = "./banking.html";
  } else {
    alert("Please Enter valid information");
  }
  document.getElementById("floatingInput").value = "";
  document.getElementById("floatingPassword").value = "";
});
