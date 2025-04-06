function loadPage(category) {
    const content = document.getElementById("content");

    // Define iframe links for each category
    const iframeLinks = {
        clothing: "clothing.html",
        foodvan: "foodvan.html",
        phoneaccessories: "phoneaccessories.html",
        watchshop: "watchshop.html",
        footwear: "footwear.html",
        cosmetics: "cosmetics.html",
        menswear: "menswear.html",
    };

    // Update content dynamically
    content.innerHTML = `
        <h2>${category.replace(/([A-Z])/g, ' $1').toUpperCase()} Business Ideas</h2>
        <iframe src="${iframeLinks[category]}" width="100%" height="500px" style="border:none;"></iframe>
    `
}
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".card");

    function revealOnScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
const text = "Welcome to Dhundoo!";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("title").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);