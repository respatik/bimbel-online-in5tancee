function login() {
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;

  fetch("https://5ee447e15dd8b80016082df8.mockapi.io/users")
    .then((response) => response.json())
    .then((result) => {
      let user = result.filter((item) => item.email === emailInput);
      console.log("hasil user setelah filter", user);
      if (user.length > 0) {
        // alert("username anda ditemukan");
        if (user[0].password === passwordInput) {
          // simpan data user yang login ke localstorage
          localStorage.setItem("user", JSON.stringify(user[0]));
          window.location.replace('../home.html')
        } else {
          alert("password anda salah");
        }
      } else {
        alert("username tidak ditemukan");
      }
    });
}
