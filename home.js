let contohPaket = document.querySelector(".column-paket")

fetch('https://5f51a92b5e98480016123c15.mockapi.io/homepage')
    .then((response) => {
        return response.json();
    })

    .then ((paket) => {
        paket.forEach((paket) => {
            let card = document.createElement("span");
            card.className = "contoh-pricelist"
            card.innerHTML = `
            <div class="nama">
            <h3>${paket.nama}</h3></div>
            <div class="harga">
            <span class="rupiah">Rp.</span>
            <span class="harga-num">${paket.harga}</span></div>
            <div class="detail">
            <p class="detail-paket">${paket.detail}</p>
            </div>
            <div class="buy">
            <a href="bayar/pembayaran.html" class="main-button">Beli Paket Belajar</a>
            </div>`;
            contohPaket.appendChild(card);
        })
        paket();
    })
    .catch ((error) => {
        console.log("waduh error");
    })

let whyIn5tancee = document.querySelector(".column-why")

fetch('https://5f51a92b5e98480016123c15.mockapi.io/why')
    .then((response) => {
        return response.json();
    })

    .then ((why) => {
        why.forEach((why) => {
            let cardWhy = document.createElement("span");
            cardWhy.className = "why-in5tancee"
            cardWhy.innerHTML = `
            <div class="img">
            <img class="gambar" src="${why.img}" alt="">
            </div>
            <div class="nama">
            <h3>${why.nama}</h3></div>
            <div class="detail">
            <p class="detail-paket">${why.detail}</p>
            </div>
            <div class="buy">`
            whyIn5tancee.appendChild(cardWhy);
        })
        why();
    })
    .catch ((error) => {
        console.log("waduh error");
    })

let why = [
    {
        nama: "Tersedia Konselor Profesional",
        detail: "Kamu bingung sama pilihan jurusanmu? Atau kamu ingin berkeluh kesah mengenai drama-dramamu selama kelas 3 SMA? Tenang! Di !n5tancee terdapat Konselor Profesional yang dapat memberikan arahan-arahan untuk masa depanmu yang lebih cerah :)",
        img: "assets/images/consulting_monochromatic.png"
    },
    {
        nama: "Tersedia Mentor-Mentor Handal yang Siap Menjawab Segala Pertanyaanmu",
        detail: "Bingung kenapa jawabanmu masih salah padahal sudah sering bertemu soal yang sama? Di !n5tancee terdapat mentor-mentor handal yang selalu siap menjawab pertanyaanmu.",
        img: "assets/images/online-learning.png"
    },
    {
        nama: "Tersedia Progres di Setiap Try Out untuk Memantau Perkembangan Belajarmu",
        detail: "Kamu ingin tahu perkembangan nilai Try Out? !n5tancee akan memberikanmu grafik perkembangan setiap kamu selesai Try Out. Dengan grafik yang kami berikan, kamu bisa tahu sudah sampai mana kemampuan mengerjakan soalmu",
        img: "assets/images/progress__monochromatic.png"
    },
    {
        nama: "Tersedia Video Tutorial dari Semua pelajaran",
        detail: "Kamu tipe belajar visual yang lebih cepat memahami pelajaran dengan video? !n5tancee menyediakan Video Tutorial dari mentor-mentor dengan gaya mengajar dan bahasa yang asik! Dijamin kamu tidak akan bosan deh!",
        img: "assets/images/video_tutorial__monochromatic.png"
    }
]