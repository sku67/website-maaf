const text =
"Aku tahu mungkin ada luka yang tanpa sengaja kubuat, dan aku sadar kata maaf saja tidak cukup untuk menghapus semuanya. Dari lubuk hatiku yang paling dalam aku ingin kamu tahu bahwa aku benar-benar menyesali kesalahanku. Tidak ada satu hari pun di mana aku tidak memikirkan apa yang telah terjadi. Aku rindu senyummu, rindu cara kita berbagi cerita, dan rindu perasaan tenang saat mengetahui bahwa kamu ada di sisiku. Aku tidak bisa mengubah masa lalu tetapi jika diberi kesempatan, aku ingin membuktikan bahwa aku bisa menjadi seseorang yang lebih baik. Bukan hanya karena aku menyesal, tetapi karena kamu begitu berarti bagiku. Aku tidak akan memaksamu untuk segera memaafkanku. Aku hanya berharap suatu hari nanti ketika hatimu sudah lebih tenang kamu bisa melihat ketulusanku dan memberiku kesempatan untuk memperbaiki apa yang pernah rusak.";

let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}

typing();

function showMessage() {

    document.getElementById("reply").innerHTML =
    "Terima kasih karena telah meluangkan waktu untuk membaca ini.<br><br>" +
    "Dan untuk semua yang pernah kita lalui bersama, terima kasih.<br><br>" +
    "Maafkan aku, karena sampai hari ini kamu masih menjadi seseorang yang sangat berharga di hatiku. ❤️";

    createFlowers();
}

function createFlowers() {

    for(let i = 0; i < 100; i++) {

        const flower = document.createElement("div");

        flower.innerHTML = "🌸";

        flower.classList.add("flower");

        flower.style.left = Math.random() * window.innerWidth + "px";

        flower.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}

const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg"
];

let current = 0;

const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");

// foto pertama
leftSide.style.backgroundImage = `url(${photos[0]})`;
rightSide.style.backgroundImage = `url(${photos[0]})`;

setInterval(() => {

    current = (current + 1) % photos.length;

    leftSide.style.backgroundImage =
        `url(${photos[current]})`;

    rightSide.style.backgroundImage =
        `url(${photos[current]})`;

}, 3000);