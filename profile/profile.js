let profile = document.querySelector(".profile-box");

const showProfile = async () => {
    try {
        let users = JSON.parse(localStorage.getItem("users"));
        console.log(users);
        // let response = await fetch(
        //   `https://5ee447e15dd8b80016082df8.mockapi.io/users/3`
        // );
        // let data = await response.json();
        // console.log(data);
    
        // proses menampilkan datanya
            // let profilePage = document. createElement("div")
            // profilePage.className = "profile"
            // profilePage.innerHTML =`
            // <div class="img">
            // <img src="https://www.freepik.com/free-icon/user_924149.htm#page=1&query=profile&position=31" alt="profile-picture">
            // </div>
            // <div class="nama">
            // <p class="element-nama"><strong>Nama User:</strong> ${element.nama}</p>
            // </div>
            // <div class="email">
            // <p class="element-email"><strong>E-mail:</strong> ${element.email}</p>
            // </div>
            // <div class="paket">
            // <p class="paket-belajar"><strong>Paket Belajar:</strong>  </p>
            // </div>
            // `;
            // profile.appendChild(profilePage);
    } catch {
        console.log("error")
    }
};

showProfile();