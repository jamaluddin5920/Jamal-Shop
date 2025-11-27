// Mobile Navigation
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

// Theme Switch
function toggleTheme(){
    const body = document.documentElement;
    const current = body.getAttribute("data-theme");
    body.setAttribute("data-theme", current === "light" ? "dark" : "light");
}

// Product Modal Data
const productData = {
    1: {
        title: "Produk Premium",
        price: "Rp 150.000",
        img: "assets/images/p1.jpg"
    },
    2: {
        title: "Produk Bisnis",
        price: "Rp 250.000",
        img: "assets/images/p2.jpg"
    },
    3: {
        title: "Produk Executive",
        price: "Rp 300.000",
        img: "assets/images/p3.jpg"
    }
};

// Show Modal
function showProduct(id){
    const modal = document.getElementById("productModal");
    const data = productData[id];

    document.getElementById("modalImg").src = data.img;
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalPrice").innerText = data.price;
    document.getElementById("modalBuy").href = "https://wa.me/6281234567890?text=Halo%20saya%20ingin%20membeli%20" + data.title;

    modal.style.display = "flex";
}

// Close Modal
function closeModal(){
    document.getElementById("productModal").style.display = "none";
}
