function myFunction() {
  window.location.replace("../home.html");
}

function logout(){
  localStorage.clear();
  window.location.replace('../home.html')
}

const showDataUser = async () =>{
  try {
    let dataProfile = JSON.parse(localStorage.getItem('user'));
    console.log(dataProfile)
    document.getElementById('user-name').innerHTML = dataProfile.nama;
    document.getElementById('profile-name').innerHTML = dataProfile.nama;
    document.getElementById('user-email').innerHTML = dataProfile.email;
    document.getElementById('user-phone').innerHTML = dataProfile.phone;
    document.getElementById('user-birthdate').innerHTML = dataProfile.birthDate;
  } catch (error) {
    alert("maaf terjadi kesalahan data profile")
  }
}

showDataUser()