// باز و بسته شدن منوی موبایل
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
    mobileMenu.classList.toggle("show");
};

// اسکرول به بخش سفارش
function scrollToOrder() {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

// ارسال سفارش
function sendOrder() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let food = document.getElementById("food").value;
    let msg = document.getElementById("orderMsg");

    if (name === "" || address === "") {
        msg.innerHTML = "❗ لطفا مشخصات را کامل وارد کنید";
        msg.style.color = "red";
        return;
    }

    msg.innerHTML = `✔ ${food} برای ${name} با موفقیت ثبت شد!`;
    msg.style.color = "green";
}