function login() {
    const user = document.getElementById("username").value;

    if (!user) {
        alert("Vui lòng nhập tên!");
        return;
    }

    localStorage.setItem("user", user);

    // FIX lỗi redirect
    window.location.href = "./index.html";
}

function checkUser() {
    const user = localStorage.getItem("user");
    const area = document.getElementById("user-area");

    if (area) {
        if (user) {
            area.innerHTML = user + " | Đăng xuất";
            area.href = "#";
            area.onclick = function () {
                logout();
            };
        } else {
            area.innerHTML = "Đăng nhập";
            area.href = "login.html";
        }
    }
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

checkUser();