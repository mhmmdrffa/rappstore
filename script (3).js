function register(){

  let username =
  document.getElementById("newuser").value;

  let password =
  document.getElementById("newpass").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Register berhasil!");
  window.location.href = "login.html";
}

function login(){

  let username =
  document.getElementById("username").value;

  let password =
  document.getElementById("password").value;

  let savedUser =
  localStorage.getItem("username");

  let savedPass =
  localStorage.getItem("password");

  if(username == savedUser &&
     password == savedPass){

    alert("Login berhasil!");
    window.location.href = "index.html";

  } else {

    alert("Username atau Password salah!");
  }
}

function beli(item){
  alert("Kamu membeli " + item);
}
