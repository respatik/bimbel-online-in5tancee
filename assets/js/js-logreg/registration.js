// buat function async await register
const register = async () => {
  let nameInput = document.getElementById("name").value;
  let birthdayInput = document.getElementById("birthday").value;
  let passwordInput = document.getElementById("password").value;
  let emailInput = document.getElementById("email").value;
  let phoneInput = document.getElementById("phone").value;

  let userData = {
    nama: nameInput,
    birthDate: birthdayInput,
    password: passwordInput,
    email: emailInput,
    phone: phoneInput,
  };
  // post data user

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  let response = await fetch(
    "https://5ee447e15dd8b80016082df8.mockapi.io/users/",
    options
  );
  let result = await response.json();

  swal("Registrasi berhasil", '', "success");
};

