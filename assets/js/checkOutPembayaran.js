const showPayment = async() =>{
    try {
        let dataPaket = JSON.parse(localStorage.getItem("dataPaket"));
        // console.log(dataPaket.id);
        // console.log(dataPaket.packageName);
        // console.log(dataPaket.price)
        document.getElementById('productName').innerHTML = dataPaket.packageName;
        document.getElementById('productPrice').innerHTML = dataPaket.price;
        document.getElementById('totalPrice').innerHTML = dataPaket.price;
        document.getElementById('proceed').addEventListener('click', function(){
            swal("Transaksi Berhasil" ,"" ,"success");
        })
    } catch (error) {
        alert("maaf terjadi error pada data yang anda inginkan")
    }
}

showPayment();

const popupDataUser = async() =>{
    try {
        let dataUser = JSON.parse(localStorage.getItem('user'));
        console.log(dataUser.email)
        console.log(dataUser)
        let button = document.getElementById('icon-user');
        button.setAttribute('title', dataUser.nama)
        button.setAttribute('data-content', dataUser.email)
        console.log(button);
    } catch (error) {
        alert('maaf terjadi kesalahan pada data')
    }
}

popupDataUser();