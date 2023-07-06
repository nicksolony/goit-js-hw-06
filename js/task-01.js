let categoriesEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categoriesEl.length}`);

// categoriesEl.map((categoryEl) => console.log(categoryEl.querySelector("h2"))
//     )
// console.log(categoriesEl);

categoriesEl.forEach( (categoryEl) =>
    console.log(categoryEl.querySelectorAll("li"));
    console.log(`Category: ${categoryEl.querySelector("h2").textContent}`)
    // console.log(`Elements: ${categoryEl.querySelectorAll("li")}`)
    );
