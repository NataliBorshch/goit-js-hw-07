const totalCateg = document.querySelectorAll('.item');
console.log(`В списке ${totalCateg.length} категории`);

const categoryArray = [...totalCateg]; 
    for (let elem of categoryArray) {
        let nameCategory = elem.firstElementChild.textContent;
        let quantityElem = elem.lastElementChild.children.length;
        console.log(`Категория: ${nameCategory} \n Количество элементов: ${quantityElem}`);
    };