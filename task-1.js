const totalCateg = document.querySelectorAll('.item');
console.log(`В списке ${totalCateg.length} категории`);

const categoryArray = [...totalCateg]; 
const category = categoryArray.forEach((item) => {
    const nameCategory = item.firstElementChild.textContent;
    const quantityElem = item.lastElementChild.children.length;
    console.log(`Категория: ${nameCategory} \n Количество элементов: ${quantityElem}`);
});

// 2-вариант
//     for (const category of categoryArray) {
//         const nameCategory = category.firstElementChild.textContent;
//         const quantityElem = category.lastElementChild.children.length;
//         console.log(`Категория: ${nameCategory} \n Количество элементов: ${quantityElem}`);
//     };