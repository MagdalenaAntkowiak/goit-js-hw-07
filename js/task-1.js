const getCategoryAndNameOfItems = (elem) => {
  const categories = elem.querySelector("h2").textContent;
  const numberOfItems = elem.querySelectorAll("li").length;

  console.log("Category: " + categories);
  console.log("Elements: " + numberOfItems);
};

const items = document.querySelectorAll("#categories .item");

console.log("Number of categories: " + items.length);

items.forEach((item) => getCategoryAndNameOfItems(item));
