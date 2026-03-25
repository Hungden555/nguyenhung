let currentProduct = null;
const list = document.getElementById("product-list");

/* HIỂN THỊ */
function renderProducts(arr) {
    list.innerHTML = "";

    arr.forEach(p => {
        list.innerHTML += `
            <div class="product" onclick="openModal(${p.id})">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p>${p.price.toLocaleString()} ₫</p>
            </div>
            
        `;
    });
}

/* MỞ MODAL */
function openModal(id) {
    const product = products.find(p => p.id === id);

    document.getElementById("modal").style.display = "flex";
    document.getElementById("main-img").src = product.images[0];
    document.getElementById("modal-name").innerText = product.name;
    document.getElementById("modal-price").innerText =
        product.price.toLocaleString() + " ₫";
        document.getElementById("modal-stock").innerText =
    "Còn lại: " + product.stock + " sản phẩm";
    currentProduct = product;

    let subImgs = document.getElementById("sub-imgs");
    subImgs.innerHTML = "";

    product.images.forEach(img => {
        subImgs.innerHTML += `
            <img src="${img}" onclick="changeImage('${img}')">
        `;
    });
}

/* ĐỔI ẢNH */
function changeImage(src) {
    document.getElementById("main-img").src = src;
}

/* ĐÓNG */
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* LOAD */
renderProducts(products);
function addToCartModal() {
    if (!currentProduct) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(currentProduct.id);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng!");
}
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}