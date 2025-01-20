// Login
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let form = document.getElementById("loginForm");

  if (user == "admin" && pass == "12345") {
    alert("Login Berhasil");
    form.setAttribute("Action", "/uas-semester1/backend/pages/");
  } else {
    alert("Login Gagal Boyy!!");
  }
}
