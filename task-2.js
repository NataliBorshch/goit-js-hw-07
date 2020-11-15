const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listProductRef = document.querySelector('#ingredients');
const itemProduct = ingredients.forEach(elem => {
    const item = document.createElement('li');
    item.textContent = elem;
    return listProductRef.append(item);
})

