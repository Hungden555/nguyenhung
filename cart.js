const container = document.getElementById("cart-container");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    container.innerHTML = "";
    let total = 0;

    cart.forEach((id, index) => {
        let p = products.find(x => x.id === id);
        total += p.price;

        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>${p.price.toLocaleString()} ₫</p>
                <button onclick="removeItem(${index})">Xóa</button>
            </div>
        `;
    });

    totalEl.innerText = "Tổng tiền: " + total.toLocaleString() + " ₫";
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();