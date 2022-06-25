// Bank
document.getElementById("btn").addEventListener("click", function () {
  // Email
  const mailEl = document.getElementById("email");
  const userMail = mailEl.value;

  //   password
  const passEl = document.getElementById("password");

  const userpass = passEl.value;

  if (userMail === "bank@mail.com" && userpass === "12345") {
    window.location.href = "bank.html";
  } else {
    document.querySelector("section").style.background = "red";
    alert("Check Mail & Password");
  }
});
