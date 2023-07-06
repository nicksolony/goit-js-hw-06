let categoriesEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categoriesEl.length}`);

function getCategoryEl(category) {
    console.log(`Category: ${category.querySelector("h2").textContent}`)
    console.log(`Elements: ${category.querySelectorAll("li").length}`)
}

categoriesEl.forEach(getCategoryEl);
