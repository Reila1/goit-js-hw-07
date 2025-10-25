const categoriesList = document.querySelector("#categories");
const categoriesCount = categoriesList.children.length;
const categories = categoriesList.querySelectorAll(".item");
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryTitle}\nElements: ${elementsCount}`);
});